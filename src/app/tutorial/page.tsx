"use client";

import { useState } from "react";
import { 
  Download, Settings, User, Palette, Cpu, Monitor, Globe, FileText, 
  CheckCircle, AlertCircle, Info, Zap, Chrome, Terminal, Rocket,
  ArrowRight, ShieldCheck, Laptop, ChevronRight, PlayCircle, Brain,
  Layers, Database, Sparkles, Bot
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WorkflowExplorer from "./WorkflowExplorer";
import { TerminalBlock } from "@/components/ui/terminal-block";
import { cn } from "@/lib/utils";

export default function TutorialPage() {
  return (
    <div className="page-container mt-8 space-y-12 pb-16">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 bg-[#FCD34D]/10 border border-[#FCD34D]/20 px-6 py-2 rounded-full text-[#FCD34D] text-xs font-black tracking-widest uppercase"
        >
          <Rocket className="h-4 w-4" />
          Quy trình cài đặt
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          Cài đặt <span className="text-white">& Cấu hình</span>
        </h1>
        
        <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Từng bước cài đặt và cấu hình môi trường phát triển Google AntiGravity.
        </p>
      </section>

      {/* Steps Timeline */}
      <div className="relative w-full mx-auto space-y-4">
        
           <div className="relative z-10 pt-4 pb-1 text-center">
             <div className="inline-block px-6 py-2 rounded-full bg-rose-500/10 text-rose-400 text-base font-black uppercase tracking-widest border border-rose-500/20 mb-3">Phase 1</div>
             <h2 className="text-3xl md:text-4xl font-black text-rose-400 italic uppercase tracking-tighter leading-none mb-2">Cài đặt Google AntiGravity</h2>
             <p className="text-white/70 text-lg leading-normal font-light max-w-xl mx-auto">
               Lựa chọn phiên bản phù hợp với hệ điều hành của bạn để bắt đầu.
             </p>
          </div>

        {/* Step 1: Download IDE */}
        <section className="space-y-6 relative">

          <div className="grid md:grid-cols-3 gap-6">
            <OSCard 
              icon={<Monitor className="text-cyan-400 h-8 w-8" />} 
              name="Windows" 
              color="cyan" 
              steps={["Universal Windows Platform", "64-bit Architecture", "Windows AI Ready"]}
              downloads={[
                { label: "Tải bộ cài .exe", url: "#" },
                { label: "Portable (.zip)", url: "#" }
              ]}
            />
            <OSCard 
              icon={<Laptop className="text-[#FCD34D] h-8 w-8" />} 
              name="macOS" 
              color="gold" 
              steps={["Apple Silicon (M1/M2/M3)", "Intel Chip Architecture", "Signed & Notarized"]}
              downloads={[
                { label: "Download .dmg", url: "#" }
              ]}
            />
            <OSCard 
              icon={<Globe className="text-emerald-500 h-8 w-8" />} 
              name="Linux" 
              color="emerald" 
              steps={["AppImage Portable", "Debian Package (.deb)", "RPM Package (.rpm)"]}
              downloads={[
                { label: "Download AppImage", url: "#" }
              ]}
            />
          </div>
          
          {/* Screenshot Preview */}
          <div className="mt-6 relative rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-rose-500/5">
            <Image 
              src="/antigravity-ide.png"
              alt="Google Antigravity IDE Interface"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent pointer-events-none" />
          </div>
        </section>

         {/* Phase 2 Header */}
         <div className="text-center space-y-3 pt-8 border-t border-white/5">
           <div className="inline-block px-6 py-2 rounded-full bg-amber-500/10 text-amber-400 text-base font-black uppercase tracking-widest border border-amber-500/20">Phase 2</div>
           <h2 className="text-3xl md:text-4xl font-black text-amber-400 italic uppercase tracking-tighter">Khởi tạo & Cấu hình</h2>
         </div>

        {/* Step 2: Khởi tạo Project */}
        <section className="space-y-6">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-amber-400 italic uppercase leading-tight">Khởi tạo Project</h3>
            <p className="text-white/40 text-base leading-relaxed font-light mt-2 max-w-2xl">
              Chọn phương thức phù hợp với trạng thái dự án của bạn để nạp hệ điều hành Antigravity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
             {/* Way 01 - Emerald (Fresh Start) */}
             <div className="space-y-6 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500/10 transition-all flex flex-col h-full">
                <div className="space-y-4 flex-grow">
                   <div className="px-3 py-1 inline-block rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-black border border-emerald-500/30 uppercase tracking-tighter">Cách 01</div>
                   <div>
                      <h4 className="text-emerald-400 font-black text-xl italic uppercase tracking-tight mb-2">Dự án mới</h4>
                      <p className="text-white/60 text-sm font-medium leading-relaxed">Lý tưởng khi bắt đầu từ con số 0. Tự động cấu trúc thư mục & .agent</p>
                   </div>
                </div>
                <TerminalBlock command="npx antigravity-ide my_project" />
             </div>

             {/* Way 02 - Sky (Modern Integration) */}
             <div className="space-y-6 p-8 rounded-3xl bg-sky-500/5 border border-sky-500/10 hover:bg-sky-500/10 transition-all flex flex-col h-full">
                <div className="space-y-4 flex-grow">
                   <div className="px-3 py-1 inline-block rounded-full bg-sky-500/20 text-sky-400 font-mono text-xs font-black border border-sky-500/30 uppercase tracking-tighter">Cách 02</div>
                   <div>
                      <h4 className="text-sky-400 font-black text-xl italic uppercase tracking-tight mb-2">Tích hợp sẵn</h4>
                      <p className="text-white/60 text-sm font-medium leading-relaxed">Nạp Brain vào dự án hiện tại mà không làm ảnh hưởng đến code cũ.</p>
                   </div>
                </div>
                <TerminalBlock command="npx antigravity-ide" />
             </div>

             {/* Way 03 - Amber (Maintenance) */}
             <div className="space-y-6 p-8 rounded-3xl bg-amber-500/5 border border-amber-500/10 hover:bg-amber-500/10 transition-all flex flex-col h-full">
                <div className="space-y-4 flex-grow">
                   <div className="px-3 py-1 inline-block rounded-full bg-amber-500/20 text-amber-400 font-mono text-xs font-black border border-amber-500/30 uppercase tracking-tighter">Cách 03</div>
                   <div>
                      <h4 className="text-amber-400 font-black text-xl italic uppercase tracking-tight mb-2">Cập nhật</h4>
                      <p className="text-white/60 text-sm font-medium leading-relaxed">Đồng bộ Skill & Rule mới nhất từ Cloud Antigravity.</p>
                   </div>
                </div>
                <TerminalBlock command="npx antigravity-ide update" />
             </div>
          </div>
        </section>


        {/* Full Width Setup Wizard Section Content */}
        <section className="py-8 border-t border-white/5">
           <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 bg-clip-text text-transparent italic uppercase leading-tight">Vận hành Setup Wizard</h3>
              <p className="text-white/70 text-lg font-light leading-normal mt-2 max-w-xl mx-auto">
                 Trải nghiệm quy trình thiết lập trợ lý AI ngay tại đây.
              </p>
           </div>
           
           {/* Creative Roadmap Timeline Design */}
           <div className="relative">
              {/* Main Timeline Track */}
              <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-[90%] h-2 rounded-full bg-gradient-to-r from-rose-600 via-amber-500 via-emerald-500 to-sky-500 shadow-lg" />
              
              {/* Animated Glow Effect */}
              <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-[90%] h-2 rounded-full bg-gradient-to-r from-rose-600 via-amber-500 via-emerald-500 to-sky-500 blur-md opacity-50" />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                 {/* Step 01 - Bold Card */}
                 <div className="group relative">
                    {/* Giant Number */}
                    <div className="absolute -top-2 -left-2 w-16 h-16 rounded-2xl bg-rose-600 flex items-center justify-center shadow-2xl shadow-rose-500/50 z-20 rotate-[-6deg] group-hover:rotate-0 transition-transform">
                       <span className="text-white font-black text-3xl">B1</span>
                    </div>
                    
                    <div className="bg-[#0a0f1a] border-2 border-rose-500/40 rounded-3xl p-6 pt-16 h-full backdrop-blur-xl shadow-2xl shadow-rose-500/10 group-hover:border-rose-400 group-hover:shadow-rose-500/30 transition-all">
                       <h4 className="text-rose-400 font-black text-xl uppercase tracking-wider mb-4">Chọn Ngôn Ngữ</h4>
                       <p className="text-white/50 text-sm mb-5">Chọn ngôn ngữ giao tiếp của AI Agent</p>
                       
                       <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-rose-500/20 border border-rose-500/30">
                             <div className="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center shrink-0">
                                <span className="text-black font-black text-sm">VI</span>
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">Tiếng Việt</span>
                                <span className="text-white/60 text-xs">Comment & giải thích bằng tiếng Việt</span>
                             </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-rose-500/20 border border-rose-500/30">
                             <div className="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center shrink-0">
                                <span className="text-black font-black text-sm">EN</span>
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">English</span>
                                <span className="text-white/60 text-xs">Chuẩn quốc tế, Open Source</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Step 02 - Bold Card */}
                 <div className="group relative lg:mt-12">
                    <div className="absolute -top-2 -left-2 w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center shadow-2xl shadow-amber-500/50 z-20 rotate-[6deg] group-hover:rotate-0 transition-transform">
                       <span className="text-black font-black text-3xl">B2</span>
                    </div>
                    
                    <div className="bg-[#0a0f1a] border-2 border-amber-500/40 rounded-3xl p-6 pt-16 h-full backdrop-blur-xl shadow-2xl shadow-amber-500/10 group-hover:border-amber-400 group-hover:shadow-amber-500/30 transition-all">
                       <h4 className="text-amber-400 font-black text-xl uppercase tracking-wider mb-4">Chọn Quy Mô</h4>
                       <p className="text-white/50 text-sm mb-5">Chế độ vận hành thích ứng theo quy mô</p>
                       
                       <div className="space-y-3">
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/20 border border-amber-500/30">
                             <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                                <User className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">👤 Cá nhân</span>
                                <span className="text-white/60 text-xs leading-relaxed block mt-1">Tối ưu tốc độ. Agent đa nhiệm xử lý mọi domain. Ít bước xác nhận, code nhanh chóng.</span>
                             </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/20 border border-amber-500/30">
                             <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                                <Layers className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">👥 Team</span>
                                <span className="text-white/60 text-xs leading-relaxed block mt-1">Cân bằng tốc độ và chất lượng. Cần Plan trước khi code. Các Agent chuyên biệt hóa theo vai trò.</span>
                             </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/20 border border-amber-500/30">
                             <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                                <ShieldCheck className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">🏢 Doanh nghiệp</span>
                                <span className="text-white/60 text-xs leading-relaxed block mt-1">Chuẩn hóa Enterprise. Bắt buộc Audit bảo mật, kiểm soát chất lượng 100% trước khi deploy.</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Step 03 - Bold Card */}
                 <div className="group relative">
                    <div className="absolute -top-2 -left-2 w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-2xl shadow-emerald-500/50 z-20 rotate-[-6deg] group-hover:rotate-0 transition-transform">
                       <span className="text-black font-black text-3xl">B3</span>
                    </div>
                    
                    <div className="bg-[#0a0f1a] border-2 border-emerald-500/40 rounded-3xl p-6 pt-16 h-full backdrop-blur-xl shadow-2xl shadow-emerald-500/10 group-hover:border-emerald-400 group-hover:shadow-emerald-500/30 transition-all">
                       <h4 className="text-emerald-400 font-black text-xl uppercase tracking-wider mb-4">Chọn Sản Phẩm</h4>
                       <p className="text-white/50 text-sm mb-5">Tự động nạp bộ Skills phù hợp với dự án</p>
                       
                       <div className="space-y-3">
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                             <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                                <Monitor className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">📱 Ứng dụng người dùng</span>
                                <span className="text-white/60 text-xs leading-relaxed block mt-1">Web, Mobile, UI/UX, Testing. Tối ưu trải nghiệm và giao diện.</span>
                             </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                             <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                                <Terminal className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">🛠️ Công cụ lập trình</span>
                                <span className="text-white/60 text-xs leading-relaxed block mt-1">CLI, DevOps, Performance. Tối ưu hiệu năng và tự động hóa.</span>
                             </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                             <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                                <Brain className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">🤖 AI Agent</span>
                                <span className="text-white/60 text-xs leading-relaxed block mt-1">RAG, Prompt Engineering, MCP. Xây dựng trợ lý AI thông minh.</span>
                             </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                             <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                                <Palette className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">🎨 Tài sản số</span>
                                <span className="text-white/60 text-xs leading-relaxed block mt-1">Game, SEO, Content. Tối ưu nội dung và sáng tạo.</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Step 04 - Bold Card */}
                 <div className="group relative lg:mt-12">
                    <div className="absolute -top-2 -left-2 w-16 h-16 rounded-2xl bg-sky-500 flex items-center justify-center shadow-2xl shadow-sky-500/50 z-20 rotate-[6deg] group-hover:rotate-0 transition-transform">
                       <span className="text-black font-black text-3xl">B4</span>
                    </div>
                    
                    <div className="bg-[#0a0f1a] border-2 border-sky-500/40 rounded-3xl p-6 pt-16 h-full backdrop-blur-xl shadow-2xl shadow-sky-500/10 group-hover:border-sky-400 group-hover:shadow-sky-500/30 transition-all">
                       <h4 className="text-sky-400 font-black text-xl uppercase tracking-wider mb-4">Đặt Tên Agent</h4>
                       <p className="text-white/50 text-sm mb-5">Đặt tên riêng để tạo "linh hồn" cho AI</p>
                       
                       <div className="space-y-3">
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-sky-500/20 border border-sky-500/30">
                             <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center shrink-0 mt-0.5">
                                <Bot className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">✨ Tên tùy chỉnh</span>
                                <span className="text-white/60 text-xs leading-relaxed block mt-1">Đặt tên như Jarvis, Friday, Em yêu... AI sẽ nhận diện và phản hồi theo tên.</span>
                             </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-sky-500/20 border border-sky-500/30">
                             <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center shrink-0 mt-0.5">
                                <Layers className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">🤝 Phối hợp đa Agent</span>
                                <span className="text-white/60 text-xs leading-relaxed block mt-1">Lên đến 15 chuyên gia: Backend, Frontend, Security, Test... phối hợp cùng lúc.</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

         {/* Phase 3 Header - Launch & Readiness */}
         <div className="text-center space-y-3 pt-8 border-t border-white/5">
            <div className="inline-block px-6 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-base font-black uppercase tracking-widest border border-emerald-500/20">Phase 3</div>
            <h2 className="text-3xl md:text-4xl font-black text-emerald-400 italic uppercase tracking-tighter">Nạp tư duy & Vibe Coding</h2>
         </div>

         {/* Step 4: Combined Launch & Mindset */}
         <section className="relative grid lg:grid-cols-12 gap-8 items-start pt-2 pb-8">
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 bg-clip-text text-transparent italic uppercase leading-tight">Mở Workspace &<br/>Kích hoạt Brain</h3>
              </div>
              <p className="text-white/40 text-base leading-relaxed font-light max-w-md">
                Mở thư mục dự án trong IDE, sau đó gửi lệnh kích hoạt. AI sẽ tự động đọc file <code className="text-amber-400">GEMINI.md</code> và tải toàn bộ kỹ năng vào bộ nhớ.
              </p>

              <div className="space-y-4">
                 <div className="card-glass p-1 border-white/5 bg-black/20 overflow-hidden">
                    <div className="bg-black/40 p-6 rounded-2xl flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                             <Bot className="text-sky-400 w-6 h-6" />
                          </div>
                          <div>
                             <p className="text-white font-black text-sm uppercase tracking-wider">Antigravity Agent</p>
                             <p className="text-sky-400/60 text-[10px] font-mono tracking-widest uppercase">Trạng thái: Sẵn sàng</p>
                          </div>
                       </div>
                       <div className="w-3 h-3 rounded-full bg-sky-500 animate-pulse shadow-[0_0_10px_#0ea5e9]" />
                    </div>
                 </div>

                 <div className="card-glass p-6 border-purple-400/20 bg-purple-400/5 text-left w-full space-y-4">
                    <h4 className="text-white font-bold flex items-center gap-2">
                      <Brain className="text-purple-400 h-5 w-5" /> Quy trình kích hoạt Agent
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"/>
                        <p className="text-white/60 text-sm"><strong className="text-white">Bước 1</strong>: Mở khung chat (Cursor/Windsurf/VSCode...).</p>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"/>
                        <p className="text-white/60 text-sm"><strong className="text-white">Bước 2</strong>: Chọn Mode <code className="text-purple-400">Planning</code> và Model <code className="text-purple-400">Gemini 2.0</code> hoặc Claude 3.5.</p>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"/>
                        <p className="text-white/60 text-sm"><strong className="text-white">Bước 3</strong>: Gửi lệnh kích hoạt ở khung bên phải.</p>
                      </li>
                    </ul>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
               <div className="card-glass p-6 border-amber-500/20 bg-amber-500/5 space-y-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500/40 animate-pulse" />
                         <span className="text-xs text-amber-400/60 font-mono tracking-widest uppercase">Nhập lệnh</span>
                     </div>
                  </div>
                  <h4 className="text-white/40 font-black text-xs uppercase tracking-widest italic">Lệnh Kích Hoạt</h4>
                  <div className="bg-black/60 p-6 rounded-xl border border-white/5 font-mono text-amber-400 text-sm md:text-xl leading-relaxed shadow-inner group-hover:border-amber-500/40 transition-colors">
                     {`"trỗi dậy đi Jarvis"`}
                  </div>
                   <div className="flex items-center gap-2 text-xs text-white/20 italic">
                     <Info className="w-3 h-3" />
                     Agent sẽ tự động nạp <code className="text-amber-400">GEMINI.md</code> & Skill-set.
                  </div>
               </div>

               <div className="flex items-center gap-4 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                  <CheckCircle className="text-emerald-400 h-6 w-6 flex-shrink-0" />
                  <p className="text-white/60 text-sm">Sau bước này, Agent sẽ hoạt động với 100% công suất và phong cách Senior Engineer.</p>
               </div>
            </div>
         </section>
      </div>

      {/* Requirements Table - Redesigned as Bento Grid */}
      <section className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-black text-center text-[#FCD34D]">Cấu hình tối thiểu</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <ReqCard label="Hệ điều hành" value="Windows 10 trở lên" detail="Yêu cầu bản 64-bit" />
          <ReqCard label="Bộ nhớ RAM" value="8 GB" detail="Khuyến nghị 16GB" />
          <ReqCard label="Vi xử lý CPU" value="i3 Thế hệ 10" detail="Hoặc tương đương" />
          <ReqCard label="Ổ cứng khả dụng" value="2 GB" detail="Khuyên dùng SSD" />
        </div>
      </section>
      
      <section className="text-center py-32 relative overflow-hidden rounded-[3rem] border border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-12 flex flex-col items-center gap-2 uppercase italic">
            <span className="leading-tight">Bạn đã sẵn sàng bước vào</span>
            <span className="leading-tight">kỷ nguyên <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(52,168,83,0.4)]">Agentic Coding?</span></span>
          </h2>
          
          <Link href="/">
            <button className="btn-emerald h-20 px-16 text-xl rounded-full shadow-[0_0_50px_rgba(52,168,83,0.3)] hover:shadow-[0_0_80px_rgba(52,168,83,0.5)] hover:scale-105 transition-all group flex items-center justify-center gap-3 mx-auto">
              Bắt đầu hành trình miễn phí
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

function OSCard({ icon, name, color, steps, downloads }: { icon: React.ReactNode, name: string, color: string, steps: string[], downloads?: { label: string, url: string }[] }) {
  const colors: any = {
    cyan: "border-cyan-400/20 bg-cyan-400/5 hover:border-cyan-400/40",
    gold: "border-[#FCD34D]/20 bg-[#FCD34D]/5 hover:border-[#FCD34D]/40",
    emerald: "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40"
  };
  
  const btnClasses = {
      cyan: "bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400 hover:text-black",
      gold: "bg-[#FCD34D]/10 text-[#FCD34D] hover:bg-[#FCD34D] hover:text-black",
      emerald: "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white"
  }
  
  const btnColor = btnClasses[color as keyof typeof btnClasses] || btnClasses.cyan;

  return (
    <div className={cn("card-glass p-8 flex flex-col gap-6 group transition-all duration-300 h-full", colors[color])}>
      <div className="flex items-center gap-4">
        {icon}
        <h3 className="text-xl font-black text-white">{name}</h3>
      </div>
      
      {downloads && (
        <div className="grid gap-3">
          {downloads.map((d, i) => (
            <Link key={i} href={d.url} className={cn("flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold transition-all", btnColor)}>
              {d.label}
              <Download className="h-4 w-4" />
            </Link>
          ))}
        </div>
      )}

      <ul className="space-y-4 pt-4 border-t border-white/5 mt-auto">
        {steps.map((s, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-white/50 font-medium">
            <ChevronRight className="h-4 w-4 text-current opacity-50" /> {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SetupBox({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="card-glass p-8 flex gap-6 border-white/5 hover:border-white/10 transition-colors">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 text-cyan-400">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-black text-white mb-2">{title}</h4>
        <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function LaunchStep({ number, title, body }: { number: string, title: string, body: string }) {
  return (
    <div className="card-glass p-10 space-y-6 border-white/5 text-center flex flex-col items-center">
      <div className="text-emerald-400 font-mono text-xs tracking-[0.3em] font-black">{number}</div>
      <h3 className="text-xl font-black text-white">{title}</h3>
      <p className="text-white/40 leading-relaxed">{body}</p>
    </div>
  );
}

function ReqCard({ label, value, detail }: { label: string, value: string, detail: string }) {
  return (
    <div className="card-glass p-8 text-center border-white/5 space-y-2 group hover:bg-white/5 transition-colors">
       <p className="text-xs font-black uppercase tracking-[0.2em] text-white/20">{label}</p>
      <p className="text-xl font-black text-white">{value}</p>
      <p className="text-xs text-[#FCD34D]/50 font-medium">{detail}</p>
    </div>
  );
}
