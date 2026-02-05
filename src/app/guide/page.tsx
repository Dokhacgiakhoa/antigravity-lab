"use client";

import { BookOpen, Terminal, Command, Zap, FolderTree, Settings, Brain, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { systemStats, coreConcepts, workflowsList, operatingModes, gettingStarted } from "@/data/documentation";
import { directoryStructure } from "@/data/guide-content";

export default function GuidePage() {
  return (
    <div className="page-container mt-8 space-y-12 pb-24">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/20 px-6 py-2 rounded-full text-blue-400 text-xs font-black tracking-widest uppercase"
        >
          <BookOpen className="h-4 w-4" />
          Tài liệu hướng dẫn
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          Hướng dẫn sử dụng <span className="text-white">Antigravity</span>
        </h1>
        
        <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Làm chủ hệ sinh thái AI Agent chuyên nghiệp với quy trình PDCA chuẩn sản xuất.
        </p>
      </section>

      {/* Installation Link */}
      <section className="max-w-4xl mx-auto">
        <Link href="/tutorial">
          <div className="card-glass p-8 bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-500/20 hover:border-emerald-500/40 transition-all group cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket className="h-8 w-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Bắt đầu cài đặt</h3>
                  <p className="text-white/60">Hướng dẫn chi tiết từng bước cài đặt Antigravity trong 5 phút</p>
                </div>
              </div>
              <ArrowRight className="h-6 w-6 text-emerald-400 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>
      </section>

      {/* Core Concepts */}
      <section className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-black">Khái niệm cốt lõi</h2>
          <p className="text-white/40 text-lg">Nền tảng AI Agent chuyên nghiệp</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {coreConcepts.map((concept) => (
            <ConceptCard 
              key={concept.id}
              icon={<span className="text-4xl">{concept.icon}</span>}
              title={concept.name}
              desc={concept.description}
              color="emerald"
              features={[
                `En: ${concept.nameEn}`,
                `Exp: ${concept.example}`
              ]}
            />
          ))}
        </div>
      </section>

      {/* Operating Modes */}
      <section className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-black">Chế độ vận hành</h2>
          <p className="text-white/40 text-lg">Scale-Adaptive Architecture</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {operatingModes.map((mode) => (
            <ConceptCard 
              key={mode.id}
              icon={<span className="text-4xl">{mode.icon}</span>}
              title={mode.name}
              desc={mode.description}
              features={mode.features}
              color={mode.color}
            />
          ))}
        </div>
      </section>

      {/* Slash Commands Grid */}
      <section className="max-w-6xl mx-auto space-y-12">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20">
            <Command className="h-6 w-6 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-3xl font-black">Slash Commands</h2>
            <p className="text-white/40">Workflows được tối ưu hóa sẵn</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowsList.slice(0, 12).map((wf, index) => {
            const googleColors = ['red', 'yellow', 'green', 'blue'];
            const color = googleColors[index % googleColors.length];
            return (
              <Link key={wf.id} href={`/guide/workflows/${wf.id}`}>
                <CommandCard 
                  cmd={wf.command} 
                  desc={wf.desc} 
                  color={color} 
                />
              </Link>
            );
          })}
        </div>
        
        <div className="text-center pt-8">
          <Link href="/guide/workflows">
            <button className="text-white/60 hover:text-white transition-colors flex items-center gap-2 mx-auto font-bold">
              Xem toàn bộ {workflowsList.length} lệnh
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>


      {/* Project Structure */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#FCD34D]/10 rounded-2xl flex items-center justify-center border border-[#FCD34D]/20">
            <FolderTree className="h-6 w-6 text-[#FCD34D]" />
          </div>
          <div>
            <h2 className="text-3xl font-black">Cấu trúc Project</h2>
            <p className="text-white/40">{directoryStructure.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="card-glass p-8 bg-black/40 border-white/10 font-mono text-sm shadow-2xl h-full">
            <div className="text-emerald-400 font-black mb-4 flex items-center gap-2">
              <span className="text-xl">📂</span> {directoryStructure.root}
            </div>
            <pre className="text-white/80 leading-relaxed overflow-x-auto">
{directoryStructure.directories.map(dir => (
  <div key={dir.path} className="mb-3 hover:text-white transition-colors group">
    <div className="flex items-start gap-2">
      <span className="text-amber-400 group-hover:scale-110 transition-transform">├──</span>
      <div>
        <div className="font-bold text-white">{dir.path.split('/').filter(Boolean).pop()}/</div>
        <div className="text-[10px] text-white/40 leading-tight mt-0.5">{dir.description}</div>
      </div>
    </div>
  </div>
))}
{directoryStructure.coreFiles.map((file, idx) => (
  <div key={file.file} className="hover:text-white transition-colors group">
    <div className="flex items-start gap-2 h-7 group">
      <span className="text-amber-400">{idx === directoryStructure.coreFiles.length - 1 ? "└──" : "├──"}</span>
      <div className="flex items-center gap-2">
        <span className="text-sky-400">{file.file}</span>
        <span className="text-[10px] text-white/20 italic"># {file.desc}</span>
      </div>
    </div>
  </div>
))}
            </pre>
          </div>

          <div className="card-glass p-8 bg-black/40 border-white/10 space-y-6">
             <h3 className="text-white font-black uppercase tracking-widest text-xs flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
               Chi tiết thành phần
             </h3>
             <div className="space-y-4">
               {directoryStructure.directories.slice(0, 4).map(dir => (
                 <div key={dir.path} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all">
                   <div className="flex justify-between items-center mb-1">
                     <span className="text-white font-bold text-sm">{dir.path}</span>
                     <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-white/60">{dir.fileCount} items</span>
                   </div>
                   <p className="text-xs text-white/40 leading-relaxed">Ví dụ: {dir.examples.join(', ')}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard number={systemStats.skills.toString()} label="Master Skills" sublabel="Chuyên sâu" color="blue" />
          <StatCard number={systemStats.agents.toString()} label="Specialist Agents" sublabel="Đa tác nhân" color="emerald" />
          <StatCard number={systemStats.workflows.toString()} label="Workflows" sublabel="PDCA Cycle" color="amber" />
          <StatCard number={systemStats.rules.toString()} label="Global Rules" sublabel="Tiêu chuẩn" color="rose" />
        </div>
      </section>

      {/* Advanced Usage */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-black">Advanced Usage</h2>
          <p className="text-white/40">Quản lý và tối ưu hóa hệ thống</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-glass p-6 space-y-4 bg-gradient-to-br from-white/[0.03] to-transparent">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
              <h3 className="font-black">Cập nhật System</h3>
            </div>
            <p className="text-white/60 text-sm">Giữ cho Antigravity Brain luôn mới nhất</p>
            <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs text-white/80">
              npx antigravity-ide update
            </div>
          </div>

          <div className="card-glass p-6 space-y-4 bg-gradient-to-br from-white/[0.03] to-transparent">
            <div className="flex items-center gap-2 text-cyan-400">
              <Settings className="h-5 w-5" />
              <h3 className="font-black">Identity Anchor</h3>
            </div>
            <p className="text-white/60 text-sm">Đặt tên Agent để kiểm tra nhận thức</p>
            <p className="text-white/40 text-xs">Ví dụ: "Jarvis", "Friday" - giúp verify AI tuân thủ rules</p>
          </div>
        </div>
      </section>


      {/* Quick Start Section */}
      <section className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-black">{gettingStarted.title}</h2>
          <p className="text-white/40">{gettingStarted.subtitle}</p>
        </div>

        <div className="space-y-6">
          {gettingStarted.steps.map((step) => (
            <div key={step.step} className="card-glass p-6 md:p-8 flex gap-6 items-start bg-black/40 border-white/10 hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#FCD34D]/10 border border-[#FCD34D]/20 flex items-center justify-center shrink-0 text-[#FCD34D] font-black text-xl group-hover:scale-110 transition-transform">
                {step.step}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white uppercase italic tracking-tight">{step.title}</h3>
                <p className="text-white/60 leading-relaxed font-medium">{step.description}</p>
                {step.action && (
                  <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl font-mono text-sm text-emerald-400 flex items-center justify-between group/code">
                    <span>{step.action}</span>
                    <button className="text-[10px] uppercase font-black tracking-widest bg-emerald-500/20 px-2 py-1 rounded opacity-0 group-hover/code:opacity-100 transition-opacity">Copy</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="card-glass p-8 border-rose-500/20 bg-rose-500/5 space-y-6">
           <h3 className="text-rose-400 font-black uppercase tracking-widest text-xs flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
             Xác minh hệ thống
           </h3>
           <div className="grid md:grid-cols-3 gap-4">
             {gettingStarted.verification.map((v, i) => (
               <div key={i} className="text-xs text-white/40 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5 italic">
                 {v}
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center space-y-8 py-12">
        <h2 className="text-3xl md:text-4xl font-black">Sẵn sàng bắt đầu?</h2>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          Khám phá từ điển thuật ngữ hoặc bắt tay vào cài đặt ngay
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/dictionaries">
            <button className="btn-cyan px-8 py-4 rounded-full group/btn flex items-center gap-2">
              Từ điển thuật ngữ
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </Link>
          <a href="https://github.com/Dokhacgiakhoa/google-antigravity" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-sm transition-all">
              GitHub Repository
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

// Components
function StepCard({ number, title, code, desc, isPrompt = false }: { number: string; title: string; code: string; desc: string; isPrompt?: boolean }) {
  return (
    <div className="card-glass p-8 space-y-4 bg-gradient-to-br from-white/[0.03] to-transparent hover:from-white/[0.05] transition-all rounded-3xl">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#FCD34D] flex items-center justify-center flex-shrink-0 text-black font-black text-sm shadow-lg">
          {number}
        </div>
        <div className="space-y-3 flex-grow">
          <h3 className="text-xl font-black text-white italic tracking-tight">{title}</h3>
          <div className={`p-4 rounded-2xl border font-mono text-xs leading-relaxed ${isPrompt ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-300' : 'bg-black/40 border-white/5 text-white/80'} shadow-inner`}>
            {code}
          </div>
          <p className="text-white/50 text-sm font-medium leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-black text-white/60 uppercase tracking-[0.2em]">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-white/80 text-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConceptCard({ icon, title, desc, features, color = "emerald" }: { icon: React.ReactNode; title: string; desc: string; features: string[]; color?: string }) {
  const colors: Record<string, { border: string; bg: string; iconBg: string; text: string; dot: string }> = {
    sky: { 
      border: "border-sky-500/20 hover:border-sky-400/50", 
      bg: "bg-sky-500/5", 
      iconBg: "bg-sky-500/10",
      text: "text-sky-400",
      dot: "bg-sky-400"
    },
    amber: { 
      border: "border-amber-500/20 hover:border-amber-400/50", 
      bg: "bg-amber-500/5", 
      iconBg: "bg-amber-500/10",
      text: "text-amber-400", 
      dot: "bg-amber-400"
    },
    rose: { 
      border: "border-rose-500/20 hover:border-rose-400/50", 
      bg: "bg-rose-500/5", 
      iconBg: "bg-rose-500/10",
      text: "text-rose-400", 
      dot: "bg-rose-400"
    },
    emerald: { 
      border: "border-emerald-500/20 hover:border-emerald-400/50", 
      bg: "bg-emerald-500/5", 
      iconBg: "bg-emerald-500/10",
      text: "text-emerald-400", 
      dot: "bg-emerald-400"
    },
  };

  const c = colors[color] || colors.emerald;

  return (
    <div className={`card-glass p-8 space-y-6 ${c.bg} border ${c.border} hover:bg-black/40 transition-all group relative overflow-hidden rounded-3xl shadow-xl`}>
      <div className={`w-16 h-16 rounded-2xl ${c.iconBg} border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className={`text-xl font-black text-white italic whitespace-nowrap group-hover:${c.text} transition-colors tracking-tight`}>{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed font-medium">{desc}</p>
      </div>
      <ul className="space-y-3 pt-6 border-t border-white/5">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-4 text-white/70 text-sm">
            <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-2 shrink-0 shadow-[0_0_8px_${c.dot.replace('bg-', '')}]`} />
            <span className="font-medium leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CommandCard({ cmd, desc, color }: { cmd: string; desc: string; color: string }) {
  const colors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
    red: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-400', glow: 'shadow-red-500/10' },
    yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-400', glow: 'shadow-yellow-500/10' },
    green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', glow: 'shadow-emerald-500/10' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', glow: 'shadow-blue-500/10' },
  };
  
  const c = colors[color] || colors.blue;
  
  return (
    <div className={`card-glass p-8 space-y-4 ${c.bg} border ${c.border} hover:scale-[1.02] hover:${c.glow} transition-all group cursor-pointer h-full flex flex-col justify-center min-h-[160px] rounded-[2rem] shadow-lg`}>
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${c.bg} border ${c.border} shadow-sm group-hover:rotate-6 transition-transform`}>
          <Terminal className={`h-5 w-5 ${c.text}`} />
        </div>
        <code className={`font-black text-lg ${c.text} tracking-tighter italic`}>{cmd}</code>
      </div>
      <p className="text-white/70 text-sm leading-relaxed font-semibold pl-12">{desc}</p>
    </div>
  );
}

function StatCard({ number, label, sublabel, color = "amber" }: { number: string; label: string; sublabel: string; color?: string }) {
  const colors: Record<string, string> = {
    blue: "text-blue-400",
    emerald: "text-emerald-400",
    amber: "text-[#FCD34D]",
    rose: "text-red-400"
  };
  
  const textColor = colors[color] || colors.amber;

  return (
    <div className="card-glass p-10 text-center space-y-3 bg-gradient-to-br from-white/[0.03] to-transparent hover:from-white/[0.06] transition-all rounded-[2.5rem] border border-white/5 shadow-2xl group">
      <div className={`text-5xl md:text-6xl font-black ${textColor} tracking-tighter group-hover:scale-110 transition-transform italic`}>{number}</div>
      <div className="text-white font-black text-base uppercase tracking-widest">{label}</div>
      <div className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">{sublabel}</div>
    </div>
  );
}
