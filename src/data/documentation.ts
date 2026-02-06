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
  { id: "orchestrator", name: "Orchestrator", role: "Điều phối tổng", roleEn: "Chief Orchestrator", category: "command", icon: "🎯" },
  { id: "quality-inspector", name: "Quality Inspector", role: "Thanh tra chất lượng", roleEn: "Quality Inspector", category: "check", icon: "🔍" },
  { id: "project-planner", name: "Project Planner", role: "Lập kế hoạch dự án", roleEn: "Project Planner", category: "plan", icon: "📋" },
  { id: "product-manager", name: "Product Manager", role: "Quản lý sản phẩm", roleEn: "Product Manager", category: "plan", icon: "📊" },
  { id: "product-owner", name: "Product Owner", role: "Chủ sở hữu sản phẩm", roleEn: "Product Owner", category: "plan", icon: "👔" },
  { id: "frontend-specialist", name: "Frontend Specialist", role: "Chuyên gia giao diện", roleEn: "Frontend Specialist", category: "do", icon: "🎨" },
  { id: "backend-specialist", name: "Backend Specialist", role: "Chuyên gia hệ thống", roleEn: "Backend Specialist", category: "do", icon: "⚙️" },
  { id: "database-architect", name: "Database Architect", role: "Kiến trúc sư CSDL", roleEn: "Database Architect", category: "do", icon: "🗄️" },
  { id: "cloud-architect", name: "Cloud Architect", role: "Kiến trúc sư Cloud", roleEn: "Cloud Architect", category: "do", icon: "☁️" },
  { id: "mobile-developer", name: "Mobile Developer", role: "Lập trình viên Mobile", roleEn: "Mobile Developer", category: "do", icon: "📱" },
  { id: "game-developer", name: "Game Developer", role: "Lập trình viên Game", roleEn: "Game Developer", category: "do", icon: "🎮" },
  { id: "security-auditor", name: "Security Auditor", role: "Kiểm toán bảo mật", roleEn: "Security Auditor", category: "check", icon: "🛡️" },
  { id: "penetration-tester", name: "Penetration Tester", role: "Kiểm tra xâm nhập", roleEn: "Penetration Tester", category: "check", icon: "🔓" },
  { id: "test-engineer", name: "Test Engineer", role: "Kỹ sư kiểm thử", roleEn: "Test Engineer", category: "check", icon: "🧪" },
  { id: "qa-automation-engineer", name: "QA Automation", role: "Tự động hóa QA", roleEn: "QA Automation Engineer", category: "check", icon: "🤖" },
  { id: "devops-engineer", name: "DevOps Engineer", role: "Kỹ sư DevOps", roleEn: "DevOps Engineer", category: "act", icon: "🚀" },
  { id: "performance-optimizer", name: "Performance Optimizer", role: "Tối ưu hiệu suất", roleEn: "Performance Optimizer", category: "act", icon: "⚡" },
  { id: "debugger", name: "Debugger", role: "Chuyên gia gỡ lỗi", roleEn: "Debugging Expert", category: "act", icon: "🔧" },
  { id: "documentation-writer", name: "Doc Writer", role: "Viết tài liệu", roleEn: "Documentation Writer", category: "plan", icon: "📝" },
  { id: "seo-specialist", name: "SEO Specialist", role: "Chuyên gia SEO", roleEn: "SEO Specialist", category: "plan", icon: "🔎" },
  { id: "codebase-expert", name: "Codebase Expert", role: "Chuyên gia mã nguồn", roleEn: "Codebase Expert", category: "do", icon: "💻" },
  { id: "code-archaeologist", name: "Code Archaeologist", role: "Khảo cổ mã nguồn", roleEn: "Code Archaeologist", category: "do", icon: "🏛️" },
  { id: "explorer-agent", name: "Explorer Agent", role: "Khám phá dự án", roleEn: "Explorer Agent", category: "plan", icon: "🧭" },
];

