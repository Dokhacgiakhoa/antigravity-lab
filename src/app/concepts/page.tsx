"use client";

import { useState } from "react";
import { 
  BookOpen, Search, Sparkles, ArrowRight,
  Cpu, Layers, MessageSquare, Zap, Terminal, Globe, Shield, Activity
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Data Structure
const TERMS_DATA = [
  {
    category: "Core Concepts",
    icon: <Sparkles className="h-4 w-4" />,
    items: [
      { id: "agent", term: "Agent", desc: "Thực thể AI tự chủ có khả năng nhận thức, lập kế hoạch và thực thi tác vụ. Không giống Chatbot chỉ trả lời câu hỏi, Agent có thể thao tác trực tiếp với file và hệ thống.", icon: <Cpu /> },
      { id: "skill", term: "Skill", desc: "Module chức năng mở rộng cho Agent. Ví dụ: 'Clean Code Skill' giúp Agent biết cách tối ưu hóa mã nguồn, 'Browser Skill' giúp Agent điều khiển trình duyệt.", icon: <Zap /> },
      { id: "workflow", term: "Workflow", desc: "Quy trình làm việc được chuẩn hóa thành chuỗi các bước. Workflow giúp Agent giải quyết các tác vụ phức tạp một cách nhất quán (VD: Deploy, Test).", icon: <ArrowRight /> },
      { id: "artifact", term: "Artifact", desc: "Sản phẩm đầu ra hữu hình do Agent tạo ra trong quá trình làm việc, có thể là file code, biểu đồ, giao diện UI hoặc tài liệu thiết kế.", icon: <Layers /> },
      { id: "workspace", term: "Workspace", desc: "Không gian làm việc chứa toàn bộ mã nguồn, tài liệu và cấu hình của dự án. Agent hoạt động trong phạm vi Workspace này.", icon: <Terminal /> },
      { id: "context", term: "Context", desc: "Ngữ cảnh toàn cục của dự án mà Agent nắm giữ, bao gồm cấu trúc file, các thư viện đang dùng và mục tiêu của người dùng.", icon: <BookOpen /> }
    ]
  },
  {
    category: "Roles",
    icon: <MessageSquare className="h-4 w-4" />,
    items: [
      { id: "product-manager", term: "Product Manager", desc: "Agent chịu trách nhiệm phân tích yêu cầu, xác định user stories và lên kế hoạch phát triển sản phẩm.", icon: <MessageSquare /> },
      { id: "frontend-specialist", term: "Frontend Specialist", desc: "Chuyên gia về UI/UX, React, CSS và Animation. Chịu trách nhiệm về giao diện người dùng.", icon: <Globe /> },
      { id: "backend-specialist", term: "Backend Specialist", desc: "Chuyên gia về API, Database, Server logic và bảo mật hệ thống.", icon: <Terminal /> },
      { id: "devops-engineer", term: "DevOps Engineer", desc: "Chịu trách nhiệm về quy trình CI/CD, deployment, Docker và hạ tầng server.", icon: <Activity /> },
      { id: "qa-engineer", term: "QA Engineer", desc: "Phụ trách kiểm thử tự động, viết test case và đảm bảo chất lượng phần mềm.", icon: <Shield /> }
    ]
  },
  {
    category: "Technologies",
    icon: <Cpu className="h-4 w-4" />,
    items: [
      { id: "intelligent-routing", term: "Intelligent Routing", desc: "Hệ thống định tuyến thông minh, tự động phân tích câu lệnh của người dùng để gọi đúng Agent chuyên gia phù hợp.", icon: <ArrowRight /> },
      { id: "socratic-gate", term: "Socratic Gate", desc: "Cơ chế 'Hỏi ngược lại' của Agent. Thay vì làm ngay, Agent sẽ hỏi để làm rõ các yêu cầu mơ hồ, giúp giảm thiểu sai sót.", icon: <MessageSquare /> },
      { id: "mcp", term: "MCP (Model Context Protocol)", desc: "Giao thức chuẩn giúp Agent kết nối và tương tác với các công cụ bên ngoài (Database, GitHub, Slack) một cách an toàn.", icon: <Layers /> },
      { id: "rag", term: "RAG", desc: "Retrieval-Augmented Generation - Kỹ thuật giúp Agent tìm kiếm và tham chiếu thông tin từ tài liệu dự án để đưa ra câu trả lời chính xác hơn.", icon: <BookOpen /> }
    ]
  },
  {
    category: "Workflows",
    icon: <ArrowRight className="h-4 w-4" />,
    items: [
      { id: "plan", term: "/plan", desc: "Lệnh kích hoạt quy trình lập kế hoạch. Agent sẽ phân tích yêu cầu và tạo ra file kế hoạch chi tiết trước khi code.", icon: <BookOpen /> },
      { id: "brainstorm", term: "/brainstorm", desc: "Quy trình tư duy mở, Agent sẽ đưa ra nhiều giải pháp khác nhau cho một vấn đề để người dùng lựa chọn.", icon: <Sparkles /> },
      { id: "deploy", term: "/deploy", desc: "Quy trình đưa ứng dụng lên môi trường Production, bao gồm các bước build, test và push code.", icon: <Activity /> },
      { id: "debug", term: "/debug", desc: "Quy trình tìm và sửa lỗi. Agent sẽ phân tích stack trace, log để tìm nguyên nhân gốc rễ (Root Cause).", icon: <Terminal /> }
    ]
  }
];

export default function ConceptsPage() {
  const [activeId, setActiveId] = useState("agent");
  const [searchQuery, setSearchQuery] = useState("");

  // Flatten items for easier searching/finding
  const allItems = TERMS_DATA.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })));
  const activeItem = allItems.find(item => item.id === activeId) || allItems[0];

  // Filter for search
  const filteredGroups = TERMS_DATA.map(group => ({
    ...group,
    items: group.items.filter(item => 
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  return (
    <div className="page-container mt-24 space-y-12 pb-24 h-[calc(100vh-6rem)] min-h-[800px] flex flex-col">
      {/* Search Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/5">
        <div>
           <div className="flex items-center gap-3 mb-2">
             <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <BookOpen className="h-5 w-5" />
             </div>
             <h1 className="text-3xl font-black text-white">Glossary</h1>
           </div>
           <p className="text-white/40">Tra cứu thuật ngữ và khái niệm trong hệ thống AntiGravity.</p>
        </div>

        <div className="relative group w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 group-focus-within:text-emerald-400 transition-colors" />
          <input 
            type="text" 
            placeholder="Tìm kiếm thuật ngữ..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-emerald-500/50 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex-1 grid md:grid-cols-12 gap-8 min-h-0">
        {/* Left Sidebar - Scrollable List */}
        <div className="md:col-span-4 lg:col-span-3 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
          {filteredGroups.length === 0 ? (
             <p className="text-white/30 text-center py-8">Không tìm thấy kết quả.</p>
          ) : (
            filteredGroups.map((group, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xs font-bold text-white/30 uppercase tracking-widest flex items-center gap-2 pl-2">
                  {group.icon} {group.category}
                </h3>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveId(item.id)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-medium flex items-center justify-between group",
                        activeId === item.id 
                          ? "bg-emerald-500 text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]" 
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {item.term}
                      {activeId === item.id && <ArrowRight className="h-4 w-4" />}
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Content - Sticky Detail View */}
        <div className="md:col-span-8 lg:col-span-9 h-full">
           <AnimatePresence mode="wait">
             <motion.div 
               key={activeItem.id}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.2 }}
               className="h-full"
             >
                <div className="card-glass p-8 md:p-12 h-full flex flex-col items-start gap-8 relative overflow-hidden border-emerald-500/10">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />
                  
                  <div className="w-full flex items-start justify-between">
                     <div className="space-y-6 relative z-10 w-full">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40">
                          {activeItem.category}
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-black text-white">{activeItem.term}</h2>
                        
                        <div className="h-px w-24 bg-gradient-to-r from-emerald-500 to-transparent" />
                        
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-3xl">
                          {activeItem.desc}
                        </p>
                     </div>

                     <div className="hidden md:flex flex-shrink-0 w-32 h-32 rounded-[2rem] bg-white/5 border border-white/10 items-center justify-center text-emerald-400">
                        <div className="scale-[2]">
                          {activeItem.icon}
                        </div>
                     </div>
                  </div>

                  <div className="mt-auto w-full pt-12 border-t border-white/5">
                     <p className="text-white/20 text-xs font-mono">ID: {activeItem.id}</p>
                  </div>
                </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
