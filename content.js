/**
 * SynerArch Content Configuration
 * ─────────────────────────────────────────────────────────────────────
 * Single source of truth for:
 *   1. PLACEHOLDERS  — brand assets, company info, product UI images
 *   2. NAV_DROPDOWN  — navigation dropdown link labels + subtitles
 *   3. FOOTER_COPY   — shared footer copyright line
 *
 * To update any placeholder or shared text, edit this file only.
 * No changes needed in individual HTML pages.
 *
 * Used by: all 10 HTML pages (loaded before global.js)
 * ─────────────────────────────────────────────────────────────────────
 */

(function () {
    'use strict';

    window.SA = window.SA || {};

    /* ─────────────────────────────────────────────────────────────────
     * 1. PLACEHOLDERS
     * Replace values below with real assets when available.
     * ───────────────────────────────────────────────────────────────── */
    window.SA.placeholders = {

        /* Brand logo — nav (square) and footer (rectangular)
         * Update filenames here if logo files are renamed.
         * Files must be in the same directory as index.html. */
        logoNav:    'logo-nav.png',   /* square version — nav top-left */
        logoFooter: 'logo-rect.png',     /* rectangular version — footer  */

        /* Partner / client logos (used on index.html Partners section) */
        partnerLogos: [
            '[PARTNER_LOGO_1]',
            '[PARTNER_LOGO_2]',
            '[PARTNER_LOGO_3]',
            '[PARTNER_LOGO_4]',
            '[PARTNER_LOGO_5]',
            '[PARTNER_LOGO_6]',
        ],

        /* Product UI screenshots — replace with <img src="..."> or embed */
        productUI: {
            buildingMonitoring: '[PRODUCT_UI: Building Monitoring Dashboard]',
            aiAgent:            '[PRODUCT_UI: AI Agent Interface]',
            mobileCapture:      '[PRODUCT_UI: Mobile Field Capture]',
            timelineLog:        '[PRODUCT_UI: Timeline Log]',
            reportDashboard:    '[PRODUCT_UI: Report Dashboard]',
            assetClassification:'[PRODUCT_UI: Asset Classification]',
            materialList:       '[PRODUCT_UI: Material List / Catalog]',
        },

        /* Company / contact info — rendered into footer Contact column */
        contactName:  'Yoshiko Mana',
        contactEmail: 'yoshiko.mana.synerarch@gmail.com',

        /* Founder profile — used on about page */
        founderProfile: '[FOUNDER_PROFILE: Name · Role · Background · Photo]',
    };

    /* ─────────────────────────────────────────────────────────────────
     * 2. NAV DROPDOWN CONTENT
     * Labels and subtitles for the Solutions dropdown menu.
     * Rendered by renderNavDropdown() below.
     * ───────────────────────────────────────────────────────────────── */
    window.SA.navDropdown = [
        {
            href:     'solution-materials.html',
            en_label: 'Materials & Circular Supply',
            en_sub:   'Low-carbon material catalog',
            jp_label: '材料・循環供給',
            jp_sub:   '低炭素材料カタログ',
        },
        {
            href:     'solution-construction.html',
            en_label: 'Construction Decarbonization',
            en_sub:   'Site carbon tracking & data capture',
            jp_label: '施工カーボン管理',
            jp_sub:   '現場排出追跡・データ取得',
        },
        {
            href:     'solution-energy.html',
            en_label: 'Energy Optimization',
            en_sub:   'AI-driven monitoring & control',
            jp_label: 'エネルギー最適化',
            jp_sub:   'AI監視・制御',
        },
        {
            href:     'solution-retrofit.html',
            en_label: 'Circular Retrofit & Asset Recovery',
            en_sub:   'Asset recovery & reuse strategy',
            jp_label: 'サーキュラー改修・資産回収',
            jp_sub:   '資産回収・再利用',
        },
        {
            href:     'solution-compliance.html',
            en_label: 'LCA Compliance',
            en_sub:   'Standardized MRV & Reporting',
            jp_label: 'LCAコンプライアンス',
            jp_sub:   '標準化MRV・レポート',
        },
    ];

    /* ─────────────────────────────────────────────────────────────────
     * 3. FOOTER COPYRIGHT
     * ───────────────────────────────────────────────────────────────── */
    window.SA.footerCopyright = '© 2026 SynerArch. All rights reserved.';
    /* ─────────────────────────────────────────────────────────────────
     * 5. HAMBURGER NAV ITEMS (index.html only)
     * Labels for the new hamburger dropdown menu on the homepage.
     * Interactions and links are disabled for now — add hrefs when ready.
     * NOTE: Other pages still use their original nav structure.
     *       Future: align other pages to this pattern when ready.
     * ───────────────────────────────────────────────────────────────── */
    window.SA.hamburgerNav = [
        { id: 'sa-nav-lifecycle',     label: 'Lifecycle'    },
        { id: 'sa-nav-databank',      label: 'Data Bank'    },
        { id: 'sa-nav-intelligence',  label: 'Intelligence' },
        { id: 'sa-nav-about',         label: 'About'        },
        { id: 'sa-nav-contact',       label: 'Contact'      },
    ];


    /* ─────────────────────────────────────────────────────────────────
     * 4. RENDER HELPERS
     * Called on DOMContentLoaded to hydrate placeholder elements.
     * ───────────────────────────────────────────────────────────────── */

    /** Replace all [data-placeholder] elements with configured values */
    function renderPlaceholders() {
        var ph = window.SA.placeholders;

        /* Nav logo (square) */
        var navLogo = document.getElementById('sa-logo-nav');
        if (navLogo && ph.logoNav) navLogo.src = ph.logoNav;

        /* Footer logo (rectangular) */
        var footerLogo = document.getElementById('sa-logo-footer');
        if (footerLogo && ph.logoFooter) footerLogo.src = ph.logoFooter;

        /* Legacy data-ph="logo" support for other pages */
        document.querySelectorAll('[data-ph="logo"]').forEach(function (el) {
            if (ph.logo) el.innerHTML = ph.logo;
        });

        /* Contact info */
        var nameEl  = document.getElementById('sa-contact-name');
        var emailEl = document.getElementById('sa-contact-email');
        if (nameEl  && ph.contactName)  nameEl.textContent  = ph.contactName;
        if (emailEl && ph.contactEmail) {
            emailEl.textContent = ph.contactEmail;
            emailEl.href = 'mailto:' + ph.contactEmail;
        }

        /* Partner logos */
        document.querySelectorAll('[data-ph="partner-logo"]').forEach(function (el, i) {
            el.textContent = ph.partnerLogos[i] || ph.partnerLogos[0];
        });

        /* Product UI placeholders */
        document.querySelectorAll('[data-ph-product]').forEach(function (el) {
            var key = el.getAttribute('data-ph-product');
            el.textContent = ph.productUI[key] || '[PRODUCT_UI_PLACEHOLDER]';
        });

        /* Founder profile */
        document.querySelectorAll('[data-ph="founder-profile"]').forEach(function (el) {
            el.textContent = ph.founderProfile;
        });

        /* Copyright */
        document.querySelectorAll('[data-ph="copyright"]').forEach(function (el) {
            el.textContent = window.SA.footerCopyright;
        });
    }

    /** Render nav dropdown from navDropdown config */
    function renderNavDropdown() {
        var lang = (window.SA && window.SA.currentLanguage) || 'en';
        var items = window.SA.navDropdown;
        var dropdowns = document.querySelectorAll('[data-nav-dropdown]');

        dropdowns.forEach(function (container) {
            container.innerHTML = items.map(function (item, i) {
                var label = lang === 'jp' ? item.jp_label : item.en_label;
                var sub   = lang === 'jp' ? item.jp_sub   : item.en_sub;
                var border = i > 0 ? ' border-t border-[#E5E5E5]' : '';
                return (
                    '<a class="block px-4 py-3 hover:bg-[#F0F0F0] rounded text-xs text-gray-500 hover:text-black transition-colors' + border + '" href="' + item.href + '">' +
                    '<span class="block font-medium mb-0.5">' + label + '</span>' +
                    '<span class="block text-[10px] opacity-60">' + sub + '</span>' +
                    '</a>'
                );
            }).join('');
        });
    }

    /* Re-render dropdown when language switches */
    var _origOnRender = window.SA.onRender;
    window.SA.onRender = function (lang, content) {
        renderNavDropdown();
        if (typeof _origOnRender === 'function') _origOnRender(lang, content);
    };

    /* Hook into global init */
    document.addEventListener('DOMContentLoaded', function () {
        renderPlaceholders();
        renderNavDropdown();
    });

}());
