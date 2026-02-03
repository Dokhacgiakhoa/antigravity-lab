import { Book, Users, Zap, Workflow, Share2, Rocket, FileText } from "lucide-react";

export const navigation = {
  mainDetails: [
    { name: "Trang chủ", href: "/" },
    { name: "Cài đặt", href: "/tutorial" },
    { 
      name: "Hướng dẫn", 
      href: "/guide",
      children: [
        { name: "Rules", href: "/guide/rules", desc: "Quy tắc vận hành", icon: Book },
        { name: "Agents", href: "/guide/agents", desc: "Nhân sự AI", icon: Users },
        { name: "Skills", href: "/guide/skills", desc: "Thư viện kỹ năng", icon: Zap },
        { name: "Workflows", href: "/guide/workflows", desc: "Quy trình", icon: Workflow },
        { name: ".shared", href: "/guide/shared", desc: "DNA hệ thống", icon: Share2 },
      ]
    },
    { name: "Thuật ngữ", href: "/dictionaries" },
  ],
  footer: [
    {
      title: "Hệ thống",
      links: [
        { name: "Trang chủ", href: "/" },
        { name: "Cài đặt", href: "/tutorial" },
        { name: "Phiên bản v4.0", href: "https://github.com/Dokhacgiakhoa/google-antigravity/releases" },
      ]
    },
    {
      title: "Tài liệu",
      links: [
        { name: "Rules", href: "/guide/rules" },
        { name: "Skills", href: "/guide/skills" },
        { name: "Workflows", href: "/guide/workflows" },
      ]
    },
    {
      title: "Cộng đồng",
      links: [
        { name: "GitHub", href: "https://github.com/Dokhacgiakhoa/google-antigravity" },
        { name: "Discord", href: "#" },
      ]
    }
  ]
};
