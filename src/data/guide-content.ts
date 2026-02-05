/**
 * Antigravity Complete Guide Content
 * Nội dung tài liệu hướng dẫn chi tiết đầy đủ từng file
 * Để hiển thị trên Frontend Guide pages
 */

// =============================================================================
// HƯỚNG DẪN WORKFLOWS CHI TIẾT
// =============================================================================
export const workflowGuides = {
  plan: {
    id: "plan",
    command: "/plan",
    title: "Lập Kế Hoạch Dự Án",
    description: "Chưa biết bắt đầu từ đâu? Lập kế hoạch trước.",
    icon: "📋",
    
    purpose: "Tạo file kế hoạch chi tiết trước khi code. Giúp phân rã task và định hướng rõ ràng.",
    
    criticalRules: [
      "KHÔNG VIẾT CODE - Chỉ tạo file kế hoạch",
      "Sử dụng project-planner agent",
      "Hỏi làm rõ (Socratic Gate) trước khi lập kế hoạch",
      "Đặt tên file động theo nội dung task"
    ],
    
    steps: [
      { step: 1, title: "Phân tích yêu cầu", desc: "Hiểu rõ user muốn gì" },
      { step: 2, title: "Hỏi làm rõ", desc: "Socratic Gate - đặt câu hỏi nếu cần" },
      { step: 3, title: "Tạo PLAN.md", desc: "File kế hoạch tại docs/PLAN-{slug}.md" },
      { step: 4, title: "Báo cáo", desc: "Thông báo file đã tạo và bước tiếp theo" }
    ],
    
    output: {
      location: "docs/PLAN-{task-slug}.md",
      content: ["Task breakdown", "Agent assignments", "Verification checklist"]
    },
    
    examples: [
      { command: "/plan e-commerce site with cart", output: "PLAN-ecommerce-cart.md" },
      { command: "/plan mobile app for fitness", output: "PLAN-fitness-app.md" },
      { command: "/plan add dark mode feature", output: "PLAN-dark-mode.md" },
    ],
    
    nextSteps: [
      "Review kế hoạch đã tạo",
      "Chạy /create để bắt đầu implement",
      "Hoặc chỉnh sửa kế hoạch thủ công"
    ]
  },
  
  create: {
    id: "create",
    command: "/create",
    title: "Tạo Ứng Dụng Mới",
    description: "Muốn tạo tính năng mới từ A-Z? Dùng cái này.",
    icon: "🚀",
    
    purpose: "Khởi tạo ứng dụng hoặc tính năng mới hoàn chỉnh từ đầu đến cuối.",
    
    steps: [
      { 
        step: 1, 
        title: "Phân tích yêu cầu", 
        desc: "Hiểu user muốn gì, hỏi nếu thiếu thông tin"
      },
      { 
        step: 2, 
        title: "Lập kế hoạch", 
        desc: "Xác định tech stack, cấu trúc file, task breakdown"
      },
      { 
        step: 3, 
        title: "Xây dựng", 
        desc: "Điều phối các agent: database, backend, frontend"
      },
      { 
        step: 4, 
        title: "Preview", 
        desc: "Chạy auto_preview.py, hiển thị URL cho user"
      }
    ],
    
    agents: [
      { name: "database-architect", role: "Thiết kế Schema" },
      { name: "backend-specialist", role: "Xây dựng API" },
      { name: "frontend-specialist", role: "Xây dựng UI" }
    ],
    
    examples: [
      "/create blog site",
      "/create e-commerce app with product listing and cart",
      "/create todo app",
      "/create Instagram clone"
    ],
    
    clarifyQuestions: [
      "Loại ứng dụng là gì?",
      "Các tính năng cơ bản cần có?",
      "Ai sẽ sử dụng?"
    ]
  },
  
  debug: {
    id: "debug",
    command: "/debug",
    title: "Gỡ Lỗi Có Hệ Thống",
    description: "Gặp lỗi khó sửa? Để AI soi log và sửa giúp bạn.",
    icon: "🔧",
    
    purpose: "Phân tích và sửa lỗi theo phương pháp khoa học, có hệ thống.",
    
    phases: [
      {
        phase: 1,
        title: "Thu thập thông tin",
        items: ["Error message", "Reproduction steps", "Expected vs actual", "Recent changes"]
      },
      {
        phase: 2,
        title: "Đặt giả thuyết",
        items: ["Liệt kê nguyên nhân có thể", "Sắp xếp theo khả năng cao nhất"]
      },
      {
        phase: 3,
        title: "Điều tra có hệ thống",
        items: ["Test từng giả thuyết", "Kiểm tra logs, data flow", "Loại trừ dần"]
      },
      {
        phase: 4,
        title: "Sửa và phòng ngừa",
        items: ["Áp dụng fix", "Giải thích root cause", "Thêm biện pháp phòng ngừa"]
      }
    ],
    
    outputFormat: `## 🔍 Debug: [Issue]

### 1. Symptom
[What's happening]

### 2. Information Gathered
- Error: \`[error message]\`
- File: \`[filepath]\`

### 3. Hypotheses
1. ❓ [Most likely cause]
2. ❓ [Second possibility]

### 4. Investigation
**Testing hypothesis 1:**
[What I checked] → [Result]

### 5. Root Cause
🎯 **[Explanation]**

### 6. Fix
\`\`\`[language]
// Before → After
\`\`\`

### 7. Prevention
🛡️ [How to prevent this in the future]`,
    
    examples: [
      "/debug login not working",
      "/debug API returns 500",
      "/debug form doesn't submit"
    ],
    
    principles: [
      "Hỏi trước khi giả định - lấy đủ context lỗi",
      "Test giả thuyết - không đoán mò",
      "Giải thích tại sao - không chỉ sửa cái gì",
      "Phòng ngừa tái phát - thêm test, validation"
    ]
  },
  
  orchestrate: {
    id: "orchestrate",
    command: "/orchestrate",
    title: "Điều Phối Đa Agent",
    description: "Task quá chua? Gọi cả hội đồng chuyên gia vào làm.",
    icon: "🎼",
    
    purpose: "Phối hợp nhiều Agent chuyên biệt để giải quyết bài toán phức tạp.",
    
    minimumAgents: 3,
    warning: "Nếu dùng ít hơn 3 agent → Không phải orchestration, chỉ là delegation.",
    
    agentMatrix: [
      { taskType: "Web App", agents: ["frontend-specialist", "backend-specialist", "test-engineer"] },
      { taskType: "API", agents: ["backend-specialist", "security-auditor", "test-engineer"] },
      { taskType: "UI/Design", agents: ["frontend-specialist", "seo-specialist", "performance-optimizer"] },
      { taskType: "Database", agents: ["database-architect", "backend-specialist", "security-auditor"] },
      { taskType: "Full Stack", agents: ["project-planner", "frontend-specialist", "backend-specialist", "devops-engineer"] },
      { taskType: "Debug", agents: ["debugger", "explorer-agent", "test-engineer"] },
      { taskType: "Security", agents: ["security-auditor", "penetration-tester", "devops-engineer"] }
    ],
    
    phases: [
      {
        phase: 1,
        name: "PLANNING",
        desc: "Sequential - chỉ project-planner và explorer-agent",
        requiresApproval: true
      },
      {
        phase: 2,
        name: "IMPLEMENTATION",
        desc: "Parallel - chạy nhiều agent cùng lúc sau khi user approve",
        groups: [
          { name: "Foundation", agents: ["database-architect", "security-auditor"] },
          { name: "Core", agents: ["backend-specialist", "frontend-specialist"] },
          { name: "Polish", agents: ["test-engineer", "devops-engineer"] }
        ]
      }
    ],
    
    exitGate: [
      "Agent count >= 3",
      "Scripts executed (security_scan.py)",
      "Report generated với tất cả agents"
    ]
  },
  
  "ui-ux-pro-max": {
    id: "ui-ux-pro-max",
    command: "/ui-ux-pro-max",
    title: "Thiết Kế Premium",
    description: "Giao diện đẹp kiểu Linear/Magic UI? Bấm vào đây.",
    icon: "💎",
    
    purpose: "Tạo giao diện cao cấp với 50+ style presets và 21 color palettes.",
    
    features: [
      "50+ phong cách thiết kế hiện đại",
      "21 bảng màu được tuyển chọn",
      "Animation và micro-interactions",
      "Responsive và accessible"
    ],
    
    styleCategories: [
      { name: "Brutalist", desc: "Raw, bold, unconventional" },
      { name: "Neo-Retro", desc: "Cổ điển pha hiện đại" },
      { name: "Swiss Punk", desc: "Typography-driven, grid-breaking" },
      { name: "Liquid Digital", desc: "Organic shapes, flowing gradients" },
      { name: "Bauhaus Remix", desc: "Geometric, primary colors" }
    ],
    
    forbidden: [
      "Bento Grids (quá phổ biến)",
      "Mesh/Aurora Gradients",
      "Glassmorphism mặc định",
      "Purple/Violet làm màu chủ đạo",
      "Standard Split Layout (50/50)"
    ]
  },

  test: {
    id: "test",
    command: "/test",
    title: "Viết Kiểm Thử",
    description: "Sợ bug khi sửa code? Viết test tự động.",
    icon: "🧪",
    
    purpose: "Tạo và chạy các test case tự động để đảm bảo chất lượng code.",
    
    testTypes: [
      { type: "Unit Test", desc: "Test từng function/component riêng lẻ", tool: "Vitest" },
      { type: "Integration Test", desc: "Test kết hợp nhiều module", tool: "Vitest" },
      { type: "E2E Test", desc: "Test toàn luồng như user thật", tool: "Playwright" }
    ],
    
    workflow: [
      "Phân tích code cần test",
      "Xác định test cases quan trọng",
      "Viết test theo TDD pattern",
      "Chạy test và báo cáo kết quả"
    ]
  },

  security: {
    id: "security",
    command: "/security",
    title: "Quét Bảo Mật",
    description: "Sợ bị hack? Quét lỗ hổng và bảo mật ngay.",
    icon: "🛡️",
    
    purpose: "Kiểm tra lỗ hổng bảo mật và đề xuất cách khắc phục.",
    
    checks: [
      "SQL Injection vulnerabilities",
      "XSS (Cross-Site Scripting)",
      "Hardcoded secrets/API keys",
      "Insecure dependencies",
      "Authentication weaknesses",
      "OWASP Top 10 compliance"
    ]
  },

  deploy: {
    id: "deploy",
    command: "/deploy",
    title: "Triển Khai",
    description: "Code xong rồi? Đẩy lên Server/Vercel thôi.",
    icon: "🚀",
    
    purpose: "Hướng dẫn và thực hiện deploy ứng dụng lên production.",
    
    platforms: [
      { name: "Vercel", desc: "Tối ưu cho Next.js, tự động CI/CD" },
      { name: "Netlify", desc: "Static sites, serverless functions" },
      { name: "Docker", desc: "Container hóa ứng dụng" },
      { name: "VPS", desc: "Server tự quản lý" }
    ]
  },

  enhance: {
    id: "enhance",
    command: "/enhance",
    title: "Cải Tiến Nhỏ",
    description: "Muốn sửa màu, thêm nút, sửa logic nhỏ? Vào đây.",
    icon: "✨",
    purpose: "Thực hiện các thay đổi tinh chỉnh hoặc cải tiến giao diện/logic nhanh chóng.",
    steps: [
      { step: 1, title: "Xác định mục tiêu", desc: "Nêu rõ thành phần cần cải tiến" },
      { step: 2, title: "Phân tích tác động", desc: "Kiểm tra xem thay đổi có phá hỏng logic cũ không" },
      { step: 3, title: "Thực hiện sửa đổi", desc: "Áp dụng code mới với mindset clean-code" },
      { step: 4, title: "Verify", desc: "Kiểm tra lại kết quả hiển thị hoặc logic" }
    ],
    examples: [
      "/enhance change button color to emerald",
      "/enhance add hover effect to product cards",
      "/enhance refine transition timing to 0.5s"
    ]
  },

  brainstorm: {
    id: "brainstorm",
    command: "/brainstorm",
    title: "Khám Phá Ý Tưởng",
    description: "Bí ý tưởng? Dùng cái này để AI gợi ý.",
    icon: "💡",
    purpose: "Thảo luận, tìm kiếm giải pháp và đặt câu hỏi Socratic để làm rõ yêu cầu.",
    steps: [
      { step: 1, title: "Đặt vấn đề", desc: "Nêu ý tưởng hoặc bài toán cần giải quyết" },
      { step: 2, title: "Socratic Discovery", desc: "AI đặt câu hỏi ngược lại để khai thác bối cảnh" },
      { step: 3, title: "Đề xuất giải pháp", desc: "Liệt kê ít nhất 2 phương án (Option A & B)" },
      { step: 4, title: "Kết luận", desc: "Chốt phương án tối ưu để chuyển sang /plan" }
    ],
    examples: [
      "/brainstorm how to increase conversion rate?",
      "/brainstorm tech stack for real-time chat app",
      "/brainstorm project structure for large scale app"
    ]
  },

  document: {
    id: "document",
    command: "/document",
    title: "Đồng Bộ Tài Liệu",
    description: "Lười viết docs? Để AI tự viết cho.",
    icon: "📝",
    purpose: "Tự động trích xuất thông tin từ mã nguồn và cập nhật các file tài liệu định dạng Markdown.",
    steps: [
      { step: 1, title: "Scan Codebase", desc: "Phân tích cấu trúc file và comment" },
      { step: 2, title: "Mapping", desc: "Ánh xạ logic code sang ngôn ngữ tự nhiên" },
      { step: 3, title: "Generate/Update", desc: "Tạo file mới hoặc append vào docs hiện có" }
    ],
    output: {
      location: "docs/ hoặc README.md",
      content: ["Architecture overview", "API endpoints", "Component props"]
    }
  },

  status: {
    id: "status",
    command: "/status",
    title: "Báo Cáo Tiến Độ",
    description: "Dự án đang đến đâu rồi? Xem Dashboard báo cáo.",
    icon: "📊",
    purpose: "Tổng hợp trạng thái hiện tại của dự án, các file đã sửa và các task còn lại.",
    steps: [
      { step: 1, title: "Check Git/File state", desc: "Kiểm tra các thay đổi gần nhất" },
      { step: 2, title: "Verify PLAN.md", desc: "Đối soát với bản kế hoạch gốc" },
      { step: 3, title: "Báo cáo", desc: "Hiển thị dashboard thống kê và đề xuất bước tiếp theo" }
    ]
  },

  preview: {
    id: "preview",
    command: "/preview",
    category: "development",
    title: "Bật Chế Độ Xem Trước",
    description: "Khởi chạy môi trường demo để kiểm tra giao diện và luồng nghiệp vụ.",
    icon: "👁️",
    purpose: "Cho phép người dùng xem trực tiếp kết quả thay đổi trên giao diện web.",
    steps: [
      { step: 1, title: "Build", desc: "Khởi chạy quy trình build dự án" },
      { step: 2, title: "Launch", desc: "Mở trình duyệt local hoặc hiển thị URL preview" },
      { step: 3, title: "Interact", desc: "Thực hiện các thao tác kiểm thử trên giao diện" }
    ],
    examples: ["/preview startup dashboard", "/preview mobile login screen"]
  },

  seo: {
    id: "seo",
    command: "/seo",
    category: "advanced",
    title: "Tối Ưu SEO/GEO",
    description: "Tối ưu hóa nội dung cho Google và các công cụ tìm kiếm AI (AI Search).",
    icon: "🔎",
    purpose: "Đảm bảo ứng dụng đạt thứ hạng cao và được AI Search Engine nhận diện chính xác.",
    steps: [
      { step: 1, title: "Audit", desc: "Quét Core Web Vitals và các thẻ meta hiện tại" },
      { step: 2, title: "Optimize", desc: "Chèn từ khóa, tối ưu semantic HTML và Schema.org" },
      { step: 3, title: "Content", desc: "Tinh chỉnh nội dung để đạt chuẩn E-E-A-T" }
    ],
    skills: ["seo-expert-kit", "geo-fundamentals"]
  },

  audit: {
    id: "audit",
    command: "/audit",
    category: "quality",
    title: "Kiểm Tra Toàn Diện",
    description: "Audit trước khi bàn giao khách hàng. Đảm bảo mọi thứ hoàn hảo.",
    icon: "📋",
    purpose: "Rà soát lại toàn bộ dự án về code quality, security và requirements.",
    steps: [
      { step: 1, title: "Code Review", desc: "Kiểm tra clean-code và SOLID principles" },
      { step: 2, title: "Security Scan", desc: "Chạy audit bảo mật chuyên sâu" },
      { step: 3, title: "Performance", desc: "Check tốc độ load và tài nguyên" }
    ]
  },

  monitor: {
    id: "monitor",
    command: "/monitor",
    category: "devops",
    title: "Giám Sát Hệ Thống",
    description: "Cài đặt hệ thống monitoring cho server. Theo dõi sức khỏe ứng dụng.",
    icon: "📈",
    purpose: "Thiết lập các công cụ theo dõi logs, uptime và tài nguyên server.",
    steps: [
      { step: 1, title: "Configure", desc: "Thiết lập OpenTelemetry hoặc Prometheus" },
      { step: 2, title: "Dashboard", desc: "Tạo biểu đồ trực quan hóa dữ liệu" },
      { step: 3, title: "Alerting", desc: "Cài đặt cảnh báo qua Slack/Telegram" }
    ]
  },

  onboard: {
    id: "onboard",
    command: "/onboard",
    category: "documentation",
    title: "Hướng Dẫn Người Mới",
    description: "Onboarding tự động cho thành viên mới trong team.",
    icon: "👋",
    purpose: "Giảm thời gian làm quen dự án cho nhân sự mới.",
    steps: [
      { step: 1, title: "Guide", desc: "Giới thiệu cấu trúc .agent và mindset hệ thống" },
      { step: 2, title: "Setup", desc: "Hướng dẫn cài đặt môi trường phát triển" },
      { step: 3, title: "First Task", desc: "Giao một task nhỏ để làm quen quy trình PDCA" }
    ]
  },

  "log-error": {
    id: "log-error",
    command: "/log-error",
    category: "maintenance",
    title: "Ghi Log Lỗi",
    description: "Lưu lỗi vào Error Log để học tập. Biến sai lầm thành bài học.",
    icon: "📝",
    purpose: "Ghi lại chi tiết lỗi để Agent không lặp lại trong tương lai.",
    steps: [
      { step: 1, title: "Capture", desc: "Lấy thông tin stack trace và bối cảnh lỗi" },
      { step: 2, title: "Analyze", desc: "Tự động phân loại loại lỗi (Logic/Syntax/...)" },
      { step: 3, title: "Commit", desc: "Append vào file ERRORS.md với format chuẩn" }
    ]
  },

  update: {
    id: "update",
    command: "/update",
    category: "system",
    title: "Cập Nhật Hệ Thống",
    description: "Kiểm tra và cập nhật Antigravity IDE lên bản mới nhất.",
    icon: "🔄",
    purpose: "Giữ cho công cụ luôn sắc bén với các kỹ năng và quy tắc mới nhất.",
    steps: [
      { step: 1, title: "Check", desc: "So sánh version hiện tại với cloud version" },
      { step: 2, title: "Backup", desc: "Tự động sao lưu các file cấu hình quan trọng" },
      { step: 3, title: "Upgrade", desc: "Áp dụng bản cập nhật mới và khởi động lại" }
    ]
  },

  "update-docs": {
    id: "update-docs",
    command: "/update-docs",
    category: "documentation",
    title: "Cập Nhật Tài Liệu",
    description: "Đồng bộ tài liệu hệ thống khi có tính năng mới.",
    icon: "📚",
    purpose: "Tự động cập nhật số liệu thống kê và danh mục trong README.",
    steps: [
      { step: 1, title: "Sync", desc: "Chạy script đồng bộ hóa số lượng Agent/Skill" },
      { step: 2, title: "Format", desc: "Đảm bảo Markdown chuẩn hóa theo template" },
      { step: 3, title: "Commit", desc: "Tự động tạo commit Documentation cho dự án" }
    ]
  },

  "plan-auto-update-chat": {
    id: "plan-auto-update-chat",
    command: "/plan-auto-update-chat",
    category: "planning",
    title: "Auto Update Chat",
    description: "Lên kế hoạch tính năng thực thi lệnh trực tiếp trong chat.",
    icon: "🤖",
    purpose: "Nâng cấp khả năng tương tác của Agent trực tiếp thông qua chat CLI.",
    steps: [
      { step: 1, title: "Analyze", desc: "Phân tích khả năng tương tác của UI hiện tại" },
      { step: 2, title: "Design", desc: "Thiết kế luồng gửi lệnh command qua socket" },
      { step: 3, title: "Roadmap", desc: "Xác định các giai đoạn triển khai tính năng" }
    ]
  }
};

