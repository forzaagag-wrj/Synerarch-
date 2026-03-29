/**
 * SynerArch Global Language System
 * Single source of truth for language state across all pages.
 *
 * Exposes:
 *   window.SA.currentLanguage  — 'en' | 'jp'
 *   window.SA.switchLanguage(lang) — update state, persist, re-render
 *   window.SA.initLanguage()  — call on DOMContentLoaded
 *
 * Each page must define window.SA.pageContent = { en: {...}, jp: {...} }
 * before this script runs (or at minimum before initLanguage is called).
 *
 * Pages with data-i18n-en / data-i18n-jp attributes (solution pages)
 * use CSS display switching via html[lang="jp"] — handled by setting
 * document.documentElement.lang, which this script always does.
 */

(function () {
    'use strict';

    var STORAGE_KEY = 'synerarch_lang';

    window.SA = window.SA || {};

    // ── Read / write language ──────────────────────────────────────────
    function getStoredLang() {
        try {
            return localStorage.getItem(STORAGE_KEY) || 'en';
        } catch (e) {
            return 'en';
        }
    }

    function storeLang(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) { /* storage unavailable */ }
    }

    // ── Core render function ──────────────────────────────────────────
    /**
     * renderContent(lang)
     * Updates every [data-i18n] element using the page's content object.
     * Updates every [data-i18n-placeholder] element.
     * Sets document.documentElement.lang (drives CSS data-i18n-en/jp).
     * Updates lang-switch button active states.
     */
    function renderContent(lang) {
        var content = (window.SA.pageContent && window.SA.pageContent[lang]) || {};

        // 1. data-i18n text nodes
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (content[key] !== undefined) {
                el.innerText = content[key];
            }
        });

        // 2. data-i18n-placeholder (inputs, textareas)
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (content[key] !== undefined) {
                el.placeholder = content[key];
            }
        });

        // 3. html[lang] attribute — drives CSS-based data-i18n-en / data-i18n-jp display switching
        document.documentElement.lang = lang;

        // 4. Lang-switch button active states
        var enBtn = document.getElementById('lang-en');
        var jpBtn = document.getElementById('lang-jp');
        if (enBtn) {
            enBtn.classList.toggle('active', lang === 'en');
            enBtn.style.color = lang === 'en' ? '#000' : '#999';
        }
        if (jpBtn) {
            jpBtn.classList.toggle('active', lang === 'jp');
            jpBtn.style.color = lang === 'jp' ? '#000' : '#999';
        }

        // 5. Page-specific post-render hook (e.g. request-demo interest desc)
        if (typeof window.SA.onRender === 'function') {
            window.SA.onRender(lang, content);
        }
    }

    // ── Public switchLanguage ─────────────────────────────────────────
    function switchLanguage(lang) {
        if (lang !== 'en' && lang !== 'jp') return;
        window.SA.currentLanguage = lang;
        storeLang(lang);
        renderContent(lang);
    }

    // ── Init on page load ─────────────────────────────────────────────
    function initLanguage() {
        var lang = getStoredLang();
        window.SA.currentLanguage = lang;
        renderContent(lang);
    }

    // ── Expose API ────────────────────────────────────────────────────
    window.SA.currentLanguage = getStoredLang();
    window.SA.switchLanguage  = switchLanguage;
    window.SA.renderContent   = renderContent;
    window.SA.initLanguage    = initLanguage;

    // ── Auto-init on DOMContentLoaded ─────────────────────────────────
    // Scripts are placed at bottom of <body>, so readyState may already be
    // 'interactive' when global.js executes. However, the page's inline script
    // (which sets window.SA.pageContent) runs AFTER this file. We must therefore
    // always defer init to DOMContentLoaded so pageContent is guaranteed to exist.
    // The page's own DOMContentLoaded handler also calls SA.initLanguage() —
    // calling it twice is safe (idempotent).
    document.addEventListener('DOMContentLoaded', initLanguage);

}());

/* ─────────────────────────────────────────────────────────────────────
 * SynerArch Interaction Layer
 * Scroll animations · Section highlight · Button feedback · Smooth scroll
 * Pure vanilla JS, no dependencies, no DOM structure changes.
 * ───────────────────────────────────────────────────────────────────── */
