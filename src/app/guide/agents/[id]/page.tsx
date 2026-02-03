"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Bot, BrainCircuit, CheckCircle2, Shield, Settings, Zap, Database, Cloud, Tablet, Gamepad, User, Laptop } from "lucide-react";
import Link from "next/link";
import { agentGuides } from "@/data/guide-content";
import { notFound } from "next/navigation";

export default function AgentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const guide = agentGuides[id as keyof typeof agentGuides];

  if (!guide) {
    notFound();
  }

  const iconMap: Record<string, any> = {
    "🎯": BrainCircuit,
    "🎨": Laptop,
    "⚙️": Settings,
    "🛡️": Shield,
    "🗄️": Database,
    "🧪": Zap,
    "🚀": Bot,
    "🔧": Settings
  };

  const Icon = iconMap[guide.icon] || Bot;


  return (
    <div className="page-container mt-12 pb-24 space-y-12 max-w-5xl mx-auto">
      <Link href="/guide/agents" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Agents
      </Link>

      {/* Header */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-4xl">
            <Icon className="h-10 w-10 text-purple-400" />
          </div>
          <div>
            <div className="flex items-center gap-3">
               <h1 className="text-4xl font-black text-white">{guide.name}</h1>
               <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-black border border-purple-500/20 uppercase tracking-widest">
                  {guide.title}
               </span>
            </div>
            <p className="text-white/40 text-lg mt-1">{guide.description}</p>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column: Role & Mindset */}
        <div className="lg:col-span-2 space-y-12">
          {/* Role */}
          <section className="space-y-4">
             <h2 className="text-2xl font-black text-white border-l-4 border-purple-500 pl-4 uppercase tracking-wider">Vai đóng & Trách nhiệm</h2>
             <div className="card-glass p-8 bg-white/[0.02]">
                <p className="text-white/70 leading-relaxed text-lg">
                   {guide.role}
                </p>
             </div>
          </section>

          {/* Philosophy / Mindset */}
          {(guide.philosophy || guide.mindset) && (
             <section className="space-y-6">
                <h2 className="text-2xl font-black text-white border-l-4 border-purple-500 pl-4 uppercase tracking-wider">Mindset & Triết lý</h2>
                {guide.philosophy && (
                   <p className="text-white/40 italic text-lg pl-8 border-l border-white/10 mb-8">
                     "{guide.philosophy}"
                   </p>
                )}
                {guide.mindset && (
                   <div className="grid md:grid-cols-2 gap-4">
                      {guide.mindset.map((m: string, idx: number) => (
                         <div key={idx} className="flex gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                            <CheckCircle2 className="h-5 w-5 text-purple-400 flex-shrink-0" />
                            <span className="text-sm text-white/70">{m}</span>
                         </div>
                      ))}
                   </div>
                )}
             </section>
          )}

          {/* Workflow Phases */}
          {guide.workflowPhases && (
             <section className="space-y-6">
                <h2 className="text-2xl font-black text-white border-l-4 border-purple-500 pl-4 uppercase tracking-wider">Quy trình làm việc</h2>
                <div className="space-y-4">
                   {guide.workflowPhases.map((phase: any, idx: number) => (
                      <div key={idx} className="flex gap-6 relative">
                         <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center font-black text-purple-400 text-sm">
                               {idx}
                            </div>
                            {idx < guide.workflowPhases.length - 1 && <div className="w-0.5 h-full bg-white/5" />}
                         </div>
                         <div className="pb-8 flex-1">
                            <h3 className="text-white font-black text-lg">{phase.name}</h3>
                            <p className="text-white/40 text-sm">{phase.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </section>
          )}
        </div>

        {/* Right Column: Skills & Expertises */}
        <div className="space-y-8">
           {/* Skills */}
           <section className="card-glass p-6 bg-purple-500/5 border-purple-500/10 space-y-4">
              <div className="flex items-center gap-2 text-purple-400 font-black uppercase text-sm">
                 <Zap className="h-4 w-4" />
                 Bộ Kỹ Năng (Skills)
              </div>
              <div className="flex flex-wrap gap-2">
                 {guide.skills.map((skill: string, idx: number) => (
                    <span key={idx} className="text-[10px] font-mono bg-black/40 border border-white/5 px-2 py-1 rounded text-white/40">
                       {skill}
                    </span>
                 ))}
              </div>
           </section>

           {/* Expertise Areas */}
           {guide.expertiseAreas && (
              <section className="space-y-6">
                 <h2 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] px-2">Expertise Areas</h2>
                 <div className="space-y-4">
                    {guide.expertiseAreas.map((exp: any, idx: number) => (
                       <div key={idx} className="card-glass p-5 bg-black/60 border-white/5 space-y-3">
                          <h4 className="text-white font-bold text-sm flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                             {exp.area}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                             {exp.skills.map((s: string, i: number) => (
                                <span key={i} className="text-[9px] bg-white/5 px-1.5 py-0.5 rounded text-white/30">
                                   {s}
                                </span>
                             ))}
                          </div>
                       </div>
                    ))}
                 </div>
              </section>
           )}

           {/* Expertise (Simple list) */}
           {guide.expertise && (
              <section className="space-y-6">
                 <h2 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] px-2">Lĩnh vực chuyên môn</h2>
                 <ul className="space-y-2">
                    {guide.expertise.map((exp: string, idx: number) => (
                       <li key={idx} className="text-xs text-white/60 flex gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 flex-shrink-0" />
                          {exp}
                       </li>
                    ))}
                 </ul>
              </section>
           )}

           {/* Standards (Simple list) */}
           {guide.standards && (
              <section className="card-glass p-6 bg-emerald-500/5 border-emerald-500/10 space-y-4">
                 <div className="flex items-center gap-2 text-emerald-400 font-black uppercase text-sm">
                    <Shield className="h-4 w-4" />
                    Tiêu chuẩn kỹ thuật
                 </div>
                 <ul className="space-y-2">
                    {guide.standards.map((std: string, idx: number) => (
                       <li key={idx} className="text-xs text-white/60 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-emerald-400" />
                          {std}
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
