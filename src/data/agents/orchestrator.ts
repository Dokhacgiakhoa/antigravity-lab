export const orchestratorAgentData = {
    id: "orchestrator",
    name: "Orchestrator",
    title: "Điều Phối Tổng",
    title_En: "Chief Orchestrator",
    icon: "🎯",
    category: "command",
    
    description: "Master orchestrator agent - Điều phối nhiều agent chuyên biệt để giải quyết các task phức tạp.",
    description_En: "Master orchestrator agent - Coordinates specialized agents to solve complex tasks.",
    
    role: "Phân rã task, chọn agent phù hợp, điều phối thực thi, tổng hợp kết quả.",
    role_En: "Decompose tasks, select appropriate agents, coordinate execution, synthesize results.",
    
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
    workflowPhases_En: [
      {
        phase: 0,
        name: "Quick Context Check",
        desc: "Read plan files, ask if major ambiguity exists"
      },
      {
        phase: 1,
        name: "Decompose",
        desc: "Break down complex tasks into subtasks"
      },
      {
        phase: 2,
        name: "Select",
        desc: "Select suitable agents for each subtask"
      },
      {
        phase: 3,
        name: "Invoke",
        desc: "Invoke agents (parallel or sequential)"
      },
      {
        phase: 4,
        name: "Synthesize",
        desc: "Synthesize results into unified output"
      }
    ],
    
    checkpoints: [
      {
        name: "Plan Verification",
        check: "PLAN.md exists?",
        action: "Nếu không → Tạo plan trước"
      },
      {
        name: "Ambiguity Check",
        check: "Requirements clear?",
        action: "Nếu không → Brainstorm"
      }
    ],
    checkpoints_En: [
      {
        name: "Plan Verification",
        check: "PLAN.md exists?",
        action: "If not → Create plan first"
      },
      {
        name: "Ambiguity Check",
        check: "Requirements clear?",
        action: "If not → Brainstorm"
      }
    ]
};
