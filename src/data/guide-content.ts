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
  }
};

// =============================================================================
// HƯỚNG DẪN RULES CHI TIẾT
// =============================================================================
export const ruleGuides = {
  security: {
    id: "security",
    name: "Security Guardrails",
    trigger: "always_on",
    icon: "🔒",
    
    purpose: "Bảo vệ hệ thống khỏi các lỗ hổng phổ biến và sai sót của con người.",
    
    forbiddenActions: [
      {
        action: "Hardcode Secrets",
        desc: "Không viết API Key, Password, Token trực tiếp vào code",
        solution: "Sử dụng process.env hoặc biến môi trường"
      },
      {
        action: "Commit Token",
        desc: "Không commit file chứa secrets",
        solution: "Đảm bảo .env nằm trong .gitignore"
      },
      {
        action: "Delete Database",
        desc: "Không chạy DROP TABLE hoặc xóa file database",
        solution: "Yêu cầu xác nhận rõ ràng từ user"
      }
    ],
    
    codingStandards: [
      {
        threat: "SQL Injection",
        prevention: "Sử dụng Parameterized Queries hoặc ORM (Prisma/TypeORM)"
      },
      {
        threat: "XSS",
        prevention: "Sanitize input với dompurify khi render HTML"
      },
      {
        threat: "Password Leak",
        prevention: "Luôn hash mật khẩu với Bcrypt/Argon2"
      }
    ],
    
    incidentProtocol: [
      { step: 1, action: "DỪNG", desc: "Ngừng mọi tác vụ hiện tại" },
      { step: 2, action: "BÁO CÁO", desc: "Thông báo user bằng RED ALERT" },
      { step: 3, action: "KHẮC PHỤC", desc: "Đề xuất xoay key hoặc vá lỗi" }
    ]
  },

  "error-logging": {
    id: "error-logging",
    name: "Error Logging",
    trigger: "always_on",
    icon: "📝",
    
    purpose: "Ghi lại mọi lỗi xảy ra để học hỏi và cải thiện.",
    
    whenToLog: [
      "Lỗi cú pháp (Syntax Error)",
      "Lỗi logic (Logic Error)",
      "Lỗi tích hợp (Integration Error)",
      "Lỗi runtime"
    ],
    
    format: `## [YYYY-MM-DD HH:MM] - Tiêu đề Lỗi

- **Type**: [Syntax/Logic/Integration/Runtime]
- **Severity**: [Low/Medium/High/Critical]
- **File**: \`path/to/file.extension:line_number\`
- **Root Cause**: Mô tả nguyên nhân
- **Fix Applied**: Hành động đã thực hiện
- **Prevention**: Cách tránh lặp lại
- **Status**: [Fixed/Investigating/Deferred]`,
    
    location: "ERRORS.md (thư mục gốc dự án)"
  },

  "malware-protection": {
    id: "malware-protection",
    name: "Malware Protection",
    trigger: "always_on",
    icon: "🦠",
    
    purpose: "Ngăn chặn mã độc và bảo vệ khỏi link độc hại.",
    
    rules: [
      {
        category: "URL Verification",
        items: [
          "Không tin tưởng rút gọn link (bit.ly, t.co)",
          "Kiểm tra danh tiếng domain trước khi nhúng"
        ]
      },
      {
        category: "Dependency Audit",
        items: [
          "Kiểm tra typosquatting (react-dom vs react-dim)",
          "Chạy npm audit định kỳ",
          "Chỉ dùng thư viện có cộng đồng lớn"
        ]
      },
      {
        category: "Link Scanning",
        items: [
          "Dùng malware-analyst skill để quét link",
          "Tìm dấu hiệu Punycode (googIe.com)",
          "Cảnh báo user nếu phát hiện link nghi ngờ"
        ]
      }
    ]
  }
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
    
    purpose: "Định nghĩa luật giao tiếp API để đảm bảo sự đồng nhất giữa Frontend và Backend.",
    
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

  "database-master": {
    id: "database-master",
    name: "Database Master",
    icon: "🗄️",
    status: "Data Core",
    
    purpose: "Tập trung các mẫu thiết kế CSDL, chuẩn schema và chiến lược migration.",
    
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
    
    purpose: "Tiêu chuẩn bảo mật theo OWASP và best practices.",
    
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
    
    purpose: "Kiến trúc tham chiếu cho các ngành cụ thể.",
    
    industries: [
      {
        id: "fintech",
        name: "Fintech & Banking",
        icon: "🏦",
        features: [
          "Wallets & Accounts APIs",
          "Transaction processing",
          "eKYC flow",
          "Audit logging (immutable)"
        ],
        technicalNotes: [
          "Dùng Idempotency-Key cho API thanh toán",
          "Redis Redlock cho distributed locking",
          "DECIMAL(20,4) cho số tiền, không dùng Float"
        ]
      },
      {
        id: "edtech",
        name: "EdTech",
        icon: "🎓",
        features: ["LMS", "Course management", "Progress tracking", "Quizzes"]
      },
      {
        id: "ecommerce",
        name: "E-commerce",
        icon: "🛒",
        features: ["Product catalog", "Shopping cart", "Checkout", "Inventory"]
      }
    ]
  },

  "ui-ux-pro-max": {
    id: "ui-ux-pro-max",
    name: "UI/UX Pro Max",
    icon: "💎",
    status: "Premium Design",
    
    purpose: "Công cụ tạo design system nâng cao và lý luận thẩm mỹ.",
    
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
