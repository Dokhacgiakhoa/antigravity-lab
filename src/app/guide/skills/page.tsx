"use client";

import { motion } from "framer-motion";
import { Zap, Wrench, Database, Layout, Shield, Server, Search, Globe, Rocket, Code, Laptop, Smartphone, Gamepad, Activity, ShieldCheck, Cpu } from "lucide-react";
import { skillCategories, systemStats } from "@/data/documentation";

export default function SkillsPage() {
  const iconMap: Record<string, any> = {
    Layout: Layout,
    Server: Server,
    Database: Database,
    Shield: ShieldCheck,
    Cpu: Cpu,
    Globe: Globe,
    Laptop: Laptop,
    Smartphone: Smartphone,
    Gamepad: Gamepad,
    Rocket: Rocket,
    Code: Code,
    Activity: Activity,
    Search: Search
  };

  return (
    <div className="page-container mt-24 pb-24 space-y-12">
      <div className="text-center space-y-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-1.5 rounded-full text-yellow-400 text-xs font-black uppercase tracking-widest"
        >
          <Zap className="h-4 w-4" />
          Master Skills
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black text-white">Thư viện Kỹ năng</h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          Hơn {systemStats.skills} bộ kỹ năng chuyên sâu (Master Skills) giúp AI giải quyết mọi bài toán kỹ thuật.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((cat, idx) => {
          const Icon = iconMap[cat.icon] || Wrench;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`card-glass p-8 space-y-6 hover:bg-white/[0.02] transition-colors border ${cat.border}`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-white/5 ${cat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black text-white">{cat.name}</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/5 hover:border-white/10 transition-colors cursor-default group">
                    <Wrench className="h-4 w-4 text-white/20 group-hover:text-white/40" />
                    <code className="text-sm text-white/80 font-mono italic">{skill}</code>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto text-center pt-8">
        <p className="text-white/40 text-sm">
          Mỗi kỹ năng chứa các hướng dẫn chi tiết (`SKILL.md`) để Agent tự học khi cần thiết.
        </p>
      </div>
    </div>
  );
}

