/**
 * product-pages.js
 * ─────────────────────────────────────────────────────────────
 * Centralised copy & image-path store for all 5 product pages.
 * Each page reads:  window.PRODUCT_PAGES[PAGE_ID][lang]
 *
 * Image keys (e.g. cap1-img-src) are empty strings until
 * actual screenshot files are provided — placeholders show instead.
 *
 * Lifecycle label keys (lc-1 … lc-5) are shared across all pages;
 * the HTML controls which node carries class="active".
 * ─────────────────────────────────────────────────────────────
 */

window.PRODUCT_PAGES = {

  /* ══════════════════════════════════════════════════════
     MATERIALS  —  intelligence-materials.html
     Stage colour: #22d3ee
  ══════════════════════════════════════════════════════ */
  materials: {
    en: {
      /* ── Lifecycle node labels (shared) ── */
      'lc-1': 'Materials',
      'lc-2': 'Construction',
      'lc-3': 'Operations',
      'lc-4': 'Urban Mining',
      'lc-5': 'Compliance',

      /* ── Hero ── */
      'hero-stage': 'Materials',
      'hero-title': 'Low-carbon Materials &amp;<br>Circular Supply',
      'hero-value': 'Identify, evaluate, and select low-carbon materials and reuse inventory — reducing embodied carbon while improving supply chain transparency.',
      'hero-desc':  'Built on EPD data and structured sourcing workflows, the Materials platform connects design intent with supply chain reality — from carbon-verified material selection to circular recovery.',
      'hero-cta':   'Request Demo',

      /* ── Capabilities section header ── */
      'cap-eyebrow': 'Key Capabilities',
      'cap-title':   'Low-carbon materials — from data to procurement decisions.',
      'cap-hint':    'Material data flows into LCA calculation and compliance workflows.',

      /* ── Capability 1 ── */
      'cap1-title':   'Low-carbon Material Promotion',
      'cap1-desc':    'A high-visibility material catalog that supports low-carbon material selection at the design stage, helping teams identify suitable options across categories while connecting to supply chain networks and manufacturers.',
      'cap1-caption': 'Material catalog filtered by carbon intensity and EPD availability.',
      'cap1-img-src': '',
      'cap1-img-alt': 'Low-carbon material catalog UI',

      /* ── Capability 2 ── */
      'cap2-title':   'Low-carbon Data Library',
      'cap2-desc':    'Structured access to EPD records, supplier profiles, and product documentation — enabling carbon intensity evaluation across material categories.',
      'cap2-caption': 'EPD record detail with carbon factor and certification status.',
      'cap2-img-src': '',
      'cap2-img-alt': 'EPD and supplier data dashboard',

      /* ── Capability 3 ── */
      'cap3-title':   'Construction Waste Reuse',
      'cap3-desc':    'Connect recovered materials to circular supply channels, supporting cradle-to-cradle strategies that close material loops across projects and portfolios.',
      'cap3-caption': 'Circular material matching across project and supplier networks.',
      'cap3-img-src': '',
      'cap3-img-alt': 'Circular supply integration view',

      /* ── Personas ── */
      'persona-eyebrow': 'Who is this for',
      'persona-title':   'Built for the roles that shape material decisions.',

      'p1-role': 'Architect / Designer',
      'p1-desc': 'Leads material specification at design stage, translating low-carbon targets into actionable procurement decisions.',
      'p1-hook': 'Access EPD-verified material options and carbon benchmarks directly within the design workflow.',
      'p1-cta':  'View →',

      'p2-role': 'Procurement Manager',
      'p2-desc': 'Oversees material supply chains, ensuring procurement aligns with low-carbon targets and project budgets.',
      'p2-hook': 'Match materials to project needs with full supplier documentation and reuse inventory integrated.',
      'p2-cta':  'View →',

      'p3-role': 'EPD & Product Sustainability Manager',
      'p3-desc': 'Manages EPD documentation and product sustainability compliance on behalf of building material manufacturers, ensuring product data meets the requirements of architects, green building schemes, and procurement platforms.',
      'p3-hook': 'Publish EPD data, manage product circularity records, and connect product listings directly with design-stage procurement workflows.',
      'p3-cta':  'View →',

      /* ── Data Signals ── */
      'data-eyebrow':         'Data &amp; Standards',
      'data-title':           'Every material record starts with a data profile.',
      'data-desc':            'EPD certification data, supplier documentation, and reuse inventory records form a complete, traceable material archive — supporting informed decisions at every stage.',
      'data-cta':             'Explore Data Bank →',
      'data-types-label':     'Supported data types',
      'data-standards-label': 'Standards &amp; compliance',
      'data-tags':      ['EPD', 'Embodied Carbon', 'LCA', 'Reuse Inventory', 'Supply Chain'],
      'data-standards': ['EN 15804', 'ISO 21930', 'GHG Protocol'],

      /* ── Final CTA ── */
      'cta-title': 'Explore low-carbon material data.',
      'cta-desc':  'Request a demo to see how the Materials platform supports your design and procurement decisions.',
      'cta-back':  '← Back to Intelligence',
      'cta-demo':  'Request Demo',
    },

    jp: {
      /* ── Lifecycle node labels ── */
      'lc-1': 'マテリアル',
      'lc-2': '建設',
      'lc-3': 'オペレーション',
      'lc-4': 'アーバンマイニング',
      'lc-5': 'コンプライアンス',

      /* ── Hero ── */
      'hero-stage': 'マテリアル',
      'hero-title': '低炭素材料・循環サプライ',
      'hero-value': '低炭素材料と再利用在庫を特定・評価・選定し、内包炭素を削減しながらサプライチェーンの透明性を高める。',
      'hero-desc':  'EPDデータと構造化された調達ワークフローを基盤に、設計意図とサプライチェーンの現実をつなぐ。炭素検証済みの材料選定から循環回収まで、一貫したデータ基盤を提供します。',
      'hero-cta':   'デモを申請する',

      /* ── Capabilities section header ── */
      'cap-eyebrow': '主要機能',
      'cap-title':   '低炭素材料——データから調達判断まで。',
      'cap-hint':    '材料データはLCA核算とコンプライアンスワークフローに活用されます。',

      /* ── Capability 1 ── */
      'cap1-title':   '低炭素建材プロモーション',
      'cap1-desc':    '設計段階での低炭素材料選定を支援する高視認性の材料カタログ。カテゴリ全体から適切な選択肢を特定し、サプライチェーンネットワークやメーカーとの接続をサポートします。',
      'cap1-caption': '炭素強度とEPD取得状況でフィルタリングされた材料カタログ。',
      'cap1-img-src': '',
      'cap1-img-alt': '低炭素材料カタログUI',

      /* ── Capability 2 ── */
      'cap2-title':   '低炭素データライブラリ',
      'cap2-desc':    'EPDレコード、サプライヤープロフィール、製品ドキュメントへの構造化されたアクセス。材料カテゴリ全体の炭素強度評価を可能にします。',
      'cap2-caption': '炭素係数と認証状況を含むEPDレコード詳細。',
      'cap2-img-src': '',
      'cap2-img-alt': 'EPD・サプライヤーデータダッシュボード',

      /* ── Capability 3 ── */
      'cap3-title':   '建設廃材の再利用',
      'cap3-desc':    '回収材料を循環サプライチャネルに接続し、プロジェクトとポートフォリオ全体で材料ループを閉じるクレードル・トゥ・クレードル戦略をサポートします。',
      'cap3-caption': 'プロジェクトとサプライヤーネットワーク全体の循環材料マッチング。',
      'cap3-img-src': '',
      'cap3-img-alt': '循環サプライ統合ビュー',

      /* ── Personas ── */
      'persona-eyebrow': '対象ユーザー',
      'persona-title':   '材料の意思決定を担う役割のために設計されています。',

      'p1-role': '建築家・デザイナー',
      'p1-desc': '設計段階で材料仕様を主導し、低炭素目標を実行可能な調達判断に転換します。',
      'p1-hook': '設計ワークフロー内で、EPD認証済み材料の選択肢と炭素基準値に直接アクセス。',
      'p1-cta':  '見る →',

      'p2-role': '調達担当者',
      'p2-desc': '材料サプライチェーンを統括し、調達が低炭素目標とプロジェクト予算に沿うよう管理します。',
      'p2-hook': 'サプライヤー資料と再利用在庫を統合し、プロジェクトニーズに合った材料をマッチング。',
      'p2-cta':  '見る →',

      'p3-role': 'EPD・製品サステナビリティマネージャー',
      'p3-desc': '建材メーカーを代表してEPD文書と製品サステナビリティ対応を管理し、製品データが建築家・グリーンビルディング認証・調達プラットフォームの要件を満たすよう整備する。',
      'p3-hook': 'EPDデータを公開し、製品の循環性記録を管理し、製品情報を設計段階の調達ワークフローと直接連携させる。',
      'p3-cta':  '見る →',

      /* ── Data Signals ── */
      'data-eyebrow':         'データ・規格',
      'data-title':           'すべての材料記録は、データプロファイルから始まる。',
      'data-desc':            'EPD認証データ、サプライヤードキュメント、再利用在庫記録が、追跡可能な完全な材料アーカイブを形成し、あらゆる段階での適切な判断を支えます。',
      'data-cta':             'Data Bankを見る →',
      'data-types-label':     'サポートデータタイプ',
      'data-standards-label': '規格・コンプライアンス',
      'data-tags':      ['EPD', '内包炭素', 'LCA', '再利用在庫', 'サプライチェーン'],
      'data-standards': ['EN 15804', 'ISO 21930', 'GHGプロトコル'],

      /* ── Final CTA ── */
      'cta-title': '低炭素材料のデータを探索する。',
      'cta-desc':  'デモをご予約いただき、マテリアルプラットフォームが設計・調達判断をどう支えるかご確認ください。',
      'cta-back':  '← インテリジェンスに戻る',
      'cta-demo':  'デモを申請する',
    },
  },

  /* ══════════════════════════════════════════════════════
     CONSTRUCTION  —  intelligence-construction.html
     Stage colour: #16a34a
  ══════════════════════════════════════════════════════ */
  construction: {
    en: {
      /* ── Lifecycle node labels ── */
      'lc-1': 'Materials',
      'lc-2': 'Construction',
      'lc-3': 'Operations',
      'lc-4': 'Urban Mining',
      'lc-5': 'Compliance',

      /* ── Hero ── */
      'hero-stage': 'Construction',
      'hero-title': 'Construction<br>Decarbonization',
      'hero-value': 'Capture, structure, and report on-site energy consumption and emissions data — improving data accuracy and reducing reporting workload.',
      'hero-desc':  'Built on mobile workflows and OCR-powered data entry, the Construction platform turns site-level activity into structured, auditable records — covering energy use, equipment emissions, and regulatory alignment across the build phase.',
      'hero-cta':   'Request Demo',

      /* ── Capabilities section header ── */
      'cap-eyebrow': 'Key Capabilities',
      'cap-title':   'Site emissions — from data capture to compliance reporting.',
      'cap-hint':    'Site data feeds into carbon accounting and compliance reporting workflows.',

      /* ── Capability 1 ── */
      'cap1-title':   'On-site Emission Tracking',
      'cap1-desc':    'Systematically record and manage construction site emissions in alignment with ISO 14064, PAS 2080, and other leading standards — ensuring full traceability and regulatory alignment across the entire project cycle.',
      'cap1-caption': 'Site emission records aligned with ISO 14064 and PAS 2080.',
      'cap1-img-src': '',
      'cap1-img-alt': 'On-site emission tracking dashboard',

      /* ── Capability 2 ── */
      'cap2-title':   'MRV-ready Data Collection',
      'cap2-desc':    'Structured data capture via OCR recognition and mobile-first workflows — producing monitoring and audit-ready data records that feed directly into downstream compliance processes.',
      'cap2-caption': 'Mobile data entry with OCR recognition and MRV alignment.',
      'cap2-img-src': '',
      'cap2-img-alt': 'MRV data collection interface',

      /* ── Capability 3 ── */
      'cap3-title':   'Equipment Energy Monitoring',
      'cap3-desc':    'Track fuel consumption and energy usage across construction equipment, evaluate clean energy alternatives, and provide equipment usage recommendations to reduce operational emissions at the site level.',
      'cap3-caption': 'Equipment energy tracking with usage recommendations.',
      'cap3-img-src': '',
      'cap3-img-alt': 'Equipment energy monitoring view',

      /* ── Personas ── */
      'persona-eyebrow': 'Who is this for',
      'persona-title':   'Built for the roles that manage site data and compliance.',

      'p1-role': 'Site Data Recorder / Site Supervisor',
      'p1-desc': 'Responsible for daily on-site data collection, ensuring energy consumption and emissions data is accurately and promptly entered into the system.',
      'p1-hook': 'Capture site data through mobile workflows and OCR — without disrupting daily operations.',
      'p1-cta':  'View →',

      'p2-role': 'Sustainability Manager',
      'p2-desc': 'Oversees emissions management across the construction phase and coordinates MRV framework alignment and regulatory reporting.',
      'p2-hook': 'Maintain data quality across standards, with full traceability from site to compliance report.',
      'p2-cta':  'View →',

      /* ── Data Signals ── */
      'data-eyebrow':         'Data &amp; Standards',
      'data-title':           'Every site activity leaves an auditable record.',
      'data-desc':            'On-site energy data, equipment emissions records, and MRV-aligned data records form a structured, traceable set of construction phase data.',
      'data-cta':             'Explore Data Bank →',
      'data-types-label':     'Supported data types',
      'data-standards-label': 'Standards &amp; compliance',
      'data-tags':      ['OCR', 'MRV', 'Scope 1–3', 'Emission Factors'],
      'data-standards': ['ISO 14064', 'PAS 2080', 'GHG Protocol'],

      /* ── Final CTA ── */
      'cta-title': 'Make site energy and emissions data clear and auditable.',
      'cta-desc':  'Request a demo to see how the Construction platform structures your site data for compliance and reporting.',
      'cta-back':  '← Back to Intelligence',
      'cta-demo':  'Request Demo',
    },

    jp: {
      /* ── Lifecycle node labels ── */
      'lc-1': 'マテリアル',
      'lc-2': '建設',
      'lc-3': 'オペレーション',
      'lc-4': 'アーバンマイニング',
      'lc-5': 'コンプライアンス',

      /* ── Hero ── */
      'hero-stage': '建設',
      'hero-title': '建設脱炭素管理',
      'hero-value': '現場のエネルギー消費と排出データを収集・構造化・報告し、データ精度を向上させ、報告業務の負担を大幅に削減する。',
      'hero-desc':  'モバイルワークフローとOCRデータ入力を基盤に、現場レベルの活動を構造化された監査対応記録に変換。エネルギー使用量、設備排出量、規制対応を建設フェーズ全体でカバーします。',
      'hero-cta':   'デモを申請する',

      /* ── Capabilities section header ── */
      'cap-eyebrow': '主要機能',
      'cap-title':   '現場排出量——データ収集からコンプライアンス報告まで。',
      'cap-hint':    '現場データは炭素核算とコンプライアンス報告ワークフローに活用されます。',

      /* ── Capability 1 ── */
      'cap1-title':   '現場排出量トラッキング',
      'cap1-desc':    'ISO 14064、PAS 2080などの主要規格に準拠し、建設現場の排出量を体系的に記録・管理。プロジェクトサイクル全体のトレーサビリティと規制対応を確保します。',
      'cap1-caption': 'ISO 14064・PAS 2080に準拠した現場排出記録。',
      'cap1-img-src': '',
      'cap1-img-alt': '現場排出量トラッキングダッシュボード',

      /* ── Capability 2 ── */
      'cap2-title':   'MRV対応データ収集',
      'cap2-desc':    'OCR認識とモバイルファーストワークフローによる構造化データ収集。監視・監査対応のデータ記録を生成し、下流のコンプライアンスプロセスに直接連携します。',
      'cap2-caption': 'OCR認識とMRV対応を備えたモバイルデータ入力。',
      'cap2-img-src': '',
      'cap2-img-alt': 'MRVデータ収集インターフェース',

      /* ── Capability 3 ── */
      'cap3-title':   '設備エネルギー監視',
      'cap3-desc':    '建設設備の燃料消費とエネルギー使用量を追跡。クリーンエネルギー代替案を評価し、設備使用最適化の提案を通じて現場レベルの運用排出を削減します。',
      'cap3-caption': '設備エネルギー追跡と使用最適化提案。',
      'cap3-img-src': '',
      'cap3-img-alt': '設備エネルギー監視ビュー',

      /* ── Personas ── */
      'persona-eyebrow': '対象ユーザー',
      'persona-title':   '現場データとコンプライアンスを管理する役割のために設計されています。',

      'p1-role': '現場データ記録担当・現場監督',
      'p1-desc': '日常的な現場データ収集を担当し、エネルギー消費と排出データが正確かつタイムリーにシステムへ入力されるよう管理します。',
      'p1-hook': 'モバイルワークフローとOCRで現場データを収集——日常業務を妨げずに。',
      'p1-cta':  '見る →',

      'p2-role': 'サステナビリティマネージャー',
      'p2-desc': '建設フェーズ全体の排出管理を統括し、MRVフレームワークへの対応と規制報告を調整します。',
      'p2-hook': '現場から報告書まで完全なトレーサビリティで、複数規格のデータ品質を維持。',
      'p2-cta':  '見る →',

      /* ── Data Signals ── */
      'data-eyebrow':         'データ・規格',
      'data-title':           'すべての現場作業が、監査可能な記録として残る。',
      'data-desc':            '現場エネルギーデータ、設備排出記録、MRV対応データ記録が、構造化・追跡可能な建設フェーズデータを形成します。',
      'data-cta':             'Data Bankを見る →',
      'data-types-label':     'サポートデータタイプ',
      'data-standards-label': '規格・コンプライアンス',
      'data-tags':      ['OCR', 'MRV', 'スコープ1–3', '排出係数'],
      'data-standards': ['ISO 14064', 'PAS 2080', 'GHGプロトコル'],

      /* ── Final CTA ── */
      'cta-title': '現場のエネルギー・排出データを、明確で監査可能なものにする。',
      'cta-desc':  'デモをご予約いただき、建設プラットフォームが現場データをコンプライアンスと報告のためにどう構造化するかご確認ください。',
      'cta-back':  '← インテリジェンスに戻る',
      'cta-demo':  'デモを申請する',
    },
  },

  /* ══════════════════════════════════════════════════════
     OPERATIONS  —  intelligence-operations.html
     Stage colour: #2563eb
  ══════════════════════════════════════════════════════ */
  operations: {
    en: {
      /* ── Lifecycle node labels ── */
      'lc-1': 'Materials',
      'lc-2': 'Construction',
      'lc-3': 'Operations',
      'lc-4': 'Urban Mining',
      'lc-5': 'Compliance',

      /* ── Hero ── */
      'hero-stage': 'Operations',
      'hero-title': 'Energy Optimization',
      'hero-value': 'Continuously improve building operational efficiency — reducing energy consumption and operating costs through persistent monitoring and AI-powered optimization.',
      'hero-desc':  'Built on building energy monitoring systems, BMS sensor data, and AI analytics, the Operations platform turns ongoing energy data into actionable decisions — from anomaly detection to targeted improvement strategies.',
      'hero-cta':   'Request Demo',

      /* ── Capabilities section header ── */
      'cap-eyebrow': 'Key Capabilities',
      'cap-title':   'From energy data to operational decisions — continuous building performance improvement.',
      'cap-hint':    'Operational energy data provides an ongoing basis for energy optimization and building management decisions.',

      /* ── Capability 1 ── */
      'cap1-title':   'Energy Efficiency',
      'cap1-desc':    'Continuously track energy consumption patterns, surface low efficiency and anomalies in real time, and initiate proactive optimization to achieve systematic energy reductions across the building.',
      'cap1-caption': 'Real-time energy consumption monitoring with anomaly alerts.',
      'cap1-img-src': '',
      'cap1-img-alt': 'Building energy monitoring dashboard',

      /* ── Capability 2 ── */
      'cap2-title':   'Operational Cost Reduction',
      'cap2-desc':    'Develop targeted retrofit and equipment management strategies grounded in operational data — translating energy optimization findings into concrete, actionable cost reduction measures.',
      'cap2-caption': 'Cost reduction strategy grounded in operational performance data.',
      'cap2-img-src': '',
      'cap2-img-alt': 'Operational cost analysis view',

      /* ── Capability 3 ── */
      'cap3-title':   'Intelligent Decision Support',
      'cap3-desc':    'Leverage data-driven insights and continuously evolving AI models to shift building operations from reactive response to predictive, intelligence-led management.',
      'cap3-caption': 'AI-powered recommendations for building management decisions.',
      'cap3-img-src': '',
      'cap3-img-alt': 'Intelligent decision support interface',

      /* ── Personas ── */
      'persona-eyebrow': 'Who is this for',
      'persona-title':   'Built for the roles that manage building performance day to day.',

      'p1-role': 'Building Operations Manager',
      'p1-desc': 'Oversees day-to-day facility operations and energy management, continuously optimising building system performance to reduce operating costs.',
      'p1-hook': 'Surface inefficiencies and anomalies in real time — and act before they become operational problems.',
      'p1-cta':  'View →',

      'p2-role': 'Energy Consultant / Asset Manager',
      'p2-desc': 'Evaluates building energy performance at a portfolio level, developing medium and long-term energy retrofit and operational optimisation strategies.',
      'p2-hook': 'Compare actual energy use against benchmarks — and identify concrete opportunities for improvement.',
      'p2-cta':  'View →',

      /* ── Data Signals ── */
      'data-eyebrow':         'Data &amp; Standards',
      'data-title':           'The operational data foundation for better decisions.',
      'data-desc':            'Building energy monitoring system data, BMS sensor records, and equipment operation logs form a continuous, accessible data foundation for operational strategy.',
      'data-cta':             'Explore Data Bank →',
      'data-types-label':     'Supported data types',
      'data-standards-label': 'Standards &amp; compliance',
      'data-tags':      ['BMS', 'BIM', 'AI Analytics'],
      'data-standards': ['ISO 50001', 'ASHRAE 90.1', 'ZEB'],

      /* ── Final CTA ── */
      'cta-title': 'Drive more efficient building operations with data.',
      'cta-desc':  'Request a demo to see how the Operations platform supports your energy management and decision-making.',
      'cta-back':  '← Back to Intelligence',
      'cta-demo':  'Request Demo',
    },

    jp: {
      /* ── Lifecycle node labels ── */
      'lc-1': 'マテリアル',
      'lc-2': '建設',
      'lc-3': 'オペレーション',
      'lc-4': 'アーバンマイニング',
      'lc-5': 'コンプライアンス',

      /* ── Hero ── */
      'hero-stage': 'オペレーション',
      'hero-title': 'エネルギー最適化',
      'hero-value': '継続的な監視とAI主導の最適化を通じて、建物の運用効率を継続的に改善し、エネルギー消費と運用コストを削減する。',
      'hero-desc':  '楼宇エネルギー監視システム、BMSセンサーデータ、AIアナリティクスを基盤に、継続的なエネルギーデータを実行可能な意思決定へ変換。異常検知から改善戦略の策定まで、一貫したオペレーション基盤を提供します。',
      'hero-cta':   'デモを申請する',

      /* ── Capabilities section header ── */
      'cap-eyebrow': '主要機能',
      'cap-title':   'エネルギーデータから運用判断まで——建物パフォーマンスの継続的改善。',
      'cap-hint':    '運用エネルギーデータが、省エネ最適化と建物管理の意思決定に継続的な根拠を提供します。',

      /* ── Capability 1 ── */
      'cap1-title':   'エネルギー効率化',
      'cap1-desc':    'エネルギー消費パターンを継続追跡し、低効率と異常をリアルタイムで検出。建物全体での体系的な省エネに向けたプロアクティブな最適化を開始します。',
      'cap1-caption': 'リアルタイムのエネルギー消費監視と異常アラート。',
      'cap1-img-src': '',
      'cap1-img-alt': '建物エネルギー監視ダッシュボード',

      /* ── Capability 2 ── */
      'cap2-title':   '運用コスト削減',
      'cap2-desc':    '運用データに基づく改造と設備管理戦略を策定。エネルギー最適化の成果を、具体的かつ実行可能なコスト削減施策へと転換します。',
      'cap2-caption': '運用パフォーマンスデータに基づくコスト削減戦略。',
      'cap2-img-src': '',
      'cap2-img-alt': '運用コスト分析ビュー',

      /* ── Capability 3 ── */
      'cap3-title':   'インテリジェントな意思決定支援',
      'cap3-desc':    'データ駆動型の知見と継続進化するAIモデルを活用し、建物運用を事後対応から予測型・インテリジェンス主導の管理へと転換します。',
      'cap3-caption': '建物管理の意思決定を支援するAI推奨。',
      'cap3-img-src': '',
      'cap3-img-alt': 'インテリジェント意思決定支援インターフェース',

      /* ── Personas ── */
      'persona-eyebrow': '対象ユーザー',
      'persona-title':   '日々の建物パフォーマンスを管理する役割のために設計されています。',

      'p1-role': 'ビル運用マネージャー',
      'p1-desc': '日常の施設運用とエネルギー管理を統括し、運用コスト削減に向けて建物システムのパフォーマンスを継続最適化します。',
      'p1-hook': '低効率と異常をリアルタイムで把握し、運用上の問題になる前に対処する。',
      'p1-cta':  '見る →',

      'p2-role': 'エネルギーコンサルタント / アセットマネージャー',
      'p2-desc': 'ポートフォリオレベルで建物のエネルギーパフォーマンスを評価し、中長期の省エネ改造と運用最適化戦略を策定します。',
      'p2-hook': '実際のエネルギー消費をベンチマークと比較し、具体的な改善機会を特定する。',
      'p2-cta':  '見る →',

      /* ── Data Signals ── */
      'data-eyebrow':         'データ・規格',
      'data-title':           'より良い意思決定のための、運用データ基盤。',
      'data-desc':            '建物エネルギー監視システムのデータ、BMSセンサー記録、設備稼働ログが、運用戦略のための継続的でアクセス可能なデータ基盤を形成します。',
      'data-cta':             'Data Bankを見る →',
      'data-types-label':     'サポートデータタイプ',
      'data-standards-label': '規格・コンプライアンス',
      'data-tags':      ['BMS', 'BIM', 'AI分析'],
      'data-standards': ['ISO 50001', 'ASHRAE 90.1', 'ZEB'],

      /* ── Final CTA ── */
      'cta-title': 'データで、より効率的な建物運用を実現する。',
      'cta-desc':  'デモをご予約いただき、オペレーションプラットフォームがエネルギー管理と意思決定をどう支えるかご確認ください。',
      'cta-back':  '← インテリジェンスに戻る',
      'cta-demo':  'デモを申請する',
    },
  },

  /* ══════════════════════════════════════════════════════
     URBAN MINING  —  intelligence-urban-mining.html
     Stage colour: #fb923c
  ══════════════════════════════════════════════════════ */
  'urban-mining': {
    en: {
      /* ── Lifecycle node labels ── */
      'lc-1': 'Materials',
      'lc-2': 'Construction',
      'lc-3': 'Operations',
      'lc-4': 'Urban Mining',
      'lc-5': 'Compliance',

      /* ── Hero ── */
      'hero-stage': 'Urban Mining',
      'hero-title': 'Circular Renovation &amp;<br>Asset Optimization',
      'hero-value': 'Plan and execute circular renovation strategies using component audit data, circularity indices, and carbon impact estimates — maximising reuse rates across building portfolios.',
      'hero-desc':  'Built on component audit data, circularity indices, and carbon impact estimates, the platform supports renovation and deconstruction decisions — from assessing reuse potential to tracking components through the full disposal process.',
      'hero-cta':   'Request Demo',

      /* ── Capabilities section header ── */
      'cap-eyebrow': 'Key Capabilities',
      'cap-title':   'From component audit to circular renovation decisions — uncovering the circular value of buildings.',
      'cap-hint':    'Component and material data feeds into lifecycle assessment and circular supply workflows.',

      /* ── Capability 1 ── */
      'cap1-title':   'Sustainability Strategy Development',
      'cap1-desc':    'Clarify each component\'s GWP carbon impact, reuse potential, and circularity index — providing the structured data foundation needed to make well-grounded renovation decisions.',
      'cap1-caption': 'Component GWP, reuse potential, and circularity index by building element.',
      'cap1-img-src': '',
      'cap1-img-alt': 'Sustainability strategy data view',

      /* ── Capability 2 ── */
      'cap2-title':   'Circular Retrofit &amp; Lifecycle Management',
      'cap2-desc':    'Embed circular economy principles into renovation workflows, maximise asset reuse rates, and position renovation actions within a full building lifecycle value management framework.',
      'cap2-caption': 'Renovation workflow with circularity metrics and lifecycle positioning.',
      'cap2-img-src': '',
      'cap2-img-alt': 'Circular renovation lifecycle management view',

      /* ── Capability 3 ── */
      'cap3-title':   'Deconstruction Component Tracking',
      'cap3-desc':    'Enable professionals responsible for component disposal and reuse flow to systematically manage deconstructed building assets — accelerating the return of recovered materials to regional circular supply networks.',
      'cap3-caption': 'Component tracking through deconstruction and reuse stages.',
      'cap3-img-src': '',
      'cap3-img-alt': 'Deconstruction component tracking interface',

      /* ── Personas ── */
      'persona-eyebrow': 'Who is this for',
      'persona-title':   'Built for the roles that lead renovation and material recovery decisions.',

      'p1-role': 'Asset Owner / Renovation Project Manager',
      'p1-desc': 'Leads overall decision-making and execution management for building renovation or deconstruction projects, developing optimal disposal strategies grounded in data.',
      'p1-hook': 'Access circularity indices, GWP impact estimates, and reuse targets — from audit to strategy.',
      'p1-cta':  'View →',

      'p2-role': 'Material Reuse Coordinator',
      'p2-desc': 'Responsible for component disposal execution and reuse flow management — ensuring deconstructed components are accurately categorised, tracked, and directed into downstream circular channels.',
      'p2-hook': 'Maintain full component records from audit through processing — with clear tracking at every stage.',
      'p2-cta':  'View →',

      /* ── Data Signals ── */
      'data-eyebrow':         'Data &amp; Standards',
      'data-title':           'Every component starts with a data record.',
      'data-desc':            'Component audit data, circularity indices, and carbon impact estimates together form the component data archive for the renovation and deconstruction phase.',
      'data-cta':             'Explore Data Bank →',
      'data-types-label':     'Supported data types',
      'data-standards-label': 'Standards &amp; compliance',
      'data-tags':      ['BIM', 'Asset Data', 'Component Record', 'Circular Economy', 'LCA'],
      'data-standards': ['ISO 59020', 'DIN SPEC 91484', 'Ellen MacArthur MCI'],

      /* ── Final CTA ── */
      'cta-title': 'Uncover the circular value within building renovation.',
      'cta-desc':  'Request a demo to see how the platform supports your renovation and deconstruction decisions.',
      'cta-back':  '← Back to Intelligence',
      'cta-demo':  'Request Demo',
    },

    jp: {
      /* ── Lifecycle node labels ── */
      'lc-1': 'マテリアル',
      'lc-2': '建設',
      'lc-3': 'オペレーション',
      'lc-4': 'アーバンマイニング',
      'lc-5': 'コンプライアンス',

      /* ── Hero ── */
      'hero-stage': 'アーバンマイニング',
      'hero-title': '循環改造・資産最適化',
      'hero-value': '構成部材の監査データ、循環性指数、炭素影響試算をもとに循環型改造戦略を立案・実行し、建物ポートフォリオ全体で再利用率を最大化する。',
      'hero-desc':  '構成部材の監査データ、循環性指数、炭素影響試算を基盤に、改造・解体の意思決定を支援。再利用可能性の評価から部材の処置追跡まで、プロセス全体をカバーします。',
      'hero-cta':   'デモを申請する',

      /* ── Capabilities section header ── */
      'cap-eyebrow': '主要機能',
      'cap-title':   '部材監査から循環型改造の意思決定まで——建物の循環価値を掘り起こす。',
      'cap-hint':    '部材と材料のデータがライフサイクル核算と循環サプライのワークフローに活用されます。',

      /* ── Capability 1 ── */
      'cap1-title':   'サステナビリティ戦略の策定',
      'cap1-desc':    '各部材のGWP炭素影響、再利用可能性、循環性指数を明確化し、根拠ある改造判断に必要な構造化データ基盤を提供します。',
      'cap1-caption': '建物部材別のGWP、再利用可能性、循環性指数。',
      'cap1-img-src': '',
      'cap1-img-alt': 'サステナビリティ戦略データビュー',

      /* ── Capability 2 ── */
      'cap2-title':   '循環型改造とライフサイクル管理',
      'cap2-desc':    '循環型経済の原則を改造ワークフローに組み込み、資産の再利用率を最大化。改造施策を建物全ライフサイクルの価値管理体系に位置づけます。',
      'cap2-caption': '循環性指標とライフサイクル位置づけを含む改造ワークフロー。',
      'cap2-img-src': '',
      'cap2-img-alt': '循環型改造ライフサイクル管理ビュー',

      /* ── Capability 3 ── */
      'cap3-title':   '解体部材トラッキング',
      'cap3-desc':    '部材の処置実行と再利用流転を担う担当者が、解体建物資産を体系的に管理できるよう支援。回収材料の地域循環サプライネットワークへの還流を加速します。',
      'cap3-caption': '解体から再利用段階までの部材追跡。',
      'cap3-img-src': '',
      'cap3-img-alt': '解体部材トラッキングインターフェース',

      /* ── Personas ── */
      'persona-eyebrow': '対象ユーザー',
      'persona-title':   '改造と材料回収の意思決定を主導する役割のために設計されています。',

      'p1-role': '資産オーナー / 改造プロジェクトマネージャー',
      'p1-desc': '建物改造または解体プロジェクトの全体的な意思決定と実行管理を統括し、データに基づく最適な処置方針を策定します。',
      'p1-hook': '循環性指数・GWP影響試算・再利用目標を、調査から戦略立案まで一貫して確認する。',
      'p1-cta':  '見る →',

      'p2-role': '建材再利用担当者',
      'p2-desc': '部材の処置実行と再利用流転の管理を担当し、解体された部材が正確に分類・追跡され、下流の循環チャネルへ適切に流れるよう確保します。',
      'p2-hook': '調査から処理完了まで、部材の完全な記録を維持し、各工程で明確な追跡記録を確保する。',
      'p2-cta':  '見る →',

      /* ── Data Signals ── */
      'data-eyebrow':         'データ・規格',
      'data-title':           'すべての部材は、データ記録から始まる。',
      'data-desc':            '部材監査データ、循環性指数、炭素影響試算が一体となって、改造・解体フェーズの部材データアーカイブを形成します。',
      'data-cta':             'Data Bankを見る →',
      'data-types-label':     'サポートデータタイプ',
      'data-standards-label': '規格・コンプライアンス',
      'data-tags':      ['BIM', '資産データ', '部材記録', '循環型経済', 'LCA'],
      'data-standards': ['ISO 59020', 'DIN SPEC 91484', 'Ellen MacArthur MCI'],

      /* ── Final CTA ── */
      'cta-title': '建物改造に潜む循環価値を掘り起こす。',
      'cta-desc':  'デモをご予約いただき、プラットフォームが改造・解体の意思決定をどう支えるかご確認ください。',
      'cta-back':  '← インテリジェンスに戻る',
      'cta-demo':  'デモを申請する',
    },
  },

  /* ══════════════════════════════════════════════════════
     COMPLIANCE  —  intelligence-compliance.html
     Stage colour: #7e22ce
  ══════════════════════════════════════════════════════ */
  compliance: {
    en: {
      /* ── Lifecycle node labels ── */
      'lc-1': 'Materials',
      'lc-2': 'Construction',
      'lc-3': 'Operations',
      'lc-4': 'Urban Mining',
      'lc-5': 'Compliance',

      /* ── Hero ── */
      'hero-stage': 'Compliance',
      'hero-title': 'LCA Compliance',
      'hero-value': 'Collect, calculate, verify, and report full lifecycle emissions data — supporting green financing and the long-term appreciation of building assets.',
      'hero-desc':  'Built on LCA models and MRV workflows aligned with ISO 14040/44, ISO 14064, and ESRS, the Compliance platform brings together multi-source data from every lifecycle stage into a traceable, auditable reporting foundation.',
      'hero-cta':   'Request Demo',

      /* ── Capabilities section header ── */
      'cap-eyebrow': 'Key Capabilities',
      'cap-title':   'From multi-source data to auditable reports — covering the full building lifecycle.',
      'cap-hint':    'Data from every lifecycle stage is consolidated here, forming a traceable and auditable record.',

      /* ── Capability 1 ── */
      'cap1-title':   'Regulatory &amp; Standards Alignment',
      'cap1-desc':    'Maintain alignment across ISO 14040/44, ISO 14064, ESRS, TCFD, LEED, BREEAM, ZEB, J-Credit, and Carbon Credit frameworks — ensuring emission data meets reporting requirements across regions, with standardised, audit-ready outputs.',
      'cap1-caption': 'Multi-framework compliance status and audit-ready output.',
      'cap1-img-src': '',
      'cap1-img-alt': 'Regulatory alignment dashboard',

      /* ── Capability 2 ── */
      'cap2-title':   'Green Financing Acceleration',
      'cap2-desc':    'Equip financial institutions and project stakeholders with transparent, data-grounded carbon credit evidence — advancing ESG disclosure and sustainable financing decisions.',
      'cap2-caption': 'Carbon credit evidence and ESG disclosure data for financing decisions.',
      'cap2-img-src': '',
      'cap2-img-alt': 'Green financing support view',

      /* ── Capability 3 ── */
      'cap3-title':   'Asset Value Maximization',
      'cap3-desc':    'Convert full lifecycle building data into a computable, auditable asset foundation — building a traceable and continuously appreciating value base for portfolio-level investment management.',
      'cap3-caption': 'Lifecycle data converted into an auditable asset and investment foundation.',
      'cap3-img-src': '',
      'cap3-img-alt': 'Asset value and lifecycle data view',

      /* ── Personas ── */
      'persona-eyebrow': 'Who is this for',
      'persona-title':   'Built for the roles that manage compliance reporting and carbon assets.',

      'p1-role': 'ESG / Sustainability Manager',
      'p1-desc': 'Oversees carbon accounting and compliance reporting at the project or corporate level, ensuring data meets regulatory requirements and external disclosure standards.',
      'p1-hook': 'Maintain alignment across multiple frameworks with full data traceability — from source to report.',
      'p1-cta':  'View →',

      'p2-role': 'Carbon Asset Manager / Green Finance Manager',
      'p2-desc': 'Uses carbon credit evidence and lifecycle calculation results to advance green financing, J-Credit applications, and Carbon Credit verification processes.',
      'p2-hook': 'Access structured carbon credit evidence and ESG disclosure data that meets the requirements of financing institutions.',
      'p2-cta':  'View →',

      /* ── Data Signals ── */
      'data-eyebrow':         'Data &amp; Standards',
      'data-title':           'Multi-source data — consolidated into a single traceable record.',
      'data-desc':            'Data collected from materials, construction, operations, and deconstruction phases is calculated through a unified methodology — producing a traceable, lifecycle-complete record.',
      'data-cta':             'Explore Data Bank →',
      'data-types-label':     'Supported data types',
      'data-standards-label': 'Standards &amp; compliance',
      'data-tags':      ['ISO 14040/44', 'GHG Protocol', 'ESRS', 'Scope 1–3', 'MRV', 'LCA'],
      'data-standards': ['ISO 14064', 'TCFD', 'LEED', 'BREEAM', 'J-Credit'],

      /* ── Final CTA ── */
      'cta-title': 'Build a traceable, auditable full lifecycle reporting foundation.',
      'cta-desc':  'Request a demo to see how the Compliance platform brings your lifecycle data together for reporting and investment decisions.',
      'cta-back':  '← Back to Intelligence',
      'cta-demo':  'Request Demo',
    },

    jp: {
      /* ── Lifecycle node labels ── */
      'lc-1': 'マテリアル',
      'lc-2': '建設',
      'lc-3': 'オペレーション',
      'lc-4': 'アーバンマイニング',
      'lc-5': 'コンプライアンス',

      /* ── Hero ── */
      'hero-stage': 'コンプライアンス',
      'hero-title': 'LCAコンプライアンス',
      'hero-value': '全ライフサイクルの排出データを収集・核算・検証・報告し、グリーンファイナンスと建物資産の長期的な価値向上を支援する。',
      'hero-desc':  'ISO 14040/44、ISO 14064、ESRSに準拠したLCAモデルとMRVワークフローを基盤に、各ライフサイクル段階の多源データを一つの追跡可能・監査対応の報告基盤へと統合します。',
      'hero-cta':   'デモを申請する',

      /* ── Capabilities section header ── */
      'cap-eyebrow': '主要機能',
      'cap-title':   '多源データから監査対応レポートまで——建物の全ライフサイクルをカバー。',
      'cap-hint':    '各ライフサイクル段階のデータがここに集約され、追跡可能で監査対応の記録を形成します。',

      /* ── Capability 1 ── */
      'cap1-title':   '規制・基準への対応',
      'cap1-desc':    'ISO 14040/44、ISO 14064、ESRS、TCFD、LEED、BREEAM、ZEB、J-Credit、Carbon Creditフレームワークへの対応を維持。排出データが各地域の報告要件を満たす、標準化された監査対応アウトプットを確保します。',
      'cap1-caption': 'マルチフレームワークのコンプライアンス状況と監査対応アウトプット。',
      'cap1-img-src': '',
      'cap1-img-alt': '規制対応ダッシュボード',

      /* ── Capability 2 ── */
      'cap2-title':   'グリーンファイナンスの加速',
      'cap2-desc':    '金融機関とプロジェクト関係者に、透明性のあるデータに裏付けられた炭素クレジット証拠を提供。ESG開示と持続可能なファイナンス判断を推進します。',
      'cap2-caption': 'ファイナンス判断のための炭素クレジット証拠とESG開示データ。',
      'cap2-img-src': '',
      'cap2-img-alt': 'グリーンファイナンス支援ビュー',

      /* ── Capability 3 ── */
      'cap3-title':   '資産価値の最大化',
      'cap3-desc':    '建物の全ライフサイクルデータを、算定可能・監査対応の資産基盤へと変換。ポートフォリオレベルの投資管理に向けた、追跡可能かつ継続的に価値が高まる基盤を構築します。',
      'cap3-caption': '監査対応資産・投資基盤へと変換されたライフサイクルデータ。',
      'cap3-img-src': '',
      'cap3-img-alt': '資産価値とライフサイクルデータビュー',

      /* ── Personas ── */
      'persona-eyebrow': '対象ユーザー',
      'persona-title':   'コンプライアンス報告と炭素資産を管理する役割のために設計されています。',

      'p1-role': 'ESG・サステナビリティ担当者',
      'p1-desc': 'プロジェクトまたは企業レベルでの核算とコンプライアンス報告を統括し、データが規制要件と外部開示基準を満たすよう管理します。',
      'p1-hook': 'ソースから報告書まで完全なデータトレーサビリティで、複数フレームワークへの対応を維持。',
      'p1-cta':  '見る →',

      'p2-role': '炭素資産マネージャー / グリーンファイナンス担当者',
      'p2-desc': '炭素クレジット証拠とライフサイクル核算結果をもとに、グリーンファイナンス、J-Credit申請、Carbon Credit核証プロセスを推進します。',
      'p2-hook': '金融機関の要件を満たす、構造化された炭素クレジット証拠とESG開示データにアクセス。',
      'p2-cta':  '見る →',

      /* ── Data Signals ── */
      'data-eyebrow':         'データ・規格',
      'data-title':           '多源データを、単一の追跡可能な記録へ。',
      'data-desc':            '材料、建設、運用、解体の各フェーズから収集されたデータが統一された計算方法で処理され、ライフサイクル全体を網羅する追跡可能な記録を生成します。',
      'data-cta':             'Data Bankを見る →',
      'data-types-label':     'サポートデータタイプ',
      'data-standards-label': '規格・コンプライアンス',
      'data-tags':      ['ISO 14040/44', 'GHGプロトコル', 'ESRS', 'スコープ1–3', 'MRV', 'LCA'],
      'data-standards': ['ISO 14064', 'TCFD', 'LEED', 'BREEAM', 'J-Credit'],

      /* ── Final CTA ── */
      'cta-title': '追跡可能・監査対応の全ライフサイクル報告基盤を構築する。',
      'cta-desc':  'デモをご予約いただき、コンプライアンスプラットフォームがライフサイクルデータを報告と投資判断のためにどう統合するかご確認ください。',
      'cta-back':  '← インテリジェンスに戻る',
      'cta-demo':  'デモを申請する',
    },
  },

};
