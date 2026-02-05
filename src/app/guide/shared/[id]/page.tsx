"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Share2, Dna, Layers, ShieldCheck, Globe, Database, Cpu, Lock, Terminal, Layout, FileCode, CheckCircle2, Search, Zap, Rocket, Activity, Shield, Grid, Code, Server, Smartphone, Monitor, Boxes, Layers3, CpuIcon } from "lucide-react";
import Link from "next/link";
import { sharedModuleGuides } from "@/data/guide-content";
import { notFound, useParams } from "next/navigation";

export default function SharedModuleDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const guide = sharedModuleGuides[id as keyof typeof sharedModuleGuides] as any;

  if (!guide) {
    notFound();
  }

  const iconMap: Record<string, any> = {
    "🧠": Cpu,
    "📡": Globe,
    "⚖️": ShieldCheck,
    "🗄️": Database,
    "🎨": Layers,
    "🏗️": Layout,
    "🌐": Globe,
    "🚀": Zap,
    "📊": Activity,
    "🛡️": Shield,
    "🧪": FileCode,
    "💎": Zap,
    "📐": Grid,
    "💻": Code,
    "🖥️": Monitor,
    "📱": Smartphone,
    "⚙️": Server
  };

  const colorMap: Record<string, { color: string; bg: string; border: string; glow: string; bullet: string }> = {
    "ai-master": { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "border-red-500", bullet: "bg-red-500" },
    "api-standards": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "border-blue-500", bullet: "bg-blue-500" },
    "compliance-master": { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "border-red-500", bullet: "bg-red-500" },
    "database-master": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "border-blue-500", bullet: "bg-blue-500" },
    "design-philosophy": { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "border-yellow-500", bullet: "bg-yellow-500" },
    "design-system": { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "border-yellow-500", bullet: "bg-yellow-500" },
    "domain-blueprints": { color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", glow: "border-cyan-500", bullet: "bg-cyan-500" },
    "dx-toolkit": { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "border-emerald-500", bullet: "bg-emerald-500" },
    "i18n-master": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "border-blue-500", bullet: "bg-blue-500" },
    "infra-blueprints": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "border-blue-500", bullet: "bg-blue-500" },
    "metrics": { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "border-emerald-500", bullet: "bg-emerald-500" },
    "resilience-patterns": { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "border-red-500", bullet: "bg-red-500" },
    "security-armor": { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "border-red-500", bullet: "bg-red-500" },
    "seo-master": { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "border-yellow-500", bullet: "bg-yellow-500" },
    "testing-master": { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "border-emerald-500", bullet: "bg-emerald-500" },
    "ui-ux-pro-max": { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "border-yellow-500", bullet: "bg-yellow-500" },
    "vitals-templates": { color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", glow: "border-cyan-500", bullet: "bg-cyan-500" },
  };

  const theme = colorMap[id] || { color: "text-white/60", bg: "bg-white/5", border: "border-white/10", glow: "border-white/20", bullet: "bg-white/20" };
  const Icon = iconMap[guide.icon] || Dna;

  const googleColors = [
    { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", bullet: "bg-red-500" },
    { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", bullet: "bg-yellow-500" },
    { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", bullet: "bg-emerald-500" },
    { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", bullet: "bg-blue-500" },
  ];

  return (
    <div className="page-container mt-12 pb-24 space-y-12 max-w-5xl mx-auto">
      <Link href="/guide/shared" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Shared Modules
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
                  {guide.status}
               </span>
            </div>
            <p className="text-white/40 text-lg mt-1">{guide.description}</p>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column: Purpose & Features */}
        <div className="lg:col-span-2 space-y-12">
          {/* Purpose */}
          <section className="space-y-4">
             <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>Tầm nhìn & Mục đích</h2>
             <div className="card-glass p-8 bg-white/[0.02]">
                <p className="text-white/70 leading-relaxed text-lg">
                   {guide.purpose}
                </p>
             </div>
          </section>

          {/* Features */}
          <section className="space-y-6">
             <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>Tính năng cốt lõi</h2>
             <div className="grid md:grid-cols-2 gap-4">
                {(guide.features || []).map((feature: string, idx: number) => {
                   const itemTheme = googleColors[idx % googleColors.length];
                   return (
                      <div key={idx} className={`p-5 rounded-2xl bg-black/40 border border-white/5 flex gap-4 items-start group hover:${itemTheme.border} transition-all`}>
                         <CheckCircle2 className={`h-5 w-5 ${itemTheme.color} opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0`} />
                         <span className="text-sm text-white/70">{feature}</span>
                      </div>
                   );
                })}
             </div>
          </section>

          {/* Guidelines */}
           {guide.guidelines && (
              <section className="space-y-6">
                 <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>Hướng dẫn sử dụng</h2>
                 <div className="space-y-4">
                    {(guide.guidelines || []).map((g: string, idx: number) => {
                       const itemTheme = googleColors[idx % googleColors.length];
                       return (
                          <div key={idx} className={`flex gap-4 p-4 rounded-xl ${itemTheme.bg} border border-white/10 group hover:${itemTheme.border} transition-all`}>
                             <span className={`font-mono ${itemTheme.color} font-black`}>0{idx + 1}.</span>
                             <span className="text-sm text-white/60">{g}</span>
                          </div>
                       );
                    })}
                 </div>
              </section>
           )}

          {/* Rules System */}
          {guide.rules && (
              <section className="space-y-6">
                 <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>Hệ thống Quy tắc</h2>
                 <div className="space-y-4">
                    {guide.rules.map((rule: any, idx: number) => {
                       const itemTheme = googleColors[idx % googleColors.length];
                       return (
                          <div key={idx} className={`card-glass p-6 bg-black/40 border-white/5 space-y-3 group hover:${itemTheme.border} transition-all`}>
                             <div className={`${itemTheme.color} font-black text-sm uppercase tracking-wider`}>{rule.name}</div>
                             <p className="text-white/70 text-sm leading-relaxed">{rule.rule || rule.desc}</p>
                             {rule.example && (
                                <div className={`mt-2 p-3 bg-black/60 rounded border border-white/5 font-mono text-[10px] text-white/40 group-hover:${itemTheme.border} transition-colors`}>
                                   <span className={`${itemTheme.color} opacity-60 transition-colors uppercase font-bold mr-2 text-[8px]`}>Example:</span>
                                   {rule.example}
                                </div>
                             )}
                          </div>
                       );
                    })}
                 </div>
              </section>
           )}

           {/* Industries (for Domain Blueprints) */}
           {guide.industries && (
              <section className="space-y-8">
                 <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>Mô hình theo ngành</h2>
                 <div className="grid gap-6">
                    {guide.industries.map((ind: any, idx: number) => (
                       <div key={idx} className={`card-glass p-8 bg-black/20 border-white/10 space-y-6 group hover:${theme.border} transition-all`}>
                          <div className="flex items-center gap-4">
                             <span className="text-4xl">{ind.icon}</span>
                             <h3 className={`text-2xl font-black ${theme.color}`}>{ind.name}</h3>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-8">
                             <div className="space-y-3">
                                <h4 className={`text-[10px] font-black ${theme.color} uppercase tracking-widest pl-2 border-l-2 ${theme.glow}`}>Features</h4>
                                <ul className="space-y-1.5">
                                   {ind.features.map((f: string, i: number) => (
                                      <li key={i} className="text-xs text-white/60 flex items-center gap-2">
                                         <div className={`w-1 h-1 rounded-full ${theme.bullet} opacity-40`} />
                                         {f}
                                      </li>
                                   ))}
                                </ul>
                             </div>
                             {ind.technicalNotes && (
                                <div className="space-y-3">
                                   <h4 className={`text-[10px] font-black ${theme.color} uppercase tracking-widest pl-2 border-l-2 ${theme.glow}`}>Technical Notes</h4>
                                   <ul className="space-y-2">
                                      {ind.technicalNotes.map((n: string, i: number) => (
                                         <li key={i} className={`text-[11px] font-mono ${theme.color} opacity-60 leading-relaxed italic`}>
                                            # {n}
                                         </li>
                                      ))}
                                   </ul>
                                </div>
                             )}
                          </div>
                       </div>
                    ))}
                 </div>
              </section>
           )}
        </div>

        {/* Right Column: Files & Architecture */}
        <div className="space-y-8">
           {/* Architecture Block */}
           <section className={`card-glass p-6 ${theme.bg} border ${theme.border} space-y-6`}>
              <div className={`flex items-center gap-2 ${theme.color} font-black uppercase text-sm`}>
                 <Layers3 className="h-4 w-4" />
                 Kiến trúc Module
              </div>
              <div className="space-y-4">
                 <div className="flex flex-col gap-1 items-center p-4 bg-black/40 rounded border border-white/5">
                    <span className="text-[10px] text-white/20 font-bold">DNA Origin</span>
                    <Dna className={`h-6 w-6 ${theme.color} opacity-40`} />
                    <span className="text-[11px] text-white/60 font-mono">.agent/.shared</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-white/20 font-bold uppercase ml-1">Location</span>
                    <code className={`text-[10px] bg-black/40 p-2 rounded truncate block ${theme.color} opacity-80`}>
                       {guide.location}
                    </code>
                 </div>
              </div>
           </section>

           {/* Core Protocols */}
           {guide.protocols && (
              <section className="space-y-6">
                 <h2 className={`text-xs font-black ${theme.color} uppercase tracking-[0.2em] px-2 opacity-60`}>Core Protocols</h2>
                 <div className="space-y-2">
                    {(guide.protocols || []).map((p: string, idx: number) => (
                       <div key={idx} className={`flex items-center gap-3 p-3 bg-black/40 border border-white/5 rounded-lg group hover:${theme.border} transition-all`}>
                          <CpuIcon className={`h-3.5 w-3.5 ${theme.color} opacity-60`} />
                          <span className="text-[11px] text-white/60">{p}</span>
                       </div>
                    ))}
                 </div>
              </section>
           )}

           {/* Standard List */}
           {guide.standards && (
              <section className="space-y-4">
                 <h2 className={`text-xs font-black ${theme.color} uppercase tracking-[0.2em] px-2 opacity-60`}>Kỷ luật & Tiêu chuẩn</h2>
                 <ul className="space-y-2">
                    {(guide.standards || []).map((std: string, idx: number) => (
                       <li key={idx} className="text-[11px] text-white/40 flex gap-2">
                          <CheckCircle2 className={`h-3 w-3 ${theme.color} flex-shrink-0`} />
                          {std}
                       </li>
                    ))}
                 </ul>
              </section>
           )}

           {/* Capabilities List */}
           {guide.capabilities && (
              <section className="space-y-4">
                 <h2 className={`text-xs font-black ${theme.color} uppercase tracking-[0.2em] px-2 opacity-60`}>Capabilities</h2>
                 <ul className="space-y-2">
                    {guide.capabilities.map((cap: string, idx: number) => (
                       <li key={idx} className="text-[11px] text-white/60 flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/5 group hover:bg-white/10 transition-all">
                          <Zap className={`h-3 w-3 ${theme.color}`} />
                          {cap}
                       </li>
                    ))}
                 </ul>
              </section>
           )}

           {/* Usage List */}
           {guide.usage && (
              <section className="space-y-4">
                 <h2 className={`text-xs font-black ${theme.color} uppercase tracking-[0.2em] px-2 opacity-60`}>Cách thức vận hành</h2>
                 <div className="space-y-2">
                    {guide.usage.map((u: string, idx: number) => (
                       <div key={idx} className={`p-3 bg-black/40 border border-white/5 rounded-lg flex gap-3 items-start group hover:${theme.border} transition-all`}>
                          <Rocket className={`h-3.5 w-3.5 ${theme.color} opacity-60 mt-0.5`} />
                          <span className="text-[11px] text-white/60 leading-relaxed">{u}</span>
                       </div>
                    ))}
                 </div>
              </section>
           )}
        </div>
      </div>
    </div>
  );
}
