"use client";

import { motion } from "framer-motion";
import { Share2, Dna, Layers, ShieldCheck, Globe, Database, Cpu, Lock, Terminal, Layout, FileCode, CheckCircle2, Search, Zap, Rocket, Activity, Shield, Grid, Code, Server, Smartphone, Monitor, ArrowRight } from "lucide-react";
import Link from "next/link";
import { sharedModules } from "@/data/documentation";

export default function SharedPage() {
  const iconMap: Record<string, any> = {
    "🧠": Cpu,
    "📡": Globe,
    "⚖️": ShieldCheck,
    "🗄️": Database,
    "🎨": Layers,
    "🏗️": Layout,
    "🌐": Globe,
    "🚀": Rocket,
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

  return (
    <div className="page-container mt-24 pb-24 space-y-12">
      <div className="text-center space-y-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-black uppercase tracking-widest"
        >
          <Share2 className="h-4 w-4" />
          The DNA System
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black text-white">Modules .shared</h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          {sharedModules.length} bộ mã gen (DNA) dùng chung cho toàn bộ hệ thống Antigravity, lan truyền tri thức giữa các dự án.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="card-glass p-8 bg-gradient-to-br from-white/[0.03] to-transparent border-emerald-500/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
             <div className="w-32 h-32 rounded-full border-4 border-emerald-500/20 flex items-center justify-center animate-pulse relative">
                <div className="absolute inset-0 rounded-full border border-emerald-500/40 animate-spin-slow" />
                <Dna className="h-12 w-12 text-emerald-400" />
             </div>
             <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-black text-white">Scientific Linkage</h3>
                <p className="text-white/60 leading-relaxed">
                  Cơ chế liên kết khoa học giúp các files và modules tự động nhận diện và tương tác với nhau mà không cần cấu hình thủ công phức tạp.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                   <span className="px-3 py-1 rounded bg-white/5 text-xs text-white/40 font-mono">.agent/.shared</span>
                   <span className="px-3 py-1 rounded bg-white/5 text-xs text-white/40 font-mono">metadata header</span>
                   <span className="px-3 py-1 rounded bg-white/5 text-xs text-white/40 font-mono">auto-discovery</span>
                </div>
             </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sharedModules.map((mod, idx) => {
            const Icon = iconMap[mod.icon] || Dna;
            return (
              <Link key={mod.id} href={`/guide/shared/${mod.id}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: Math.min(idx * 0.05, 1) }}
                  className="group p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-emerald-500/30 transition-all space-y-4 cursor-pointer h-full flex flex-col"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                      <Icon className="h-6 w-6 text-white/60 group-hover:text-emerald-400" />
                    </div>
                    <span className="text-[8px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded uppercase font-bold border border-emerald-500/20">
                      {mod.status}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-black text-white group-hover:text-emerald-400 transition-colors text-lg mb-1">{mod.name}</h4>
                    <p className="text-xs text-white/40 leading-relaxed line-clamp-2">{mod.descriptionVi}</p>
                  </div>
                  <div className="pt-2 border-t border-white/5 mt-auto">
                    <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest mb-2">Key Features</p>
                    <ul className="space-y-1">
                      {mod.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="text-[10px] text-white/50 flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-emerald-400/40" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-[10px] text-emerald-400/40 uppercase font-black tracking-widest">Detail Architecture</span>
                     <ArrowRight className="h-4 w-4 text-emerald-400" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

