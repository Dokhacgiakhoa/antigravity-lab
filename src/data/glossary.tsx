import { 
  BookOpen, Sparkles, ArrowRight, Search,
  Cpu, Layers, MessageSquare, Zap, Terminal, Globe, Shield, Activity,
  Briefcase, Scale, Cloud, Database, Server, Brain, Rocket, FileText, CheckCircle, Palette, ShieldCheck, User, Monitor,
  Link, Lock, Microscope, RefreshCw
} from "lucide-react";

export const TERMS_DATA = [
  {
    category: "Core Philosophy",
    categoryEn: "Core Philosophy",
    icon: <Brain className="h-4 w-4" />,
    items: [
      { id: "context-awareness", term: "Context Awareness", desc: "Không giống Chatbot vô tri, Agent có khả năng 'Nhập vai' nhờ đọc file cấu hình GEMINI.md và hiểu rõ vai trò, ngôn ngữ, và luật lệ của dự án.", descEn: "Unlike mindless chatbots, Agents can 'role-play' by reading GEMINI.md configuration files to clearly understand the project's roles, languages, and rules.", icon: <Brain /> },
      { id: "scale-adaptive", term: "Scale-Adaptive", desc: "Kiến trúc thích ứng theo quy mô dự án: Solo-Ninja (Cá nhân), Agile-Squad (Nhóm) và Software-Factory (Enterprise).", descEn: "Architecture that adapts to project scale: Solo-Ninja (Individual), Agile-Squad (Team), and Software-Factory (Enterprise).", icon: <Scale /> },
      { id: "scientific-linkage", term: "Scientific Linkage", desc: "Hệ thống liên kết nhất thể giữa DNA (.shared), Rules (Luật) và Skills (Kỹ năng) thông qua Metadata YAML.", descEn: "A unified linkage system between DNA (.shared), Rules, and Skills through YAML Metadata.", icon: <Layers /> },
      { id: "skill-injection", term: "Skill Injection", desc: "Cơ chế 'Nạp kỹ năng' tự động. Agent chỉ tải những kỹ năng cần thiết cho tác vụ hiện tại từ kho 600+ năng lực để tối ưu bộ nhớ.", descEn: "Automated 'Skill Loading' mechanism. Agents only load necessary skills from a library of 600+ capabilities for the current task to optimize memory.", icon: <Zap /> },
      { id: "pdca-cycle", term: "PDCA Cycle", desc: "Quy trình vận hành chuẩn: Plan (Lập kế hoạch) -> Do (Thực thi) -> Check (Kiểm tra) -> Act (Tối ưu hóa).", descEn: "Standard operational process: Plan -> Do -> Check -> Act.", icon: <Activity /> },
      { id: "multi-language", term: "Vỏ Việt - Lõi Anh", termEn: "VI Shell - EN Core", desc: "Triết lý giao tiếp: Tiếng Việt thân thiện cho người dùng, nhưng Logic và Code sử dụng Tiếng Anh để AI đạt hiệu suất cao nhất.", descEn: "Communication philosophy: Friendly Vietnamese for users, while Logic and Code use English for maximum AI performance.", icon: <Globe /> }
    ]
  },
  {
    category: "Workflows (Quy trình)",
    categoryEn: "Workflows",
    icon: <ArrowRight className="h-4 w-4" />,
    items: [
      { id: "audit", term: "/audit", desc: "Kiểm toán chất lượng toàn diện (Security, Performance, SEO) trước khi bàn giao sản phẩm.", descEn: "Comprehensive quality audit (Security, Performance, SEO) before product hand-over.", icon: <Shield /> },
      { id: "brainstorm", term: "/brainstorm", desc: "Khởi tạo ý tưởng. Dùng khi bí ý tưởng, cần AI gợi ý giải pháp hoặc kiến trúc hệ thống.", descEn: "Idea generation. Use when stuck, needing AI suggestions for solutions or system architecture.", icon: <Sparkles /> },
      { id: "create", term: "/create", desc: "Khởi tạo dự án hoặc module mới từ con số 0 (Frontend + Backend + DB).", descEn: "Initialize a new project or module from scratch (Frontend + Backend + DB).", icon: <Rocket /> },
      { id: "debug", term: "/debug", desc: "Gỡ lỗi thông minh. Agent phân tích log lỗi và tìm nguyên nhân gốc rễ (Root Cause).", descEn: "Intelligent debugging. Agents analyze error logs to find the Root Cause.", icon: <Terminal /> },
      { id: "deploy", term: "/deploy", desc: "Đóng gói và triển khai ứng dụng lên Server/Cloud (Vercel, VPS, Docker).", descEn: "Package and deploy applications to Server/Cloud (Vercel, VPS, Docker).", icon: <Activity /> },
      { id: "document", term: "/document", desc: "Tự động viết và cập nhật tài liệu (README, API Docs) từ mã nguồn hiện tại.", descEn: "Auto-generate and update documentation (README, API Docs) from the current source code.", icon: <FileText /> },
      { id: "enhance", term: "/enhance", desc: "Nâng cấp tính năng, sửa đổi UI hoặc tối ưu hóa code cũ.", descEn: "Upgrade features, modify UI, or optimize legacy code.", icon: <Zap /> },
      { id: "monitor", term: "/monitor", desc: "Cài đặt các công cụ giám sát, logging và theo dõi sức khỏe hệ thống.", descEn: "Install monitoring tools, logging, and health tracking for the system.", icon: <Activity /> },
      { id: "onboard", term: "/onboard", desc: "Tạo tài liệu hướng dẫn và hỗ trợ thành viên mới (Newbie) làm quen dự án.", descEn: "Create guides and support for new members to get acquainted with the project.", icon: <User /> },
      { id: "orchestrate", term: "/orchestrate", desc: "Điều phối đa Agent. Gọi 'Hội đồng chuyên gia' để giải quyết các bài toán phức tạp cần nhiều góc nhìn.", descEn: "Multi-Agent coordination. Call a 'Board of Experts' to solve complex problems requiring multiple perspectives.", icon: <Layers /> },
      { id: "plan", term: "/plan", desc: "Lập kế hoạch chi tiết. Phân tích yêu cầu và tạo ra file implementation_plan.md.", descEn: "Detailed planning. Analyze requirements and create an implementation_plan.md file.", icon: <BookOpen /> },
      { id: "preview", term: "/preview", desc: "Chạy thử ứng dụng để xem trước giao diện và chức năng.", descEn: "Run the application to preview its interface and functions.", icon: <Monitor /> },
      { id: "security", term: "/security", desc: "Quét lỗ hổng bảo mật chuyên sâu (Penetration Test) và đề xuất vá lỗi.", descEn: "Deep security vulnerability scanning (Penetration Test) and patch recommendations.", icon: <Shield /> },
      { id: "seo", term: "/seo", desc: "Tối ưu hóa công cụ tìm kiếm (SEO), tạo Meta tags, Sitemap chuẩn Google.", descEn: "Search Engine Optimization (SEO), generating Google-compliant Meta tags and Sitemaps.", icon: <Search /> },
      { id: "status", term: "/status", desc: "Xem Dashboard báo cáo tiến độ dự án và trạng thái các Agent.", descEn: "View the Dashboard reporting project progress and Agent statuses.", icon: <Activity /> },
      { id: "test", term: "/test", desc: "Viết và chạy các kịch bản kiểm thử (Unit Test, E2E Test).", descEn: "Write and run testing scenarios (Unit Test, E2E Test).", icon: <CheckCircle /> },
      { id: "ui-ux-pro-max", term: "/ui-ux-pro-max", desc: "Thiết kế giao diện đỉnh cao, áp dụng các xu hướng mới nhất (Linear, Magic UI).", descEn: "Premium interface design applying the latest trends (Linear, Magic UI).", icon: <Palette /> }
    ]
  },
  {
    category: "Rules (Vai trò)",
    categoryEn: "Roles",
    icon: <User className="h-4 w-4" />,
    items: [
      { id: "rule-orchestrator", term: "@orchestrator", desc: "Captain: Điều phối đa Agent, quản lý luồng chiến lược và phê duyệt kết quả cuối cùng.", descEn: "Captain: Coordinates multi-agents, manages strategic flow, and approves final results.", icon: <Cpu /> },
      { id: "rule-planner", term: "@project-planner", desc: "Architect: Phân tích yêu cầu, lập kế hoạch chi tiết và phác thảo MVP.", descEn: "Architect: Analyzes requirements, creates detailed plans, and outlines MVPs.", icon: <BookOpen /> },
      { id: "rule-inspector", term: "@quality-inspector", desc: "Gatekeeper: Kiểm tra code, xác thực logic và thực hiện các bài test chất lượng.", descEn: "Gatekeeper: Inspects code, validates logic, and executes quality tests.", icon: <CheckCircle /> },
      { id: "rule-security", term: "@security-auditor", desc: "Armor: Rà soát lỗ hổng bảo mật, thực hiện SAST/DAST và đảm bảo an toàn hệ thống.", descEn: "Armor: Reviews security vulnerabilities, performs SAST/DAST, and ensures system safety.", icon: <ShieldCheck /> },
      { id: "rule-frontend", term: "@frontend-specialist", desc: "Worker: Chuyên gia giao diện cao cấp, xây dựng component và tối ưu UX.", descEn: "Worker: Senior UI specialist, building components and optimizing UX.", icon: <Monitor /> },
      { id: "rule-backend", term: "@backend-specialist", desc: "Worker: Xử lý logic nghiệp vụ, thiết kế API và tối ưu hóa Database.", descEn: "Worker: Handles business logic, API design, and Database optimization.", icon: <Terminal /> },
      { id: "rule-devops", term: "@deployment-engineer", desc: "Worker: Quản lý CI/CD, hạ tầng Cloud, Docker và quy trình Rollout.", descEn: "Worker: Manages CI/CD, Cloud infrastructure, Docker, and Rollout processes.", icon: <Rocket /> },
      { id: "rule-seo", term: "@seo-expert", desc: "Worker: Tối ưu hóa GEO/SEO, đảm bảo chỉ số E-E-A-T và Core Web Vitals.", descEn: "Worker: Optimizes GEO/SEO, ensures E-E-A-T scores and Core Web Vitals.", icon: <Search /> }
    ]
  },
  {
    category: "Master Skills",
    categoryEn: "Master Skills",
    icon: <Zap className="h-4 w-4" />,
    items: [
      { id: "skill-ai-engineer", term: "ai-engineer", desc: "Phát triển ứng dụng AI, Chatbot, RAG và tích hợp LLM chuyên sâu.", descEn: "AI application development, Chatbot, RAG, and deep LLM integration.", icon: <Brain /> },
      { id: "skill-web-architect", term: "modern-web-architect", desc: "Kiến trúc Web hiện đại: React 19, Next.js 15 và High-Craft UI.", descEn: "Modern Web Architecture: React 19, Next.js 15, and High-Craft UI.", icon: <Globe /> },
      { id: "skill-ui-pro", term: "ui-ux-pro-max", desc: "Hệ thống thiết kế cao cấp với 50+ styles và 21 palettes màu.", descEn: "Premium design system with 50+ styles and 21 color palettes.", icon: <Palette /> },
      { id: "skill-security-audit", term: "security-auditor", desc: "Rà soát bảo mật toàn diện theo chuẩn OWASP 2025.", descEn: "Comprehensive security review according to OWASP 2025 standards.", icon: <ShieldCheck /> },
      { id: "skill-cloud-master", term: "cloud-architect-master", desc: "Quản trị hạ tầng Multi-Cloud (AWS, Azure, GCP) và Kubernetes.", descEn: "Multi-Cloud infrastructure management (AWS, Azure, GCP) and Kubernetes.", icon: <Cloud /> },
      { id: "skill-seo-expert", term: "seo-expert-kit", desc: "Tối ưu hóa tìm kiếm thế hệ mới (GEO/SEO) và content strategy.", descEn: "Next-gen search optimization (GEO/SEO) and content strategy.", icon: <Search /> },
      { id: "skill-cro-expert", term: "cro-expert-kit", desc: "Tối ưu tỷ lệ chuyển đổi, phễu đăng ký và trải nghiệm người dùng.", descEn: "Conversion rate optimization, signup funnels, and user experience.", icon: <Activity /> },
      { id: "skill-database-migration", term: "database-migration", desc: "Di cư dữ liệu Zero-Downtime và thiết kế 3NF chuẩn mực.", descEn: "Zero-Downtime data migration and standardized 3NF design.", icon: <Database /> },
      { id: "skill-tdd", term: "tdd-master-workflow", desc: "Phát triển hướng kiểm thử với kỷ luật Red-Green-Refactor.", descEn: "Test-Driven Development with strict Red-Green-Refactor discipline.", icon: <CheckCircle /> },
      { id: "skill-incident", term: "incident-responder", desc: "Ứng phó sự cố SRE, giám sát hệ thống và phục hồi nhanh.", descEn: "SRE incident response, system monitoring, and rapid recovery.", icon: <Zap /> }
    ]
  },
  {
    category: "Shared Modules",
    categoryEn: "Shared Modules",
    icon: <Layers className="h-4 w-4" />,
    items: [
      { id: "mod-ai-master", term: "ai-master", desc: "Thư viện chuẩn mực cho các tác vụ LLM & RAG.", descEn: "Standardized library for LLM & RAG tasks.", icon: <Brain /> },
      { id: "mod-api-standards", term: "api-standards", desc: "Quy chuẩn thiết kế OpenAPI 3.1 và REST/GraphQL.", descEn: "OpenAPI 3.1 and REST/GraphQL design standards.", icon: <Terminal /> },
      { id: "mod-design-system", term: "design-system", desc: "Hệ thống Token và Component UI/UX Pro Max.", descEn: "UI/UX Pro Max tokens and component system.", icon: <Palette /> },
      { id: "mod-security-armor", term: "security-armor", desc: "Giao thức bảo mật, mã hóa và kiểm soát truy cập.", descEn: "Security protocols, encryption, and access control.", icon: <ShieldCheck /> },
      { id: "mod-infra", term: "infra-blueprints", desc: "Mẫu kiến trúc hạ tầng Terraform/Docker chuẩn Enterprise.", descEn: "Enterprise-standard Terraform/Docker infrastructure blueprints.", icon: <Server /> },
      { id: "mod-vitals", term: "vitals-templates", desc: "Tiêu chuẩn hiệu năng và Core Web Vitals.", descEn: "Performance standards and Core Web Vitals.", icon: <Activity /> }
    ]
  },
  {
    category: "Advanced Tech",
    categoryEn: "Advanced Tech",
    icon: <Cpu className="h-4 w-4" />,
    items: [
      { id: "mcp", term: "MCP (Model Context Protocol)", desc: "Giao thức kết nối AI Agent với các nguồn dữ liệu bên ngoài (File system, DB, API) một cách an toàn và chuẩn hóa.", descEn: "A protocol connecting AI Agents with external data sources (File system, DB, API) securely and standardly.", icon: <Link /> },
      { id: "agentic-workflow", term: "Agentic Workflow", desc: "Quy trình làm việc tự trị của AI: Tự lập kế hoạch, tự gọi công cụ và tự kiểm tra kết quả.", descEn: "Autonomous AI workflows: self-planning, tool calling, and result checking.", icon: <RefreshCw /> },
      { id: "rag", term: "RAG (Retrieval-Augmented Generation)", desc: "Kỹ thuật giúp AI truy xuất thông tin từ tài liệu nội bộ trước khi phản hồi, đảm bảo độ chính xác 100%.", descEn: "A technique that helps AI extract information from internal documents before responding, ensuring 100% accuracy.", icon: <Database /> },
      { id: "geo", term: "GEO (AI Search Optimization)", desc: "Tối ưu hóa sự hiện diện của ứng dụng trên các bộ máy tìm kiếm thế hệ mới như Perplexity và ChatGPT.", descEn: "Optimizing app presence on next-gen search engines like Perplexity and ChatGPT.", icon: <Search /> },
      { id: "sast-dast", term: "SAST/DAST", desc: "Các phương pháp kiểm thử bảo mật tĩnh và động để phát hiện lỗ hổng ngay trong lúc code và khi chạy ứng dụng.", descEn: "Static and dynamic security testing methods to detect vulnerabilities during coding and runtime.", icon: <ShieldCheck /> }
    ]
  },
  {
    category: "System Mindset",
    categoryEn: "System Mindset",
    icon: <Sparkles className="h-4 w-4" />,
    items: [
      { id: "systems-thinking", term: "Systems Thinking", desc: "Tư duy hệ thống: Nhìn nhận dự án như một thực thể nhất thể, tránh các bản vá lỗi cục bộ gây hỏng hệ thống.", descEn: "Holistic project view as a unified entity, avoiding local patches that break the system.", icon: <Activity /> },
      { id: "regression-prevention", term: "Regression Prevention", desc: "Giao thức phòng ngừa lỗi hồi quy: Đảm bảo các tính năng mới không làm hỏng các logic đã ổn định trước đó.", descEn: "Protocol to ensure new features don't break previously stable logic.", icon: <Lock /> },
      { id: "grounding", term: "Grounding", desc: "Kỹ thuật 'neo đậu' câu trả lời của AI vào dữ liệu thực tế tại workspace, ngăn chặn sự mơ hồ hoặc ảo giác.", descEn: "Technique to 'anchor' AI responses to actual workspace data, preventing ambiguity or hallucinations.", icon: <Microscope /> }
    ]
  }
];