(function () {
    'use strict';

    /* 1. Smooth scroll for all anchor links ─────────────────────────── */
    document.addEventListener('click', function (e) {
        var anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        var id = anchor.getAttribute('href').slice(1);
        var target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    /* 2. Scroll-triggered fade-up for sections ──────────────────────── */
    var ANIM_CSS = (
        '.sa-reveal{opacity:0;transform:translateY(22px);transition:opacity 0.55s cubic-bezier(.4,0,.2,1),transform 0.55s cubic-bezier(.4,0,.2,1)}' +
        '.sa-reveal.sa-visible{opacity:1;transform:translateY(0)}'
    );
    var styleEl = document.createElement('style');
    styleEl.textContent = ANIM_CSS;
    document.head.appendChild(styleEl);

    function initReveal() {
        /* Target: section direct children that carry visual content */
        var targets = document.querySelectorAll(
            'section > div, section > h1, section > h2, ' +
            '.solution-card, .card, .agent-card, ' +
            '.founder-card'
        );
        targets.forEach(function (el) {
            /* Skip elements already animated or inside the hero */
            if (el.closest('.fade-in') || el.classList.contains('sa-reveal')) return;
            /* Skip nav, footer, script */
            if (el.closest('nav') || el.closest('footer')) return;
            el.classList.add('sa-reveal');
        });

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('sa-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.sa-reveal').forEach(function (el) {
            io.observe(el);
        });
    }

    /* 3. Active nav highlight on scroll ─────────────────────────────── */
    function initNavHighlight() {
        var navLinks = document.querySelectorAll('nav a[href*="#"]');
        if (!navLinks.length) return;
        var sections = [];
        navLinks.forEach(function (a) {
            var id = (a.getAttribute('href') || '').split('#')[1];
            if (id) {
                var sec = document.getElementById(id);
                if (sec) sections.push({ el: sec, link: a });
            }
        });
        if (!sections.length) return;

        function onScroll() {
            var scrollY = window.scrollY + 120;
            var active = null;
            sections.forEach(function (s) {
                if (s.el.offsetTop <= scrollY) active = s;
            });
            navLinks.forEach(function (a) { a.style.color = ''; });
            if (active) active.link.style.color = '#000';
        }
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* 4. Button press feedback (scale micro-animation) ──────────────── */
    function initButtonFeedback() {
        var BTN_STYLE = (
            'a[href],button{-webkit-tap-highlight-color:transparent}' +
            '.sa-btn-press:active{transform:scale(0.97)!important;transition:transform 0.1s ease!important}'
        );
        var s2 = document.createElement('style');
        s2.textContent = BTN_STYLE;
        document.head.appendChild(s2);

        document.querySelectorAll('a[href], button').forEach(function (el) {
            if (!el.closest('nav') && !el.closest('.lang-switch')) {
                el.classList.add('sa-btn-press');
            }
        });
    }

    /* 5. Stagger cards within a grid on reveal ──────────────────────── */
    function initCardStagger() {
        var STAGGER_CSS = (
            '.sa-reveal:nth-child(2){transition-delay:0.08s}' +
            '.sa-reveal:nth-child(3){transition-delay:0.16s}' +
            '.sa-reveal:nth-child(4){transition-delay:0.24s}' +
            '.sa-reveal:nth-child(5){transition-delay:0.32s}'
        );
        var s3 = document.createElement('style');
        s3.textContent = STAGGER_CSS;
        document.head.appendChild(s3);
    }

    /* Init on DOMContentLoaded ──────────────────────────────────────── */
    document.addEventListener('DOMContentLoaded', function () {
        initReveal();
        initNavHighlight();
        initButtonFeedback();
        initCardStagger();
    });

}());


/* ─────────────────────────────────────────────────────────────────────
 * SynerArch Global Polish — visual consistency pass
 * Applied via JS-injected style tag (global.js)
 * ───────────────────────────────────────────────────────────────────── */
(function () {
    var css = [
        /* Logo area: consistent height in nav and footer */
        '[data-ph="logo"] img { height: 28px; width: auto; display: inline-block; vertical-align: middle; }',
        '[data-ph="logo"] { line-height: 1; }',

        /* Footer logo underline — remove (was decorative, inconsistent) */
        'footer [data-ph="logo"] { text-decoration: none; border: none; }',

        /* Nav active link color consistency */
        'nav a.active, nav a:focus-visible { color: #000; outline: none; }',

        /* Capability cards across solution pages: uniform min-height */
        '.card { min-height: 0; }',

        /* Arch diagrams: ensure connector lines are centered */
        '.connector-line { display: block; }',

        /* Inputs: consistent focus ring */
        'input:focus, textarea:focus, select:focus { box-shadow: 0 0 0 2px rgba(0,0,0,0.08) !important; border-color: #555 !important; }',

        /* flow-tooltip: ensure it never clips */
        '.flow-tooltip { overflow: visible; }',

        /* CTA sections: consistent bottom padding */
        '.sa-cta-btn { display: inline-block; }',

        /* Text rendering */
        'h1, h2, h3, h4, h5, h6 { -webkit-font-smoothing: antialiased; }',
    ].join('\n');

    var s = document.createElement('style');
    s.id = 'sa-global-polish';
    s.textContent = css;
    document.head.appendChild(s);
}());

/* ─────────────────────────────────────────────────────────────────────
 * MOBILE RESPONSIVE — Hamburger nav + global mobile CSS
 * Injected globally via global.js so all pages benefit automatically.
 * ───────────────────────────────────────────────────────────────────── */
(function() {
  'use strict';

  // ── 1. Inject global mobile CSS ────────────────────────────────────
  var mobileCSS = [
    /* Prevent horizontal scroll globally */
    'html, body { max-width: 100%; overflow-x: hidden; }',

    /* Hamburger button */
    '.sa-hamburger { display: none; flex-direction: column; justify-content: center; gap: 5px; width: 36px; height: 36px; cursor: pointer; background: transparent; border: none; padding: 4px; flex-shrink: 0; }',
    '.sa-hamburger span { display: block; height: 1.5px; width: 100%; background: #000; transition: all 0.25s ease; transform-origin: center; }',
    '.sa-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }',
    '.sa-hamburger.open span:nth-child(2) { opacity: 0; }',
    '.sa-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }',

    /* Mobile nav drawer */
    '.sa-mobile-nav { display: none; position: fixed; top: 72px; left: 0; right: 0; bottom: 0; background: #fff; z-index: 999; overflow-y: auto; padding: 24px 24px 48px; border-top: 1px solid #E5E5E5; }',
    '.sa-mobile-nav.open { display: block; }',
    '.sa-mobile-nav a { display: block; font-size: 15px; font-weight: 400; color: #000; text-decoration: none; padding: 14px 0; border-bottom: 1px solid #F0F0F0; }',
    '.sa-mobile-nav a:hover { color: #555; }',
    '.sa-mobile-nav .sa-mob-label { font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: #888; font-weight: 600; margin: 20px 0 4px; }',
    '.sa-mobile-nav .sa-mob-sub a { font-size: 13px; color: #444; padding: 10px 0 10px 12px; border-bottom: 1px solid #F7F7F7; }',
    '.sa-mobile-nav .sa-mob-actions { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }',
    '.sa-mobile-nav .sa-mob-actions a { text-align: center; padding: 14px; font-size: 13px; font-weight: 500; letter-spacing: 0.05em; border-bottom: none; }',
    '.sa-mob-btn-primary { background: #000; color: #fff !important; }',
    '.sa-mob-btn-primary:hover { background: #2A2A2A !important; }',
    '.sa-mob-btn-outline { border: 1px solid #D0D0D0; color: #000 !important; }',
    '.sa-mob-btn-outline:hover { border-color: #000 !important; }',
    '.sa-mobile-lang { display: flex; gap: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #E5E5E5; }',
    '.sa-mobile-lang span { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; color: #888; padding: 4px 6px; }',
    '.sa-mobile-lang span.active { color: #000; background: rgba(0,0,0,0.05); border-radius: 3px; }',

    /* Show hamburger on mobile, hide desktop nav */
    '@media (max-width: 767px) {',
    '  .sa-hamburger { display: flex !important; }',
    '  nav .hidden.md\\:flex { display: none !important; }',
    '  #sa-nav-right { display: none !important; }',
    '}',

    /* Tablet: show hamburger, keep some spacing */
    '@media (min-width: 768px) and (max-width: 1199px) {',
    '  .sa-hamburger { display: flex !important; }',
    '  nav .hidden.md\\:flex { display: none !important; }',
    '  #sa-nav-right { display: none !important; }',
    '}',

    /* Desktop: hide hamburger */
    '@media (min-width: 1200px) {',
    '  .sa-hamburger { display: none !important; }',
    '  .sa-mobile-nav { display: none !important; }',
    '  #sa-nav-right { display: flex !important; }',
    '}',

    /* Hero headings: prevent overflow on mobile */
    '@media (max-width: 767px) {',
    '  h1 { font-size: clamp(1.8rem, 7vw, 3rem) !important; }',
    '  h2 { font-size: clamp(1.4rem, 5.5vw, 2.2rem) !important; }',
    '  .text-5xl, .text-6xl, .text-7xl { font-size: clamp(2rem, 8vw, 3.2rem) !important; }',
    '  .md\\:text-7xl { font-size: clamp(2rem, 8vw, 3.2rem) !important; }',
    '  .md\\:text-5xl { font-size: clamp(1.6rem, 6vw, 2.4rem) !important; }',
    '}',

    /* Capability cards: 3 col → 1 col mobile, 2 col tablet */
    '@media (max-width: 767px) {',
    '  .md\\:grid-cols-3 { grid-template-columns: 1fr !important; }',
    '  .md\\:grid-cols-2 { grid-template-columns: 1fr !important; }',
    '  .md\\:grid-cols-4 { grid-template-columns: 1fr 1fr !important; }',
    '}',
    '@media (min-width: 768px) and (max-width: 1199px) {',
    '  .md\\:grid-cols-3 { grid-template-columns: repeat(2, 1fr) !important; }',
    '}',

    /* How it works: force vertical on mobile */
    '@media (max-width: 767px) {',
    '  .sa-step-grid { grid-template-columns: 1fr !important; gap: 24px !important; }',
    '  .sa-step-grid > div { max-width: 100% !important; width: 100% !important; }',
    '  .sa-step-img { max-width: 100% !important; margin: 0 auto !important; }',
    '}',

    /* Product image placeholder */
    '@media (max-width: 767px) {',
    '  .sa-step-img { max-width: 340px !important; width: 100% !important; margin: 0 auto !important; }',
    '}',

    /* Footer: stack on mobile */
    '@media (max-width: 767px) {',
    '  footer .md\\:grid-cols-4 { grid-template-columns: 1fr !important; gap: 32px !important; text-align: center !important; }',
    '  footer .grid-cols-1 { text-align: center !important; }',
    '}',

    /* General padding reduction on mobile */
    '@media (max-width: 767px) {',
    '  .px-6 { padding-left: 16px !important; padding-right: 16px !important; }',
    '  .sm\\:px-12 { padding-left: 16px !important; padding-right: 16px !important; }',
    '  .pt-28 { padding-top: 88px !important; }',
    '  section { padding-top: 48px !important; padding-bottom: 48px !important; }',
    '}',

    /* Lifecycle flow: allow horizontal scroll on small screens */
    '@media (max-width: 767px) {',
    '  .sa-flow-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 8px; }',
    '  .sa-flow-wrap .relative.flex { min-width: 600px; }',
    '}',

    /* AI page arch-box: shrink on mobile */
    '@media (max-width: 767px) {',
    '  .arch-box { width: 140px !important; height: 52px !important; font-size: 10px !important; }',
    /* AI core center box: override fixed 560px width */
    '  [style*="width:560px"] { width: 100% !important; max-width: 100% !important; box-sizing: border-box !important; }',
    '}',

    /* Contact / Demo forms: full width on mobile */
    '@media (max-width: 767px) {',
    '  .max-w-\\[600px\\] { max-width: 100% !important; }',
    '  .max-w-\\[700px\\] { max-width: 100% !important; }',
    '  .max-w-\\[680px\\] { max-width: 100% !important; }',
    '}',

    /* Arch diagram: ensure it doesn't overflow on mobile */
    '@media (max-width: 767px) {',
    '  [style*="max-width:1000px"] { overflow-x: auto !important; -webkit-overflow-scrolling: touch !important; }',
    '}',

    /* Data bank step indicator on mobile */
    '@media (max-width: 767px) {',
    '  #step-indicator { gap: 0; }',
    '  .step-dot { width: 24px !important; height: 24px !important; font-size: 10px !important; }',
    '}',
  ].join('\n');

  var ms = document.createElement('style');
  ms.id = 'sa-mobile-responsive';
  ms.textContent = mobileCSS;
  document.head.appendChild(ms);

  // ── 2. Inject hamburger button + mobile nav into every page ───────
  document.addEventListener('DOMContentLoaded', function() {
    var nav = document.getElementById('main-nav');
    if (!nav) return;

    // Mark right-side desktop buttons for hiding
    // Right side is identified by id — no classList manipulation needed (CSS handles via #sa-nav-right)

    // Create hamburger button
    var burger = document.createElement('button');
    burger.className = 'sa-hamburger';
    burger.setAttribute('aria-label', 'Menu');
    burger.innerHTML = '<span></span><span></span><span></span>';

    // Get current page for active state
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Build mobile nav drawer
    var drawer = document.createElement('div');
    drawer.className = 'sa-mobile-nav';
    drawer.id = 'sa-mobile-nav';

    var lang = (window.SA && window.SA.currentLanguage) || 'en';

    var solLinks = [
      { href: 'solution-energy.html',       en: 'Energy Optimization',           jp: 'エネルギー最適化' },
      { href: 'solution-materials.html',    en: 'Materials & Circular Supply',    jp: '材料・循環供給' },
      { href: 'solution-retrofit.html',     en: 'Circular Retrofit & Asset Recovery', jp: 'サーキュラー改修' },
      { href: 'solution-construction.html', en: 'Construction Decarbonization',   jp: '施工カーボン管理' },
      { href: 'solution-compliance.html',   en: 'Carbon Compliance & LCA',        jp: 'カーボン管理・LCA' },
    ];

    function buildDrawer(l) {
      var isJP = l === 'jp';
      var html = '';
      // Main links
      html += '<div class="sa-mob-label">' + (isJP ? 'メニュー' : 'Menu') + '</div>';
      html += '<a href="index.html#solutions">' + (isJP ? 'ソリューション' : 'Solutions') + '</a>';
      html += '<div class="sa-mob-sub">';
      solLinks.forEach(function(s) {
        html += '<a href="' + s.href + '">' + (isJP ? s.jp : s.en) + '</a>';
      });
      html += '</div>';
      html += '<a href="ai.html">' + (isJP ? 'AI' : 'AI') + '</a>';
      html += '<a href="about.html">' + (isJP ? '会社情報' : 'About') + '</a>';
      html += '<a href="contact.html">' + (isJP ? 'お問い合わせ' : 'Contact') + '</a>';
      // Action buttons
      html += '<div class="sa-mob-actions">';
      html += '<a href="data-bank.html" class="sa-mob-btn-primary">' + (isJP ? 'データバンク' : 'Data Bank') + '</a>';
      html += '<a href="request-demo.html" class="sa-mob-btn-outline">' + (isJP ? 'デモを依頼' : 'Request Demo') + '</a>';
      html += '</div>';
      // Language switch
      html += '<div class="sa-mobile-lang">';
      html += '<span id="mob-lang-en" class="' + (l === 'en' ? 'active' : '') + '" onclick="SA.switchLanguage(\'en\'); refreshDrawer(\'en\')">EN</span>';
      html += '<span id="mob-lang-jp" class="' + (l === 'jp' ? 'active' : '') + '" onclick="SA.switchLanguage(\'jp\'); refreshDrawer(\'jp\')">JP</span>';
      html += '</div>';
      return html;
    }

    drawer.innerHTML = buildDrawer(lang);
    document.body.appendChild(drawer);

    // Refresh drawer when language switches
    window.refreshDrawer = function(l) {
      drawer.innerHTML = buildDrawer(l);
      // Re-sync active states on desktop lang switches too
      var enBtn = document.getElementById('mob-lang-en');
      var jpBtn = document.getElementById('mob-lang-jp');
      if (enBtn) enBtn.classList.toggle('active', l === 'en');
      if (jpBtn) jpBtn.classList.toggle('active', l === 'jp');
    };

    // Insert hamburger into nav right side
    var navInner = nav.querySelector('.flex.items-center.justify-between');
    if (navInner) {
      var burgerWrap = document.createElement('div');
      burgerWrap.className = 'sa-hamburger-wrap flex items-center';
      burgerWrap.appendChild(burger);
      navInner.appendChild(burgerWrap);
    }

    // Toggle drawer
    burger.addEventListener('click', function() {
      var isOpen = drawer.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (drawer.classList.contains('open') && !drawer.contains(e.target) && !burger.contains(e.target)) {
        drawer.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Close on nav link click
    drawer.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        drawer.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Sync lang switch with desktop
    if (typeof window.SA !== 'undefined') {
      var origSwitch = window.SA.switchLanguage;
      window.SA.switchLanguage = function(l) {
        origSwitch(l);
        window.refreshDrawer(l);
      };
    }
  });

}());
