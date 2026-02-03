/**
 * Antigravity Documentation Content
 * Thu thập từ .agent/ directory để sử dụng cho Frontend
 * Auto-generated based on actual .agent content
 */

// =============================================================================
// THỐNG KÊ HỆ THỐNG (Đếm thực tế từ file system)
// =============================================================================
export const systemStats = {
  skills: 51,      // Số thư mục trong .agent/skills
  agents: 23,      // Số file .md trong .agent/agents  
  workflows: 21,   // Số file .md trong .agent/workflows
  rules: 12,       // Số file trong .agent/rules
};

// =============================================================================
// DANH SÁCH AGENTS (23 Specialist Agents)
// =============================================================================
export const agentsList = [
  { id: "orchestrator", name: "Orchestrator", role: "Điều phối tổng", category: "command", icon: "🎯" },
  { id: "quality-inspector", name: "Quality Inspector", role: "Thanh tra chất lượng", category: "check", icon: "🔍" },
  { id: "project-planner", name: "Project Planner", role: "Lập kế hoạch dự án", category: "plan", icon: "📋" },
  { id: "product-manager", name: "Product Manager", role: "Quản lý sản phẩm", category: "plan", icon: "📊" },
  { id: "product-owner", name: "Product Owner", role: "Chủ sở hữu sản phẩm", category: "plan", icon: "👔" },
  { id: "frontend-specialist", name: "Frontend Specialist", role: "Chuyên gia giao diện", category: "do", icon: "🎨" },
  { id: "backend-specialist", name: "Backend Specialist", role: "Chuyên gia hệ thống", category: "do", icon: "⚙️" },
  { id: "database-architect", name: "Database Architect", role: "Kiến trúc sư CSDL", category: "do", icon: "🗄️" },
  { id: "cloud-architect", name: "Cloud Architect", role: "Kiến trúc sư Cloud", category: "do", icon: "☁️" },
  { id: "mobile-developer", name: "Mobile Developer", role: "Lập trình viên Mobile", category: "do", icon: "📱" },
  { id: "game-developer", name: "Game Developer", role: "Lập trình viên Game", category: "do", icon: "🎮" },
  { id: "security-auditor", name: "Security Auditor", role: "Kiểm toán bảo mật", category: "check", icon: "🛡️" },
  { id: "penetration-tester", name: "Penetration Tester", role: "Kiểm tra xâm nhập", category: "check", icon: "🔓" },
  { id: "test-engineer", name: "Test Engineer", role: "Kỹ sư kiểm thử", category: "check", icon: "🧪" },
  { id: "qa-automation-engineer", name: "QA Automation", role: "Tự động hóa QA", category: "check", icon: "🤖" },
  { id: "devops-engineer", name: "DevOps Engineer", role: "Kỹ sư DevOps", category: "act", icon: "🚀" },
  { id: "performance-optimizer", name: "Performance Optimizer", role: "Tối ưu hiệu suất", category: "act", icon: "⚡" },
  { id: "debugger", name: "Debugger", role: "Chuyên gia gỡ lỗi", category: "act", icon: "🔧" },
  { id: "documentation-writer", name: "Doc Writer", role: "Viết tài liệu", category: "plan", icon: "📝" },
  { id: "seo-specialist", name: "SEO Specialist", role: "Chuyên gia SEO", category: "plan", icon: "🔎" },
  { id: "codebase-expert", name: "Codebase Expert", role: "Chuyên gia mã nguồn", category: "do", icon: "💻" },
  { id: "code-archaeologist", name: "Code Archaeologist", role: "Khảo cổ mã nguồn", category: "do", icon: "🏛️" },
  { id: "explorer-agent", name: "Explorer Agent", role: "Khám phá dự án", category: "plan", icon: "🧭" },
];