// =============================================================================
// HƯỚNG DẪN AGENTS CHI TIẾT
// =============================================================================
export const agentGuides = {
  orchestrator: {
    id: "orchestrator",
    name: "Orchestrator",
    title: "Điều Phối Tổng",
    icon: "🎯",
    category: "command",
    
    description: "Master orchestrator agent - Điều phối nhiều agent chuyên biệt để giải quyết các task phức tạp.",
    
    role: "Phân rã task, chọn agent phù hợp, điều phối thực thi, tổng hợp kết quả.",
    
    skills: [
      "clean-code", "parallel-agents", "behavioral-modes", 
      "plan-writing", "brainstorming", "architecture"
    ],
    
    workflowPhases: [
      {
        phase: 0,
        name: "Quick Context Check",
        desc: "Đọc plan files, hỏi nếu có ambiguity lớn"
      },
      {
        phase: 1,
        name: "Decompose",
        desc: "Phân rã task phức tạp thành subtasks"
      },
      {
        phase: 2,
        name: "Select",
        desc: "Chọn agents phù hợp cho từng subtask"
      },
      {
        phase: 3,
        name: "Invoke",
        desc: "Gọi agents thực thi (parallel hoặc sequential)"
      },
      {
        phase: 4,
        name: "Synthesize",
        desc: "Tổng hợp kết quả thành output thống nhất"
      }
    ],
    
    checkpoints: [
      {
        name: "Plan Verification",
        check: "PLAN.md exists?",
        action: "Nếu không → Tạo plan trước"
      },
      {
        name: "Project Type Routing",
        check: "Agent assignment matches project type?",
        rules: [
          "MOBILE → mobile-developer (không dùng frontend-specialist)",
          "WEB → frontend-specialist",
          "BACKEND → backend-specialist"
        ]
      }
    ],
    
    clarifyQuestions: [
      { aspect: "Scope", question: "Full app / module cụ thể / single file?" },
      { aspect: "Priority", question: "Security / Speed / Features?" },
      { aspect: "Tech Stack", question: "Framework / Database / Hosting preferences?" },
      { aspect: "Design", question: "Visual style preference?" },
      { aspect: "Constraints", question: "Timeline / Budget / Existing code?" }
    ]
  },

  "frontend-specialist": {
    id: "frontend-specialist",
    name: "Frontend Specialist",
    title: "Senior Frontend Architect",
    icon: "🎨",
    category: "do",
    
    description: "Chuyên gia Frontend xây dựng hệ thống React/Next.js với mindset performance-first.",
    
    philosophy: "Frontend không chỉ là UI—nó là system design. Mỗi quyết định component ảnh hưởng đến performance, maintainability và UX.",
    
    skills: [
      "clean-code", "nextjs-react-expert", "web-design-guidelines",
      "tailwind-patterns", "frontend-design"
    ],
    
    mindset: [
      "Performance is measured, not assumed",
      "State is expensive, props are cheap",
      "Simplicity over cleverness",
      "Accessibility is not optional",
      "Type safety prevents bugs",
      "Mobile is the default"
    ],
    
    expertiseAreas: [
      {
        area: "React Ecosystem",
        skills: ["Hooks", "Custom hooks", "React.memo", "Code splitting", "Testing"]
      },
      {
        area: "Next.js",
        skills: ["Server Components", "Client Components", "Server Actions", "Image optimization"]
      },
      {
        area: "Styling",
        skills: ["Tailwind CSS", "Responsive design", "Dark mode", "Design systems"]
      },
      {
        area: "TypeScript",
        skills: ["Strict mode", "Generics", "Utility types", "Inference"]
      }
    ],
    
    designRules: {
      forbidden: [
        "Standard Hero Split (Left Text / Right Image)",
        "Bento Grids mặc định",
        "Mesh/Aurora Gradients",
        "Glassmorphism",
        "Purple/Violet làm màu chính",
        "shadcn/ui không hỏi trước"
      ],
      mandatory: [
        "Deep Design Thinking trước khi code",
        "Design Commitment declaration",
        "Animation và micro-interactions",
        "Mobile-first approach",
        "Accessibility compliant"
      ]
    },
    
    reviewChecklist: [
      "TypeScript strict mode compliant",
      "Performance profiled",
      "Accessibility (ARIA, keyboard nav)",
      "Responsive (mobile-first)",
      "Error boundaries",
      "Loading states",
      "Server Components used where possible",
      "Tests for critical logic"
    ]
  },

  "backend-specialist": {
    id: "backend-specialist",
    name: "Backend Specialist",
    title: "Backend Engineer",
    icon: "⚙️",
    category: "do",
    
    description: "Chuyên gia Backend xây dựng API, logic server và kiến trúc hệ thống.",
    
    expertise: [
      "API Design (REST, GraphQL, tRPC)",
      "Database integration",
      "Authentication & Authorization",
      "Server-side logic",
      "Error handling",
      "Performance optimization"
    ],
    
    standards: [
      "Parameterized queries (no SQL injection)",
      "Input validation & sanitization",
      "Proper error responses",
      "Rate limiting",
      "Logging & monitoring"
    ]
  },

  "security-auditor": {
    id: "security-auditor",
    name: "Security Auditor",
    title: "Chuyên Gia Bảo Mật",
    icon: "🛡️",
    category: "check",
    
    description: "Kiểm toán bảo mật theo chuẩn OWASP, phát hiện và vá lỗ hổng.",
    
    checks: [
      "OWASP Top 10 vulnerabilities",
      "Hardcoded secrets",
      "SQL Injection",
      "XSS (Cross-Site Scripting)",
      "CSRF protection",
      "Authentication security",
      "Dependency vulnerabilities"
    ],
    
    tools: ["security_scan.py", "vulnerability-scanner skill"]
  },

  "database-architect": {
    id: "database-architect",
    name: "Database Architect",
    title: "Kiến Trúc Sư CSDL",
    icon: "🗄️",
    category: "do",
    
    description: "Thiết kế schema, tối ưu queries và quản lý migrations.",
    
    expertise: [
      "Schema design (3NF)",
      "Index optimization",
      "Query performance",
      "Migrations",
      "ORM (Prisma, Drizzle)",
      "SQL & NoSQL"
    ]
  },

  "test-engineer": {
    id: "test-engineer",
    name: "Test Engineer",
    title: "Kỹ Sư Kiểm Thử",
    icon: "🧪",
    category: "check",
    
    description: "Xây dựng hạ tầng kiểm thử và đảm bảo chất lượng code.",
    
    testTypes: [
      "Unit tests (Vitest)",
      "Integration tests",
      "E2E tests (Playwright)",
      "Performance tests"
    ],
    
    workflow: "TDD - Red → Green → Refactor"
  },

  "devops-engineer": {
    id: "devops-engineer",
    name: "DevOps Engineer",
    title: "Kỹ Sư DevOps",
    icon: "🚀",
    category: "act",
    
    description: "CI/CD, containerization, deployment và infrastructure.",
    
    expertise: [
      "CI/CD pipelines",
      "Docker & Kubernetes",
      "Cloud platforms (AWS, GCP, Vercel)",
      "Monitoring & logging",
      "Infrastructure as Code"
    ]
  },

  debugger: {
    id: "debugger",
    name: "Debugger",
    title: "Chuyên Gia Gỡ Lỗi",
    icon: "🔧",
    category: "act",
    description: "Xử lý sự cố và sửa lỗi nóng (hotfixing).",
    
    methodology: [
      "Gather information",
      "Form hypotheses",
      "Investigate systematically",
      "Fix and prevent"
    ]
  },

  "mobile-developer": {
    id: "mobile-developer",
    name: "Mobile Developer",
    title: "Senior Mobile Engineer",
    icon: "📱",
    category: "do",
    description: "Chuyên gia phát triển ứng dụng di động đa nền tảng (React Native, Flutter) hoặc Native.",
    role: "Xây dựng ứng dụng mobile, tối ưu trải nghiệm chạm (touch), quản lý state offline và tích hợp tính năng native.",
    skills: ["mobile-design", "clean-code", "frontend-design"]
  },

  "quality-inspector": {
    id: "quality-inspector",
    name: "Quality Inspector",
    title: "Thanh Tra Chất Lượng",
    icon: "🔍",
    category: "check",
    description: "Thanh tra độc lập, chạy test và đối soát tiêu chí thành công của task.",
    role: "Kiểm tra code so với yêu cầu ban đầu, chạy test suite, phát hiện regression và đánh giá clean-code.",
    skills: ["testing-patterns", "webapp-testing", "web-design-guidelines"],
    mindset: [
      "Trust but verify",
      "Edge cases are where bugs hide",
      "Documentation must match reality",
      "User objective is the ultimate success metric"
    ]
  },

  "project-planner": {
    id: "project-planner",
    name: "Project Planner",
    title: "Chuyên Gia Lập Kế Hoạch",
    icon: "📋",
    category: "plan",
    description: "Kiến trúc sư chiến lược, phân rã yêu cầu user thành các task thực thi được.",
    role: "Phân tích yêu cầu, xác định tech stack, thiết kế cấu trúc file và phân bổ agent.",
    skills: ["plan-writing", "architecture", "brainstorming"],
    output: "PLAN.md (Bản kế hoạch thực thi chi tiết)"
  },

  "product-manager": {
    id: "product-manager",
    name: "Product Manager",
    title: "Quản Lý Sản Phẩm",
    icon: "📊",
    category: "plan",
    description: "Định hướng sản phẩm và quản lý yêu cầu (Requirements Management).",
    role: "Xác định MVP, quản lý backlog, và đảm bảo sản phẩm giải quyết đúng vấn đề của user.",
    skills: ["brainstorming", "seo-fundamentals", "cro-expert-kit"]
  },

  "product-owner": {
    id: "product-owner",
    name: "Product Owner",
    title: "Chủ Sở Hữu Sản Phẩm",
    icon: "👔",
    category: "plan",
    description: "Người đại diện cho lợi ích của người dùng và các bên liên quan.",
    role: "Ưu tiên backlog, phê duyệt các tính năng đã hoàn thiện và đảm bảo giá trị kinh doanh.",
    skills: ["brainstorming", "architecture", "cro-expert-kit"]
  },

  "cloud-architect": {
    id: "cloud-architect",
    name: "Cloud Architect",
    title: "Kiến Trúc Sư Cloud",
    icon: "☁️",
    category: "do",
    description: "Thiết kế và tối ưu hóa hạ tầng đám mây cho sự ổn định và khả năng mở rộng.",
    role: "Thiết kế topology mạng, cấu hình auto-scaling và tối ưu hóa chi phí hạ tầng.",
    skills: ["cloud-architect-master", "server-management", "deployment-engineer"]
  },

  "game-developer": {
    id: "game-developer",
    name: "Game Developer",
    title: "Lập Trình Viên Game",
    icon: "🎮",
    category: "do",
    description: "Chuyên gia phát triển game và các ứng dụng tương tác cao.",
    role: "Xây dựng logic game, xử lý va chạm, tối ưu hóa đồ họa và cảm giác chơi.",
    skills: ["game-development", "clean-code", "performance-profiling"]
  },

  "penetration-tester": {
    id: "penetration-tester",
    name: "Penetration Tester",
    title: "Chuyên Gia Pentest",
    icon: "🔓",
    category: "check",
    description: "Tấn công thử nghiệm để tìm ra các lỗ hổng tiềm ẩn trong hệ thống.",
    role: "Giả lập các cuộc tấn công thực tế, khai thác lỗ hổng và đề xuất giải pháp vá lỗi.",
    skills: ["penetration-tester-master", "red-team-tactics", "vulnerability-scanner"]
  },

  "qa-automation-engineer": {
    id: "qa-automation-engineer",
    name: "QA Automation",
    title: "Kỹ Sư Auto QA",
    icon: "🤖",
    category: "check",
    description: "Tự động hóa quy trình kiểm tra để đảm bảo chất lượng phần mềm liên tục.",
    role: "Xây dựng framework test tự động, viết script kiểm thử và tích hợp vào CI/CD.",
    skills: ["tdd-master-workflow", "webapp-testing", "testing-patterns"]
  },

  "performance-optimizer": {
    id: "performance-optimizer",
    name: "Performance Optimizer",
    title: "Chuyên Gia Tối Ưu",
    icon: "⚡",
    category: "act",
    description: "Tìm kiếm và xử lý các nút thắt cổ chai về hiệu suất hệ thống.",
    role: "Profiling mã nguồn, tối ưu hóa database queries và giảm độ trễ phản hồi.",
    skills: ["performance-engineer", "performance-profiling", "nodejs-best-practices"]
  },

  "documentation-writer": {
    id: "documentation-writer",
    name: "Doc Writer",
    title: "Chuyên Gia Tài Liệu",
    icon: "📝",
    category: "plan",
    description: "Đảm bảo mọi kiến thức kỹ thuật được ghi chép rõ ràng và dễ hiểu.",
    role: "Viết README, API docs, hướng dẫn sử dụng và tài liệu kiến trúc.",
    skills: ["api-documenter", "documentation-templates", "clean-code"]
  },

  "seo-specialist": {
    id: "seo-specialist",
    name: "SEO Specialist",
    title: "Chuyên Gia SEO",
    icon: "🔎",
    category: "plan",
    description: "Tối ưu hóa khả năng hiển thị của ứng dụng trên các công cụ tìm kiếm.",
    role: "Tối ưu hóa On-page, cấu trúc dữ liệu (Schema.org) và Core Web Vitals.",
    skills: ["seo-expert-kit", "seo-fundamentals", "geo-fundamentals"]
  },

  "codebase-expert": {
    id: "codebase-expert",
    name: "Codebase Expert",
    title: "Chuyên Gia Mã Nguồn",
    icon: "💻",
    category: "do",
    description: "Am hiểu sâu sắc về cấu trúc và logic của toàn bộ dự án hiện tại.",
    role: "Phân tích tác động của thay đổi, tư vấn cấu trúc file và kiến trúc code.",
    skills: ["production-code-audit", "clean-code", "architecture"]
  },

  "code-archaeologist": {
    id: "code-archaeologist",
    name: "Code Archaeologist",
    title: "Khảo Cổ Mã Nguồn",
    icon: "🏛️",
    category: "do",
    description: "Phát hiện mục đích ban đầu của các đoạn code cũ hoặc phức tạp.",
    role: "Truy vết lịch sử commit, phân tích logic legacy và hỗ trợ refactoring an toàn.",
    skills: ["systematic-debugging", "clean-code", "architecture"]
  },

  "explorer-agent": {
    id: "explorer-agent",
    name: "Explorer Agent",
    title: "Chuyên Gia Khám Phá",
    icon: "🧭",
    category: "plan",
    description: "Nghiên cứu các công nghệ mới và tìm kiếm giải pháp tối ưu cho bài toán.",
    role: "R&D, tìm kiếm thư viện phù hợp và đề xuất hướng tiếp cận mới.",
    skills: ["brainstorming", "architecture", "intelligent-routing"]
  }
};

