"use client";

import { 
  Download, Settings, User, Palette, Cpu, Monitor, Globe, FileText, 
  CheckCircle, AlertCircle, Info, Zap, Chrome, Terminal, Rocket,
  ArrowRight, ShieldCheck, Laptop, ChevronRight, PlayCircle, Brain
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TerminalBlock } from "@/components/ui/terminal-block";
import { cn } from "@/lib/utils";

export default function TutorialPage() {
  return (
    <div className="page-container mt-12 space-y-20 pb-24">
      {/* Header Section */}
      <section className="text-center space-y-8">
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
      <div className="relative w-full mx-auto space-y-20">
        
        {/* Phase 1 Header */}
        <div className="text-center space-y-6 mt-12">
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-black uppercase tracking-widest border border-emerald-500/20">Phase 1</div>
          <h2 className="text-3xl md:text-5xl font-black text-white">Cài đặt Google AntiGravity</h2>
        </div>

        {/* Step 1: Download IDE */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
             <div className="w-16 h-16 rounded-[2rem] bg-[#FCD34D] text-black flex items-center justify-center font-black text-3xl shadow-[0_0_30px_rgba(252,211,77,0.4)] flex-shrink-0">1</div>
             <div>
               <h3 className="text-2xl md:text-3xl font-black text-white">Tải AntiGravity IDE</h3>
               <p className="text-white/40 text-base leading-relaxed font-light mt-2 max-w-2xl">
                Tải bộ cài AntiGravity chính thức. Hỗ trợ đa hệ điều hành với công nghệ nén tối ưu.
               </p>
             </div>
          </div>

          <div className="relative w-full rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
             <Image 
               src="/antigravity-ide.png" 
               alt="AntiGravity IDE Interface" 
               width={0}
               height={0}
               sizes="100vw"
               style={{ width: '100%', height: 'auto' }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <OSCard 
              icon={<Monitor className="h-8 w-8 text-emerald-400" />} 
              name="Windows" 
              color="emerald" 
              downloads={[
                { label: "Tải bản Windows (x64)", url: "https://github.com/Dokhacgiakhoa/google-antigravity/releases" },
                { label: "Tải bản Windows (ARM64)", url: "https://github.com/Dokhacgiakhoa/google-antigravity/releases" }
              ]}
              steps={["Phiên bản v2.1.0-beta", "Windows 10 trở lên", "Cài đặt tự động"]} 
            />
            
            <OSCard 
              icon={<Laptop className="h-8 w-8 text-cyan-400" />} 
              name="macOS" 
              color="cyan" 
              downloads={[
                { label: "Apple Silicon (M1/M2/M3)", url: "https://github.com/Dokhacgiakhoa/google-antigravity/releases" },
                { label: "Intel Chip (macOS)", url: "https://github.com/Dokhacgiakhoa/google-antigravity/releases" }
              ]}
              steps={["File .dmg vạn năng", "Hỗ trợ macOS 12+", "Đã xác thực Gatekeeper"]} 
            />

            <OSCard 
              icon={<Terminal className="h-8 w-8 text-[#FCD34D]" />} 
              name="Linux" 
              color="gold" 
              downloads={[
                { label: "Tải bản Linux", url: "https://github.com/Dokhacgiakhoa/google-antigravity/releases" }
              ]}
              steps={["Ubuntu / Debian (.deb)", "Fedora / RedHat (.rpm)", "Hỗ trợ binary trực tiếp"]} 
            />
          </div>
        </section>

        {/* Phase 2 Header */}
        <div className="text-center space-y-4 pt-12 border-t border-white/5">
          <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-black uppercase tracking-widest border border-cyan-500/20">Phase 2</div>
          <h2 className="text-3xl md:text-5xl font-black text-white">Khởi tạo Dự án & Skill</h2>
        </div>

        {/* Step 2: Clone Kit */}
        <section className="relative grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 order-last lg:order-first grid gap-6">
             <div className="card-glass p-6 border-cyan-400/20 bg-cyan-400/5 space-y-4">
               <h4 className="text-white font-bold text-lg flex items-center gap-2">
                 <Info className="w-5 h-5 text-cyan-400" />
                 Hướng dẫn chạy lệnh
               </h4>
               <ol className="space-y-4 text-white/70 text-sm leading-relaxed">
                 <li className="flex gap-4 items-start">
                   <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center font-bold text-xs mt-0.5">1</span>
                   <span>
                     Mở Terminal trong Google AntiGravity bằng cách nhấn tổ hợp phím <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs border border-white/20">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs border border-white/20">`</kbd> (phím bên trái số 1).
                   </span>
                 </li>
                 <li className="flex gap-4 items-start">
                   <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center font-bold text-xs mt-0.5">2</span>
                   <span>
                     Sao chép dòng lệnh bên dưới, dán vào cửa sổ Terminal vừa hiện ra và nhấn phím <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs border border-white/20">Enter</kbd>.
                   </span>
                 </li>
                 <li className="flex gap-4 items-start">
                   <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center font-bold text-xs mt-0.5">3</span>
                   <span>
                     Chờ khoảng 1-2 phút để hệ thống tự động tải và cài đặt các tài nguyên cần thiết.
                   </span>
                 </li>
               </ol>
             </div>

             <TerminalBlock 
               command={`npx antigravity-ide`} 
             />
             <SetupBox icon={<ShieldCheck />} title="Tự động hoá" desc="Hệ thống sẽ tự động tải thư mục .agent và thiết lập môi trường làm việc chuẩn cho bạn." />
          </div>
          
          <div className="lg:col-span-5 space-y-8 lg:text-right flex flex-col items-end">
            <div className="flex items-center gap-6 flex-row-reverse">
              <div className="w-16 h-16 rounded-[2rem] bg-cyan-400 text-black flex items-center justify-center font-black text-3xl shadow-[0_0_30px_rgba(6,182,212,0.4)]">2</div>
              <h3 className="text-2xl md:text-3xl font-black text-white">Thiết lập Project</h3>
            </div>
            <p className="text-white/40 text-base leading-relaxed font-light max-w-md">
              Công cụ CLI giúp tự động hoá việc cấu hình dự án, nạp các Prompt mẫu và bộ kỹ năng chuyên sâu vào thư mục .agent.
            </p>

            <div className="w-full space-y-4 text-left">
                <h4 className="text-white font-bold flex items-center gap-2 justify-end">
                   Video hướng dẫn <PlayCircle className="text-cyan-400 h-5 w-5" />
                </h4>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-cyan-400/20 shadow-2xl group cursor-pointer">
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center border border-cyan-400/50 group-hover:scale-110 transition-transform">
                       <PlayCircle className="w-8 h-8 text-cyan-400 fill-cyan-400/20" />
                    </div>
                  </div>
                  {/* Placeholder using BackgroundVideo - In real app, replace with YouTube/Video component */}
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  >
                     <source src="/blackhole.webm" type="video/webm" />
                  </video>
                </div>
             </div>

             <div className="card-glass p-8 border-cyan-400/20 bg-cyan-400/5 text-left w-full space-y-4">
                <h4 className="text-white font-bold flex items-center gap-2">
                  <CheckCircle className="text-cyan-400 h-5 w-5" /> Bao gồm
                </h4>
                <ul className="space-y-3">
                  <li className="text-white/60 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"/> Cấu hình .agent chuẩn hóa</li>
                  <li className="text-white/60 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"/> 40+ Skills & Workflows</li>
                  <li className="text-white/60 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"/> Tích hợp sẵn công cụ CLI</li>
                </ul>
             </div>
          </div>
        </section>

        {/* Step 3: Launch */}
        <section className="relative grid lg:grid-cols-12 gap-12 items-start pt-12 border-t border-white/5">
          <div className="lg:col-span-12 flex flex-col items-center text-center space-y-12 mb-12">
             <div className="w-24 h-24 rounded-[3rem] bg-emerald-400 text-black flex items-center justify-center font-black text-5xl shadow-[0_0_40px_rgba(16,185,129,0.5)]">3</div>
             <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-white">Khởi động</h2>
                <p className="text-white/40 text-lg font-light">Mở IDE và kết nối với trợ lý AI của bạn.</p>
             </div>
          </div>
          
          <div className="lg:col-span-12 grid md:grid-cols-3 gap-8">
             <LaunchStep number="01" title="Mở Workspace" body="Mở thư mục dự án vừa được khởi tạo trong Google AntiGravity IDE." />
             <LaunchStep number="02" title="Kiểm tra Agent" body="Mở panel Agent và xác nhận model AI đã sẵn sàng hoạt động." />
             <LaunchStep number="03" title="Kích hoạt" body="Gõ lời chào đầu tiên để AI bắt đầu quét cấu trúc dự án của bạn." />
          </div>
        </section>

        {/* Phase 4 Header */}
        <div className="text-center space-y-4 pt-12 border-t border-white/5">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-black uppercase tracking-widest border border-purple-500/20">Phase 4</div>
          <h2 className="text-3xl md:text-5xl font-black text-white">Nạp tư duy & Kích hoạt Agent</h2>
        </div>

        {/* Step 4: Mindset Config */}
        <section className="relative grid lg:grid-cols-12 gap-12 items-start pb-12">
          <div className="lg:col-span-5 space-y-8 flex flex-col items-start">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-[2rem] bg-purple-500 text-white flex items-center justify-center font-black text-3xl shadow-[0_0_30px_rgba(168,85,247,0.4)]">4</div>
              <h3 className="text-2xl md:text-3xl font-black text-white">Cấu hình Rule</h3>
            </div>
            <p className="text-white/40 text-base leading-relaxed font-light max-w-md">
              Để Agent thực sự hiểu dự án, bạn không chỉ tạo file mà phải yêu cầu nó <strong>quét và áp dụng</strong> các quy tắc này vào phiên làm việc hiện tại.
            </p>

            <div className="card-glass p-8 border-purple-400/20 bg-purple-400/5 text-left w-full space-y-4">
               <h4 className="text-white font-bold flex items-center gap-2">
                 <Brain className="text-purple-400 h-5 w-5" /> Quy trình nạp Mindset
               </h4>
               <ul className="space-y-4">
                 <li className="flex gap-3">
                   <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"/>
                   <p className="text-white/60 text-sm"><strong className="text-white">Thiết lập</strong>: Chỉnh sửa các yêu cầu trong <code className="text-purple-400">GEMINI.md</code> và thư mục <code className="text-purple-400">.agent/</code>.</p>
                 </li>
                 <li className="flex gap-3">
                   <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"/>
                   <p className="text-white/60 text-sm"><strong className="text-white">Kích hoạt</strong>: Nhắn với Agent câu lệnh ở khung bên phải để nó nạp toàn bộ tư duy vừa cấu hình.</p>
                 </li>
               </ul>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
             <div className="card-glass p-6 border-emerald-500/20 bg-emerald-500/5 space-y-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3">
                   <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500/40 animate-pulse" />
                      <span className="text-[10px] text-emerald-400/60 font-mono tracking-widest uppercase">Input Command</span>
                   </div>
                </div>
                <h4 className="text-white/40 font-black text-xs uppercase tracking-widest">Gửi lệnh cho Agent</h4>
                <div className="bg-black/60 p-5 rounded-xl border border-white/5 font-mono text-emerald-400 text-sm md:text-base leading-relaxed shadow-inner">
                   {`"Hãy đọc toàn bộ file quy tắc trong thư mục .agent và nội dung GEMINI.md, sau đó nạp tư duy này vào phiên làm việc hiện tại của bạn."`}
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/20 italic">
                   <Info className="w-3 h-3" />
                   AI sẽ xác nhận "Mindset Loaded" sau khi đọc xong.
                </div>
             </div>

             <div className="card-glass p-1 font-mono text-[10px] overflow-hidden border-white/5 opacity-60">
                <div className="bg-black/20 p-4 rounded-xl">
                   <div className="space-y-1">
                      <p className="text-purple-400/80"># GEMINI.md Content</p>
                      <p className="text-white/40">- Role: Senior Principal Engineer</p>
                      <p className="text-white/40">- Mindset: Systems thinking, regression-aware</p>
                   </div>
                </div>
             </div>

             <div className="flex items-center gap-4 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <CheckCircle className="text-emerald-400 h-6 w-6 flex-shrink-0" />
                <p className="text-white/60 text-sm">Sau bước này, Agent sẽ hoạt động với 100% công suất và đúng "nhân cách" bạn mong muốn.</p>
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
      
      {/* Final CTA */}
      <section className="text-center py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#FCD34D]/5 blur-[100px] rounded-full" />
        <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight">Bạn đã sẵn sàng bước vào<br/>kỷ nguyên <span className="text-[#FCD34D]">Agentic Coding?</span></h2>
        <button className="btn-emerald h-20 px-16 text-xl rounded-full">Bắt đầu hành trình miễn phí</button>
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
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">{label}</p>
      <p className="text-xl font-black text-white">{value}</p>
      <p className="text-xs text-[#FCD34D]/50 font-medium">{detail}</p>
    </div>
  );
}


