"use client";

import { motion } from "framer-motion";
import { Bot, User, BrainCircuit, MessageSquare, Shield, Laptop, Brain, Layers, GitBranch, Search, Terminal, Code, Cpu, Database, Cloud, Settings, Smartphone, Gamepad, Lock, Bug, SearchCode, FileCode, Compass, ArrowRight, PlayCircle, Zap } from "lucide-react";
import Link from "next/link";
import { agentsList } from "@/data/documentation";

export default function AgentsPage() {
  const iconMap: Record<string, any> = {
    "🎯": BrainCircuit,
    "🔍": Search,
    "📋": FileCode,
    "📊": Layers,
    "👔": User,
    "🎨": Laptop,
    "⚙️": Settings,
    "🗄️": Database,
    "☁️": Cloud,
    "📱": Smartphone,
    "🎮": Gamepad,
    "🛡️": Lock,
    "🔓": Shield,
    "🧪": Bug,
    "🤖": Bot,
    "🚀": Bot, // Use Bot if Rocket not imported elsewhere or just map it
    "⚡": Zap,
    "🔧": Terminal,
    "📝": MessageSquare,
    "🔎": SearchCode,
    "💻": Code,
    "🏛️": Search,
    "🧭": Compass
  };

  const colorMap: Record<string, any> = {
    plan: { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
    do: { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    check: { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    act: { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    command: { color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  };

  return (
    <div className="page-container mt-24 pb-24 space-y-12">
      <div className="text-center space-y-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest"
        >
          <Bot className="h-4 w-4" />
          Neural Workforce
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black text-white">Đội ngũ Agent</h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          {agentsList.length} chuyên gia AI ảo phối hợp làm việc như một team dev thực thụ (Scale-Adaptive Team).
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {agentsList.map((agent, idx) => {
          const Icon = iconMap[agent.icon] || Bot;
          const googleColors = [
            { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
            { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
            { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
            { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
          ];
          const styles = googleColors[idx % googleColors.length];
          
          return (
            <Link key={agent.id} href={`/guide/agents/${agent.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: Math.min(idx * 0.05, 1) }}
                className={`card-glass p-8 flex flex-col gap-6 relative overflow-hidden group border ${styles.border} h-full hover:bg-white/[0.05] transition-all rounded-3xl`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${styles.bg}`} />
                
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${styles.bg} flex items-center justify-center flex-shrink-0 border ${styles.border} shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-7 w-7 ${styles.color}`} />
                  </div>
                  
                  <div className="space-y-1 relative z-10 flex-1">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-black text-white italic tracking-tight">{agent.name}</h3>
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${styles.border} ${styles.color} bg-black/20 uppercase tracking-widest w-fit mt-2`}>
                        {agent.role}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                   <div className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em]">
                      View Specialization Guide
                   </div>
                   <ArrowRight className={`h-4 w-4 ${styles.color} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all`} />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Interaction Model */}
      <div className="max-w-4xl mx-auto space-y-8 pt-12">
        <div className="text-center">
          <h2 className="text-2xl font-black text-white mb-2">Mô hình Tương tác</h2>
          <p className="text-white/40 text-sm">Cách User giao tiếp với Agent</p>
        </div>

        <div className="relative">
             {/* Simple Diagram */}
             <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 w-48">
                    <User className="h-8 w-8 mx-auto mb-2 text-white" />
                    <div className="font-bold text-white">User</div>
                </div>
                <div className="h-8 w-0.5 md:h-0.5 md:w-16 bg-white/20 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] px-2 text-[10px] text-white/40">CHAT</div>
                </div>
                <div className="p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20 w-48">
                    <BrainCircuit className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                    <div className="font-bold text-blue-400">Orchestrator</div>
                </div>
                <div className="h-8 w-0.5 md:h-0.5 md:w-16 bg-white/20 relative">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] px-2 text-[10px] text-white/40">DELEGATE</div>
                </div>
                <div className="p-6 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 w-48">
                    <div className="flex justify-center -space-x-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-[10px] text-blue-400">FE</div>
                        <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[10px] text-orange-400">BE</div>
                    </div>
                    <div className="font-bold text-yellow-400">Specialists</div>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
}