// =============================================================================
// HƯỚNG DẪN RULES CHI TIẾT
// =============================================================================
export const ruleGuides = {
  GEMINI: {
    id: "GEMINI",
    name: "GEMINI Core Constitution",
    trigger: "always_on",
    icon: "🤖",
    
    purpose: "Định hình nhân dạng và cơ chế vận hành thích ứng theo quy mô dự án (Scale-Adaptive). Đây là hiến pháp tối cao định hướng mọi hành vi của hệ thống.",
    
    rules: [
      {
        title: "Scale-Aware Operating Modes",
        desc: "Hệ thống tự điều chỉnh độ nghiêm ngặt dựa trên quy mô: Solo-Ninja (Tốc độ), Agile-Squad (Cộng tác), Software-Factory (Chuẩn hóa)."
      },
      {
        title: "PDCA Cycle Compliance",
        desc: "Mọi nhiệm vụ phức tạp phải tuân thủ chuẩn PDCA: Plan (Lập kế hoạch), Do (Thực hiện), Check (Kiểm tra), Act (Điều chỉnh)."
      },
      {
        title: "Scientific Linkage",
        desc: "Mọi file phải tuân thủ cấu trúc liên kết 5 lớp: DNA (.shared), Rules, Skills, Agents và Workflows."
      },
      {
        title: "Identity Anchor",
        desc: "Agent luôn phải duy trì nhân dạng 'Em yêu' hoặc Jarvis/Friday để đảm bảo tính nhất quán trong giao tiếp."
      }
    ],
    
    enforcement: [
      "Tự động kích hoạt khi khởi động",
      "Quét bối cảnh (Context Discovery) trước khi thực hiện",
      "Cơ chế báo cáo trạng thái định kỳ",
      "Review chéo giữa các Agent trong chế độ Strict"
    ],
    
    files: [
      ".agent/rules/GEMINI.md",
      ".agent/rules/identity.md",
      ".agent/ARCHITECTURE.md"
    ],
    
    exceptions: [
      "Tác vụ đọc file đơn giản (Safe Read)",
      "Yêu cầu giải đáp kiến thức tổng quát",
      "Hướng dẫn sử dụng công cụ"
    ],
    
    prohibited: [
      "Xóa code cũ mà không có lý giải rõ ràng",
      "Hardcode Secrets hoặc API Keys",
      "Override quy trình PDCA mà không được phép",
      "Sử dụng AI giả mạo nhân dạng"
    ]
  },

  security: {
    id: "security",
    name: "Security Guardrails",
    trigger: "always_on",
    icon: "🔒",
    purpose: "Bảo vệ hệ thống khỏi các lỗ hổng phổ biến, ngăn chặn rò rỉ dữ liệu nhạy cảm và bảo mật mã nguồn tuyệt đối.",
    rules: [
      { title: "No Hardcoded Secrets", desc: "Tuyệt đối không viết API Key, Password, Token trực tiếp vào code." },
      { title: "Safe DatabaseOps", desc: "Không chạy các lệnh phá hủy (DROP, DELETE ALL) mà không có xác nhận." },
      { title: "Input Sanitization", desc: "Luôn làm sạch dữ liệu đầu vào để chống SQL Injection và XSS." },
      { title: "Environment Safety", desc: "Sử dụng .env và đảm bảo file này luôn nằm trong .gitignore." }
    ],
    enforcement: [
      "Tự động quét mã nguồn tìm secret leak",
      "Sử dụng Parameterized Queries cho mọi câu lệnh SQL",
      "Bắt buộc bọc các logic nhạy cảm trong try...catch"
    ],
    files: [".agent/rules/security.md", ".env.example"],
    prohibited: [
      "Commit file .env lên Github",
      "Sử dụng mật khẩu Plain Text trong database",
      "Bỏ qua các cảnh báo bảo mật từ npm audit"
    ]
  },

  "error-logging": {
    id: "error-logging",
    name: "Error Logging",
    trigger: "always_on",
    icon: "📝",
    
    purpose: "Ghi lại mọi lỗi xảy ra trong quá trình phát triển để AI có thể tự học, phân tích nguyên nhân gốc rễ và ngăn chặn lỗi lặp lại.",
    rules: [
      { title: "Syntax Error Log", desc: "Ghi lại các lỗi cú pháp, thiếu dấu ngoặc hoặc import sai." },
      { title: "Logic Error Log", desc: "Ghi lại các trường hợp code chạy nhưng kết quả sai lệch." },
      { title: "Integration Error Log", desc: "Ghi lại các lỗi khi gọi API hoặc kết nối Database thất bại." },
      { title: "Runtime Log", desc: "Ghi lại các lỗi crash ứng dụng hoặc lỗi ngoại lệ (Exceptions)." }
    ],
    
    enforcement: [
      "Tự động append vào file ERRORS.md khi gặp lỗi build/test",
      "Phân loại lỗi theo mức độ nghiêm trọng (Low/Medium/High/Critical)",
      "Định kỳ review file lỗi để cập nhật Rule mới phòng ngừa"
    ],
    files: ["ERRORS.md", ".agent/rules/error-logging.md"],
    prohibited: [
      "Xóa nhật ký lỗi cũ mà không được phép",
      "Log thông tin nhạy cảm của người dùng vào Error Log"
    ]
  },



  "docs-update": {
    id: "docs-update",
    name: "Docs Update Protocol",
    trigger: "always_on",
    icon: "📚",
    purpose: "Đảm bảo tài liệu luôn đồng bộ với code thực tế. Tránh tình trạng tài liệu bị lỗi thời (outdated) gây hiểu lầm cho người dùng và Agent.",
    rules: [
      { title: "Skill Sync", desc: "Cập nhật SKILLS.md và các guide liên quan khi thêm Skill mới." },
      { title: "Workflow Sync", desc: "Cập nhật danh sách /command và hướng dẫn khi thêm Workflow mới." },
      { title: "Metric Sync", desc: "Giữ số liệu thống kê (số lượng Agent, Skill, Rule) luôn chính xác." },
      { title: "I18n Sync", desc: "Đảm bảo cập nhật cả phiên bản tiếng Anh và tiếng Việt cho README." }
    ],
    enforcement: [
      "Tự động phát hiện thay đổi trong thư mục .agent/",
      "Sử dụng script update-docs.js để đồng bộ số liệu",
      "Bắt buộc review docs trước khi commit feature mới"
    ],
    files: [".agent/rules/docs-update.md", "README.md", "README.vi.md"]
  },

  debug: {
    id: "debug",
    name: "Systematic Debug Mode",
    trigger: "on_demand",
    icon: "🔧",
    purpose: "Điều tra, sửa lỗi và kiểm thử trong một luồng thống nhất theo phương pháp khoa học.",
    rules: [
      { title: "Investigation First", desc: "Luôn đọc stack trace và bắt được log dòng đầu tiên trước khi phỏng đoán." },
      { title: "Isolate & Reproduce", desc: "Tạo script nhỏ để tái hiện lỗi và khoanh vùng module nghi phạm." },
      { title: "Root Cause Fix", desc: "Chỉ sửa lỗi khi đã tìm ra nguyên nhân gốc rễ, không sửa triệu chứng." },
      { title: "Regression Check", desc: "Chạy lại bộ test cũ để đảm bảo fix không phá hỏng các phần khác." }
    ],
    enforcement: [
      "Áp dụng quy trình 'Sherlock Mode' khi gặp bug",
      "Viết test case fail (Red) trước khi sửa code",
      "Báo cáo theo định dạng: Lỗi -> Nguyên nhân -> Giải pháp"
    ],
    files: [".agent/rules/debug.md", "ERRORS.md"]
  },

  frontend: {
    id: "frontend",
    name: "Frontend Standards",
    trigger: "on_demand",
    icon: "🎨",
    purpose: "Quản lý thống nhất Giao diện Web & Mobile, đảm bảo trải nghiệm người dùng cao cấp và hiệu suất tối ưu.",
    rules: [
      { title: "Premium UI/UX", desc: "Typography chuẩn, khoảng cách 4px/8px, Glassmorphism 2.0 và haptic feedback." },
      { title: "Mobile-First", desc: "Code cho Mobile trước, nút bấm tối thiểu 44x44px và tôn trọng Safe Areas." },
      { title: "Performance First", desc: "LCP < 2.5s, Optimistic UI (cập nhật trước API) và tối ưu hóa tài nguyên." },
      { title: "Atomic Design", desc: "Xây dựng component nhỏ, tái sử dụng cao và tách biệt Server/Client state." }
    ],
    enforcement: [
      "Review UI theo Web Interface Guidelines",
      "Check performance bằng Lighthouse",
      "E2E Testing với Playwright cho các luồng UX chính"
    ],
    files: [".agent/rules/frontend.md", ".agent/.shared/ui-ux-pro-max/AESTHETICS.md"]
  },

  backend: {
    id: "backend",
    name: "Backend Standards",
    trigger: "on_demand",
    icon: "⚙️",
    purpose: "Thiết lập bộ luật quản lý Logic, Dữ liệu và Hạ tầng với hiệu suất cao và kiến trúc sạch.",
    rules: [
      { title: "Clean Architecture", desc: "Tách biệt rõ ràng: Controller -> Service -> Repository -> Database." },
      { title: "Stateless Design", desc: "Server không lưu session cục bộ, sử dụng JWT/Redis để đảm bảo khả năng mở rộng." },
      { title: "Database Mastery", desc: "Tuân thủ 3NF, snake_case, đánh Index khóa ngoại và luôn dùng Migration." },
      { title: "Graceful Failure", desc: "Xử lý lỗi tập trung, không để treo request và sử dụng Structured Logging (JSON)." }
    ],
    enforcement: [
      "Unit Test coverage > 80% cho core logic",
      "API Audit theo chuẩn RESTful/GraphQL",
      "Security scan cho các endpoint nhạy cảm"
    ],
    files: [".agent/rules/backend.md", ".agent/.shared/api-standards/"]
  },

  business: {
    id: "business",
    name: "Business Logic",
    trigger: "on_demand",
    icon: "💼",
    purpose: "Đảm bảo Logic Nghiệp vụ chính xác, tuân thủ Domain-Driven Design (DDD) và có khả năng Audit cao.",
    rules: [
      { title: "Ubiquitous Language", desc: "Sử dụng từ vựng thống nhất giữa Code và Nghiệp vụ (Shipment, Order, v.v.)." },
      { title: "Rich Domain Model", desc: "Logic nghiệp vụ phải nằm trong Entity/Model thay vì rải rác ở Service/Controller." },
      { title: "ACID Transactions", desc: "Mọi thao tác thay đổi trạng thái quan trọng/số tiền phải nằm trong Transaction." },
      { title: "Audit Trail", desc: "Ghi lại nhật ký Ai làm gì, lúc nào, giá trị cũ/mới cho các dữ liệu quan trọng." }
    ],
    enforcement: [
      "Kiểm tra Ownership (IDOR) cho mọi request",
      "Cấm dùng Float/Double cho tiền tệ (Chỉ dùng Decimal/BigInt)",
      "Không Soft-Delete dữ liệu tài chính"
    ],
    files: [".agent/rules/business.md"]
  },

  compliance: {
    id: "compliance",
    name: "Compliance Rules",
    trigger: "on_demand",
    icon: "⚖️",
    purpose: "Đảm bảo hệ thống tuân thủ các chuẩn mực pháp lý quốc tế như GDPR, HIPAA, SOC2.",
    rules: [
      { title: "PII Masking", desc: "Dữ liệu định danh (SĐT, Email) không bao giờ được log ra Plain Text." },
      { title: "Data Privacy", desc: "Hỗ trợ quyền được quên (export/delete user data) theo đúng luật GDPR." },
      { title: "Financial Security", desc: "Không lưu số thẻ (PAN) trực tiếp, sử dụng Tokenization của cổng thanh toán." },
      { title: "Encryption", desc: "Bắt buộc TLS 1.3 khi truyền tải và mã hóa dữ liệu tĩnh (Encryption at Rest)." }
    ],
    enforcement: [
      "Audit logs phải là Immutable (không thể sửa/xóa)",
      "Truy cập Prod DB phải qua Bastion Host",
      "Mã hóa PII khi hiển thị cho bộ phận CSKH"
    ],
    files: [".agent/rules/compliance.md", ".agent/.shared/compliance/"]
  },

  "architecture-review": {
    id: "architecture-review",
    name: "Architecture Review",
    trigger: "on_demand",
    icon: "🏛️",
    purpose: "Đảm bảo kiến trúc hệ thống được thiết kế đúng chuẩn, chịu tải cao và High Availability (HA).",
    rules: [
      { title: "Resilience", desc: "Sử dụng Circuit Breaker khi gọi API bên thứ 3 để tránh hiệu ứng sụp đổ dây chuyền." },
      { title: "Immutable Infra", desc: "Không sửa config tay trên Server. Mọi thay đổi phải qua Terraform (IaC)." },
      { title: "Disaster Recovery", desc: "Lên kịch bản RPO/RTO và backup DB định kỳ (mỗi 15-60 phút)." },
      { title: "Env Parity", desc: "Đảm bảo môi trường Dev, Staging và Prod giống nhau 99% về cấu hình." }
    ],
    enforcement: [
      "Review kiến trúc trước khi implement tính năng lớn",
      "Thiết lập Rate Limiting cho Public API",
      "Diễn tập kịch bản Restore dữ liệu tự động"
    ],
    files: [".agent/rules/architecture-review.md", ".agent/ARCHITECTURE.md"]
  },

  "system-update": {
    id: "system-update",
    name: "System Update",
    trigger: "on_demand",
    icon: "🔄",
    purpose: "Đảm bảo Antigravity IDE luôn ở phiên bản mới nhất, an toàn và đầy đủ tính năng.",
    rules: [
      { title: "Version Check", desc: "Tự động so sánh Local version trong package.json với phiên bản trên NPM." },
      { title: "Safe Update", desc: "Luôn hỏi xác nhận và giải thích các thay đổi quan trọng trước khi nâng cấp." },
      { title: "Permission Check", desc: "Cảnh báo quyền Admin/Sudo nếu lệnh cài đặt global thất bại." }
    ],
    enforcement: [
      "Kích hoạt khi user hỏi 'update' hoặc 'phiên bản'",
      "Verify tính toàn vẹn của gói cài đặt sau khi update",
      "Hướng dẫn người dùng khởi động lại CLI sau khi hoàn tất"
    ],
    files: [".agent/rules/system-update.md", "package.json"]
  },

  "malware-protection": {
    id: "malware-protection",
    name: "Malware Protection",
    trigger: "always_on",
    icon: "🦠",
    purpose: "Ngăn chặn mã độc thâm nhập codebase và bảo vệ hệ thống khỏi các mối đe dọa từ bên thứ ba.",
    rules: [
      { title: "URL Verification", desc: "Không tin tưởng tuyệt đối vào các rút gọn link, kiểm tra danh tiếng domain." },
      { title: "Dependency Audit", desc: "Kiểm tra kỹ tên package (chống Typosquatting) và chạy npm audit định kỳ." },
      { title: "Link Scanning", desc: "Sử dụng malware-analyst skill để quét link và tìm dấu hiệu Punycode." },
      { title: "Incident Response", desc: "Cô lập hệ thống và thực hiện Rollback về commit sạch gần nhất khi phát hiện nhiễm độc." }
    ],
    enforcement: [
      "Tự động quét link và dependency khi thực hiện lệnh install/download",
      "Cảnh báo đỏ (RED ALERT) khi phát hiện dấu hiệu lừa đảo",
      "Sử dụng công cụ vulnerability-scanner để mapping bề mặt tấn công"
    ],
    files: [".agent/rules/malware-protection.md", ".agent/rules/security.md"],
    prohibited: [
      "Cài đặt các gói npm không rõ nguồn gốc",
      "Nhúng trực tiếp script từ các CDN lạ"
    ]
  },
};

