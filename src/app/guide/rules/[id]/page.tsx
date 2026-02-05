"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ShieldAlert, FileText, CheckCircle2, Lock, Shield, MessageSquare, BookOpen, Terminal, Code, Settings, Briefcase, Scale, GraduationCap, AlertTriangle, FileCheck } from "lucide-react";
import Link from "next/link";
import { ruleGuides } from "@/data/guide-content";
import { notFound, useParams } from "next/navigation";

export default function RuleDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const guide = ruleGuides[id as keyof typeof ruleGuides] as any;

  if (!guide) {
    notFound();
  }

  const iconMap: Record<string, any> = {
    "🤖": ShieldAlert,
    "🔒": Lock,
    "🦠": Shield,
    "📝": MessageSquare,
    "📚": BookOpen,
    "🔧": Terminal,
    "🎨": Code,
    "⚙️": Settings,
    "💼": Briefcase,
    "⚖️": Scale,
    "🏛️": GraduationCap,
    "🔄": FileText
  };

  const colorMap: Record<string, { color: string; bg: string; border: string; glow: string; bullet: string }> = {
    "GEMINI": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "border-blue-500", bullet: "bg-blue-500" },
    "security": { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "border-red-500", bullet: "bg-red-500" },
    "malware-protection": { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "border-red-500", bullet: "bg-red-500" },
    "error-logging": { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "border-yellow-500", bullet: "bg-yellow-500" },
    "docs-update": { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "border-emerald-500", bullet: "bg-emerald-500" },
    "debug": { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "border-yellow-500", bullet: "bg-yellow-500" },
    "frontend": { color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", glow: "border-cyan-500", bullet: "bg-cyan-500" },
    "backend": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "border-blue-500", bullet: "bg-blue-500" },
    "business": { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "border-emerald-500", bullet: "bg-emerald-500" },
    "compliance": { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "border-red-500", bullet: "bg-red-500" },
    "architecture-review": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "border-blue-500", bullet: "bg-blue-500" },
    "system-update": { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "border-yellow-500", bullet: "bg-yellow-500" },
  };

  const theme = colorMap[id] || { color: "text-white/60", bg: "bg-white/5", border: "border-white/10", glow: "border-white/20", bullet: "bg-white/20" };
  const Icon = iconMap[guide.icon] || FileText;

  const googleColors = [
    { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", bullet: "bg-red-500" },
    { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", bullet: "bg-yellow-500" },
    { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", bullet: "bg-emerald-500" },
    { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", bullet: "bg-blue-500" },
  ];

  return (
    <div className="page-container mt-12 pb-24 space-y-12 max-w-5xl mx-auto">
      <Link href="/guide/rules" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Rules
      </Link>

      {/* Header */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 rounded-2xl ${theme.bg} border ${theme.border} flex items-center justify-center text-4xl`}>
            <Icon className={`h-10 w-10 ${theme.color}`} />
          </div>
          <div>
            <div className="flex items-center gap-3">
               <h1 className="text-4xl font-black text-white">{guide.name}</h1>
               <span className={`${theme.bg} ${theme.color} px-3 py-1 rounded-full text-xs font-black border ${theme.border} uppercase tracking-widest`}>
                  {guide.type}
               </span>
            </div>
            <p className="text-white/40 text-lg mt-1">{guide.description}</p>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column: Purpose & Regulations */}
        <div className="lg:col-span-2 space-y-12">
          {/* Purpose */}
          <section className="space-y-4">
             <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>Mục đích & Phạm vi</h2>
             <div className="card-glass p-8 bg-white/[0.02]">
                <p className="text-white/70 leading-relaxed text-lg italic">
                   "{guide.purpose}"
                </p>
             </div>
          </section>

          {/* Regulations / Rules */}
          <section className="space-y-6">
             <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>Các quy định chi tiết</h2>
             <div className="space-y-4">
                {(guide.rules || []).map((rule: any, idx: number) => {
                   const itemTheme = googleColors[idx % googleColors.length];
                   return (
                      <div key={idx} className={`p-6 rounded-2xl bg-black/40 border border-white/5 space-y-3 group hover:${itemTheme.border} transition-all`}>
                         <div className={`flex items-center gap-2 ${itemTheme.color} font-black text-sm uppercase`}>
                            <FileCheck className="h-4 w-4 opacity-40" />
                            {rule.title}
                         </div>
                         <p className="text-white/60 text-sm leading-relaxed">{rule.desc}</p>
                      </div>
                   );
                })}
             </div>
          </section>

          {/* Enforcement */}
          {guide.enforcement && (
             <section className="space-y-6">
                <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>Cơ chế thực thi</h2>
                 <div className="grid md:grid-cols-2 gap-4">
                    {(guide.enforcement || []).map((item: string, idx: number) => {
                       const itemTheme = googleColors[idx % googleColors.length];
                       return (
                          <div key={idx} className={`flex gap-4 p-4 rounded-xl ${itemTheme.bg} border ${itemTheme.border}`}>
                             <div className={`w-1.5 h-1.5 rounded-full ${itemTheme.bullet} mt-1.5 flex-shrink-0`} />
                             <span className="text-sm text-white/70">{item}</span>
                          </div>
                       );
                    })}
                 </div>
             </section>
          )}
        </div>

        {/* Right Column: Files & Exceptions */}
        <div className="space-y-8">
           {/* Source Files */}
           <section className={`card-glass p-6 ${theme.bg} border ${theme.border} space-y-4`}>
              <div className={`flex items-center gap-2 ${theme.color} font-black uppercase text-sm`}>
                 <FileText className="h-4 w-4" />
                 File nguồn
              </div>
               <div className="space-y-2">
                  {(guide.files || []).map((file: string, idx: number) => (
                     <code key={idx} className="block text-[10px] font-mono bg-black/40 border border-white/5 px-3 py-2 rounded text-white/40 truncate">
                        {file}
                     </code>
                  ))}
               </div>
           </section>

           {/* Exceptions */}
           {guide.exceptions && (
              <section className="card-glass p-6 bg-yellow-500/5 border-yellow-500/10 space-y-4">
                 <div className={`flex items-center gap-2 ${theme.color} font-black uppercase text-sm`}>
                    <AlertTriangle className="h-4 w-4" />
                    Trường hợp ngoại lệ
                 </div>
                  <ul className="space-y-2">
                     {(guide.exceptions || []).map((ex: string, idx: number) => (
                        <li key={idx} className="text-xs text-white/60 flex gap-2">
                           <span className={`${theme.color}`}>•</span>
                           {ex}
                        </li>
                     ))}
                  </ul>
              </section>
           )}

           {/* Prohibited Actions */}
           {guide.prohibited && (
              <section className={`card-glass p-6 bg-black border-red-900/50 space-y-4 shadow-[0_0_20px_rgba(255,0,0,0.05)]`}>
                 <div className="flex items-center gap-2 text-red-600 font-black uppercase text-sm">
                    <ShieldAlert className="h-4 w-4" />
                    Cấm tuyệt đối
                 </div>
                  <ul className="space-y-3">
                     {(guide.prohibited || []).map((item: string, idx: number) => (
                        <li key={idx} className="text-[11px] text-red-500/70 font-bold uppercase tracking-wide flex gap-2">
                           <span>✖</span>
                           {item}
                        </li>
                     ))}
                  </ul>
              </section>
           )}
        </div>
      </div>
    </div>
  );
}