// =============================================================================
// DANH SÁCH WORKFLOWS (21 Slash Commands)
// =============================================================================
export const workflowsList = [
  { 
    id: "plan", 
    command: "/plan", 
    name: "Lập kế hoạch", 
    nameEn: "Planning",
    desc: "Phân rã tác vụ và lập bản kế hoạch thực thi chi tiết (Project Alignment)",
    descEn: "Task decomposition and detailed execution planning (Project Alignment)",
    category: "planning"
  },
  { 
    id: "create", 
    command: "/create", 
    name: "Tạo tính năng", 
    nameEn: "Create Feature",
    desc: "Khởi tạo Foundation và phát triển tính năng mới chuẩn kỹ thuật từ A-Z",
    descEn: "Initialize Foundation and build new features from A-Z with technical standards",
    category: "development"
  },
  { 
    id: "brainstorm", 
    command: "/brainstorm", 
    name: "Khám phá ý tưởng", 
    nameEn: "Brainstorming",
    desc: "Thảo luận ý tưởng, nghiên cứu giải pháp và đặt câu hỏi Socratic",
    descEn: "Discuss ideas, research solutions, and ask Socratic questions",
    category: "planning"
  },
  { 
    id: "orchestrate", 
    command: "/orchestrate", 
    name: "Điều phối đa Agent", 
    nameEn: "Orchestration",
    desc: "Triệu hồi hội đồng 15+ chuyên gia cùng xử lý bài toán logic phức tạp",
    descEn: "Summon council of 15+ experts to solve complex logic problems",
    category: "advanced"
  },
  { 
    id: "debug", 
    command: "/debug", 
    name: "Gỡ lỗi chuyên sâu", 
    nameEn: "Deep Debugging",
    desc: "Phân tích Root Cause bằng phương pháp 4 pha và gỡ lỗi có hệ thống",
    descEn: "Root Cause Analysis with 4-phase systematic debugging",
    category: "maintenance"
  },
  { 
    id: "test", 
    command: "/test", 
    name: "Kiểm thử tự động", 
    nameEn: "Auto Testing",
    desc: "Xây dựng Unit Test, Integration Test và đảm bảo coverage an toàn",
    descEn: "Build Unit Tests, Integration Tests, and ensure safe coverage",
    category: "quality"
  },
  { 
    id: "security", 
    command: "/security", 
    name: "Audit Bảo mật", 
    nameEn: "Security Audit",
    desc: "Rà soát lỗ hổng OWASP, kiểm định Secret leak và đề xuất Armor config",
    descEn: "Scan for OWASP vulnerabilities, secret leaks, and propose Armor config",
    category: "quality"
  },
  { 
    id: "deploy", 
    command: "/deploy", 
    name: "Triển khai CI/CD", 
    nameEn: "CI/CD Deployment",
    desc: "Tự động hóa quy trình đẩy code lên Production/Staging an toàn",
    descEn: "Automate safe code deployment to Production/Staging",
    category: "devops"
  },
  { 
    id: "preview", 
    command: "/preview", 
    name: "Bật Preview", 
    nameEn: "Launch Preview",
    desc: "Khởi chạy môi trường demo để kiểm tra giao diện và luồng nghiệp vụ",
    descEn: "Launch demo environment to check UI and business flows",
    category: "development"
  },
  { 
    id: "ui-ux-pro-max", 
    command: "/ui-ux-pro-max", 
    name: "Thiết kế Premium", 
    nameEn: "Premium Design",
    desc: "Tạo giao diện Craftsmanship với hiệu ứng mượt và trải nghiệm người dùng cao cấp",
    descEn: "Create Craftsmanship UI with smooth effects and premium UX",
    category: "design"
  },
  { 
    id: "seo", 
    command: "/seo", 
    name: "Tối ưu SEO/GEO", 
    nameEn: "SEO/GEO Optimization",
    desc: "Tối ưu hóa nội dung cho Google và các công cụ tìm kiếm AI (AI Search)",
    descEn: "Optimize content for Google and AI Search Engines",
    category: "marketing"
  },
  { 
    id: "document", 
    command: "/document", 
    name: "Đồng bộ Tài liệu", 
    nameEn: "Sync Docs",
    desc: "Tự động trích xuất và cập nhật tài liệu kỹ thuật đồng bộ với mã nguồn",
    descEn: "Auto-extract and update technical docs synced with source code",
    category: "documentation"
  },
  { 
    id: "status", 
    command: "/status", 
    name: "Báo cáo tiến độ", 
    nameEn: "Status Report",
    desc: "Xem Dashboard tổng quan dự án",
    descEn: "View project overview dashboard",
    category: "management"
  },
  { 
    id: "audit", 
    command: "/audit", 
    name: "Kiểm tra toàn diện", 
    nameEn: "Full Audit",
    desc: "Audit trước khi bàn giao khách hàng",
    descEn: "Comprehensive audit before client handover",
    category: "quality"
  },
  { 
    id: "enhance", 
    command: "/enhance", 
    name: "Cải tiến nhỏ", 
    nameEn: "Enhance",
    desc: "Sửa màu, thêm nút, chỉnh logic nhỏ",
    descEn: "Fix colors, add buttons, tweak minor logic",
    category: "maintenance"
  },
  { 
    id: "monitor", 
    command: "/monitor", 
    name: "Giám sát", 
    nameEn: "Monitor",
    desc: "Cài đặt hệ thống monitoring cho server",
    descEn: "Setup monitoring system for server",
    category: "devops"
  },
  { 
    id: "onboard", 
    command: "/onboard", 
    name: "Hướng dẫn người mới", 
    nameEn: "Onboarding",
    desc: "Onboarding tự động cho thành viên mới",
    descEn: "Auto-onboarding for new members",
    category: "documentation"
  },
  { 
    id: "log-error", 
    command: "/log-error", 
    name: "Ghi log lỗi", 
    nameEn: "Log Error",
    desc: "Lưu lỗi vào Error Log để học tập",
    descEn: "Save error to Error Log for learning",
    category: "maintenance"
  },
  { 
    id: "update", 
    command: "/update", 
    name: "Cập nhật hệ thống", 
    nameEn: "System Update",
    desc: "Kiểm tra và cập nhật Antigravity IDE",
    descEn: "Check and update Antigravity IDE",
    category: "system"
  },
  { 
    id: "update-docs", 
    command: "/update-docs", 
    name: "Cập nhật tài liệu", 
    nameEn: "Update Docs",
    desc: "Đồng bộ docs khi có tính năng mới",
    descEn: "Sync docs when new features occupy",
    category: "documentation"
  },
  { 
    id: "plan-auto-update-chat", 
    command: "/plan-auto-update-chat", 
    name: "Auto Update Chat", 
    nameEn: "Auto Update Chat",
    desc: "Lên kế hoạch tính năng tự động cập nhật",
    descEn: "Plan auto-update feature",
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
    nameEn: "Plan",
    agent: "project-planner",
    description: "Định nghĩa MVP, PRD và lập bản kế hoạch thực thi.",
    descriptionEn: "Define MVP, PRD, and create execution plan.",
    color: "red"
  },
  {
    phase: "DO",
    name: "Thực hiện",
    nameEn: "Do",
    agent: "Worker Agents",
    description: "Xây dựng tính năng theo đúng bản kế hoạch.",
    descriptionEn: "Build features according to the plan.",
    color: "yellow"
  },
  {
    phase: "CHECK",
    name: "Kiểm tra",
    nameEn: "Check",
    agent: "quality-inspector",
    description: "Thanh tra độc lập, chạy test và đối soát tiêu chí thành công.",
    descriptionEn: "Independent inspection, run tests, and verify success criteria.",
    color: "green"
  },
  {
    phase: "ACT",
    name: "Điều chỉnh",
    nameEn: "Act",
    agent: "orchestrator",
    description: "Tối ưu hóa dựa trên kết quả kiểm tra hoặc cho phép vận hành chính thức.",
    descriptionEn: "Optimize based on results or approve for production.",
    color: "cyan"
  },
];