// =============================================================================
// HƯỚNG DẪN SHARED MODULES CHI TIẾT
// =============================================================================
export const sharedModuleGuides = {
  "api-standards": {
    id: "api-standards",
    name: "API Standards",
    icon: "📡",
    status: "Interface Contract",
    description: "Tiêu chuẩn thiết kế API đồng bộ.",
    location: ".agent/.shared/api-standards/",
    purpose: "Định nghĩa luật giao tiếp API để đảm bảo sự đồng nhất giữa Frontend và Backend.",
    features: [
      "Endpoint naming conventions (Kebab-case)",
      "Standard RESTful response format",
      "Unified error codes and messages",
      "Pagination and sorting standards"
    ],
    guidelines: [
      "Luôn dùng Kebab-case cho URLs",
      "Sử dụng CamelCase cho keys trong JSON body",
      "Bắt buộc wrap kết quả trong { success, data, message }",
      "Không bao giờ trả về HTTP 200 cho các trường hợp lỗi"
    ],
    structure: `api-standards/
├── endpoints_naming.md   # Naming Conventions
├── pagination_sorting.md # Pagination & Sorting standards
├── data/
│   ├── response_format.json
│   └── error_codes.csv`,
    rules: [
      {
        name: "Endpoint Naming",
        rule: "Kebab-case URLs, CamelCase JSON keys",
        example: "GET /api/user-profiles → { firstName: 'John' }"
      },
      {
        name: "Response Format",
        rule: "Tất cả API trả về wrapped structure",
        example: "{ success: true, data: {...}, message: '...' }"
      }
    ]
  },

  "ai-master": {
    id: "ai-master",
    name: "AI Master",
    icon: "🧠",
    status: "Core Capability",
    description: "Module trí tuệ nhân tạo cốt lõi.",
    location: ".agent/.shared/ai-master/",
    purpose: "Cung cấp các mẫu prompt (Prompt Engineering) và cấu hình model chuẩn để tối ưu hóa khả năng suy luận của AI.",
    features: [
      "Prompt patterns (Chain of Thought, Few-shot)",
      "Model configurations (Gemini/GPT optimization)",
      "System instructions templates",
      "Reasoning loops definitions"
    ],
    guidelines: [
      "Luôn sử dụng cấu trúc CoT cho các task phức tạp",
      "Tối ưu token usage thông qua context management",
      "Đảm bảo nhân dạng Agent (Em yêu/Jarvis) nhất quán"
    ]
  },

  compliance: {
    id: "compliance",
    name: "Compliance Master",
    icon: "⚖️",
    status: "Regulatory Guard",
    description: "Quản lý tuân thủ pháp lý.",
    location: ".agent/.shared/compliance/",
    purpose: "Định nghĩa các tiêu chuẩn xử lý dữ liệu và tuân thủ các quy định pháp lý (GDPR, HIPAA).",
    features: [
      "GDPR Audit checklists",
      "PII Handling standards",
      "Data retention policies",
      "Consent management flows"
    ]
  },

  "database-master": {
    id: "database-master",
    name: "Database Master",
    icon: "🗄️",
    status: "Data Core",
    description: "Hạt nhân kiến trúc dữ liệu.",
    location: ".agent/.shared/database-master/",
    purpose: "Tập trung các mẫu thiết kế CSDL, chuẩn schema và chiến lược migration.",
    features: [
      "3NF Normalization standards",
      "Standard schemas for Auth/User",
      "Index optimization strategies",
      "Migration history & flow"
    ],
    guidelines: [
      "Mọi bảng phải có trường created_at và updated_at",
      "Sử dụng snake_case cho tên bảng và cột",
      "Phải có Foreign Key constraints cho tính toàn vẹn",
      "Tạo index cho các cột thường xuyên dùng trong WHERE/JOIN"
    ],
    structure: `database-master/
├── schemas/              # Standard Schemas
│   └── user_model.prisma
├── normalization.md      # 3NF Standards
└── checklists/
    └── index_audit.md`,
    rules: [
      { name: "3NF Normalization", desc: "Tuân thủ Third Normal Form" },
      { name: "Index Audit", desc: "Kiểm tra performance indexing" },
      { name: "Standard Schemas", desc: "Dùng templates cho user/auth models" }
    ]
  },

  "security-armor": {
    id: "security-armor",
    name: "Security Armor",
    icon: "🛡️",
    status: "Critical Defense",
    description: "Giáp bảo mật cho hệ thống.",
    location: ".agent/.shared/security-armor/",
    purpose: "Tiêu chuẩn bảo mật theo OWASP và best practices.",
    features: [
      "Vulnerability scan checklists",
      "Express/Next.js Helmet configurations",
      "Data encryption standards (AES-256)",
      "CORS & Rate limiting presets"
    ],
    guidelines: [
      "Chạy security scan trước mỗi lần release",
      "Không bao giờ log password hoặc tokens",
      "Sử dụng HTTPS mọi nơi",
      "Áp dụng nguyên tắc đặc quyền tối thiểu (POLP)"
    ],
    structure: `security-armor/
├── hardening.md          # Theoretical Hardening Guide
├── checklists/
│   └── vuln_scan.md      # Vulnerability Scan Checklist
└── presets/
    └── helmet_config.json`,
    usage: [
      "Pre-Deployment Audit: Chạy vuln_scan.md trước mỗi release",
      "Header Configuration: Copy helmet_config.json vào Express/Next.js middleware"
    ]
  },

  "domain-blueprints": {
    id: "domain-blueprints",
    name: "Domain Blueprints",
    icon: "🏗️",
    status: "Vertical Architecture",
    description: "Kiến trúc ngành chuyên biệt.",
    location: ".agent/.shared/domain-blueprints/",
    purpose: "Kiến trúc tham chiếu cho các ngành cụ thể.",
    features: [
      "Fintech/Banking architecture",
      "EdTech/LMS patterns",
      "E-commerce/Retail models",
      "Real Estate & CRM blueprints"
    ],
    guidelines: [
      "Chọn blueprint phù hợp trước khi code core logic",
      "Tuân thủ các technical notes đặc thù của ngành",
      "Kế thừa các API patterns đã được tối ưu",
      "Mở rộng blueprint theo yêu cầu cụ thể của dự án"
    ],
    industries: [
      {
        id: "fintech",
        name: "Fintech & Banking",
        icon: "🏦",
        features: [
          "Wallets & Accounts APIs",
          "Transaction processing",
          "eKYC integrated flow",
          "Audit logging (immutable logs)"
        ],
        technicalNotes: [
          "Dùng Idempotency-Key cho API thanh toán",
          "Redis Redlock cho distributed locking",
          "DECIMAL(20,4) cho số tiền, không dùng Float"
        ]
      },
      {
        id: "edtech",
        name: "EdTech & Learning",
        icon: "🎓",
        features: ["LMS architecture", "Course management", "Progress tracking", "Interactive Quizzes", "Video streaming integration"],
        technicalNotes: [
          "HLS/Dash cho video streaming",
          "WebSocket cho real-time quiz",
          "CDN caching cho static content"
        ]
      },
      {
        id: "retail_ecommerce",
        name: "Retail & E-commerce",
        icon: "🛒",
        features: ["Product catalog", "Shopping cart system", "Multi-provider Checkout", "Inventory sync", "Discount/Coupon engine"],
        technicalNotes: [
          "Optimistic UI cho giỏ hàng",
          "Elasticsearch cho tìm kiếm sản phẩm",
          "Stripe/Paypal integration patterns"
        ]
      },
      {
        id: "healthcare",
        name: "Healthcare & MedTech",
        icon: "🏥",
        features: ["Patient records (EHR)", "Appointment scheduling", "Telemedicine video calls", "Prescription management"],
        technicalNotes: [
          "Tuân thủ chuẩn HIPAA/GDPR",
          "Mã hóa dữ liệu tại chỗ (At-rest encryption)",
          "DICOM standards cho hình ảnh y tế"
        ]
      },
      {
         id: "fnb_restaurant",
         name: "F&B & Restaurant",
         icon: "🍽️",
         features: ["Menu management", "Real-time ordering", "Table reservation", "Kitchen Display System (KDS)"],
         technicalNotes: [
           "Real-time sync với Socket.io",
           "Offline mode cho POS tablet",
           "QR code ordering integration"
         ]
      },
      {
         id: "logistics",
         name: "Logistics & Supply Chain",
         icon: "🚚",
         features: ["Fleet management", "Real-time tracking", "Route optimization", "Warehouse management (WMS)"],
         technicalNotes: [
           "Google Maps Fleet Engine integration",
           "Geofencing cho warehouse",
           "IoT sensor data processing"
         ]
      },
      {
         id: "real_estate",
         name: "Real Estate & PropTech",
         icon: "🏠",
         features: ["Property listing", "3D Virtual Tours", "Lead management", "Smart contract integration"],
         technicalNotes: [
           "Tối ưu ảnh 360/Webp",
           "GIS mapping layers",
           "Automated notification system (SMS/Email)"
         ]
      },
      {
         id: "marketing_automation",
         name: "Marketing Automation",
         icon: "📣",
         features: ["Campaign management", "Customer segmentation", "Email/SMS automation", "Analytics dashboard"],
         technicalNotes: [
           "Worker pool cho mass mailing",
           "A/B Testing logic at edge",
           "Click-stream tracking data pipelines"
         ]
      },
      {
         id: "personal_branding",
         name: "Personal Branding",
         icon: "👤",
         features: ["Digital Portfolio", "Blog/Content engine", "Social proof integration", "Lead capture forms"],
         technicalNotes: [
           "Static Site Generation (SSG) for SEO",
           "Image optimization (Cloudinary/Vercel)",
           "Web Vitals perfect scores focus"
         ]
      },
      {
         id: "freelance_marketplace",
         name: "Freelance Marketplace",
         icon: "💼",
         features: ["Gig listing", "Escrow payment system", "Messaging system", "Rating & Review engine"],
         technicalNotes: [
           "Stripe Connect cho payout",
           "Notification middleware",
           "Dispute resolution workflow"
         ]
      },
      {
        id: "hospitality_tourism",
        name: "Hospitality & Tourism",
        icon: "🏨",
        features: ["Booking engine", "Dynamic pricing", "Tour management", "Review & Loyalty program"],
        technicalNotes: [
          "Rate limiting cho API booking",
          "Multi-currency support logic",
          "iCal sync cho availability"
        ]
      }
    ]
  },

  "ui-ux-pro-max": {
    id: "ui-ux-pro-max",
    name: "UI/UX Pro Max",
    icon: "💎",
    status: "Premium Design",
    description: "Thẩm mỹ thiết kế đỉnh cao.",
    location: ".agent/.shared/ui-ux-pro-max/",
    purpose: "Công cụ tạo design system nâng cao và lý luận thẩm mỹ.",
    features: [
      "50+ Modern Style Presets (Linear/Magic UI)",
      "21 Curated Color Palettes",
      "Automatic Design System Generator",
      "Aesthetic Reasoning Engine"
    ],
    guidelines: [
      "Xác định Visual Style trước khi bắt đầu design",
      "Dùng hệ thống màu HSL để đảm bảo tính nhất quán",
      "Tối ưu micro-interactions cho cảm giác cao cấp",
      "Đảm bảo Accessibility (WCAG 2.1) ngay từ đầu"
    ],
    structure: `ui-ux-pro-max/
├── scripts/
│   └── search.py         # Design System Generator
├── data/                 # Design Knowledge Graph
└── AESTHETICS.md         # Aesthetic principles`,
    capabilities: [
      "50+ style presets",
      "21 curated color palettes",
      "Design system generation từ keywords",
      "Aesthetic reasoning tools"
    ]
  },

  "design-philosophy": {
    id: "design-philosophy",
    name: "Design Philosophy",
    icon: "💭",
    status: "Creative Vision",
    description: "Triết lý và tuyên ngôn thiết kế của Antigravity.",
    location: ".agent/.shared/design-philosophy/",
    purpose: "Định hướng mọi quyết định thẩm mỹ và trải nghiệm người dùng theo một luồng nhất quán.",
    features: [
      "Design manifesto",
      "Aesthetic principles (Balance, Contrast, Rhythm)",
      "Creative guidelines for premium feeling"
    ]
  },

  "design-system": {
    id: "design-system",
    name: "Design System",
    icon: "🎨",
    status: "Visual Language",
    description: "Hệ thống ngôn ngữ hình ảnh thống nhất.",
    location: ".agent/.shared/design-system/",
    purpose: "Cung cấp các tokens và components cơ bản để xây dựng giao diện nhanh chóng.",
    features: ["Color tokens", "Typography presets", "Standard spacing scales", "Primitive components definitions"]
  },

  "dx-toolkit": {
    id: "dx-toolkit",
    name: "DX Toolkit",
    icon: "🔧",
    status: "Developer Experience",
    description: "Bộ công cụ nâng cao trải nghiệm nhà phát triển.",
    location: ".agent/.shared/dx-toolkit/",
    purpose: "Giảm thiểu gánh nặng thiết lập và tối ưu hóa quy trình làm việc hàng ngày.",
    features: ["Standard Linter configs", "Git hooks automation", "Code snippets library"]
  },

  "i18n-master": {
    id: "i18n-master",
    name: "I18n Master",
    icon: "🌍",
    status: "Internationalization",
    description: "Quản lý đa ngôn ngữ và bản địa hóa.",
    location: ".agent/.shared/i18n-master/",
    purpose: "Đảm bảo ứng dụng có thể mở rộng ra thị trường quốc tế dễ dàng.",
    features: ["Translation key patterns", "Locale switching logic", "Right-to-Left (RTL) support guidelines"]
  },

  "infra-blueprints": {
    id: "infra-blueprints",
    name: "Infra Blueprints",
    icon: "☁️",
    status: "Cloud Foundation",
    description: "Kiến trúc hạ tầng đám mây chuẩn.",
    location: ".agent/.shared/infra-blueprints/",
    purpose: "Cung cấp các mẫu thiết kế hạ tầng an toàn, sẵn sàng cho production.",
    features: ["Docker base images", "Kubernetes manifests templates", "Cloud-native networking patterns"]
  },

  "metrics": {
    id: "metrics",
    name: "Metrics",
    icon: "📊",
    status: "Observability",
    description: "Hệ thống đo lường và giám sát.",
    location: ".agent/.shared/metrics/",
    purpose: "Thu thập dữ liệu để đánh giá hiệu quả kỹ thuật và kinh doanh của sản phẩm.",
    features: ["Performance KPIs", "User behavior tracking events", "SRE golden signals setup"]
  },

  "resilience-patterns": {
    id: "resilience-patterns",
    name: "Resilience Patterns",
    icon: "🔄",
    status: "Fault Tolerance",
    description: "Các mẫu chịu lỗi và hồi phục hệ thống.",
    location: ".agent/.shared/resilience-patterns/",
    purpose: "Đảm bảo hệ thống vẫn hoạt động ổn định kể cả khi các thành phần phụ gặp sự cố.",
    features: ["Circuit Breaker configuration", "Retry & Backoff policies", "Fallback mechanisms"]
  },

  "seo-master": {
    id: "seo-master",
    name: "SEO Master",
    icon: "🔎",
    status: "Search Optimization",
    description: "Tối ưu hóa khả năng tìm kiếm nâng cao.",
    location: ".agent/.shared/seo-master/",
    purpose: "Đồng bộ kiến thức tối ưu hóa SEO trên toàn bộ codebase.",
    features: ["Meta tag strategies", "JSON-LD structured data templates", "Sitemap & Robots.txt generators"]
  },

  "testing-master": {
    id: "testing-master",
    name: "Testing Master",
    icon: "🧪",
    status: "Quality Assurance",
    description: "Hệ thống kiểm thử và đảm bảo chất lượng.",
    location: ".agent/.shared/testing-master/",
    purpose: "Định nghĩa quy trình QA chuẩn từ Unit test đến E2E.",
    features: ["Standard Test Plan templates", "Mocking strategies", "QA automation gates definitions"]
  },

  "vitals-templates": {
    id: "vitals-templates",
    name: "Vitals Templates",
    icon: "📋",
    status: "Documentation",
    description: "Bộ khung tài liệu kỹ thuật quan trọng.",
    location: ".agent/.shared/vitals-templates/",
    purpose: "Đảm bảo tính chuyên nghiệp và đầy đủ của các tài liệu dự án.",
    features: ["PRD templates", "System Architecture Design templates", "Audit report formats"]
  }
};

