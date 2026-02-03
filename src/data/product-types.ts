import { Layout, Terminal, Bot, PenTool } from "lucide-react";

export const productTypes = [
  {
    id: "user-app",
    title: "User Application",
    desc: "Xây dựng Web/Mobile App trọn gói cho người dùng cuối.",
    icon: Layout,
    activeSkills: ["Frontend Design", "Backend API", "User Auth", "Payment"],
    color: "blue"
  },
  {
    id: "dev-tool",
    title: "Developer Tool",
    desc: "Phát triển CLI, Library, SDK hoặc API Service.",
    icon: Terminal,
    activeSkills: ["DevOps", "Testing", "Documentation", "CI/CD"],
    color: "red"
  },
  {
    id: "ai-agent",
    title: "AI Agent",
    desc: "Tạo Chatbot, RAG Systems hoặc Automation Bots.",
    icon: Bot,
    activeSkills: ["Python", "LangChain", "Vector DB", "Prompt Eng"],
    color: "yellow"
  },
  {
    id: "digital-asset",
    title: "Digital Asset",
    desc: "Thiết kế Game Assets, Template hoặc Media Content.",
    icon: PenTool,
    activeSkills: ["SEO", "UI/UX", "Content Strategy", "Asset Gen"],
    color: "green"
  }
];
