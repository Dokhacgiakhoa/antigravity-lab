"use client";

import { motion } from "framer-motion";
import { Zap, Wrench, Database, Layout, Shield, Server, Search, Globe, Rocket, Code, Laptop, Smartphone, Gamepad, Activity, ShieldCheck, Cpu, Cloud, Bug, Palette, Brain, Terminal } from "lucide-react";
import { skillCategories, systemStats } from "@/data/documentation";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/guide/ui/PageHeader";

export default function SkillsPage() {
  const { t, locale } = useLanguage();
  const isEnglish = locale === 'en';
  const iconMap: Record<string, any> = {
    web: Globe,
    backend: Server,
    security: ShieldCheck,
    devops: Cloud,
    ai: Brain,
    architecture: "🏛️",
    quality: "🧪",
    growth: "📈",
    shells: "🐚"
  };

  // Improved map with actual Lucide icons where possible
  const lucideIconMap: Record<string, any> = {
    web: Globe,
    backend: Server,
    security: ShieldCheck,
    devops: Cloud,
    ai: Brain,
    architecture: Cpu,
    quality: Activity,
    growth: Rocket,
    shells: Terminal
  };

  return (
    <div className="page-container mt-24 pb-24 space-y-16">
      <PageHeader 
        badgeIcon={Zap}
        badgeLabel={t('guide.skills.masterLabel')}
        title={t('guide.skills.title')}
        description={t('guide.skills.subtitle').replace('{count}', systemStats.skills.toString())}
        color="yellow"
      />

      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {skillCategories.map((cat, idx) => {
          const Icon = lucideIconMap[cat.id] || Wrench;
          const googleColors = [
            { color: "text-red-400", border: "border-red-500/20", bg: "bg-red-500/10", accent: "from-red-500/20" },
            { color: "text-yellow-400", border: "border-yellow-500/20", bg: "bg-yellow-500/10", accent: "from-yellow-500/20" },
            { color: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/10", accent: "from-emerald-500/20" },
            { color: "text-blue-400", border: "border-blue-500/20", bg: "bg-blue-500/10", accent: "from-blue-500/20" },
          ];
          const styles = googleColors[idx % googleColors.length];
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`group card-glass p-0 overflow-hidden border ${styles.border} bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-[2.5rem] relative`}
            >
              {/* Header - Floating Island Style */}
              <div className={`m-3 p-8 bg-gradient-to-br ${styles.accent} to-transparent border border-white/10 rounded-[2rem] shadow-xl relative overflow-hidden group-hover:scale-[0.98] transition-transform duration-500`}>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-5 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${styles.bg} border border-white/10 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon className={`h-8 w-8 ${styles.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight italic leading-tight">
                        {isEnglish ? (cat.nameEn || cat.name) : cat.name}
                    </h3>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${styles.color} opacity-70 mt-1 bg-white/5 px-2 py-0.5 rounded-full border border-white/5 w-fit`}>
                      {cat.skills.length} Master Skills
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Skills List */}
              <div className="p-6 grid gap-4">
                {cat.skills.map((skill: any, sIdx: number) => (
                  <div 
                    key={sIdx} 
                    className="p-5 rounded-[2rem] bg-black/40 border border-white/[0.03] hover:border-white/10 hover:bg-black/60 transition-all duration-300 group/skill shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1.5 shrink-0">
                         <div className={`w-2 h-2 rounded-full ${styles.bg.replace('/10', '/40')} group-hover/skill:scale-125 transition-transform`} />
                      </div>
                      <div className="space-y-3 flex-grow">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <code className="text-sm md:text-base text-white/90 font-black tracking-tight group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </code>
                          <span className="text-[10px] font-black uppercase tracking-tighter px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/5">v4.0.0</span>
                        </div>
                        
                        <p className="text-xs text-white/40 leading-relaxed font-medium">
                          {isEnglish ? (skill.descEn || skill.desc) : skill.desc}
                        </p>

                        {/* Detailed Features */}
                        {skill.features && skill.features.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5 mt-3 pt-3">
                            {skill.features.map((feature: string, fIdx: number) => (
                              <span 
                                key={fIdx}
                                className={`text-[9px] font-black uppercase tracking-tighter px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-white/30 group-hover/skill:text-white/60 group-hover/skill:border-white/10 transition-colors`}
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto text-center py-12 relative">
        <div className="absolute inset-0 bg-yellow-400/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <p className="text-white/60 text-lg font-light leading-relaxed">
            {isEnglish 
              ? <>Skills are structured as independent directories in <code className="text-yellow-400 border-b border-yellow-400/20 pb-0.5">.agent/skills/</code>.</>
              : <>Hệ thống kỹ năng được cấu trúc dưới dạng các thư mục độc lập trong <code className="text-yellow-400 border-b border-yellow-400/20 pb-0.5">.agent/skills/</code>.</>
            }
          </p>
          <p className="text-white/30 text-xs italic uppercase tracking-[0.2em]">
            {isEnglish 
              ? "Agent automatically reads `SKILL.md` when executing related tasks."
              : "Agent sẽ tự động đọc tệp `SKILL.md` khi bắt đầu thực thi nhiệm vụ liên quan."
            }
          </p>
        </div>
      </div>
    </div>
  );
}

