"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SAMPLES_DATA, SampleProject } from "@/data/samples";
import { 
  Rocket, Command, MessageSquare, ArrowRight, 
  ChevronRight, Code2, Sparkles, Terminal,
  Target, Search, Activity
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { localize } from "@/lib/i18n";

export default function SamplesPage() {
  const [activeId, setActiveId] = useState(SAMPLES_DATA[0].id);
  const activeProject = SAMPLES_DATA.find(p => p.id === activeId) || SAMPLES_DATA[0];
  const { t, locale } = useLanguage();

  return (
    <div className="page-container mt-12 space-y-16 pb-24">
      {/* Header */}
      <section className="text-center space-y-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-6 py-2 rounded-full text-blue-400 text-xs font-black tracking-widest uppercase"
        >
          <Rocket className="h-4 w-4" />
          {t('samples.headerTitle')}
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          {t('samples.headerTitle')}
        </h1>
        
        <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          {t('samples.headerDesc')}
        </p>
      </section>

      <div className="grid lg:grid-cols-12 gap-10 max-w-7xl mx-auto items-start">
        {/* Left: Project Selector */}
        <div className="lg:col-span-4 space-y-4">
          <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4 pl-2">
            {t('samples.chooseTopic')}
          </div>
          {SAMPLES_DATA.map((project, idx) => {
            const Icon = project.icon;
            const isActive = activeId === project.id;
            const colors: Record<string, any> = {
              blue: { 
                text: "text-blue-400", bg: "bg-blue-500", border: "border-blue-500", 
                soft: "bg-blue-500/10", glow: "shadow-blue-500/50" 
              },
              emerald: { 
                text: "text-emerald-400", bg: "bg-emerald-500", border: "border-emerald-500", 
                soft: "bg-emerald-500/10", glow: "shadow-emerald-500/50" 
              },
              red: { 
                text: "text-red-400", bg: "bg-red-500", border: "border-red-500", 
                soft: "bg-red-500/10", glow: "shadow-red-500/50" 
              },
              yellow: { 
                text: "text-yellow-400", bg: "bg-yellow-500", border: "border-yellow-500", 
                soft: "bg-yellow-500/10", glow: "shadow-yellow-500/50" 
              },
              purple: { 
                text: "text-purple-400", bg: "bg-purple-500", border: "border-purple-500", 
                soft: "bg-purple-500/10", glow: "shadow-purple-500/50" 
              },
              pink: { 
                text: "text-pink-400", bg: "bg-pink-500", border: "border-pink-500", 
                soft: "bg-pink-500/10", glow: "shadow-pink-500/50" 
              }
            };
            const theme = colors[project.color] || colors.blue;

            return (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveId(project.id)}
                className={cn(
                  "w-full p-5 rounded-3xl border transition-all flex items-center gap-5 text-left group overflow-hidden relative",
                  isActive 
                    ? `${theme.soft} ${theme.border}/20 border-opacity-100 shadow-[0_0_30px_rgba(0,0,0,0.2)] scale-[1.02]` 
                    : "bg-white/[0.02] border-white/5 text-white/40 hover:text-white/80 hover:bg-white/[0.04]"
                )}
              >
                {isActive && (
                  <motion.div 
                    layoutId="active-glow"
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shimmer" 
                  />
                )}
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border transition-transform group-hover:scale-110",
                  isActive ? `bg-black/20 ${theme.border}/20 ${theme.text} shadow-lg` : "bg-black/20 border-white/5"
                )}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0 relative z-10">
                  <h3 className={cn("text-base font-black italic uppercase tracking-tight truncate", isActive && "text-white")}>
                    {localize(project, 'title', locale)}
                  </h3>
                  <div className="flex gap-2 mt-1">
                     <span className="text-[8px] font-black uppercase tracking-widest opacity-40">v4.0 Ready</span>
                  </div>
                </div>
                <ChevronRight className={cn("h-4 w-4 transition-all", isActive ? `opacity-100 translate-x-0 ${theme.text}` : "opacity-0 -translate-x-2")} />
              </motion.button>
            );
          })}
        </div>

        {/* Right: Detailed Dashboard */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {(() => {
              const colors: Record<string, any> = {
                blue: { text: "text-blue-400", bg: "bg-blue-500" },
                emerald: { text: "text-emerald-400", bg: "bg-emerald-500" },
                red: { text: "text-red-400", bg: "bg-red-500" },
                yellow: { text: "text-yellow-400", bg: "bg-yellow-500" },
                purple: { text: "text-purple-400", bg: "bg-purple-500" },
                pink: { text: "text-pink-400", bg: "bg-pink-500" }
              };
              const activeTheme = colors[activeProject.color] || colors.blue;

              return (
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  {/* Project Preview Card */}
                  <div className="card-glass p-8 rounded-[2.5rem] border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent space-y-8 shadow-2xl overflow-hidden relative">
                    <div className={`absolute -top-24 -right-24 w-64 h-64 ${activeTheme.bg}/10 blur-[100px] rounded-full`} />
                    
                    <div className="space-y-6 relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tech.map((t, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/40">
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-none">
                          {localize(activeProject, 'title', locale)}
                        </h2>
                        <p className="text-white/50 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
                           {localize(activeProject, 'desc', locale)}
                        </p>
                      </div>
                    </div>

                    {/* Execution Roadmap: Prompt & Explanation */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 pt-6">
                        <Target className="h-3 w-3" />
                         {t('samples.executionTitle')}
                      </div>
                      
                      <div className="grid gap-4">
                        {activeProject.executions.map((item, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                          >
                            <div className={`absolute inset-x-0 -inset-y-2 bg-gradient-to-r from-${activeProject.color}-500/[0.05] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                            
                            <div className="relative p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] hover:border-white/10 transition-all flex flex-col md:flex-row gap-6">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                                  <span className={`text-xs font-black ${activeTheme.text} opacity-60 group-hover:opacity-100 transition-opacity`}>0{i+1}</span>
                                </div>
                              </div>
                              
                              <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                  <div className={`p-1 px-2 rounded-md ${activeTheme.bg}/10 border ${activeTheme.text}/20`}>
                                    <Command className={`h-3 w-3 ${activeTheme.text}`} />
                                  </div>
                                  <code className={`text-xs md:text-sm font-black ${activeTheme.text} tracking-tight italic`}>
                                    {localize(item, 'prompt', locale)}
                                  </code>
                                </div>
                                
                                <p className="text-white/60 text-sm leading-relaxed font-medium pl-0 md:pl-8 border-l-0 md:border-l border-white/5">
                                   {localize(item, 'explanation', locale)}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Linkage */}
                    <div className="pt-8 border-t border-white/5 flex flex-wrap gap-6 items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                       <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                             <Target className={`h-3 w-3 group-hover:${activeTheme.text}`} /> {locale === 'vi' ? 'Kịch bản tối ưu' : 'Optimal Script'}
                          </div>
                          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                             <Search className={`h-3 w-3 group-hover:${activeTheme.text}`} /> GEO Ready
                          </div>
                          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                             <Activity className={`h-3 w-3 group-hover:${activeTheme.text}`} /> Core Web Vitals
                          </div>
                       </div>
                       <div className="italic">{t('samples.standardArch')}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