// =============================================================================
// DANH MỤC SKILLS (51 Master Skills - Phân nhóm chuyên sâu)
// =============================================================================
export const skillCategories = [
  {
    id: "web",
    name: "Web & Frontend",
    nameEn: "Web & Frontend",
    icon: "🌐",
    skills: [
      { name: "modern-web-architect", desc: "Kiến trúc Next.js/React hiện đại", descEn: "Modern Next.js/React Architecture", features: ["App Router", "Server Components", "Hydration patterns"] },
      { name: "frontend-design", desc: "Mẫu thiết kế UI/UX và Design System", descEn: "UI/UX Patterns & Design Systems", features: ["Component architecture", "State management", "Motion design"] },
      { name: "tailwind-patterns", desc: "Tailwind CSS v4 principles", descEn: "Tailwind CSS v4 principles", features: ["Dynamic styling", "Container queries", "Modern color functions"] },
      { name: "nextjs-react-expert", desc: "React và Next.js optimization", descEn: "React & Next.js Optimization", features: ["Bundle reduction", "PPR (Partial Prerendering)", "Edge runtime"] },
      { name: "web-design-guidelines", desc: "Quy chuẩn thiết kế Web chuyên nghiệp", descEn: "Professional Web Design Guidelines", features: ["WCAG 2.1 Compliance", "Aesthetic ratio", "Typography scales"] },
      { name: "webapp-testing", desc: "E2E testing với Playwright & Cypress", descEn: "E2E testing with Playwright & Cypress", features: ["Visual regression", "CI/CD integration", "Mocking APIs"] },
      { name: "i18n-localization", desc: "Đa ngôn ngữ và bản địa hóa toàn cầu", descEn: "I18n & Global Localization", features: ["RTL Support", "Dynamic translations", "ISO standards"] },
    ]
  },
  {
    id: "backend",
    name: "Backend & API",
    nameEn: "Backend & API",
    icon: "⚙️",
    skills: [
      { name: "api-patterns", desc: "Chuẩn thiết kế REST, GraphQL, tRPC", descEn: "REST, GraphQL, tRPC Design Patterns", features: ["Versioning", "Pagination", "Rate limiting"] },
      { name: "api-documenter", desc: "Tài liệu hóa API chuyên nghiệp", descEn: "Professional API Documentation", features: ["OpenAPI 3.1", "Swagger integration", "SDK generation"] },
      { name: "nodejs-best-practices", desc: "Nguyên lý phát triển Node.js sạch", descEn: "Clean Node.js Development Principles", features: ["Event loop optimization", "Memory leak detection", "Dependency safety"] },
      { name: "python-patterns", desc: "Mẫu thiết kế Python hiện đại", descEn: "Modern Python Design Patterns", features: ["FastAPI standards", "Asynchronous patterns", "Type hinting"] },
      { name: "database-design", desc: "Thiết kế Schema 3NF và tối ưu hóa", descEn: "3NF Schema Design & Optimization", features: ["Indexing strategy", "Normalization", "Query profiling"] },
      { name: "database-migration", desc: "Quản lý di cư dữ liệu không gián đoạn", descEn: "Zero-downtime Data Migration", features: ["Zero-downtime migrations", "Rollback strategies", "Seeding patterns"] },
    ]
  },
  {
    id: "security",
    name: "Bảo mật & Kiểm toán",
    nameEn: "Security & Audit",
    icon: "🛡️",
    skills: [
      { name: "security-auditor", desc: "Kiểm toán bảo mật theo chuẩn OWASP", descEn: "OWASP Security Auditing", features: ["SCA/SAST analysis", "Credential safety", "XSS/SQLi prevention"] },
      { name: "vulnerability-scanner", desc: "Phân tích lỗ hổng hệ thống nâng cao", descEn: "Advanced Vulnerability Analysis", features: ["Attack surface mapping", "CVE tracking", "Risk prioritization"] },
      { name: "penetration-tester-master", desc: "Chuyên gia thâm nhập hệ thống", descEn: "System Penetration Expert", features: ["Active reconnaissance", "Exploit chain", "Post-exploitation reporting"] },
      { name: "red-team-tactics", desc: "Chiến thuật Red Team (MITRE ATT&CK)", descEn: "Red Team Tactics (MITRE)", features: ["Lateral movement", "Persistence mechanisms", "Evasion techniques"] },
      { name: "production-code-audit", desc: "Audit code lên tiêu chuẩn production", descEn: "Production-grade Code Audit", features: ["Scalability review", "Resource utilization", "Technical debt audit"] },
      { name: "code-review-checklist", desc: "Checklist review code chuẩn Enterprise", descEn: "Enterprise Code Review Checklist", features: ["Safety audit", "Pattern consistency", "Maintainability metrics"] },
    ]
  },
  {
    id: "devops",
    name: "Cloud & Hạ tầng",
    nameEn: "Cloud & Infrastructure",
    icon: "☁️",
    skills: [
      { name: "cloud-architect-master", desc: "Kiến trúc Multi-Cloud (AWS/GCP/Azure)", descEn: "Multi-Cloud Architecture", features: ["Hybrid-cloud design", "High availability", "DR implementation"] },
      { name: "deployment-engineer", desc: "Kỹ sư triển khai CI/CD Automation", descEn: "CI/CD Deployment Engineer", features: ["Github Actions", "Docker Orchestration", "GitOps manual"] },
      { name: "deployment-procedures", desc: "Quy trình triển khai sản xuất an toàn", descEn: "Safe Production Deployment", features: ["Blue-green deployment", "Canary releases", "Rollback protocols"] },
      { name: "server-management", desc: "Quản trị máy chủ và Linux tối ưu", descEn: "Server Mgmt & Linux Optimization", features: ["Kernel tuning", "Monitoring setup", "Hardening servers"] },
      { name: "incident-responder", desc: "Phản ứng và xử lý sự cố SRE", descEn: "SRE Incident Response", features: ["Root cause analysis", "Post-mortem reports", "On-call standard"] },
      { name: "performance-engineer", desc: "Kỹ sư tối ưu hóa hiệu năng hệ thống", descEn: "System Performance Engineer", features: ["Bottleneck identification", "Throughput scaling", "Latency reduction"] },
    ]
  },
  {
    id: "ai",
    name: "Trí tuệ nhân tạo (AI)",
    nameEn: "Artificial Intelligence (AI)",
    icon: "🧠",
    skills: [
      { name: "ai-engineer", desc: "Kỹ sư AI và LLM Engineering", descEn: "AI & LLM Engineering", features: ["RAG implementation", "Prompt chains", "Token optimization"] },
      { name: "intelligent-routing", desc: "Điều hướng Agent thông minh", descEn: "Intelligent Agent Routing", features: ["Intent recognition", "Agent orchestration", "Dynamic handoffs"] },
      { name: "parallel-agents", desc: "Phối hợp đa Agent song song", descEn: "Parallel Multi-Agent Coordination", features: ["Concurrency control", "State synchronization", "Conflict resolution"] },
      { name: "mcp-builder", desc: "Xây dựng Server Model Context Protocol", descEn: "MCP Server Builder", features: ["Tool definitions", "Resource mapping", "Context window tuning"] },
      { name: "brainstorming", desc: "Quy trình Socratic và Brainstorming", descEn: "Socratic Brainstorming Process", features: ["Clarifying questions", "First principles thinking", "Strategic planning"] },
      { name: "behavioral-modes", desc: "Định nghĩa chế độ hành vi AI", descEn: "AI Behavioral Modes", features: ["Implement mode", "Review mode", "Teaching mode"] },
    ]
  },
  {
    id: "architecture",
    name: "Kiến trúc phần mềm",
    nameEn: "Software Architecture",
    icon: "🏛️",
    skills: [
      { name: "architecture", desc: "Tư duy và quy trình thiết kế kiến trúc", descEn: "Architectural Design Thinking", features: ["ADR (Decision Records)", "Trade-off analysis", "Modular design"] },
      { name: "full-stack-scaffold", desc: "Khởi tạo khung dự án chuyên nghiệp", descEn: "Professional Project Scaffolding", features: ["Folder structures", "Boilerplate generation", "Env management"] },
      { name: "app-builder", desc: "Kỹ năng xây dựng App trọn gói (Orchestration)", descEn: "Full-stack App Builder", features: ["Cross-agent coordination", "Requirement mapping", "Feature sequencing"] },
      { name: "plan-writing", desc: "Kỹ năng lập kế hoạch kỹ thuật chi tiết", descEn: "Technical Plan Writing", features: ["Task decomposition", "Dependency mapping", "Estimation logic"] },
      { name: "clean-code", desc: "Quy chuẩn mã nguồn sạch và bảo trì", descEn: "Clean Code & Maintainability", features: ["SOLID principles", "Naming conventions", "DRY violations removal"] },
      { name: "systematic-debugging", desc: "Phương pháp gỡ lỗi hệ thống bài bản", descEn: "Systematic Debugging Methodology", features: ["Isolating issues", "Evidence gathering", "Pattern matching"] },
    ]
  },
  {
    id: "quality",
    name: "Chất lượng & Excellence",
    nameEn: "Quality & Excellence",
    icon: "🧪",
    skills: [
      { name: "tdd-master-workflow", desc: "Chu kỳ TDD (Red-Green-Refactor) nâng cao", descEn: "Advanced TDD Workflow", features: ["Test coverage", "Behavioral tests", "Edge case coverage"] },
      { name: "tdd-workflow", desc: "Quy trình Test-Driven Development cơ bản", descEn: "Basic TDD Workflow", features: ["Unit tests", "Assertions", "Test suites"] },
      { name: "testing-patterns", desc: "Mẫu kiểm thử nâng cao (Mocking/STUB)", descEn: "Advanced Testing Patterns", features: ["Contract testing", "Integration patterns", "Dependency injection"] },
      { name: "lint-and-validate", desc: "Kiểm tra và chuẩn hóa mã nguồn tự động", descEn: "Auto Lint & Validation", features: ["Static analysis", "Type checking", "Style enforcement"] },
      { name: "documentation-templates", desc: "Hệ thống templates tài liệu chuyên nghiệp", descEn: "Professional Docs Templates", features: ["Technical specs", "PRD templates", "User manuals"] },
      { name: "performance-profiling", desc: "Phân tích và đo lường hiệu năng", descEn: "Performance Profiling", features: ["Flamegraphs", "Profiling tools", "Benchmarking"] },
    ]
  },
  {
    id: "growth",
    name: "Tăng trưởng & Giải pháp",
    nameEn: "Growth & Solutions",
    icon: "📈",
    skills: [
      { name: "seo-expert-kit", desc: "Bộ công cụ tối ưu hóa SEO chuyên sâu", descEn: "Advanced SEO Toolkit", features: ["Technical SEO", "Semantic HTML", "Schema.org markup"] },
      { name: "seo-fundamentals", desc: "Nền tảng về thuật toán Google & AI Search", descEn: "Google & AI Search Fundamentals", features: ["E-E-A-T principles", "Core Web Vitals", "Indexing lifecycle"] },
      { name: "geo-fundamentals", desc: "Generative Engine Optimization (AI Search)", descEn: "GEO (AI Search Optimization)", features: ["Perplexity optimization", "Reference building", "Brand authority"] },
      { name: "cro-expert-kit", desc: "Tối ưu hóa tỷ lệ chuyển đổi (CRO)", descEn: "CRO Expert Kit", features: ["Landing page psychology", "Friction reduction", "Form optimization"] },
      { name: "game-development", desc: "Phát triển Game và logic tương tác mạnh", descEn: "Game Development", features: ["Game loops", "Asset management", "Level design"] },
      { name: "mobile-design", desc: "Tư duy thiết kế ứng dụng di động ưu tiên", descEn: "Mobile-First Design Thinking", features: ["Touch ergonomics", "Offline capability", "Mobile UI patterns"] },
    ]
  },
  {
    id: "shells",
    name: "Shell & Automation",
    nameEn: "Shell & Automation",
    icon: "🐚",
    skills: [
      { name: "bash-linux", desc: "Bash/Linux Shell Scripting chuyên nghiệp", descEn: "Pro Bash/Linux Scripting", features: ["Grepping patterns", "Stream editing", "Automated scripts"] },
      { name: "powershell-windows", desc: "Windows PowerShell và Automation", descEn: "Windows PowerShell Automation", features: ["CMDlets", "Registry management", "Windows workflows"] },
    ]
  }
];

