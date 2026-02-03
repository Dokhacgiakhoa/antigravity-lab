"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Dna, Layers, ShieldCheck, Globe, Database, Cpu, Lock, Terminal, Layout, FileCode, CheckCircle2, Search, Zap, Rocket, Activity, Shield, Grid, Code, Server, Smartphone, Monitor, Boxes, Layers3, CpuIcon } from "lucide-react";
import Link from "next/link";
import { sharedModuleGuides } from "@/data/guide-content";
import { notFound } from "next/navigation";

export default function SharedModuleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const guide = sharedModuleGuides[id as keyof typeof sharedModuleGuides];

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

  const Icon = iconMap[guide.icon] || Dna;

  return (
    <div className="page-container mt-12 pb-24 space-y-12 max-w-5xl mx-auto">
      <Link href="/guide/shared" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Shared Modules
      </Link>

      {/* Header */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-4xl">
            <Icon className="h-10 w-10 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-3">
               <h1 className="text-4xl font-black text-white">{guide.name}</h1>
               <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-black border border-emerald-500/20 uppercase tracking-widest">
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
             <h2 className="text-2xl font-black text-white border-l-4 border-emerald-500 pl-4 uppercase tracking-wider">Tầm nhìn & Mục đích</h2>
             <div className="card-glass p-8 bg-white/[0.02]">
                <p className="text-white/70 leading-relaxed text-lg">
                   {guide.purpose}
                </p>
             </div>
          </section>

          {/* Features */}
          <section className="space-y-6">
             <h2 className="text-2xl font-black text-white border-l-4 border-emerald-500 pl-4 uppercase tracking-wider">Tính năng cốt lõi</h2>
             <div className="grid md:grid-cols-2 gap-4">
                {guide.features.map((feature: string, idx: number) => (
                   <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-white/5 flex gap-4 items-start group hover:border-emerald-500/20 transition-all">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="text-sm text-white/70">{feature}</span>
                   </div>
                ))}
             </div>
          </section>

          {/* Guidelines */}
          {guide.guidelines && (
             <section className="space-y-6">
                <h2 className="text-2xl font-black text-white border-l-4 border-emerald-500 pl-4 uppercase tracking-wider">Hướng dẫn sử dụng</h2>
                <div className="space-y-4">
                   {guide.guidelines.map((g: string, idx: number) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                         <span className="font-mono text-emerald-400 font-black">0{idx + 1}.</span>
                         <span className="text-sm text-white/60">{g}</span>
                      </div>
                   ))}
                </div>
             </section>
          )}
        </div>

        {/* Right Column: Files & Architecture */}
        <div className="space-y-8">
           {/* Architecture Block */}
           <section className="card-glass p-6 bg-emerald-500/5 border-emerald-500/10 space-y-6">
              <div className="flex items-center gap-2 text-emerald-400 font-black uppercase text-sm">
                 <Layers3 className="h-4 w-4" />
                 Kiến trúc Module
              </div>
              <div className="space-y-4">
                 <div className="flex flex-col gap-1 items-center p-4 bg-black/40 rounded border border-white/5">
                    <span className="text-[10px] text-white/20 font-bold">DNA Origin</span>
                    <Dna className="h-6 w-6 text-emerald-400/40" />
                    <span className="text-[11px] text-white/60 font-mono">.agent/.shared</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-white/20 font-bold uppercase ml-1">Location</span>
                    <code className="text-[10px] bg-black/40 p-2 rounded truncate block text-emerald-400/80">
                       {guide.location}
                    </code>
                 </div>
              </div>
           </section>

           {/* Core Protocols */}
           {guide.protocols && (
              <section className="space-y-6">
                 <h2 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] px-2">Core Protocols</h2>
                 <div className="space-y-2">
                    {guide.protocols.map((p: string, idx: number) => (
                       <div key={idx} className="flex items-center gap-3 p-3 bg-black/40 border border-white/5 rounded-lg">
                          <CpuIcon className="h-3.5 w-3.5 text-emerald-400/60" />
                          <span className="text-[11px] text-white/60">{p}</span>
                       </div>
                    ))}
                 </div>
              </section>
           )}

           {/* Standards */}
           {guide.standards && (
              <section className="space-y-4">
                 <h2 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] px-2">Kỷ luật & Tiêu chuẩn</h2>
                 <ul className="space-y-2">
                    {guide.standards.map((std: string, idx: number) => (
                       <li key={idx} className="text-[11px] text-white/40 flex gap-2">
                          <CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" />
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
