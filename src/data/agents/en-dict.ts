export const agentGuidesEn: Record<string, any> = {
  "orchestrator": {
    title: "Chief Orchestrator",
    description: "Master orchestrator agent - Coordinates specialized agents to solve complex tasks.",
    role: "Decompose tasks, select appropriate agents, coordinate execution, synthesize results.",
    workflowPhases: [
      { phase: 0, name: "Quick Context Check", desc: "Read plan files, ask if major ambiguity exists" },
      { phase: 1, name: "Decompose", desc: "Break down complex tasks into subtasks" },
      { phase: 2, name: "Select", desc: "Select suitable agents for each subtask" },
      { phase: 3, name: "Invoke", desc: "Invoke agents (parallel or sequential)" },
      { phase: 4, name: "Synthesize", desc: "Synthesize results into unified output" }
    ],
    checkpoints: [
      { name: "Plan Verification", check: "PLAN.md exists?", action: "If not → Create plan first" },
      { name: "Ambiguity Check", check: "Requirements clear?", action: "If not → Brainstorm" }
    ]
  },
  "quality-inspector": {
    title: "Quality Inspector",
    description: "Independent inspector, runs tests and verifies task success criteria.",
    role: "Verify code against initial requirements, run test suites, detect regressions, and evaluate clean code.",
    mindset: [
      "Trust but verify",
      "Edge cases are where bugs hide",
      "Documentation must match reality",
      "User objective is the ultimate success metric"
    ]
  },
  "project-planner": {
    title: "Project Planning Expert",
    description: "Strategic architect, breaking down user requirements into executable tasks.",
    role: "Analyze requirements, determine tech stack, design file structure, and assign agents."
  },
  "product-manager": {
    title: "Product Manager",
    description: "Product direction and Requirements Management.",
    role: "Define MVP, manage backlog, and ensure product solves user problems."
  },
  "product-owner": {
    title: "Product Owner",
    description: "Representative of user and stakeholder interests.",
    role: "Prioritize backlog, approve completed features, and ensure business value."
  },
  "cloud-architect": {
    title: "Cloud Architect",
    description: "Design and optimize cloud infrastructure for stability and scalability.",
    role: "Design network topology, configure auto-scaling, and optimize infrastructure costs."
  },
  "game-developer": {
    title: "Game Developer",
    description: "Expert in game development and highly interactive applications.",
    role: "Build game logic, handle collisions, optimize graphics and gameplay feel."
  },
  "penetration-tester": {
    title: "Penetration Tester",
    description: "Conduct offensive testing to find potential system vulnerabilities.",
    role: "Simulate real-world attacks, exploit vulnerabilities, and propose patches."
  },
  "qa-automation-engineer": {
    title: "QA Automation Engineer",
    description: "Automate testing processes to ensure continuous software quality.",
    role: "Build test frameworks, write test scripts, and integrate into CI/CD."
  },
  "performance-optimizer": {
    title: "Performance Optimizer",
    description: "Ideally find and resolve system performance bottlenecks.",
    role: "Profile source code, optimize database queries, and reduce response latency."
  },
  "documentation-writer": {
    title: "Documentation Specialist",
    description: "Ensure all technical knowledge is documented clearly and understandably.",
    role: "Write READMEs, API docs, usage guides, and architecture documentation."
  },
  "seo-specialist": {
    title: "SEO Specialist",
    description: "Optimize application visibility on search engines.",
    role: "Optimize On-page, structured data (Schema.org), and Core Web Vitals."
  },
  "codebase-expert": {
    title: "Codebase Expert",
    description: "Deep understanding of the entire project structure and logic.",
    role: "Analyze impact of changes, advise on file structure and code architecture."
  },
  "code-archaeologist": {
    title: "Code Archaeologist",
    description: "Discover original intent of legacy or complex code.",
    role: "Trace commit history, analyze legacy logic, and support safe refactoring."
  },
  "explorer-agent": {
    title: "Explorer Agent",
    description: "Research new technologies and find optimal solutions.",
    role: "R&D, find suitable libraries, and propose new approaches."
  },
  "frontend-specialist": {
    title: "Frontend Specialist",
    description: "Frontend expert building React/Next.js systems with performance-first mindset.",
    role: "Build UI components, manage client state, optimization rendering."
  },
  "backend-specialist": {
    title: "Backend Specialist",
    description: "Backend expert building APIs, server logic, and system architecture.",
    role: "Design APIs, integrate databases, handle auth, and ensure server performance."
  },
  "security-auditor": {
    title: "Security Auditor",
    description: "Security auditing per OWASP standards, detecting and patching vulnerabilities.",
    role: "Scan code for vulnerabilities, verify security compliance, and advise on fixes."
  },
  "database-architect": {
    title: "Database Architect",
    description: "Design schemas, optimize queries, and manage migrations.",
    role: "Design DB schema (3NF), optimize indexes, manage migrations (ORM/SQL)."
  },
  "test-engineer": {
    title: "Test Engineer",
    description: "Build testing infrastructure and ensure code quality.",
    role: "Write unit/integration/E2E tests and maintain test suites."
  },
  "devops-engineer": {
    title: "DevOps Engineer",
    description: "CI/CD, containerization, deployment, and infrastructure.",
    role: "Manage pipelines, Docker/K8s, cloud platforms, and monitoring."
  },
  "debugger": {
    title: "Debugger",
    description: "Troubleshoot issues and perform hotfixes.",
    role: "Investigate bugs, analyze logs, formulate hypotheses, and fix root causes."
  },
  "mobile-developer": {
    title: "Mobile Developer",
    description: "Expert in multi-platform (React Native, Flutter) or Native mobile apps.",
    role: "Build mobile apps, optimize touch experience, manage offline state and native features."
  }
};