// =============================================================================
// HƯỚNG DẪN BẮT ĐẦU
// =============================================================================
export const gettingStarted = {
  title: "Bắt đầu với Antigravity",
  titleEn: "Getting Started with Antigravity",
  subtitle: "Chào mừng bạn đến với không gian phát triển được hỗ trợ bởi AI!",
  subtitleEn: "Welcome to your AI-powered development space!",
  steps: [
    {
      step: 1,
      title: "Xác minh AI đã kết nối",
      titleEn: "Verify AI Connection",
      description: "Nếu bạn đang đọc nội dung này trong khung chat AI (Claude, Gemini), mọi thứ đã sẵn sàng!",
      descriptionEn: "If you are reading this in the AI chat (Claude, Gemini), you are ready!",
      action: null
    },
    {
      step: 2,
      title: "Kích hoạt hệ thống Agent",
      titleEn: "Activate Agent System",
      description: "Gõ lệnh sau vào khung chat AI để kích hoạt toàn bộ quy tắc và kỹ năng.",
      descriptionEn: "Type the following command to activate all rules and skills.",
      action: "Đọc .agent/rules/GEMINI.md và kích hoạt toàn bộ quy tắc cũng như kỹ năng.",
      actionEn: "Read .agent/rules/GEMINI.md and activate all rules and skills."
    },
    {
      step: 3,
      title: "Thử nghiệm",
      titleEn: "Try it out",
      description: "Hỏi AI một câu đơn giản để xác nhận hệ thống hoạt động đúng.",
      descriptionEn: "Ask a simple question to verify the system.",
      action: "Bạn có những kỹ năng gì?",
      actionEn: "What skills do you have?"
    },
  ],
  verification: [
    "\"Bạn có những kỹ năng gì?\" → AI phải liệt kê các danh mục kỹ năng.",
    "\"Tạo cho tôi một nút bấm\" → AI phải tự động chọn @frontend-specialist.",
    "\"Kiểm tra bảo mật cho code này\" → AI phải áp dụng @security-auditor.",
  ],
  verificationEn: [
    "\"What skills do you have?\" → AI must list skill categories.",
    "\"Create a button for me\" → AI must auto-select @frontend-specialist.",
    "\"Check security for this code\" → AI must apply @security-auditor.",
  ]
};

