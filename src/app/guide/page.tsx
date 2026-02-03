"use client";

import { BookOpen, Terminal, Command, Zap, FolderTree, Settings, Brain, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { systemStats, coreConcepts, workflowsList, operatingModes } from "@/data/documentation";

export default function GuidePage() {
  return (
    <div className="page-container mt-12 space-y-24 pb-24">
      {/* Hero Section */}
      <section className="text-center space-y-8">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowsList.slice(0, 12).map((wf) => (
            <Link key={wf.id} href={`/guide/workflows/${wf.id}`}>
              <CommandCard 
                cmd={wf.command} 
                desc={wf.desc} 
                color={wf.id === 'create' ? 'emerald' : wf.id === 'plan' ? 'blue' : wf.id === 'debug' ? 'red' : 'cyan'} 
              />
            </Link>
          ))}
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
            <p className="text-white/40">Kiến trúc thư mục chuẩn</p>
          </div>
        </div>

        <div className="card-glass p-8 md:p-12 bg-black/40 border-white/10 font-mono text-sm shadow-2xl">
          <pre className="text-white/80 leading-relaxed overflow-x-auto">
{`.agent/
├── agents/       🎭 ${systemStats.agents} Specialist Agents
├── skills/       🛠️ ${systemStats.skills} Master Skills
├── workflows/    ⚡ ${systemStats.workflows} Slash Commands
├── rules/        📜 ${systemStats.rules} Global Rules
└── .shared/      🏯 ${systemStats.sharedModules} DNA Modules

cli/              🔧 CLI Manager`}
          </pre>
        </div>
      </section>

      {/* Key Stats */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard number={systemStats.skills.toString()} label="Master Skills" sublabel="Chuyên sâu" />
          <StatCard number={systemStats.agents.toString()} label="Specialist Agents" sublabel="Đa tác nhân" />
          <StatCard number={systemStats.workflows.toString()} label="Workflows" sublabel="PDCA Cycle" />
          <StatCard number={systemStats.rules.toString()} label="Global Rules" sublabel="Tiêu chuẩn" />
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
    <div className="card-glass p-6 space-y-4 bg-gradient-to-br from-white/[0.03] to-transparent hover:from-white/[0.05] transition-all">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#FCD34D] flex items-center justify-center flex-shrink-0 text-black font-black text-sm">
          {number}
        </div>
        <div className="space-y-2 flex-1">
          <h3 className="font-black text-white">{title}</h3>
          <div className={`p-4 rounded-xl border font-mono text-xs leading-relaxed ${isPrompt ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-300' : 'bg-black/40 border-white/5 text-white/80'}`}>
            {code}
          </div>
          <p className="text-white/40 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-black text-white/60 uppercase tracking-wider">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-white/80 text-sm">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConceptCard({ icon, title, desc, features }: { icon: React.ReactNode; title: string; desc: string; features: string[] }) {
  return (
    <div className="card-glass p-8 space-y-6 bg-gradient-to-br from-white/[0.03] to-transparent hover:from-white/[0.05] transition-all group">
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-black text-white">{title}</h3>
        <p className="text-white/40 text-sm">{desc}</p>
      </div>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="text-white/60 text-sm">{feature}</li>
        ))}
      </ul>
    </div>
  );
}

function CommandCard({ cmd, desc, color }: { cmd: string; desc: string; color: string }) {
  const colors: Record<string, { bg: string; border: string; text: string }> = {
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
    pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400' },
    red: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-400' },
    yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-400' },
    indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400' },
    green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400' },
    slate: { bg: 'bg-slate-500/10', border: 'border-slate-500/20', text: 'text-slate-400' },
  };
  
  const c = colors[color] || colors.blue;
  
  return (
    <div className={`card-glass p-6 space-y-3 ${c.bg} border ${c.border} hover:scale-105 transition-all group cursor-pointer`}>
      <div className="flex items-center gap-2">
        <Terminal className={`h-4 w-4 ${c.text}`} />
        <code className={`font-black text-sm ${c.text}`}>{cmd}</code>
      </div>
      <p className="text-white/60 text-sm">{desc}</p>
    </div>
  );
}

function StatCard({ number, label, sublabel }: { number: string; label: string; sublabel: string }) {
  return (
    <div className="card-glass p-8 text-center space-y-2 bg-gradient-to-br from-white/[0.03] to-transparent hover:from-white/[0.06] transition-all">
      <div className="text-4xl md:text-5xl font-black text-[#FCD34D]">{number}</div>
      <div className="text-white font-black text-sm">{label}</div>
      <div className="text-white/40 text-xs">{sublabel}</div>
    </div>
  );
}