// =============================================================================
// DANH SÁCH WORKFLOWS (21 Slash Commands)
// =============================================================================
export const workflowsList = [
  { 
    id: "plan", 
    command: "/plan", 
    name: "Lập kế hoạch", 
    desc: "Phân rã tác vụ và lập kế hoạch trước khi code",
    category: "planning"
  },
  { 
    id: "create", 
    command: "/create", 
    name: "Tạo tính năng", 
    desc: "Khởi tạo tính năng mới từ A-Z",
    category: "development"
  },
  { 
    id: "brainstorm", 
    command: "/brainstorm", 
    name: "Khám phá ý tưởng", 
    desc: "Thảo luận ý tưởng theo phương pháp Socratic",
    category: "planning"
  },
  { 
    id: "orchestrate", 
    command: "/orchestrate", 
    name: "Điều phối đa Agent", 
    desc: "Gọi hội đồng chuyên gia xử lý bài toán phức tạp",
    category: "advanced"
  },
  { 
    id: "debug", 
    command: "/debug", 
    name: "Gỡ lỗi có hệ thống", 
    desc: "Phân tích nguyên nhân và sửa lỗi bài bản",
    category: "maintenance"
  },
  { 
    id: "test", 
    command: "/test", 
    name: "Viết kiểm thử", 
    desc: "Tạo test case và chạy kiểm thử tự động",
    category: "quality"
  },
  { 
    id: "security", 
    command: "/security", 
    name: "Quét bảo mật", 
    desc: "Kiểm tra lỗ hổng và đề xuất vá lỗi",
    category: "quality"
  },
  { 
    id: "deploy", 
    command: "/deploy", 
    name: "Triển khai", 
    desc: "Đẩy code lên Server hoặc Vercel",
    category: "devops"
  },
  { 
    id: "preview", 
    command: "/preview", 
    name: "Xem trước", 
    desc: "Bật Preview để xem web chạy thế nào",
    category: "development"
  },
  { 
    id: "ui-ux-pro-max", 
    command: "/ui-ux-pro-max", 
    name: "Thiết kế Premium", 
    desc: "Giao diện đẹp kiểu Linear/Magic UI",
    category: "design"
  },
  { 
    id: "seo", 
    command: "/seo", 
    name: "Tối ưu SEO", 
    desc: "Cải thiện thứ hạng trên Google",
    category: "marketing"
  },
  { 
    id: "document", 
    command: "/document", 
    name: "Viết tài liệu", 
    desc: "Tự động tạo documentation cho code",
    category: "documentation"
  },
  { 
    id: "status", 
    command: "/status", 
    name: "Báo cáo tiến độ", 
    desc: "Xem Dashboard tổng quan dự án",
    category: "management"
  },
  { 
    id: "audit", 
    command: "/audit", 
    name: "Kiểm tra toàn diện", 
    desc: "Audit trước khi bàn giao khách hàng",
    category: "quality"
  },
  { 
    id: "enhance", 
    command: "/enhance", 
    name: "Cải tiến nhỏ", 
    desc: "Sửa màu, thêm nút, chỉnh logic nhỏ",
    category: "maintenance"
  },
  { 
    id: "monitor", 
    command: "/monitor", 
    name: "Giám sát", 
    desc: "Cài đặt hệ thống monitoring cho server",
    category: "devops"
  },
  { 
    id: "onboard", 
    command: "/onboard", 
    name: "Hướng dẫn người mới", 
    desc: "Onboarding tự động cho thành viên mới",
    category: "documentation"
  },
  { 
    id: "log-error", 
    command: "/log-error", 
    name: "Ghi log lỗi", 
    desc: "Lưu lỗi vào Error Log để học tập",
    category: "maintenance"
  },
  { 
    id: "update", 
    command: "/update", 
    name: "Cập nhật hệ thống", 
    desc: "Kiểm tra và cập nhật Antigravity IDE",
    category: "system"
  },
  { 
    id: "update-docs", 
    command: "/update-docs", 
    name: "Cập nhật tài liệu", 
    desc: "Đồng bộ docs khi có tính năng mới",
    category: "documentation"
  },
  { 
    id: "plan-auto-update-chat", 
    command: "/plan-auto-update-chat", 
    name: "Auto Update Chat", 
    desc: "Lên kế hoạch tính năng tự động cập nhật",
    category: "planning"
  },
];

