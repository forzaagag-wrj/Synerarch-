/**
 * databank-config.js — SynerArch Data Bank 接入配置
 *
 * ═══════════════════════════════════════════════════════════
 *  技术同事接入说明（Technical Integration Guide）
 * ═══════════════════════════════════════════════════════════
 *
 *  当前状态：mode = "mock"
 *    前端完整走完所有 UI 流程，但不真实上传文件。
 *    提交后显示成功页面，不发送任何数据。
 *    适合：UI 测试、演示、前期验证。
 *
 *  接入真实上传：
 *    1. 将 mode 改为 "live"
 *    2. 填写 upload_endpoint（见下方说明）
 *    3. 填写 notify_endpoint（见下方说明）
 *    4. 前端无需任何其他改动
 *
 * ═══════════════════════════════════════════════════════════
 *  upload_endpoint 说明
 * ═══════════════════════════════════════════════════════════
 *
 *  前端会向此 endpoint 发送 POST 请求，body 为 FormData，包含：
 *    - file        : File 对象（每次一个文件）
 *    - category    : "bim" | "cad" | "project"
 *    - submitter_name   : 提交者姓名
 *    - submitter_email  : 提交者邮箱
 *    - submitter_company: 提交者公司
 *
 *  推荐实现方式（任选其一）：
 *    A. AWS S3 预签名 URL（Presigned URL）
 *       后端生成预签名 URL → 前端直传 S3 → 通知 SNS/SES
 *    B. Cloudflare R2 直传
 *       后端生成上传 token → 前端直传 R2 Worker
 *    C. Google Cloud Storage 签名 URL
 *       后端生成签名 URL → 前端直传 GCS
 *
 *  endpoint 需返回 JSON：
 *    成功: { "status": "ok", "file_id": "<id>" }
 *    失败: { "status": "error", "message": "<reason>" }
 *
 * ═══════════════════════════════════════════════════════════
 *  notify_endpoint 说明
 * ═══════════════════════════════════════════════════════════
 *
 *  所有文件上传完成后，前端向此 endpoint 发送 POST 请求，body 为 JSON：
 *    {
 *      "name":    "提交者姓名",
 *      "email":   "提交者邮箱",
 *      "company": "提交者公司",
 *      "files":   [{ "category": "bim", "file_id": "..." }, ...]
 *    }
 *
 *  推荐实现：Resend / SendGrid webhook → 内部邮件通知销售团队
 *
 * ═══════════════════════════════════════════════════════════
 */

const DATABANK_CONFIG = {

  // ── 模式切换 ──────────────────────────────────────────────
  // "mock" : 前端完整 UI，不真实上传（当前）
  // "live" : 真实上传到云存储
  mode: "mock",

  // ── 上传接口 ──────────────────────────────────────────────
  // 技术同事填入后端上传 endpoint（见上方说明）
  upload_endpoint: "",

  // ── 通知接口 ──────────────────────────────────────────────
  // 技术同事填入提交完成后的通知 endpoint（见上方说明）
  notify_endpoint: "",

  // ── 文件限制 ──────────────────────────────────────────────
  max_file_mb: 500,          // 单文件最大体积（MB）
  max_files_per_category: 10, // 每个分类最多文件数

  // ── 各分类允许的文件类型 ──────────────────────────────────
  allowed_types: {
    bim: {
      extensions: [".rvt", ".ifc", ".nwd", ".nwf", ".nwc", ".rfa", ".rte"],
      mime_types: ["application/octet-stream"],
      label_en: "BIM Files",
      label_jp: "BIMファイル",
      hint_en:  "Revit (.rvt), IFC (.ifc), Navisworks (.nwd), or other BIM formats",
      hint_jp:  "Revit (.rvt)、IFC (.ifc)、Navisworks (.nwd)、その他BIM形式",
    },
    cad: {
      extensions: [".dwg", ".dxf", ".skp", ".3dm", ".pdf"],
      mime_types: ["application/pdf", "application/octet-stream"],
      label_en: "CAD & Architectural Data",
      label_jp: "CAD・建築データ",
      hint_en:  "AutoCAD (.dwg/.dxf), SketchUp (.skp), Rhino (.3dm), or PDF drawings",
      hint_jp:  "AutoCAD (.dwg/.dxf)、SketchUp (.skp)、Rhino (.3dm)、またはPDF図面",
    },
    project: {
      extensions: [".xlsx", ".xls", ".csv", ".pdf", ".docx", ".doc", ".pptx", ".ppt", ".zip"],
      mime_types: [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
        "text/csv",
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/zip",
      ],
      label_en: "Project & Operations Data",
      label_jp: "プロジェクト・運用データ",
      hint_en:  "Schedules, energy reports, asset registers, cost data (.xlsx, .csv, .pdf, .docx)",
      hint_jp:  "スケジュール、エネルギーレポート、資産台帳、コストデータ (.xlsx, .csv, .pdf, .docx)",
    },
  },
};

// Export for module environments
if (typeof module !== "undefined") module.exports = DATABANK_CONFIG;