// ... (skip operatingModes)

// =============================================================================
// OPERATING MODES
// =============================================================================
export const operatingModes = [
  { id: "solo", icon: "👤", color: "sky", features: ["Skip Checkpoints", "Fast Results", "Full Access"] },
  { id: "squad", icon: "👥", color: "amber", features: ["Minimal /plan", "Cross Review", "Direct Handoff"] },
  { id: "factory", icon: "🏢", color: "rose", features: ["Strict PDCA", "Mandatory Audit", "Domain Limits"] }
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
    descriptionEn: "Core AI module, providing prompt templates and standard model configs.",
    features: ["Prompt patterns", "Model configs (Gemini/GPT)", "Chain of Thought standards"]
  },
  {
    id: "api-standards",
    icon: "📡",
    name: "API Standards",
    status: "Interface Contract",
    description: "Định nghĩa luật giao tiếp API để đảm bảo sự đồng nhất giữa Frontend và Backend.",
    descriptionEn: "Defines API communication rules to ensure consistency between Frontend and Backend.",
    features: ["Endpoint naming conventions", "Response format", "Error codes"]
  },
  {
    id: "compliance",
    icon: "⚖️",
    name: "Compliance Master",
    status: "Regulatory Guard",
    description: "Quản lý các yêu cầu tuân thủ pháp lý và quy định (GDPR, HIPAA, SOC2).",
    descriptionEn: "Manages legal and regulatory compliance requirements (GDPR, HIPAA, SOC2).",
    features: ["GDPR audit checklist", "Privacy policy templates", "Data handling standards"]
  },
  {
    id: "database-master",
    icon: "🗄️",
    name: "Database Master",
    status: "Data Core",
    description: "Tập trung các mẫu thiết kế cơ sở dữ liệu, chuẩn schema và chiến lược migration.",
    descriptionEn: "Centralizes DB design patterns, schema standards, and migration strategies.",
    features: ["Schema templates", "3NF normalization", "Index optimization"]
  },
  {
    id: "design-philosophy",
    icon: "💭",
    name: "Design Philosophy",
    status: "Creative Vision",
    description: "Triết lý và tuyên ngôn thiết kế định hướng mọi quyết định thẩm mỹ.",
    descriptionEn: "Design philosophy and manifesto guiding all aesthetic decisions.",
    features: ["Design manifesto", "Aesthetic principles", "Creative guidelines"]
  },
  {
    id: "design-system",
    icon: "🎨",
    name: "Design System",
    status: "Visual Language",
    description: "Hệ thống thiết kế: Màu sắc, Typography, Spacing và Component definitions.",
    descriptionEn: "Design System: Colors, Typography, Spacing, and Component definitions.",
    features: ["Brand presets", "Color tokens", "Micro interactions"]
  },
  {
    id: "domain-blueprints",
    icon: "🏗️",
    name: "Domain Blueprints",
    status: "Vertical Architecture",
    description: "Kiến trúc tham chiếu cho các ngành cụ thể (Fintech, EdTech, E-commerce).",
    descriptionEn: "Reference architectures for specific industries (Fintech, EdTech, E-commerce).",
    features: ["11 industry blueprints", "API patterns per domain", "Business rules"]
  },
  {
    id: "dx-toolkit",
    icon: "🔧",
    name: "DX Toolkit",
    status: "Developer Experience",
    description: "Bộ công cụ nâng cao trải nghiệm phát triển và tiêu chuẩn kỹ thuật.",
    descriptionEn: "Toolkit for enhancing developer experience and engineering standards.",
    features: ["Engineering standards", "Code style guides", "DX best practices"]
  },
  {
    id: "i18n-master",
    icon: "🌍",
    name: "I18n Master",
    status: "Internationalization",
    description: "Tiêu chuẩn đa ngôn ngữ và bản địa hóa ứng dụng.",
    descriptionEn: "Internationalization and application localization standards.",
    features: ["Locale patterns", "RTL support", "Translation workflows"]
  },
  {
    id: "infra-blueprints",
    icon: "☁️",
    name: "Infra Blueprints",
    status: "Cloud Foundation",
    description: "Templates Infrastructure as Code (IaC) và thiết kế topology cloud.",
    descriptionEn: "Infrastructure as Code (IaC) templates and cloud topology designs.",
    features: ["AWS patterns", "GCP patterns", "Docker configs"]
  },
  {
    id: "metrics",
    icon: "📊",
    name: "Metrics",
    status: "Observability",
    description: "Giám sát và telemetry cho ứng dụng production.",
    descriptionEn: "Monitoring and telemetry for production applications.",
    features: ["Performance metrics", "Business KPIs", "Alerting rules"]
  },
  {
    id: "resilience-patterns",
    icon: "🔄",
    name: "Resilience Patterns",
    status: "Fault Tolerance",
    description: "Các mẫu chịu lỗi và khôi phục hệ thống.",
    descriptionEn: "Fault tolerance and system recovery patterns.",
    features: ["Circuit breaker", "Retry policies", "Graceful degradation"]
  },
  {
    id: "security-armor",
    icon: "🛡️",
    name: "Security Armor",
    status: "Critical Defense",
    description: "Tiêu chuẩn bảo mật theo OWASP và best practices.",
    descriptionEn: "Security standards based on OWASP and best practices.",
    features: ["Vulnerability scanning", "Helmet configs", "Hardening guides"]
  },
  {
    id: "seo-master",
    icon: "🔎",
    name: "SEO Master",
    status: "Search Optimization",
    description: "Tối ưu hóa công cụ tìm kiếm và GEO (AI Search).",
    descriptionEn: "Search Engine Optimization and GEO (AI Search).",
    features: ["On-page SEO", "Technical SEO", "AI search optimization"]
  },
  {
    id: "testing-master",
    icon: "🧪",
    name: "Testing Master",
    status: "Quality Assurance",
    description: "Định nghĩa các giai đoạn kiểm thử và tiêu chí chấp nhận.",
    descriptionEn: "Defines testing stages and acceptance criteria.",
    features: ["Test scenarios", "Pre-release checklists", "Go/No-Go gates"]
  },
  {
    id: "ui-ux-pro-max",
    icon: "💎",
    name: "UI/UX Pro Max",
    status: "Premium Design",
    description: "Công cụ tạo design system nâng cao và lý luận thẩm mỹ.",
    descriptionEn: "Advanced design system generator and aesthetic reasoning.",
    features: ["Design generator", "50+ style presets", "21 color palettes"]
  },
  {
    id: "vitals-templates",
    icon: "📋",
    name: "Vitals Templates",
    status: "Documentation",
    description: "Templates cho tài liệu quan trọng: PRD, Audit Report, Plan.",
    descriptionEn: "Templates for critical documents: PRD, Audit Report, Plan.",
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
    descriptionEn: "Core rules defining Agent identity and behavior. Always active.",
  },
  {
    id: "security",
    name: "Security Guardrails",
    type: "always-on",
    icon: "🔒",
    description: "Quy tắc bảo mật: Không hardcode secrets, không xóa database, sanitize inputs.",
    descriptionEn: "Security rules: No hardcoded secrets, no database deletion, sanitize inputs.",
  },
  {
    id: "malware-protection",
    name: "Malware Protection",
    type: "always-on",
    icon: "🦠",
    description: "Chống mã độc: Kiểm tra URL, audit dependencies, quét link độc hại.",
    descriptionEn: "Malware protection: Check URLs, audit dependencies, scan malicious links.",
  },
  {
    id: "error-logging",
    name: "Error Logging",
    type: "always-on",
    icon: "📝",
    description: "Tự động ghi lỗi vào ERRORS.md để học hỏi và cải thiện.",
    descriptionEn: "Auto-log errors to ERRORS.md for learning and improvement.",
  },
  {
    id: "docs-update",
    name: "Docs Update Protocol",
    type: "always-on",
    icon: "📚",
    description: "Đảm bảo tài liệu luôn đồng bộ với code thực tế.",
    descriptionEn: "Ensure documentation is always synced with actual code.",
  },
  {
    id: "debug",
    name: "Debug Mode",
    type: "on-demand",
    icon: "🔧",
    description: "Kích hoạt khi cần phân tích lỗi, gỡ bug, hoặc troubleshoot.",
    descriptionEn: "Activate when analyzing errors, debugging, or troubleshooting.",
  },
  {
    id: "frontend",
    name: "Frontend Standards",
    type: "on-demand",
    icon: "🎨",
    description: "Chuẩn code Frontend: React patterns, component structure, styling.",
    descriptionEn: "Frontend Standards: React patterns, component structure, styling.",
  },
  {
    id: "backend",
    name: "Backend Standards",
    type: "on-demand",
    icon: "⚙️",
    description: "Chuẩn code Backend: API design, database patterns, authentication.",
    descriptionEn: "Backend Standards: API design, database patterns, authentication.",
  },
  {
    id: "business",
    name: "Business Logic",
    type: "on-demand",
    icon: "💼",
    description: "Quy tắc nghiệp vụ và logic kinh doanh cho các dự án cụ thể.",
    descriptionEn: "Business logic and domain rules for specific projects.",
  },
  {
    id: "compliance",
    name: "Compliance Rules",
    type: "on-demand",
    icon: "⚖️",
    description: "Tuân thủ pháp lý: GDPR, HIPAA, và các quy định ngành.",
    descriptionEn: "Legal compliance: GDPR, HIPAA, and industry regulations.",
  },
  {
    id: "architecture-review",
    name: "Architecture Review",
    type: "on-demand",
    icon: "🏛️",
    description: "Đánh giá và review kiến trúc hệ thống trước khi implement.",
    descriptionEn: "Assess and review system architecture before implementation.",
  },
  {
    id: "system-update",
    name: "System Update",
    type: "on-demand",
    icon: "🔄",
    description: "Kích hoạt khi người dùng hỏi về cập nhật Antigravity IDE.",
    descriptionEn: "Activate when user asks about Antigravity IDE updates.",
  },
];