// =============================================================================
// CẤU TRÚC THƯ MỤC .AGENT
// =============================================================================
export const directoryStructure = {
  root: ".agent/",
  description: "Thư mục gốc chứa toàn bộ cấu hình và tri thức của Antigravity Agent",
  
  directories: [
    {
      path: ".agent/agents/",
      description: "23 Specialist Agents với định nghĩa vai trò và kỹ năng",
      fileCount: 23,
      examples: ["orchestrator.md", "frontend-specialist.md", "backend-specialist.md"]
    },
    {
      path: ".agent/skills/",
      description: "51 bộ kỹ năng chuyên sâu Agent có thể trang bị",
      fileCount: 51,
      examples: ["modern-web-architect/", "security-auditor/", "database-design/"]
    },
    {
      path: ".agent/workflows/",
      description: "21 quy trình slash command cho các tác vụ phổ biến",
      fileCount: 21,
      examples: ["plan.md", "create.md", "debug.md", "orchestrate.md"]
    },
    {
      path: ".agent/rules/",
      description: "12 quy tắc toàn cục kiểm soát hành vi Agent",
      fileCount: 12,
      examples: ["security.md", "error-logging.md", "malware-protection.md"]
    },
    {
      path: ".agent/.shared/",
      description: "17 DNA Modules - hạt nhân tri thức nền tảng",
      fileCount: 17,
      examples: ["api-standards/", "security-armor/", "domain-blueprints/"]
    },
    {
      path: ".agent/scripts/",
      description: "Scripts validation và automation",
      examples: ["update-docs.js", "checklist.py", "verify_all.py"]
    }
  ],
  
  coreFiles: [
    { file: "GEMINI.md", desc: "Bộ quy tắc chủ chốt, luôn được kích hoạt" },
    { file: "ARCHITECTURE.md", desc: "Tài liệu kiến trúc hệ thống" },
    { file: "CONCEPTS.md", desc: "Định nghĩa Rule, Skill, Workflow" },
    { file: "START_HERE.vi.md", desc: "Hướng dẫn bắt đầu nhanh" }
  ]
};