// =============================================================================
// KHÁI NIỆM CỐT LÕI (CONCEPTS)
// =============================================================================
export const coreConcepts = [
  {
    id: "rule",
    icon: "📜",
    name: "Rule (Quy tắc)",
    nameEn: "Persona / Constitution",
    description: "Định nghĩa nhân dạng và tâm thế của Agent. Đây là \"Hiến pháp\" quy định Agent là ai, cách hành xử chuyên nghiệp và những giới hạn bảo mật/kỹ thuật không bao giờ được vượt qua.",
    example: "Luôn dùng Optional Chaining, không bao giờ xóa code cũ nếu không được yêu cầu."
  },
  {
    id: "skill",
    icon: "🧠",
    name: "Skill (Kỹ năng)",
    nameEn: "Knowledge Module",
    description: "Các module tri thức và chuyên môn mà Agent có thể \"trang bị\" thêm vào bộ não. Skill định nghĩa Agent am hiểu sâu về lĩnh vực nào để áp dụng vào thực tế.",
    example: "modern-web-architect (Chuyên gia web), security-auditor (Chuyên gia bảo mật)."
  },
  {
    id: "workflow",
    icon: "⚡",
    name: "Workflow (Quy trình)",
    nameEn: "Playbook / Script",
    description: "Kịch bản thực thi từng bước cho các tác vụ phức tạp hoặc có độ rủi ro cao. Workflow định nghĩa Agent phải làm bước 1, bước 2 như thế nào để đảm bảo chất lượng đầu ra.",
    example: "Luồng /debug bắt buộc phải tìm nguyên nhân và tạo test trước khi sửa code."
  },
];

// =============================================================================
// CHU TRÌNH PDCA
// =============================================================================
export const pdcaCycle = [
  {
    phase: "PLAN",
    name: "Lập kế hoạch",
    agent: "project-planner",
    description: "Định nghĩa MVP, PRD và lập bản kế hoạch thực thi.",
    color: "red"
  },
  {
    phase: "DO",
    name: "Thực hiện",
    agent: "Worker Agents",
    description: "Xây dựng tính năng theo đúng bản kế hoạch.",
    color: "yellow"
  },
  {
    phase: "CHECK",
    name: "Kiểm tra",
    agent: "quality-inspector",
    description: "Thanh tra độc lập, chạy test và đối soát tiêu chí thành công.",
    color: "green"
  },
  {
    phase: "ACT",
    name: "Điều chỉnh",
    agent: "orchestrator",
    description: "Tối ưu hóa dựa trên kết quả kiểm tra hoặc cho phép vận hành chính thức.",
    color: "cyan"
  },
];

// =============================================================================
// DANH MỤC SKILLS (Phân nhóm)
// =============================================================================
export const skillCategories = [
  {
    id: "web",
    name: "Web & Frontend",
    icon: "🌐",
    skills: [
      { name: "modern-web-architect", desc: "Kiến trúc Next.js/React hiện đại" },
      { name: "frontend-design", desc: "Mẫu thiết kế UI/UX và Design System" },
      { name: "tailwind-patterns", desc: "Tailwind CSS v4 principles" },
      { name: "nextjs-react-expert", desc: "React và Next.js optimization" },
    ]
  },
  {
    id: "backend",
    name: "Backend & API",
    icon: "⚙️",
    skills: [
      { name: "api-patterns", desc: "Chuẩn thiết kế REST, GraphQL, tRPC" },
      { name: "nodejs-best-practices", desc: "Node.js development principles" },
      { name: "python-patterns", desc: "Python development patterns" },
      { name: "database-design", desc: "Thiết kế Schema 3NF và tối ưu truy vấn" },
    ]
  },
  {
    id: "security",
    name: "Bảo mật",
    icon: "🛡️",
    skills: [
      { name: "security-auditor", desc: "Kiểm toán bảo mật theo chuẩn OWASP" },
      { name: "vulnerability-scanner", desc: "Phân tích lỗ hổng nâng cao" },
      { name: "penetration-tester-master", desc: "Offensive security master" },
      { name: "red-team-tactics", desc: "Red team tactics theo MITRE ATT&CK" },
    ]
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      { name: "deployment-engineer", desc: "CI/CD Pipelines, Docker, K8s" },
      { name: "cloud-architect-master", desc: "AWS/Azure/GCP architecture" },
      { name: "server-management", desc: "Server management principles" },
      { name: "incident-responder", desc: "SRE incident response" },
    ]
  },
  {
    id: "quality",
    name: "Chất lượng & Kiểm thử",
    icon: "🧪",
    skills: [
      { name: "tdd-master-workflow", desc: "Test-Driven Development cycle" },
      { name: "testing-patterns", desc: "Unit, integration, mocking strategies" },
      { name: "webapp-testing", desc: "E2E testing với Playwright" },
      { name: "production-code-audit", desc: "Nâng cấp code lên production-grade" },
    ]
  },
  {
    id: "design",
    name: "Thiết kế & UX",
    icon: "🎨",
    skills: [
      { name: "cro-expert-kit", desc: "Conversion Rate Optimization" },
      { name: "mobile-design", desc: "Mobile-first design thinking" },
      { name: "web-design-guidelines", desc: "Web Interface Guidelines" },
      { name: "i18n-localization", desc: "Đa ngôn ngữ và bản địa hóa" },
    ]
  },
];

