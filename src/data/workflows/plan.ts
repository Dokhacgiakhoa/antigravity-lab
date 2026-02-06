export const planWorkflowData = {
    id: "plan",
    command: "/plan",
    title: "Lập Kế Hoạch Dự Án (VI)",
    title_En: "Project Planning",
    description: "Chưa biết bắt đầu từ đâu? Lập kế hoạch trước.",
    description_En: "Don't know where to start? Create a plan first.",
    icon: "📋",
    
    purpose: "Tạo file kế hoạch chi tiết trước khi code. Giúp phân rã task và định hướng rõ ràng.",
    purpose_En: "Create detailed plan file before coding. Helps break down tasks and clarify direction.",
    
    criticalRules: [
      "KHÔNG VIẾT CODE - Chỉ tạo file kế hoạch",
      "Sử dụng project-planner agent",
      "Hỏi làm rõ (Socratic Gate) trước khi lập kế hoạch",
      "Đặt tên file động theo nội dung task"
    ],
    criticalRules_En: [
      "DO NOT WRITE CODE - Only create plan file",
      "Use project-planner agent",
      "Ask for clarification (Socratic Gate) before planning",
      "Name file dynamically based on task content"
    ],
    
    steps: [
      { step: 1, title: "Phân tích yêu cầu", desc: "Hiểu rõ user muốn gì" },
      { step: 2, title: "Hỏi làm rõ", desc: "Socratic Gate - đặt câu hỏi nếu cần" },
      { step: 3, title: "Tạo PLAN.md", desc: "File kế hoạch tại docs/PLAN-{slug}.md" },
      { step: 4, title: "Báo cáo", desc: "Thông báo file đã tạo và bước tiếp theo" }
    ],
    steps_En: [
      { step: 1, title: "Analyze Requirements", desc: "Understand what user wants" },
      { step: 2, title: "Clarify", desc: "Socratic Gate - ask questions if needed" },
      { step: 3, title: "Create PLAN.md", desc: "Plan file at docs/PLAN-{slug}.md" },
      { step: 4, title: "Report", desc: "Notify file created and next steps" }
    ],
    
    output: {
      location: "docs/PLAN-{task-slug}.md",
      content: ["Task breakdown", "Agent assignments", "Verification checklist"]
    },
    output_En: {
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
};
