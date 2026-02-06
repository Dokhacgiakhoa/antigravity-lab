"use client";

import { motion } from "framer-motion";
import { Workflow, Command, ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { workflowsList, pdcaCycle } from "@/data/documentation";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/guide/ui/PageHeader";

export default function WorkflowsPage() {
  const { t, locale } = useLanguage();
  const categoryColorMap: Record<string, { color: string; bg: string; border: string; glow: string }> = {
    planning: { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "group-hover:border-red-500/40" },
    development: { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "group-hover:border-yellow-500/40" },
    design: { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "group-hover:border-yellow-500/40" },
    quality: { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "group-hover:border-emerald-500/40" },
    devops: { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "group-hover:border-blue-500/40" },
    maintenance: { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "group-hover:border-blue-500/40" },
    advanced: { color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", glow: "group-hover:border-cyan-500/40" },
    documentation: { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "group-hover:border-blue-500/40" },
    management: { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "group-hover:border-red-500/40" },
    system: { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "group-hover:border-yellow-500/40" },
  };

  const pdcaStyles: Record<string, { color: string; border: string }> = {
    red: { color: "text-red-400", border: "border-red-500/40" },
    yellow: { color: "text-yellow-400", border: "border-yellow-500/40" },
    green: { color: "text-emerald-400", border: "border-emerald-500/40" },
    cyan: { color: "text-blue-400", border: "border-blue-500/40" },
    blue: { color: "text-blue-400", border: "border-blue-500/40" },
  };

  return (
    <div className="page-container mt-24 pb-24 space-y-12">
      <PageHeader
        badgeIcon={Workflow}
        badgeLabel={t('guide.workflows.badge')}
        title={t('guide.workflows.title')}
        description={t('guide.workflows.subtitle').replace('{count}', workflowsList.length.toString())}
        color="blue"
      />

      {/* PDCA Cycle */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {pdcaCycle.map((item, idx) => {
           const style = pdcaStyles[item.color] || pdcaStyles.blue;
           return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-2xl bg-black/40 border-2 ${style.border} text-center space-y-2`}
            >
              <h3 className={`text-3xl font-black ${style.color}`}>{item.phase}</h3>
              <p className="text-white/60 text-xs font-bold uppercase">{locale === 'en' ? item.nameEn || item.name : item.name}</p>
              <p className="text-white/30 text-[10px] leading-tight">{locale === 'en' ? item.descriptionEn || item.description : item.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Slash Commands */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {workflowsList.map((wf, idx) => {
          const googleColors = [
            { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "group-hover:border-red-500/40" },
            { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "group-hover:border-yellow-500/40" },
            { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "group-hover:border-emerald-500/40" },
            { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "group-hover:border-blue-500/40" },
          ];
          const theme = googleColors[idx % googleColors.length];
          
          return (
            <Link key={wf.id} href={`/guide/workflows/${wf.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + Math.min(idx * 0.05, 1) }}
                className={`group card-glass p-8 hover:bg-white/[0.05] transition-all cursor-pointer border ${theme.border} ${theme.glow} h-full rounded-3xl`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className={`p-2 rounded-xl ${theme.bg} border ${theme.border}`}>
                      <Command className={`h-4 w-4 ${theme.color}`} />
                    </div>
                    <code className="font-black text-base tracking-tight">{wf.command}</code>
                  </div>
                  <span className={`text-[10px] ${theme.bg} border ${theme.border} px-3 py-1 rounded-full ${theme.color} font-black uppercase tracking-widest transition-colors shadow-sm`}>
                    {wf.category}
                  </span>
                </div>
                  <h4 className="text-xl font-black text-white italic uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
                    {locale === 'en' ? wf.nameEn || wf.name : wf.name}
                  </h4>
                  <p className="text-white/60 text-sm font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                    {locale === 'en' ? wf.descEn || wf.desc : wf.desc}
                  </p>
                <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest ${theme.color} opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-right mt-auto pt-4 border-t border-white/5`}>
                  <PlayCircle className="h-4 w-4" />
                  Execution Roadmap
                  <ArrowRight className="h-3 w-3 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
