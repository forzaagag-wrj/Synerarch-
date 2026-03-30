/**
 * copy-loader.js — 将 copy.js 文案注入 SynerArch 各页面
 *
 * 工作原理：
 *   在 DOMContentLoaded 最早阶段将 COPY 对象合并进 SA.pageContent，
 *   确保 global.js 渲染时已使用 copy.js 中的最新文案。
 *
 * 加载顺序（各页面底部 script 区域）：
 *   <script src="copy.js"></script>        ← 文案数据（唯一来源）
 *   <script src="copy-loader.js"></script> ← 本文件
 *   <script src="content.js"></script>     ← 页面原有字典（被覆盖）
 *   <script src="global.js"></script>      ← 渲染引擎
 */
(function () {
  if (typeof COPY === 'undefined') {
    console.warn('[copy-loader] COPY not defined.');
    return;
  }

  // 1. 检测页面
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var PAGE_MAP = {
    'index.html':'index','':'index',
    'ai.html':'ai','about.html':'about',
    'contact.html':'contact','request-demo.html':'demo','data-bank.html':'databank',
    'solution-energy.html':'energy',
    'solution-construction.html':'construction',
    'solution-compliance.html':'compliance',
    'solution-retrofit.html':'retrofit',
    'solution-materials.html':'materials',
  };
  var pageKey = PAGE_MAP[path];
  if (!pageKey) return;

  var isSolPage = !!(COPY.solutions && COPY.solutions[pageKey]);

  // 2. 合并文案字典
  function buildDict(lang) {
    var d = {};
    if (COPY.global && COPY.global[lang]) Object.assign(d, COPY.global[lang]);
    if (!isSolPage && COPY[pageKey] && COPY[pageKey][lang]) Object.assign(d, COPY[pageKey][lang]);
    return d;
  }

  // 3. 覆盖 SA.pageContent — useCapture 确保在 global.js listener 之前
  document.addEventListener('DOMContentLoaded', function () {
    window.SA = window.SA || {};
    window.SA.pageContent = window.SA.pageContent || { en:{}, jp:{} };
    Object.assign(window.SA.pageContent.en, buildDict('en'));
    Object.assign(window.SA.pageContent.jp, buildDict('jp'));
  }, true);

  // 4. 补丁 switchLanguage，语言切换后仍使用 copy.js 文案
  document.addEventListener('DOMContentLoaded', function () {
    var origSwitch = window.SA && window.SA.switchLanguage;
    if (!origSwitch) return;
    window.SA.switchLanguage = function (lang) {
      window.SA.pageContent = window.SA.pageContent || { en:{}, jp:{} };
      if (!window.SA.pageContent[lang]) window.SA.pageContent[lang] = {};
      Object.assign(window.SA.pageContent[lang], buildDict(lang));
      origSwitch(lang);
      if (isSolPage) injectSolSpans(lang);
      // contact page: applyType() in contact.html handles lang-aware re-render via its own SA.switchLanguage override
    };
  });

  // 5. Solution 页 span 注入
  var SOL_KEYS = [
    'hero-title','hero-desc',
    'cap1-title','cap1-desc','cap2-title','cap2-desc','cap3-title','cap3-desc',
    'howto-label',
    'step1-title','step1-desc','step2-title','step2-desc',
    'step3-title','step3-desc','step4-title','step4-desc',
    'cta-title','cta-desc','cta-btn',
  ];

  function injectSolSpans(lang) {
    var sol = COPY.solutions[pageKey];
    if (!sol) return;
    var en = sol.en || {}, jp = sol.jp || {};
    var enS = document.querySelectorAll('[data-i18n-en]');
    var jpS = document.querySelectorAll('[data-i18n-jp]');
    SOL_KEYS.forEach(function(key, i) {
      if (enS[i] && en[key] !== undefined) enS[i].textContent = en[key];
      if (jpS[i] && jp[key] !== undefined) jpS[i].textContent = jp[key];
    });
  }

  if (isSolPage) {
    document.addEventListener('DOMContentLoaded', function () {
      injectSolSpans(window.SA && window.SA.currentLanguage || 'en');
    });
  }

  // 6. Contact 页 id= 元素注入
  // NOTE: contact-title / contact-desc / contact-hint are managed by contact.html's
  // own applyType() function which reads the URL ?type= param.
  // copy-loader must NOT overwrite these elements — doing so breaks the General/Careers/Media switcher.
  // The SA.pageContent merge (step 3 above) already provides the i18n keys for form labels etc.
  // No additional injection needed here for contact page.

}());