// =============================================================================
// DOMAIN BLUEPRINTS (11 Kiến trúc theo ngành)
// =============================================================================
export const domainBlueprints = [
  { id: "fintech", name: "Fintech & Banking", nameEn: "Fintech & Banking", icon: "🏦", desc: "Tài chính, Ví điện tử, Ngân hàng số", descEn: "Finance, E-wallets, Digital Banking" },
  { id: "edtech", name: "EdTech", nameEn: "EdTech", icon: "🎓", desc: "Giáo dục trực tuyến, LMS, E-learning", descEn: "Online Education, LMS, E-learning" },
  { id: "retail_ecommerce", name: "Retail & E-commerce", nameEn: "Retail & E-commerce", icon: "🛒", desc: "Thương mại điện tử, Bán lẻ", descEn: "E-commerce, Retail" },
  { id: "healthcare", name: "Healthcare", nameEn: "Healthcare", icon: "🏥", desc: "Y tế, Sức khỏe, Telemedicine", descEn: "Medical, Health, Telemedicine" },
  { id: "fnb_restaurant", name: "F&B Restaurant", nameEn: "F&B Restaurant", icon: "🍽️", desc: "Nhà hàng, Đồ ăn & Đồ uống", descEn: "Restaurant, Food & Beverage" },
  { id: "hospitality_tourism", name: "Hospitality & Tourism", nameEn: "Hospitality & Tourism", icon: "🏨", desc: "Khách sạn, Du lịch", descEn: "Hospitality, Tourism" },
  { id: "logistics", name: "Logistics", nameEn: "Logistics", icon: "🚚", desc: "Vận chuyển, Kho vận", descEn: "Shipping, Logistics" },
  { id: "real_estate", name: "Real Estate", nameEn: "Real Estate", icon: "🏠", desc: "Bất động sản", descEn: "Real Estate" },
  { id: "marketing_automation", name: "Marketing Automation", nameEn: "Marketing Automation", icon: "📣", desc: "Tự động hóa Marketing", descEn: "Marketing Automation" },
  { id: "personal_branding", name: "Personal Branding", nameEn: "Personal Branding", icon: "👤", desc: "Thương hiệu cá nhân", descEn: "Personal Brand" },
  { id: "freelance_marketplace", name: "Freelance Marketplace", nameEn: "Freelance Marketplace", icon: "💼", desc: "Sàn Freelance", descEn: "Freelance Marketplace" },
];
