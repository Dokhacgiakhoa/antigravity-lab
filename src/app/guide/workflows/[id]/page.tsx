"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal, CheckCircle2, PlayCircle, StepForward, AlertTriangle, ListChecks } from "lucide-react";
import Link from "next/link";
import { workflowGuides } from "@/data/guide-content";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

export default function WorkflowDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const guide = workflowGuides[id as keyof typeof workflowGuides] as any;

  if (!guide) {
    notFound();
  }

  const themeMap: Record<string, { color: string; bg: string; border: string; glow: string; bullet: string }> = {
    planning: { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "border-red-500", bullet: "bg-red-500" },
    management: { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "border-red-500", bullet: "bg-red-500" },
    development: { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "border-yellow-500", bullet: "bg-yellow-500" },
    design: { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "border-yellow-500", bullet: "bg-yellow-500" },
    system: { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "border-yellow-500", bullet: "bg-yellow-500" },
    quality: { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "border-emerald-500", bullet: "bg-emerald-500" },
    devops: { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "border-blue-500", bullet: "bg-blue-500" },
    maintenance: { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "border-blue-500", bullet: "bg-blue-500" },
    advanced: { color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", glow: "border-cyan-500", bullet: "bg-cyan-500" },
    documentation: { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "border-blue-500", bullet: "bg-blue-500" },
  };

  const currentWf = (guide as any).category ? guide : { category: 'advanced' }; // fallback
  const theme = themeMap[(currentWf as any).category] || themeMap.advanced;

  const googleColors = [
    { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", bullet: "bg-red-500" },
    { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", bullet: "bg-yellow-500" },
    { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", bullet: "bg-emerald-500" },
    { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", bullet: "bg-blue-500" },
  ];

  return (
    <div className="page-container mt-12 pb-24 space-y-12 max-w-5xl mx-auto">
      <Link href="/guide/workflows" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Workflows
      </Link>

      {/* Header */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 rounded-2xl ${theme.bg} border ${theme.border} flex items-center justify-center text-4xl`}>
            {guide.icon}
          </div>
          <div>
            <div className="flex items-center gap-3">
               <h1 className="text-4xl font-black text-white">{guide.title}</h1>
               <code className={`${theme.bg} ${theme.color} px-3 py-1 rounded-full text-sm font-black border ${theme.border}`}>
                  {guide.command}
               </code>
            </div>
            <p className="text-white/40 text-lg mt-1">{guide.description}</p>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column: Purpose & Rules */}
        <div className="lg:col-span-2 space-y-12">
          {/* Purpose */}
          <section className="space-y-4">
             <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>Mục đích</h2>
             <div className="card-glass p-6 bg-white/[0.02]">
                <p className="text-white/70 leading-relaxed text-lg italic">
                   "{guide.purpose}"
                </p>
             </div>
          </section>

          {/* Steps */}
          <section className="space-y-6">
             <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>Các bước thực hiện</h2>
             <div className="space-y-4">
                {(guide.steps || []).map((step: any, idx: number) => {
                   const itemTheme = googleColors[idx % googleColors.length];
                   return (
                      <motion.div 
                        key={step.step}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex gap-6 items-start group"
                      >
                         <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:${itemTheme.bg} group-hover:${itemTheme.border} transition-all font-black text-white/40 group-hover:${itemTheme.color}`}>
                            {step.step}
                         </div>
                         <div className="pt-1 space-y-1 border-b border-white/5 pb-4 md:flex-1">
                            <h3 className={`text-lg font-black ${itemTheme.color}`}>{step.title}</h3>
                            <p className="text-white/40 text-sm">{step.desc}</p>
                         </div>
                      </motion.div>
                   );
                })}
             </div>
          </section>

          {/* Extra Content (Phases for Debug/Orchestrate) */}
          {guide.phases && (
             <section className="space-y-6">
                <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>Quy trình chi tiết</h2>
                <div className="grid md:grid-cols-2 gap-4">
                   {guide.phases.map((phase: any, idx: number) => {
                      const itemTheme = googleColors[idx % googleColors.length];
                      return (
                         <div key={idx} className={`card-glass p-6 bg-black/40 border-white/5 space-y-3 group hover:${itemTheme.border} transition-all`}>
                            <div className={`flex items-center gap-2 ${itemTheme.color} font-black text-sm uppercase`}>
                               <span className="opacity-40">Phase {idx + 1}:</span>
                               {phase.title || phase.name}
                            </div>
                            <p className="text-white/60 text-xs">{phase.desc}</p>
                            <ul className="space-y-1.5 pt-2 border-t border-white/5">
                               {(phase.items || phase.agents || []).map((item: any, i: number) => (
                                  <li key={i} className="text-[11px] text-white/40 flex items-center gap-2">
                                     <div className={`w-1 h-1 rounded-full ${itemTheme.color} opacity-40`} />
                                     {typeof item === 'string' ? item : item.name || item}
                                  </li>
                               ))}
                            </ul>
                         </div>
                      );
                   })}
                </div>
             </section>
          )}
        </div>

        {/* Right Column: Rules, Examples, Output */}
        <div className="space-y-8">
           {/* Critical Rules */}
           {guide.criticalRules && (
              <section className="card-glass p-6 bg-red-500/5 border-red-500/10 space-y-4 shadow-[0_0_20px_rgba(255,0,0,0.05)]">
                 <div className="flex items-center gap-2 text-red-400 font-black uppercase text-sm">
                    <AlertTriangle className="h-4 w-4" />
                    Bắt buộc tuân thủ
                 </div>
                 <ul className="space-y-3">
                    {(guide.criticalRules || []).map((rule: string, idx: number) => (
                       <li key={idx} className="text-xs text-white/60 flex gap-2">
                          <span className="text-red-400">•</span>
                          {rule}
                       </li>
                    ))}
                 </ul>
              </section>
           )}

           {/* Examples */}
           <section className={`card-glass p-6 ${theme.bg} border ${theme.border} space-y-4`}>
              <div className={`flex items-center gap-2 ${theme.color} font-black uppercase text-sm`}>
                 <Terminal className="h-4 w-4" />
                 Ví dụ lệnh
              </div>
              <div className="space-y-3">
                 {(guide.examples || []).map((ex: any, idx: number) => (
                    <div key={idx} className="space-y-1.5 p-3 bg-black/40 rounded border border-white/5 font-mono text-[11px] leading-tight">
                       <div className={`${theme.color} opacity-80`}>$ {typeof ex === 'string' ? ex : ex.command}</div>
                       {ex.output && <div className="text-white/20"># Output: {ex.output}</div>}
                    </div>
                 ))}
              </div>
           </section>

           {/* Output Info */}
           {guide.output && (
              <section className={`card-glass p-6 ${theme.bg} border ${theme.border} space-y-4`}>
                 <div className={`flex items-center gap-2 ${theme.color} font-black uppercase text-sm`}>
                    <ListChecks className="h-4 w-4" />
                    Sản phẩm đầu ra
                 </div>
                 <div className="space-y-3">
                    <div className="p-3 bg-black/40 rounded border border-white/5 flex flex-col gap-1">
                       <span className="text-[10px] text-white/20 uppercase font-bold">Vị trí</span>
                       <code className={`text-xs ${theme.color} opacity-80 truncate`}>{guide.output.location}</code>
                    </div>
                    <ul className="space-y-1.5">
                       {(guide.output.content || []).map((c: string, i: number) => (
                          <li key={i} className="text-xs text-white/60 flex items-center gap-2">
                             <CheckCircle2 className={`h-3.3 w-3.3 ${theme.color}`} />
                             {c}
                          </li>
                       ))}
                    </ul>
                 </div>
              </section>
           )}
        </div>
      </div>
    </div>
  );
}
