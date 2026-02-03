"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldAlert, FileText, CheckCircle2, Lock, Shield, MessageSquare, BookOpen, Terminal, Code, Settings, Briefcase, Scale, GraduationCap, AlertTriangle, FileCheck } from "lucide-react";
import Link from "next/link";
import { ruleGuides } from "@/data/guide-content";
import { notFound } from "next/navigation";

export default function RuleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const guide = ruleGuides[id as keyof typeof ruleGuides];

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

  const Icon = iconMap[guide.icon] || FileText;

  return (
    <div className="page-container mt-12 pb-24 space-y-12 max-w-5xl mx-auto">
      <Link href="/guide/rules" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Rules
      </Link>

      {/* Header */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-4xl">
            <Icon className="h-10 w-10 text-red-400" />
          </div>
          <div>
            <div className="flex items-center gap-3">
               <h1 className="text-4xl font-black text-white">{guide.name}</h1>
               <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-xs font-black border border-red-500/20 uppercase tracking-widest">
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
             <h2 className="text-2xl font-black text-white border-l-4 border-red-500 pl-4 uppercase tracking-wider">Mục đích & Phạm vi</h2>
             <div className="card-glass p-8 bg-white/[0.02]">
                <p className="text-white/70 leading-relaxed text-lg italic">
                   "{guide.purpose}"
                </p>
             </div>
          </section>

          {/* Regulations / Rules */}
          <section className="space-y-6">
             <h2 className="text-2xl font-black text-white border-l-4 border-red-500 pl-4 uppercase tracking-wider">Các quy định chi tiết</h2>
             <div className="space-y-4">
                {guide.rules.map((rule: any, idx: number) => (
                   <div key={idx} className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-3 group hover:border-red-500/20 transition-all">
                      <div className="flex items-center gap-2 text-red-400 font-black text-sm uppercase">
                         <FileCheck className="h-4 w-4 opacity-40" />
                         {rule.title}
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">{rule.desc}</p>
                   </div>
                ))}
             </div>
          </section>

          {/* Enforcement */}
          {guide.enforcement && (
             <section className="space-y-6">
                <h2 className="text-2xl font-black text-white border-l-4 border-red-500 pl-4 uppercase tracking-wider">Cơ chế thực thi</h2>
                <div className="grid md:grid-cols-2 gap-4">
                   {guide.enforcement.map((item: string, idx: number) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                         <span className="text-sm text-white/70">{item}</span>
                      </div>
                   ))}
                </div>
             </section>
          )}
        </div>

        {/* Right Column: Files & Exceptions */}
        <div className="space-y-8">
           {/* Source Files */}
           <section className="card-glass p-6 bg-red-500/5 border-red-500/10 space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-black uppercase text-sm">
                 <FileText className="h-4 w-4" />
                 File nguồn
              </div>
              <div className="space-y-2">
                 {guide.files.map((file: string, idx: number) => (
                    <code key={idx} className="block text-[10px] font-mono bg-black/40 border border-white/5 px-3 py-2 rounded text-white/40 truncate">
                       {file}
                    </code>
                 ))}
              </div>
           </section>

           {/* Exceptions */}
           {guide.exceptions && (
              <section className="card-glass p-6 bg-yellow-500/5 border-yellow-500/10 space-y-4">
                 <div className="flex items-center gap-2 text-yellow-500 font-black uppercase text-sm">
                    <AlertTriangle className="h-4 w-4" />
                    Trường hợp ngoại lệ
                 </div>
                 <ul className="space-y-2">
                    {guide.exceptions.map((ex: string, idx: number) => (
                       <li key={idx} className="text-xs text-white/60 flex gap-2">
                          <span className="text-yellow-500">•</span>
                          {ex}
                       </li>
                    ))}
                 </ul>
              </section>
           )}

           {/* Prohibited Actions */}
           {guide.prohibited && (
              <section className="card-glass p-6 bg-black border-red-900 space-y-4 shadow-[0_0_20px_rgba(255,0,0,0.1)]">
                 <div className="flex items-center gap-2 text-red-600 font-black uppercase text-sm">
                    <ShieldAlert className="h-4 w-4" />
                    Cấm tuyệt đối
                 </div>
                 <ul className="space-y-3">
                    {guide.prohibited.map((item: string, idx: number) => (
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
