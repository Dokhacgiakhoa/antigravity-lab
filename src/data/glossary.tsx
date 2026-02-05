import { 
  BookOpen, Sparkles, ArrowRight, Search,
  Cpu, Layers, MessageSquare, Zap, Terminal, Globe, Shield, Activity,
  Briefcase, Scale, Cloud, Database, Server, Brain, Rocket, FileText, CheckCircle, Palette, ShieldCheck, User, Monitor,
  Link, Lock, Microscope, RefreshCw
} from "lucide-react";

export const TERMS_DATA = [
  {
    category: "Core Philosophy",
    icon: <Brain className="h-4 w-4" />,
    items: [
      { id: "context-awareness", term: "Context Awareness", desc: "Không giống Chatbot vô tri, Agent có khả năng 'Nhập vai' nhờ đọc file cấu hình GEMINI.md và hiểu rõ vai trò, ngôn ngữ, và luật lệ của dự án.", icon: <Brain /> },
      { id: "scale-adaptive", term: "Scale-Adaptive", desc: "Kiến trúc thích ứng theo quy mô dự án: Solo-Ninja (Cá nhân), Agile-Squad (Nhóm) và Software-Factory (Enterprise).", icon: <Scale /> },
      { id: "scientific-linkage", term: "Scientific Linkage", desc: "Hệ thống liên kết nhất thể giữa DNA (.shared), Rules (Luật) và Skills (Kỹ năng) thông qua Metadata YAML.", icon: <Layers /> },
      { id: "skill-injection", term: "Skill Injection", desc: "Cơ chế 'Nạp kỹ năng' tự động. Agent chỉ tải những kỹ năng cần thiết cho tác vụ hiện tại từ kho 600+ năng lực để tối ưu bộ nhớ.", icon: <Zap /> },
      { id: "pdca-cycle", term: "PDCA Cycle", desc: "Quy trình vận hành chuẩn: Plan (Lập kế hoạch) -> Do (Thực thi) -> Check (Kiểm tra) -> Act (Tối ưu hóa).", icon: <Activity /> },
      { id: "multi-language", term: "Vỏ Việt - Lõi Anh", desc: "Triết lý giao tiếp: Tiếng Việt thân thiện cho người dùng, nhưng Logic và Code sử dụng Tiếng Anh để AI đạt hiệu suất cao nhất.", icon: <Globe /> }
    ]
  },
  {
    category: "Workflows (Quy trình)",
    icon: <ArrowRight className="h-4 w-4" />,
    items: [
      { id: "audit", term: "/audit", desc: "Kiểm toán chất lượng toàn diện (Security, Performance, SEO) trước khi bàn giao sản phẩm.", icon: <Shield /> },
      { id: "brainstorm", term: "/brainstorm", desc: "Khởi tạo ý tưởng. Dùng khi bí ý tưởng, cần AI gợi ý giải pháp hoặc kiến trúc hệ thống.", icon: <Sparkles /> },
      { id: "create", term: "/create", desc: "Khởi tạo dự án hoặc module mới từ con số 0 (Frontend + Backend + DB).", icon: <Rocket /> },
      { id: "debug", term: "/debug", desc: "Gỡ lỗi thông minh. Agent phân tích log lỗi và tìm nguyên nhân gốc rễ (Root Cause).", icon: <Terminal /> },
      { id: "deploy", term: "/deploy", desc: "Đóng gói và triển khai ứng dụng lên Server/Cloud (Vercel, VPS, Docker).", icon: <Activity /> },
      { id: "document", term: "/document", desc: "Tự động viết và cập nhật tài liệu (README, API Docs) từ mã nguồn hiện tại.", icon: <FileText /> },
      { id: "enhance", term: "/enhance", desc: "Nâng cấp tính năng, sửa đổi UI hoặc tối ưu hóa code cũ.", icon: <Zap /> },
      { id: "monitor", term: "/monitor", desc: "Cài đặt các công cụ giám sát, logging và theo dõi sức khỏe hệ thống.", icon: <Activity /> },
      { id: "onboard", term: "/onboard", desc: "Tạo tài liệu hướng dẫn và hỗ trợ thành viên mới (Newbie) làm quen dự án.", icon: <User /> },
      { id: "orchestrate", term: "/orchestrate", desc: "Điều phối đa Agent. Gọi 'Hội đồng chuyên gia' để giải quyết các bài toán phức tạp cần nhiều góc nhìn.", icon: <Layers /> },
      { id: "plan", term: "/plan", desc: "Lập kế hoạch chi tiết. Phân tích yêu cầu và tạo ra file implementation_plan.md.", icon: <BookOpen /> },
      { id: "preview", term: "/preview", desc: "Chạy thử ứng dụng để xem trước giao diện và chức năng.", icon: <Monitor /> },
      { id: "security", term: "/security", desc: "Quét lỗ hổng bảo mật chuyên sâu (Penetration Test) và đề xuất vá lỗi.", icon: <Shield /> },
      { id: "seo", term: "/seo", desc: "Tối ưu hóa công cụ tìm kiếm (SEO), tạo Meta tags, Sitemap chuẩn Google.", icon: <Search /> },
      { id: "status", term: "/status", desc: "Xem Dashboard báo cáo tiến độ dự án và trạng thái các Agent.", icon: <Activity /> },
      { id: "test", term: "/test", desc: "Viết và chạy các kịch bản kiểm thử (Unit Test, E2E Test).", icon: <CheckCircle /> },
      { id: "ui-ux-pro-max", term: "/ui-ux-pro-max", desc: "Thiết kế giao diện đỉnh cao, áp dụng các xu hướng mới nhất (Linear, Magic UI).", icon: <Palette /> }
    ]
  },
  {
    category: "Rules (Vai trò)",
    icon: <User className="h-4 w-4" />,
    items: [
      { id: "rule-orchestrator", term: "@orchestrator", desc: "Captain: Điều phối đa Agent, quản lý luồng chiến lược và phê duyệt kết quả cuối cùng.", icon: <Cpu /> },
      { id: "rule-planner", term: "@project-planner", desc: "Architect: Phân tích yêu cầu, lập kế hoạch chi tiết và phác thảo MVP.", icon: <BookOpen /> },
      { id: "rule-inspector", term: "@quality-inspector", desc: "Gatekeeper: Kiểm tra code, xác thực logic và thực hiện các bài test chất lượng.", icon: <CheckCircle /> },
      { id: "rule-security", term: "@security-auditor", desc: "Armor: Rà soát lỗ hổng bảo mật, thực hiện SAST/DAST và đảm bảo an toàn hệ thống.", icon: <ShieldCheck /> },
      { id: "rule-frontend", term: "@frontend-specialist", desc: "Worker: Chuyên gia giao diện cao cấp, xây dựng component và tối ưu UX.", icon: <Monitor /> },
      { id: "rule-backend", term: "@backend-specialist", desc: "Worker: Xử lý logic nghiệp vụ, thiết kế API và tối ưu hóa Database.", icon: <Terminal /> },
      { id: "rule-devops", term: "@deployment-engineer", desc: "Worker: Quản lý CI/CD, hạ tầng Cloud, Docker và quy trình Rollout.", icon: <Rocket /> },
      { id: "rule-seo", term: "@seo-expert", desc: "Worker: Tối ưu hóa GEO/SEO, đảm bảo chỉ số E-E-A-T và Core Web Vitals.", icon: <Search /> }
    ]
  },
  {
    category: "Master Skills",
    icon: <Zap className="h-4 w-4" />,
    items: [
      { id: "skill-ai-engineer", term: "ai-engineer", desc: "Phát triển ứng dụng AI, Chatbot, RAG và tích hợp LLM chuyên sâu.", icon: <Brain /> },
      { id: "skill-web-architect", term: "modern-web-architect", desc: "Kiến trúc Web hiện đại: React 19, Next.js 15 và High-Craft UI.", icon: <Globe /> },
      { id: "skill-ui-pro", term: "ui-ux-pro-max", desc: "Hệ thống thiết kế cao cấp với 50+ styles và 21 palettes màu.", icon: <Palette /> },
      { id: "skill-security-audit", term: "security-auditor", desc: "Rà soát bảo mật toàn diện theo chuẩn OWASP 2025.", icon: <ShieldCheck /> },
      { id: "skill-cloud-master", term: "cloud-architect-master", desc: "Quản trị hạ tầng Multi-Cloud (AWS, Azure, GCP) và Kubernetes.", icon: <Cloud /> },
      { id: "skill-seo-expert", term: "seo-expert-kit", desc: "Tối ưu hóa tìm kiếm thế hệ mới (GEO/SEO) và content strategy.", icon: <Search /> },
      { id: "skill-cro-expert", term: "cro-expert-kit", desc: "Tối ưu tỷ lệ chuyển đổi, phễu đăng ký và trải nghiệm người dùng.", icon: <Activity /> },
      { id: "skill-database-migration", term: "database-migration", desc: "Di cư dữ liệu Zero-Downtime và thiết kế 3NF chuẩn mực.", icon: <Database /> },
      { id: "skill-tdd", term: "tdd-master-workflow", desc: "Phát triển hướng kiểm thử với kỷ luật Red-Green-Refactor.", icon: <CheckCircle /> },
      { id: "skill-incident", term: "incident-responder", desc: "Ứng phó sự cố SRE, giám sát hệ thống và phục hồi nhanh.", icon: <Zap /> }
    ]
  },
  {
    category: "Shared Modules",
    icon: <Layers className="h-4 w-4" />,
    items: [
      { id: "mod-ai-master", term: "ai-master", desc: "Thư viện chuẩn mực cho các tác vụ LLM & RAG.", icon: <Brain /> },
      { id: "mod-api-standards", term: "api-standards", desc: "Quy chuẩn thiết kế OpenAPI 3.1 và REST/GraphQL.", icon: <Terminal /> },
      { id: "mod-design-system", term: "design-system", desc: "Hệ thống Token và Component UI/UX Pro Max.", icon: <Palette /> },
      { id: "mod-security-armor", term: "security-armor", desc: "Giao thức bảo mật, mã hóa và kiểm soát truy cập.", icon: <ShieldCheck /> },
      { id: "mod-infra", term: "infra-blueprints", desc: "Mẫu kiến trúc hạ tầng Terraform/Docker chuẩn Enterprise.", icon: <Server /> },
      { id: "mod-vitals", term: "vitals-templates", desc: "Tiêu chuẩn hiệu năng và Core Web Vitals.", icon: <Activity /> }
    ]
  },
  {
    category: "Advanced Tech",
    icon: <Cpu className="h-4 w-4" />,
    items: [
      { id: "mcp", term: "MCP (Model Context Protocol)", desc: "Giao thức kết nối AI Agent với các nguồn dữ liệu bên ngoài (File system, DB, API) một cách an toàn và chuẩn hóa.", icon: <Link /> },
      { id: "agentic-workflow", term: "Agentic Workflow", desc: "Quy trình làm việc tự trị của AI: Tự lập kế hoạch, tự gọi công cụ và tự kiểm tra kết quả.", icon: <RefreshCw /> },
      { id: "rag", term: "RAG (Retrieval-Augmented Generation)", desc: "Kỹ thuật giúp AI truy xuất thông tin từ tài liệu nội bộ trước khi phản hồi, đảm bảo độ chính xác 100%.", icon: <Database /> },
      { id: "geo", term: "GEO (AI Search Optimization)", desc: "Tối ưu hóa sự hiện diện của ứng dụng trên các bộ máy tìm kiếm thế hệ mới như Perplexity và ChatGPT.", icon: <Search /> },
      { id: "sast-dast", term: "SAST/DAST", desc: "Các phương pháp kiểm thử bảo mật tĩnh và động để phát hiện lỗ hổng ngay trong lúc code và khi chạy ứng dụng.", icon: <ShieldCheck /> }
    ]
  },
  {
    category: "System Mindset",
    icon: <Sparkles className="h-4 w-4" />,
    items: [
      { id: "systems-thinking", term: "Systems Thinking", desc: "Tư duy hệ thống: Nhìn nhận dự án như một thực thể nhất thể, tránh các bản vá lỗi cục bộ gây hỏng hệ thống.", icon: <Activity /> },
      { id: "regression-prevention", term: "Regression Prevention", desc: "Giao thức phòng ngừa lỗi hồi quy: Đảm bảo các tính năng mới không làm hỏng các logic đã ổn định trước đó.", icon: <Lock /> },
      { id: "grounding", term: "Grounding", desc: "Kỹ thuật 'neo đậu' câu trả lời của AI vào dữ liệu thực tế tại workspace, ngăn chặn sự mơ hồ hoặc ảo giác.", icon: <Microscope /> }
    ]
  }
];
