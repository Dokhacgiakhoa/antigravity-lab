"use client";

import { motion } from "framer-motion";
import { ShieldAlert, FileText, CheckCircle2, Lock, Shield, MessageSquare, BookOpen, Terminal, Code, Settings, Briefcase, Scale, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { rulesList } from "@/data/documentation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RulesPage() {
  const { t, locale } = useLanguage();
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

  const colorMap: Record<string, { color: string; bg: string; border: string; glow: string }> = {
    "GEMINI": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "group-hover:border-blue-500/40" },
    "security": { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "group-hover:border-red-500/40" },
    "malware-protection": { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "group-hover:border-red-500/40" },
    "error-logging": { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "group-hover:border-yellow-500/40" },
    "docs-update": { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "group-hover:border-emerald-500/40" },
    "debug": { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "group-hover:border-yellow-500/40" },
    "frontend": { color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", glow: "group-hover:border-cyan-500/40" },
    "backend": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "group-hover:border-blue-500/40" },
    "business": { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "group-hover:border-emerald-500/40" },
    "compliance": { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "group-hover:border-red-500/40" },
    "architecture-review": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "group-hover:border-blue-500/40" },
    "system-update": { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "group-hover:border-yellow-500/40" },
  };

  return (
    <div className="page-container mt-24 pb-24 space-y-12">
      <div className="text-center space-y-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full text-red-400 text-xs font-black uppercase tracking-widest"
        >
          <ShieldAlert className="h-4 w-4" />
          Rules & Constraints
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black text-white">{t('guide.rules.title')}</h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          {t('guide.rules.subtitle').replace('{count}', rulesList.length.toString())}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {rulesList.map((rule, idx) => {
          const Icon = iconMap[rule.icon] || FileText;
          const googleColors = [
            { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "group-hover:border-red-500/40" },
            { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "group-hover:border-yellow-500/40" },
            { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "group-hover:border-emerald-500/40" },
            { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "group-hover:border-blue-500/40" },
          ];
          const theme = googleColors[idx % googleColors.length];
          
          return (
            <Link key={rule.id} href={`/guide/rules/${rule.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: Math.min(idx * 0.05, 1) }}
                className={`card-glass p-8 space-y-6 bg-gradient-to-br from-white/[0.03] to-transparent hover:from-white/[0.05] group border ${theme.border} ${theme.glow} transition-all h-full rounded-3xl pb-10 relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${theme.bg} blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity`} />
                
                <div className="flex items-start justify-between relative z-10">
                  <div className={`w-14 h-14 ${theme.bg} border ${theme.border} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className={`h-7 w-7 ${theme.color}`} />
                  </div>
// ...
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full border ${theme.border} ${theme.color} ${theme.bg} uppercase tracking-widest shadow-sm`}>
                    {locale === 'en' ? rule.type : (rule.type === 'always-on' ? 'Luôn Bật' : 'Theo Yêu Cầu')}
                  </span>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-lg font-black text-white mb-2">{rule.name} (ID: {rule.id})</h3>
                  <p className="text-white/60 text-sm mb-4">
                    {locale === 'en' ? rule.descriptionEn || rule.description : rule.description}
                  </p>
                </div>

                <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                   <span className="text-[10px] text-white/30 uppercase font-black tracking-[0.2em]">
                     {locale === 'en' ? 'Constitution Audit' : 'Kiểm Tra Hiến Pháp'}
                   </span>
                   <ArrowRight className={`h-4 w-4 ${theme.color}`} />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto card-glass p-8 bg-black/40 border-red-500/20">
        <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
          <CheckCircle2 className="text-red-400" />
          {t('guide.rules.safetyTitle')}
        </h3>
        <ul className="space-y-4">
          <li className="flex gap-4 text-sm text-white/80">
            <span className="font-mono text-red-400">01.</span>
            <span>{t('guide.rules.safety.0')}</span>
          </li>
          <li className="flex gap-4 text-sm text-white/80">
            <span className="font-mono text-red-400">02.</span>
            <span>{t('guide.rules.safety.1')}</span>
          </li>
          <li className="flex gap-4 text-sm text-white/80">
            <span className="font-mono text-red-400">03.</span>
            <span>{t('guide.rules.safety.2')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