// =============================================================================
// HƯỚNG DẪN BẮT ĐẦU
// =============================================================================
export const gettingStarted = {
  title: "Bắt đầu với Antigravity",
  subtitle: "Chào mừng bạn đến với không gian phát triển được hỗ trợ bởi AI!",
  steps: [
    {
      step: 1,
      title: "Xác minh AI đã kết nối",
      description: "Nếu bạn đang đọc nội dung này trong khung chat AI (Claude, Gemini), mọi thứ đã sẵn sàng!",
      action: null
    },
    {
      step: 2,
      title: "Kích hoạt hệ thống Agent",
      description: "Gõ lệnh sau vào khung chat AI để kích hoạt toàn bộ quy tắc và kỹ năng.",
      action: "Đọc .agent/rules/GEMINI.md và kích hoạt toàn bộ quy tắc cũng như kỹ năng."
    },
    {
      step: 3,
      title: "Thử nghiệm",
      description: "Hỏi AI một câu đơn giản để xác nhận hệ thống hoạt động đúng.",
      action: "Bạn có những kỹ năng gì?"
    },
  ],
  verification: [
    "\"Bạn có những kỹ năng gì?\" → AI phải liệt kê các danh mục kỹ năng.",
    "\"Tạo cho tôi một nút bấm\" → AI phải tự động chọn @frontend-specialist.",
    "\"Kiểm tra bảo mật cho code này\" → AI phải áp dụng @security-auditor.",
  ]
};

