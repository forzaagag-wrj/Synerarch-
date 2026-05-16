/* ============================================================
   lifecycle-content.js
   SynerArch — Lifecycle Overview Page Copy
   ─────────────────────────────────────────
   This file contains ALL user-facing text for lifecycle.html.
   Edit this file to update copy in any language.
   Supported languages: en / zh / jp

   Structure:
     window.LIFECYCLE = {
       en: { key: 'value', ... },
       zh: { key: 'value', ... },
       jp: { key: 'value', ... },
     };

   DO NOT edit lifecycle.html to change copy —
   edit this file only.
   ============================================================ */

window.LIFECYCLE = {

  /* ════════════════════════════════════════
     ENGLISH
  ════════════════════════════════════════ */
  en: {

    /* ── Hero ── */
    'hero-eyebrow': 'Building Lifecycle',
    'hero-title':   'Every stage. Every role. One complete lifecycle.',
    'hero-sub':     'A building does not end at completion. From design and construction through operations, urban mining, and compliance reporting, different participants shape every stage of its lifecycle. Find where you fit — and understand how your role connects to the whole.',

    /* ── Introduction ── */
    'intro-eyebrow':      'Lifecycle Perspective',
    'intro-title':        'A building is not a single moment. It is a continuous system.',
    'intro-body':         'A building spans multiple interconnected stages from design to end of life. Each stage generates different data, involves different decision-makers, and carries distinct environmental and economic consequences. Material choices at design affect construction emissions; data quality at construction shapes compliance capability in operations; how a building performs over time influences the condition of its assets and informs renovation strategy; and the outcomes of renovation feed back into the next cycle of design. Understanding where you stand in this lifecycle is the first step toward informed action.',
    'intro-stages-label': 'Five lifecycle stages',
    'intro-s1-name':  'Design',       'intro-s1-focus': 'Materials, embodied carbon, procurement',
    'intro-s2-name':  'Construction', 'intro-s2-focus': 'Site emissions, MRV, data capture',
    'intro-s3-name':  'Operations',   'intro-s3-focus': 'Energy monitoring, anomaly detection, maintenance',
    'intro-s4-name':  'Urban Mining', 'intro-s4-focus': 'Renovation, material reuse, deconstruction',
    'intro-s5-name':  'Compliance',   'intro-s5-focus': 'LCA, disclosure reporting, carbon assets',
    'intro-footnote': '',

    /* ── Lifecycle overview section ── */
    'lc-section-eyebrow': 'Lifecycle Stages & Roles',
    'lc-section-title':   'Find your stage. Explore your role.',
    'lc-panel-hint':      'Select a stage to explore roles',
    'lc-panel-cta':       'View Stage →',

    /* ── Stage 1: Design ── */
    's1-num': '01', 's1-tag': 'Design',
    's1-objective':  'The design stage establishes the material foundation and carbon baseline for the entire building. Decisions made here — materials, specifications, procurement strategy — carry consequences through every subsequent phase, from construction through to end of life.',
    's1-focus-body': 'Core activities include identifying and evaluating low-carbon materials, assessing EPD data, establishing carbon compliance criteria for procurement, and conducting LCA analysis at the concept stage. The rigour of decisions made here directly shapes the compliance foundation for every phase that follows.',
    's1-intel-label': 'Related Module',
    's1-intel-link':  'Low-carbon Materials →',
    's1-roles-label': 'Roles at this stage',
    's1-p1-org':  'Architecture Firms',
    's1-p1-role': 'Architect / Designer',
    's1-p1-desc': 'Leads material specification at the design stage, translating low-carbon targets into actionable procurement decisions.',
    's1-p1-hook': 'Access EPD-verified material options and carbon benchmarks directly within the design workflow.',
    's1-p1-cta':  'Explore this role →',
    's1-p2-org':  'Procurement Teams',
    's1-p2-role': 'Procurement Manager',
    's1-p2-desc': 'Oversees material supply chains, ensuring procurement aligns with low-carbon targets and project budgets.',
    's1-p2-hook': 'Match materials to project needs with full supplier documentation and reuse inventory integrated.',
    's1-p2-cta':  'Explore this role →',
    's1-p3-org':  'Building Material Manufacturers',
    's1-p3-role': 'EPD & Product Sustainability Manager',
    's1-p3-desc': 'Manages EPD documentation and product sustainability compliance on behalf of building material manufacturers, ensuring product data meets the requirements of architects, green building schemes, and procurement platforms.',
    's1-p3-hook': 'Publish EPD data, manage product circularity records, and connect product listings directly with design-stage procurement workflows.',
    's1-p3-cta':  'Explore this role →',

    /* ── Stage 2: Construction ── */
    's2-num': '02', 's2-tag': 'Construction',
    's2-objective':  'The construction stage translates design intent into physical building activity, generating significant energy consumption and emissions data in the process. The quality of data captured here directly determines the credibility and auditability of downstream compliance reporting.',
    's2-focus-body': 'Core activities include the systematic recording of on-site energy consumption and emissions, MRV data collection aligned with multiple certification standards, construction equipment energy tracking, and building a structured, auditable data foundation for downstream compliance workflows.',
    's2-intel-label': 'Related Module',
    's2-intel-link':  'Construction Decarbonization →',
    's2-roles-label': 'Roles at this stage',
    's2-p1-org':  'General Contractors',
    's2-p1-role': 'Site Data Recorder / Site Supervisor',
    's2-p1-desc': 'Responsible for daily on-site data collection, ensuring energy consumption and emissions data is accurately and promptly entered into the system.',
    's2-p1-hook': 'Capture site data through mobile workflows and OCR — without disrupting daily operations.',
    's2-p1-cta':  'Explore this role →',
    's2-p2-org':  'Construction Management Firms',
    's2-p2-role': 'Sustainability Manager',
    's2-p2-desc': 'Oversees emissions management across the construction phase and coordinates alignment with certification standards and regulatory reporting requirements.',
    's2-p2-hook': 'Maintain data quality across standards, with full traceability from site to compliance report.',
    's2-p2-cta':  'Explore this role →',

    /* ── Stage 3: Operations ── */
    's3-num': '03', 's3-tag': 'Operations',
    's3-objective':  'Once a building enters operation, energy consumption and carbon emissions continue for decades. The data accumulated in this stage supports day-to-day maintenance decisions and provides the ongoing data foundation needed for future renovation planning and compliance reporting.',
    's3-focus-body': 'Core activities include real-time monitoring and anomaly detection for building energy consumption, integrated analysis of BMS and IoT data, energy use benchmarking, and the management and follow-up of day-to-day maintenance work orders.',
    's3-intel-label': 'Related Module',
    's3-intel-link':  'Energy Optimization →',
    's3-roles-label': 'Roles at this stage',
    's3-p1-org':  'Facility Operations Companies',
    's3-p1-role': 'Building Operations Manager',
    's3-p1-desc': 'Oversees day-to-day facility operations and energy management, continuously optimising building system performance to reduce operational costs.',
    's3-p1-hook': 'Surface energy inefficiencies and anomalies in real time — and act before they become operational problems.',
    's3-p1-cta':  'Explore this role →',
    's3-p2-org':  'Asset Management Firms',
    's3-p2-role': 'Energy Consultant / Asset Manager',
    's3-p2-desc': 'Evaluates building energy performance at portfolio level, developing medium and long-term strategies for energy improvement and operational optimisation.',
    's3-p2-hook': 'Compare actual energy use against benchmarks — and identify concrete opportunities for improvement.',
    's3-p2-cta':  'Explore this role →',

    /* ── Stage 4: Urban Mining ── */
    's4-num': '04', 's4-tag': 'Urban Mining',
    's4-objective':  'The urban mining stage treats building renovation and deconstruction as an opportunity for resource recovery, not merely end-of-life clearance. By systematically assessing the reuse value of building components, decisions at this stage directly influence material circularity rates and overall carbon reduction outcomes.',
    's4-focus-body': 'Core activities include assessing the GWP carbon impact and circularity index of building components, establishing the data foundation for renovation strategy, managing the categorisation and tracking of deconstructed components, and connecting recovered materials to regional circular supply networks.',
    's4-intel-label': 'Related Module',
    's4-intel-link':  'Circular Renovation →',
    's4-roles-label': 'Roles at this stage',
    's4-p1-org':  'Asset Owners & Renovation Firms',
    's4-p1-role': 'Asset Owner / Renovation Project Manager',
    's4-p1-desc': 'Leads overall decision-making and execution management for building renovation or deconstruction projects, developing optimal disposal strategies grounded in data.',
    's4-p1-hook': 'Access circularity indices, GWP impact estimates, and reuse targets — from audit to strategy.',
    's4-p1-cta':  'Explore this role →',
    's4-p2-org':  'Circular Building Material Companies',
    's4-p2-role': 'Material Reuse Coordinator',
    's4-p2-desc': 'Responsible for component processing and reuse flow management, ensuring deconstructed components are accurately categorised, tracked, and directed into downstream circular channels.',
    's4-p2-hook': 'Maintain full component records from audit through processing — with clear tracking at every stage.',
    's4-p2-cta':  'Explore this role →',

    /* ── Stage 5: Compliance ── */
    's5-num': '05', 's5-tag': 'Compliance',
    's5-objective':  'The compliance stage consolidates carbon data from every lifecycle phase into an auditable reporting foundation, supporting green financing, ESG disclosure, and carbon asset management. The compliance data generated today becomes the design intelligence for tomorrow\'s built environment.',
    's5-focus-body': 'Core activities include collecting and calculating full lifecycle emissions through LCA, maintaining alignment across multiple frameworks including ISO 14040/44, ESRS, TCFD, and J-Credit, preparing carbon credit evidence for green financing, and providing ESG disclosure data to meet the requirements of investment institutions.',
    's5-intel-label': 'Related Module',
    's5-intel-link':  'LCA Compliance →',
    's5-roles-label': 'Roles at this stage',
    's5-p1-org':  'ESG & Sustainability Teams',
    's5-p1-role': 'ESG / Sustainability Manager',
    's5-p1-desc': 'Oversees carbon accounting and compliance reporting at the project or corporate level, ensuring data meets regulatory requirements and external disclosure standards.',
    's5-p1-hook': 'Maintain alignment across multiple frameworks with full data traceability — from source to report.',
    's5-p1-cta':  'Explore this role →',
    's5-p2-org':  'ESG & Green Finance',
    's5-p2-role': 'Carbon Asset Manager / Green Finance Manager',
    's5-p2-desc': 'Uses carbon credit evidence and lifecycle calculation results to advance green financing, J-Credit applications, and carbon credit verification processes.',
    's5-p2-hook': 'Access structured carbon credit evidence and ESG disclosure data that meets the requirements of financing institutions.',
    's5-p2-cta':  'Explore this role →',

    /* ── Final CTA ── */
    'cta-title': 'See how SynerArch supports your role in the lifecycle.',
    'cta-btn':   'Contact Us',

    /* ── Footer ── */
    'footer-col2-title':       'Use Cases',
    'footer-link-materials':   'Low-carbon Materials',
    'footer-link-construction':'Construction Decarbonization',
    'footer-link-operations':  'Energy Optimization',
    'footer-link-urban':       'Circular Renovation',
    'footer-link-compliance':  'LCA Compliance',
    'footer-col3-title':       'Company',
    'footer-link-about':       'About',
    'footer-link-contact':     'Contact',
    'footer-col4-title':       'Contact',
    'footer-copyright':        '© 2026 SynerArch. All rights reserved.',
    'footer-link-privacy':     'Privacy Policy',
    'footer-link-terms':       'Terms',
  },

  /* ════════════════════════════════════════
     中文
  ════════════════════════════════════════ */
  zh: {

    /* ── Hero ── */
    'hero-eyebrow': '建筑生命周期',
    'hero-title':   '每个阶段，每种角色，一个完整的生命周期',
    'hero-sub':     '建筑并非在竣工时就已完成。从设计、施工、运营，到城市采矿与合规报告，不同阶段的参与者共同构成了建筑的完整生命周期。找到你所在的阶段，了解你的角色如何影响整体。',

    /* ── Introduction ── */
    'intro-eyebrow':      '生命周期视角',
    'intro-title':        '建筑不是单一时刻，而是一个持续运转的系统',
    'intro-body':         '一栋建筑从设计到废弃，横跨多个彼此关联的阶段。每个阶段产生不同的数据、涉及不同的决策者，并带来不同的环境与经济影响。设计阶段的材料选择影响施工的碳排放；施工的数据质量影响运营的合规能力；运营阶段的表现积累影响资产的使用状态，进而影响改造的策略方向；改造的结果又重新进入下一轮的设计依据。理解你在生命周期中的位置，是做出有依据的行动的第一步。',
    'intro-stages-label': '五个生命周期阶段',
    'intro-s1-name': '设计',       'intro-s1-focus': '材料选择、内含碳、采购',
    'intro-s2-name': '施工',       'intro-s2-focus': '现场排放、MRV、数据采集',
    'intro-s3-name': '运营',       'intro-s3-focus': '能源消耗监测、能耗异常识别、运维工单',
    'intro-s4-name': '城市采矿',   'intro-s4-focus': '改造、材料再利用、解体',
    'intro-s5-name': '合规',       'intro-s5-focus': 'LCA、报告披露、碳资产',
    'intro-footnote': '',

    /* ── Lifecycle overview section ── */
    'lc-section-eyebrow': '生命周期阶段与角色',
    'lc-section-title':   '找到你的阶段，了解你的角色',
    'lc-panel-hint':      '选择一个阶段，查看对应角色',
    'lc-panel-cta':       '查看该阶段 →',

    /* ── Stage 1: Design ── */
    's1-num': '01', 's1-tag': '设计',
    's1-objective':  '设计阶段奠定了整栋建筑的材料基础与碳排放基线。这一阶段的选择——材料、规格、采购策略——将影响施工、运营乃至最终解体的每一个后续阶段。',
    's1-focus-body': '该阶段的核心工作围绕低碳材料的识别与比选、EPD数据的评估与应用、采购流程的碳合规设定，以及概念阶段的LCA分析。数据质量与选择的严谨程度，直接决定后续阶段的合规基础。',
    's1-intel-label': '相关模块',
    's1-intel-link':  '低碳材料 →',
    's1-roles-label': '该阶段涉及的角色',
    's1-p1-role': '建筑师 / 设计师',
    's1-p1-desc': '主导设计阶段的材料规格制定，将低碳目标转化为可执行的采购决策。',
    's1-p1-hook': '在设计工作流中直接获取EPD认证材料选项与碳排放基准值。',
    's1-p1-cta':  '了解该角色 →',
    's1-p2-role': '采购负责人',
    's1-p2-desc': '统筹材料供应链管理，确保采购决策符合低碳目标与项目预算。',
    's1-p2-hook': '整合供应商资料与再利用库存，精准匹配项目材料需求。',
    's1-p2-cta':  '了解该角色 →',

    /* ── Stage 2: Construction ── */
    's2-num': '02', 's2-tag': '施工',
    's2-objective':  '施工阶段将设计意图转化为实际建造行为，同时产生大量能源消耗与碳排放数据。这一阶段的数据采集质量，直接决定后续合规报告的可信度与审计能力。',
    's2-focus-body': '核心工作涵盖现场能源消耗与排放的系统化记录、符合多项认证标准要求的MRV数据采集、施工设备能耗追踪，以及为下游合规流程提供结构化、可审计的数据基础。',
    's2-intel-label': '相关模块',
    's2-intel-link':  '施工碳管理 →',
    's2-roles-label': '该阶段涉及的角色',
    's2-p1-role': '现场数据记录员 / 现场监督',
    's2-p1-desc': '负责日常现场数据采集，确保能源消耗与排放数据准确、及时录入系统。',
    's2-p1-hook': '通过移动工作流与OCR采集现场数据——不影响日常施工作业。',
    's2-p1-cta':  '了解该角色 →',
    's2-p2-role': '可持续发展经理',
    's2-p2-desc': '统筹施工阶段的排放管理，协调各项认证标准的对接与合规报告工作。',
    's2-p2-hook': '跨标准维护数据质量，实现从现场到合规报告的完整追溯链。',
    's2-p2-cta':  '了解该角色 →',

    /* ── Stage 3: Operations ── */
    's3-num': '03', 's3-tag': '运营',
    's3-objective':  '建筑进入运营阶段后，能源消耗与碳排放将持续数十年。这一阶段积累的数据不仅支撑当下的日常运维决策，也为未来的改造规划与合规报告提供持续的数据基础。',
    's3-focus-body': '核心工作涵盖建筑能耗的实时监测与异常识别、BMS与IoT设备数据的整合分析、能源消耗的基准比对，以及日常运维工单的管理与跟进。',
    's3-intel-label': '相关模块',
    's3-intel-link':  '能源优化 →',
    's3-roles-label': '该阶段涉及的角色',
    's3-p1-role': '楼宇运营经理',
    's3-p1-desc': '统筹日常设施运营与能源管理，持续优化建筑系统表现以降低运营成本。',
    's3-p1-hook': '实时发现能耗低效与异常——在演变为运营问题之前及时介入。',
    's3-p1-cta':  '了解该角色 →',
    's3-p2-role': '能源顾问 / 资产管理经理',
    's3-p2-desc': '在投资组合层面评估建筑能源表现，制定中长期节能改造与运营优化策略。',
    's3-p2-hook': '将实际能耗与基准对比，识别改善空间并形成可量化的行动依据。',
    's3-p2-cta':  '了解该角色 →',

    /* ── Stage 4: Urban Mining ── */
    's4-num': '04', 's4-tag': '城市采矿',
    's4-objective':  '城市采矿阶段将建筑改造与解体视为资源回收的机会，而非单纯的废弃清理。通过系统评估构件的再利用价值，这一阶段的决策可直接影响材料循环率与整体碳减排结果。',
    's4-focus-body': '核心工作涵盖构件的GWP碳影响与循环性指数评估、改造策略的数据基础建立、解体构件的分类管理与流向追踪，以及将回收材料接入区域循环供应网络。',
    's4-intel-label': '相关模块',
    's4-intel-link':  '循环改造 →',
    's4-roles-label': '该阶段涉及的角色',
    's4-p1-role': '资产持有人 / 改造项目经理',
    's4-p1-desc': '主导建筑改造或解体项目的整体决策与执行管理，制定以数据为基础的最优处理方案。',
    's4-p1-hook': '获取循环性指数、GWP影响估算与再利用目标，从审计到策略一步到位。',
    's4-p1-cta':  '了解该角色 →',
    's4-p2-role': '建材再利用协调员',
    's4-p2-desc': '负责构件处理执行与再利用流转管理，确保解体构件得到准确分类、跟踪并进入下游循环渠道。',
    's4-p2-hook': '从审计到处理全程维护完整构件记录，每个环节均有明确的跟踪记录。',
    's4-p2-cta':  '了解该角色 →',

    /* ── Stage 5: Compliance ── */
    's5-num': '05', 's5-tag': '合规',
    's5-objective':  '合规阶段将来自各生命周期阶段的碳数据汇聚成可审计的报告基础，支持绿色金融、ESG披露与碳资产管理。这一阶段产出的合规记录，同时也成为下一轮建筑设计的重要参考，形成生命周期的闭环。',
    's5-focus-body': '核心工作涵盖全生命周期排放数据的收集与LCA核算、多框架合规对齐（ISO 14040/44、ESRS、TCFD、J-Credit等）、绿色金融所需的碳信用证据整理，以及面向投资机构的ESG披露数据支持。',
    's5-intel-label': '相关模块',
    's5-intel-link':  'LCA合规 →',
    's5-roles-label': '该阶段涉及的角色',
    's5-p1-role': 'ESG / 可持续发展经理',
    's5-p1-desc': '在项目或企业层面统筹碳核算与合规报告工作，确保数据满足监管要求与外部披露标准。',
    's5-p1-hook': '跨多个框架保持合规对齐，从数据来源到报告输出全程可追溯。',
    's5-p1-cta':  '了解该角色 →',
    's5-p2-role': '碳资产管理经理 / 绿色金融负责人',
    's5-p2-desc': '以碳信用证据与生命周期核算结果为基础，推进绿色融资、J-Credit申请与碳信用核证流程。',
    's5-p2-hook': '获取符合金融机构要求的结构化碳信用证据与ESG披露数据。',
    's5-p2-cta':  '了解该角色 →',

    /* ── Final CTA ── */
    'cta-title': '了解 SynerArch 如何服务你的角色与阶段',
    'cta-btn':   '联系我们',

    /* ── Footer ── */
    'footer-col2-title':       '使用场景',
    'footer-link-materials':   '低碳材料',
    'footer-link-construction':'施工碳管理',
    'footer-link-operations':  '能源优化',
    'footer-link-urban':       '循环改造',
    'footer-link-compliance':  'LCA合规',
    'footer-col3-title':       '公司',
    'footer-link-about':       '关于我们',
    'footer-link-contact':     '联系我们',
    'footer-col4-title':       '联系方式',
    'footer-copyright':        '© 2026 SynerArch. 保留所有权利。',
    'footer-link-privacy':     '隐私政策',
    'footer-link-terms':       '使用条款',
  },

  /* ════════════════════════════════════════
     日本語
  ════════════════════════════════════════ */
  jp: {

    /* ── Hero ── */
    'hero-eyebrow': '建物ライフサイクル',
    'hero-title':   'すべての段階、すべての役割、ひとつの完結したライフサイクル。',
    'hero-sub':     '建物は竣工で終わらない。設計、施工、運用、アーバンマイニング、そしてコンプライアンス報告まで、各段階のさまざまな担当者が建物のライフサイクル全体を形成している。自分が関わる段階を見つけ、その役割がどう全体につながるかを理解する。',

    /* ── Introduction ── */
    'intro-eyebrow':      'ライフサイクルの視点',
    'intro-title':        '建物は一瞬ではない。それは、継続的に稼働するシステムだ。',
    'intro-body':         '建物は、設計から廃棄に至るまで、互いに関連する複数の段階にまたがっている。各段階は異なるデータを生み出し、異なる意思決定者が関与し、それぞれ異なる環境・経済上の影響をもたらす。設計段階の材料選択は施工の炭素排出に影響し、施工のデータ品質は運用段階のコンプライアンス能力を左右する。運用期間中の建物パフォーマンスは資産の使用状態に影響を与え、それが改修戦略の方向性を形成する。そして改修の成果は、次のサイクルの設計に還元される。ライフサイクルのなかで自分がどこに位置するかを理解することが、根拠ある行動への第一歩だ。',
    'intro-stages-label': '5つのライフサイクル段階',
    'intro-s1-name': '設計',              'intro-s1-focus': '材料、内包炭素、調達',
    'intro-s2-name': '施工',              'intro-s2-focus': '現場排出量、MRV、データ収集',
    'intro-s3-name': '運用',              'intro-s3-focus': 'エネルギー監視、異常検知、運維管理',
    'intro-s4-name': 'アーバンマイニング', 'intro-s4-focus': '改修、材料再利用、解体',
    'intro-s5-name': 'コンプライアンス',  'intro-s5-focus': 'LCA、開示報告、炭素資産',
    'intro-footnote': '',

    /* ── Lifecycle overview section ── */
    'lc-section-eyebrow': 'ライフサイクル段階と役割',
    'lc-section-title':   '自分の段階を見つけ、役割を確認する。',
    'lc-panel-hint':      '段階を選択して、対応する役割を確認',
    'lc-panel-cta':       'この段階を見る →',

    /* ── Stage 1: Design ── */
    's1-num': '01', 's1-tag': '設計',
    's1-objective':  '設計段階は、建物全体の材料基盤と炭素排出基準を決定する。ここでの選択——材料、仕様、調達戦略——は施工から解体に至るすべての後続段階に影響を及ぼす。',
    's1-focus-body': '中心となる業務は、低炭素材料の特定・比較評価、EPDデータの評価と活用、調達プロセスにおける炭素コンプライアンス基準の設定、そして概念段階でのLCA分析だ。ここでの判断の厳密さが、後続するすべての段階のコンプライアンス基盤を直接左右する。',
    's1-intel-label': '関連モジュール',
    's1-intel-link':  '低炭素材料 →',
    's1-roles-label': 'この段階の役割',
    's1-p1-org':  '建築設計事務所',
    's1-p1-role': '建築家・デザイナー',
    's1-p1-desc': '設計段階における材料仕様策定を主導し、低炭素目標を実行可能な調達判断へと転換する。',
    's1-p1-hook': '設計ワークフロー内で、EPD認証済み材料の選択肢と炭素基準値に直接アクセスする。',
    's1-p1-cta':  'この役割を確認する →',
    's1-p2-org':  '調達部門',
    's1-p2-role': '調達担当者',
    's1-p2-desc': '材料サプライチェーンを統括し、調達判断が低炭素目標とプロジェクト予算に沿うよう管理する。',
    's1-p2-hook': 'サプライヤー資料と再利用在庫を統合し、プロジェクトニーズに合った材料を精確にマッチングする。',
    's1-p2-cta':  'この役割を確認する →',
    's1-p3-org':  '建材メーカー',
    's1-p3-role': 'EPD・製品サステナビリティマネージャー',
    's1-p3-desc': '建材メーカーを代表してEPD文書と製品サステナビリティ対応を管理し、製品データが建築家・グリーンビルディング認証・調達プラットフォームの要件を満たすよう整備する。',
    's1-p3-hook': 'EPDデータを公開し、製品の循環性記録を管理し、製品情報を設計段階の調達ワークフローと直接連携させる。',
    's1-p3-cta':  'この役割を確認する →',

    /* ── Stage 2: Construction ── */
    's2-num': '02', 's2-tag': '施工',
    's2-objective':  '施工段階は設計意図を実際の建造行為へと転換し、その過程で大量のエネルギー消費と炭素排出データを生み出す。この段階で収集されるデータの品質が、後続するコンプライアンス報告の信頼性と監査対応能力を直接左右する。',
    's2-focus-body': '中心となる業務は、現場エネルギー消費と排出量の体系的な記録、複数の認証規格に対応したMRVデータ収集、建設機械のエネルギー追跡、そして下流のコンプライアンスワークフローに向けた構造化・監査対応のデータ基盤の構築だ。',
    's2-intel-label': '関連モジュール',
    's2-intel-link':  '建設脱炭素管理 →',
    's2-roles-label': 'この段階の役割',
    's2-p1-org':  '総合建設会社',
    's2-p1-role': '現場データ記録担当・現場監督',
    's2-p1-desc': '日常的な現場データ収集を担当し、エネルギー消費と排出データが正確かつタイムリーにシステムへ入力されるよう管理する。',
    's2-p1-hook': 'モバイルワークフローとOCRで現場データを収集する——日常の施工作業を妨げることなく。',
    's2-p1-cta':  'この役割を確認する →',
    's2-p2-org':  '建設マネジメント会社',
    's2-p2-role': 'サステナビリティマネージャー',
    's2-p2-desc': '施工段階全体の排出管理を統括し、各種認証規格への対応と規制報告業務を調整する。',
    's2-p2-hook': '複数規格にまたがるデータ品質を維持し、現場から報告書まで完全なトレーサビリティを確保する。',
    's2-p2-cta':  'この役割を確認する →',

    /* ── Stage 3: Operations ── */
    's3-num': '03', 's3-tag': '運用',
    's3-objective':  '建物が運用段階に入ると、エネルギー消費と炭素排出は数十年にわたり継続する。この段階で蓄積されるデータは、日常の維持管理上の判断を支えるとともに、将来の改修計画とコンプライアンス報告に向けた継続的なデータ基盤を提供する。',
    's3-focus-body': '中心となる業務は、建物エネルギー消費のリアルタイム監視と異常検知、BMSおよびIoTデータの統合分析、エネルギー消費のベンチマーク比較、そして日常的な運維ワークオーダーの管理と対応だ。',
    's3-intel-label': '関連モジュール',
    's3-intel-link':  'エネルギー最適化 →',
    's3-roles-label': 'この段階の役割',
    's3-p1-org':  '施設管理会社',
    's3-p1-role': 'ビル運用マネージャー',
    's3-p1-desc': '日常の施設運用とエネルギー管理を統括し、運用コスト削減に向けて建物システムのパフォーマンスを継続的に最適化する。',
    's3-p1-hook': 'エネルギーの非効率と異常をリアルタイムで把握し、運用上の問題に発展する前に対処する。',
    's3-p1-cta':  'この役割を確認する →',
    's3-p2-org':  'アセットマネジメント会社',
    's3-p2-role': 'エネルギーコンサルタント・アセットマネージャー',
    's3-p2-desc': 'ポートフォリオレベルで建物のエネルギーパフォーマンスを評価し、中長期的なエネルギー改善と運用最適化の戦略を策定する。',
    's3-p2-hook': '実際のエネルギー消費をベンチマークと比較し、具体的な改善機会を特定する。',
    's3-p2-cta':  'この役割を確認する →',

    /* ── Stage 4: Urban Mining ── */
    's4-num': '04', 's4-tag': 'アーバンマイニング',
    's4-objective':  'アーバンマイニング段階は、建物の改修と解体を単なる廃棄処理ではなく、資源回収の機会として位置づける。建物構成部材の再利用価値を体系的に評価することで、この段階の判断が材料の循環率と全体の炭素削減結果に直接影響を与える。',
    's4-focus-body': '中心となる業務は、建物構成部材のGWP炭素影響と循環性指数の評価、改修戦略のためのデータ基盤の構築、解体部材の分類管理と流通追跡、そして回収材料を地域の循環型サプライネットワークへつなぐことだ。',
    's4-intel-label': '関連モジュール',
    's4-intel-link':  '循環改修 →',
    's4-roles-label': 'この段階の役割',
    's4-p1-org':  '資産保有・改修事業者',
    's4-p1-role': '資産オーナー・改修プロジェクトマネージャー',
    's4-p1-desc': '建物改修または解体プロジェクト全体の意思決定と実行管理を主導し、データに基づく最適な処理方針を策定する。',
    's4-p1-hook': '循環性指数・GWP影響試算・再利用目標を、調査から戦略立案まで一貫して確認する。',
    's4-p1-cta':  'この役割を確認する →',
    's4-p2-org':  '循環型建材企業',
    's4-p2-role': '建材再利用担当者',
    's4-p2-desc': '部材の処理実行と再利用流通の管理を担当し、解体された部材が正確に分類・追跡され、下流の循環チャネルへ適切に流れるよう確保する。',
    's4-p2-hook': '調査から処理完了まで、部材の完全な記録を維持し、各工程で明確な追跡記録を確保する。',
    's4-p2-cta':  'この役割を確認する →',

    /* ── Stage 5: Compliance ── */
    's5-num': '05', 's5-tag': 'コンプライアンス',
    's5-objective':  'コンプライアンス段階は、各ライフサイクル段階からの炭素データを監査対応の報告基盤へと集約し、グリーンファイナンス、ESG開示、炭素資産管理を支援する。今日生成されるコンプライアンスデータが、次世代の建物設計における意思決定の基盤となる。',
    's5-focus-body': '中心となる業務は、LCAによる全ライフサイクル排出データの収集と算定、ISO 14040/44・ESRS・TCFD・J-Creditを含む複数フレームワークへの対応維持、グリーンファイナンスに必要な炭素クレジット証拠の整備、そして投資機関の要件を満たすESG開示データの提供だ。',
    's5-intel-label': '関連モジュール',
    's5-intel-link':  'LCAコンプライアンス →',
    's5-roles-label': 'この段階の役割',
    's5-p1-org':  'ESG・サステナビリティ部門',
    's5-p1-role': 'ESG・サステナビリティ担当者',
    's5-p1-desc': 'プロジェクトまたは企業レベルで炭素核算とコンプライアンス報告を統括し、データが規制要件と外部開示基準を満たすよう管理する。',
    's5-p1-hook': '複数のフレームワークにまたがる対応を維持しながら、データの発生源から報告書まで完全なトレーサビリティを確保する。',
    's5-p1-cta':  'この役割を確認する →',
    's5-p2-org':  'ESGファイナンス機関',
    's5-p2-role': '炭素資産マネージャー・グリーンファイナンス担当者',
    's5-p2-desc': '炭素クレジット証拠とライフサイクル算定結果をもとに、グリーンファイナンス、J-Credit申請、炭素クレジット認証プロセスを推進する。',
    's5-p2-hook': '金融機関の要件を満たす、炭素クレジット証拠とESG開示データを確実に確保する。',
    's5-p2-cta':  'この役割を確認する →',

    /* ── Final CTA ── */
    'cta-title': 'SynerArchが、あなたのライフサイクル上の役割をどう支えるか確認する。',
    'cta-btn':   'お問い合わせ',

    /* ── Footer ── */
    'footer-col2-title':       'ユースケース',
    'footer-link-materials':   '低炭素材料',
    'footer-link-construction':'建設脱炭素管理',
    'footer-link-operations':  'エネルギー最適化',
    'footer-link-urban':       '循環改修',
    'footer-link-compliance':  'LCAコンプライアンス',
    'footer-col3-title':       '会社情報',
    'footer-link-about':       '会社概要',
    'footer-link-contact':     'お問い合わせ',
    'footer-col4-title':       'お問い合わせ',
    'footer-copyright':        '© 2026 SynerArch. All rights reserved.',
    'footer-link-privacy':     'プライバシーポリシー',
    'footer-link-terms':       '利用規約',
  },

};