// =============================================================================
// CHẾ ĐỘ VẬN HÀNH (Scale-Adaptive)
// =============================================================================
export const operatingModes = [
  {
    id: "solo",
    name: "Solo-Ninja",
    badge: "Cá nhân",
    icon: "👤",
    description: "Tối ưu hóa tốc độ. Một Agent xử lý đa nhiệm (Fullstack).",
    features: [
      "Bỏ qua các bước Checkpoint rườm rà",
      "Ưu tiên ra kết quả nhanh",
      "Toàn quyền truy cập Skills và Workflows"
    ]
  },
  {
    id: "squad",
    name: "Agile-Squad",
    badge: "Team",
    icon: "👥",
    description: "Phân vai rõ ràng, ưu tiên tính nhất quán và cộng tác.",
    features: [
      "Bắt buộc có /plan tối giản",
      "Review chéo giữa Backend và Frontend",
      "Agent phải trỏ đúng dna_ref"
    ]
  },
  {
    id: "factory",
    name: "Software-Factory",
    badge: "Doanh nghiệp",
    icon: "🏢",
    description: "Chuẩn hóa, an toàn và có thể mở rộng.",
    features: [
      "Tuân thủ tuyệt đối 5 bước PDCA",
      "Bắt buộc security-auditor và test-engineer",
      "Chỉ đọc/viết file trong Domain được chỉ định"
  },
];

// =============================================================================
// SHARED MODULES (17 DNA Modules - Hạt nhân tri thức)
// =============================================================================
export const sharedModules = [
  {
    id: "ai-master",
    icon: "🧠",
    name: "AI Master",
    status: "Core Capability",
    description: "Module trí tuệ nhân tạo cốt lõi, cung cấp các mẫu prompt và cấu hình model chuẩn.",
    features: ["Prompt patterns", "Model configs (Gemini/GPT)", "Chain of Thought standards"]
  },
  {
    id: "api-standards",
    icon: "📡",
    name: "API Standards",
    status: "Interface Contract",
    description: "Định nghĩa luật giao tiếp API để đảm bảo sự đồng nhất giữa Frontend và Backend.",
    features: ["Endpoint naming conventions", "Response format", "Error codes"]
  },
  {
    id: "compliance",
    icon: "⚖️",
    name: "Compliance Master",
    status: "Regulatory Guard",
    description: "Quản lý các yêu cầu tuân thủ pháp lý và quy định (GDPR, HIPAA, SOC2).",
    features: ["GDPR audit checklist", "Privacy policy templates", "Data handling standards"]
  },
  {
    id: "database-master",
    icon: "🗄️",
    name: "Database Master",
    status: "Data Core",
    description: "Tập trung các mẫu thiết kế cơ sở dữ liệu, chuẩn schema và chiến lược migration.",
    features: ["Schema templates", "3NF normalization", "Index optimization"]
  },
  {
    id: "design-philosophy",
    icon: "💭",
    name: "Design Philosophy",
    status: "Creative Vision",
    description: "Triết lý và tuyên ngôn thiết kế định hướng mọi quyết định thẩm mỹ.",
    features: ["Design manifesto", "Aesthetic principles", "Creative guidelines"]
  },
  {
    id: "design-system",
    icon: "🎨",
    name: "Design System",
    status: "Visual Language",
    description: "Hệ thống thiết kế: Màu sắc, Typography, Spacing và Component definitions.",
    features: ["Brand presets", "Color tokens", "Micro interactions"]
  },
  {
    id: "domain-blueprints",
    icon: "🏗️",
    name: "Domain Blueprints",
    status: "Vertical Architecture",
    description: "Kiến trúc tham chiếu cho các ngành cụ thể (Fintech, EdTech, E-commerce).",
    features: ["11 industry blueprints", "API patterns per domain", "Business rules"]
  },
  {
    id: "dx-toolkit",
    icon: "🔧",
    name: "DX Toolkit",
    status: "Developer Experience",
    description: "Bộ công cụ nâng cao trải nghiệm phát triển và tiêu chuẩn kỹ thuật.",
    features: ["Engineering standards", "Code style guides", "DX best practices"]
  },
  {
    id: "i18n-master",
    icon: "🌍",
    name: "I18n Master",
    status: "Internationalization",
    description: "Tiêu chuẩn đa ngôn ngữ và bản địa hóa ứng dụng.",
    features: ["Locale patterns", "RTL support", "Translation workflows"]
  },
  {
    id: "infra-blueprints",
    icon: "☁️",
    name: "Infra Blueprints",
    status: "Cloud Foundation",
    description: "Templates Infrastructure as Code (IaC) và thiết kế topology cloud.",
    features: ["AWS patterns", "GCP patterns", "Docker configs"]
  },
  {
    id: "metrics",
    icon: "📊",
    name: "Metrics",
    status: "Observability",
    description: "Giám sát và telemetry cho ứng dụng production.",
    features: ["Performance metrics", "Business KPIs", "Alerting rules"]
  },
  {
    id: "resilience-patterns",
    icon: "🔄",
    name: "Resilience Patterns",
    status: "Fault Tolerance",
    description: "Các mẫu chịu lỗi và khôi phục hệ thống.",
    features: ["Circuit breaker", "Retry policies", "Graceful degradation"]
  },
  {
    id: "security-armor",
    icon: "🛡️",
    name: "Security Armor",
    status: "Critical Defense",
    description: "Tiêu chuẩn bảo mật theo OWASP và best practices.",
    features: ["Vulnerability scanning", "Helmet configs", "Hardening guides"]
  },
  {
    id: "seo-master",
    icon: "🔎",
    name: "SEO Master",
    status: "Search Optimization",
    description: "Tối ưu hóa công cụ tìm kiếm và GEO (AI Search).",
    features: ["On-page SEO", "Technical SEO", "AI search optimization"]
  },
  {
    id: "testing-master",
    icon: "🧪",
    name: "Testing Master",
    status: "Quality Assurance",
    description: "Định nghĩa các giai đoạn kiểm thử và tiêu chí chấp nhận.",
    features: ["Test scenarios", "Pre-release checklists", "Go/No-Go gates"]
  },
  {
    id: "ui-ux-pro-max",
    icon: "💎",
    name: "UI/UX Pro Max",
    status: "Premium Design",
    description: "Công cụ tạo design system nâng cao và lý luận thẩm mỹ.",
    features: ["Design generator", "50+ style presets", "21 color palettes"]
  },
  {
    id: "vitals-templates",
    icon: "📋",
    name: "Vitals Templates",
    status: "Documentation",
    description: "Templates cho tài liệu quan trọng: PRD, Audit Report, Plan.",
    features: ["PRD templates", "Audit reports", "Plan documents"]
  },
];

// =============================================================================
// RULES (12 Global Rules - Quy tắc toàn cục)
// =============================================================================
export const rulesList = [
  {
    id: "GEMINI",
    name: "GEMINI Core",
    type: "always-on",
    icon: "🤖",
    description: "Bộ quy tắc chủ chốt định nghĩa nhân dạng và hành vi Agent. Luôn được kích hoạt.",
  },
  {
    id: "security",
    name: "Security Guardrails",
    type: "always-on",
    icon: "🔒",
    description: "Quy tắc bảo mật: Không hardcode secrets, không xóa database, sanitize inputs.",
  },
  {
    id: "malware-protection",
    name: "Malware Protection",
    type: "always-on",
    icon: "🦠",
    description: "Chống mã độc: Kiểm tra URL, audit dependencies, quét link độc hại.",
  },
  {
    id: "error-logging",
    name: "Error Logging",
    type: "always-on",
    icon: "📝",
    description: "Tự động ghi lỗi vào ERRORS.md để học hỏi và cải thiện.",
  },
  {
    id: "docs-update",
    name: "Docs Update Protocol",
    type: "always-on",
    icon: "📚",
    description: "Đảm bảo tài liệu luôn đồng bộ với code thực tế.",
  },
  {
    id: "debug",
    name: "Debug Mode",
    type: "on-demand",
    icon: "🔧",
    description: "Kích hoạt khi cần phân tích lỗi, gỡ bug, hoặc troubleshoot.",
  },
  {
    id: "frontend",
    name: "Frontend Standards",
    type: "on-demand",
    icon: "🎨",
    description: "Chuẩn code Frontend: React patterns, component structure, styling.",
  },
  {
    id: "backend",
    name: "Backend Standards",
    type: "on-demand",
    icon: "⚙️",
    description: "Chuẩn code Backend: API design, database patterns, authentication.",
  },
  {
    id: "business",
    name: "Business Logic",
    type: "on-demand",
    icon: "💼",
    description: "Quy tắc nghiệp vụ và logic kinh doanh cho các dự án cụ thể.",
  },
  {
    id: "compliance",
    name: "Compliance Rules",
    type: "on-demand",
    icon: "⚖️",
    description: "Tuân thủ pháp lý: GDPR, HIPAA, và các quy định ngành.",
  },
  {
    id: "architecture-review",
    name: "Architecture Review",
    type: "on-demand",
    icon: "🏛️",
    description: "Đánh giá và review kiến trúc hệ thống trước khi implement.",
  },
  {
    id: "system-update",
    name: "System Update",
    type: "on-demand",
    icon: "🔄",
    description: "Kích hoạt khi người dùng hỏi về cập nhật Antigravity IDE.",
  },
];

// =============================================================================
// DOMAIN BLUEPRINTS (11 Kiến trúc theo ngành)
// =============================================================================
export const domainBlueprints = [
  { id: "fintech", name: "Fintech & Banking", icon: "🏦", desc: "Tài chính, Ví điện tử, Ngân hàng số" },
  { id: "edtech", name: "EdTech", icon: "🎓", desc: "Giáo dục trực tuyến, LMS, E-learning" },
  { id: "retail_ecommerce", name: "Retail & E-commerce", icon: "🛒", desc: "Thương mại điện tử, Bán lẻ" },
  { id: "healthcare", name: "Healthcare", icon: "🏥", desc: "Y tế, Sức khỏe, Telemedicine" },
  { id: "fnb_restaurant", name: "F&B Restaurant", icon: "🍽️", desc: "Nhà hàng, Đồ ăn & Đồ uống" },
  { id: "hospitality_tourism", name: "Hospitality & Tourism", icon: "🏨", desc: "Khách sạn, Du lịch" },
  { id: "logistics", name: "Logistics", icon: "🚚", desc: "Vận chuyển, Kho vận" },
  { id: "real_estate", name: "Real Estate", icon: "🏠", desc: "Bất động sản" },
  { id: "marketing_automation", name: "Marketing Automation", icon: "📣", desc: "Tự động hóa Marketing" },
  { id: "personal_branding", name: "Personal Branding", icon: "👤", desc: "Thương hiệu cá nhân" },
  { id: "freelance_marketplace", name: "Freelance Marketplace", icon: "💼", desc: "Sàn Freelance" },
];
