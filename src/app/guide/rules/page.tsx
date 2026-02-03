"use client";

import { motion } from "framer-motion";
import { ShieldAlert, FileText, CheckCircle2, Lock, Shield, MessageSquare, BookOpen, Terminal, Code, Settings, Briefcase, Scale, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { rulesList } from "@/data/documentation";

export default function RulesPage() {
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
        <h1 className="text-4xl md:text-5xl font-black text-white">Quy tắc Vận hành</h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          Hệ thống {rulesList.length} quy tắc ("Constitution") đảm bảo AI hoạt động an toàn, nhất quán và hiệu quả.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {rulesList.map((rule, idx) => {
          const Icon = iconMap[rule.icon] || FileText;
          return (
            <Link key={rule.id} href={`/guide/rules/${rule.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: Math.min(idx * 0.05, 1) }}
                className="card-glass p-6 space-y-4 bg-gradient-to-br from-white/[0.03] to-transparent hover:from-white/[0.05] group border border-white/5 hover:border-red-500/20 transition-all h-full"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-red-400" />
                  </div>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border border-red-500/20 text-red-400 bg-red-500/5 uppercase tracking-wide`}>
                    {rule.type}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{rule.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mt-2 italic line-clamp-3">
                    {rule.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-[10px] text-white/20 uppercase font-black tracking-widest">Chi tiết luật</span>
                   <ArrowRight className="h-4 w-4 text-red-400" />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto card-glass p-8 bg-black/40 border-red-500/20">
        <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
          <CheckCircle2 className="text-red-400" />
          Nguyên tắc An toàn (Safety Guardrails)
        </h3>
        <ul className="space-y-4">
          <li className="flex gap-4 text-sm text-white/80">
            <span className="font-mono text-red-400">01.</span>
            <span>Không bao giờ xóa dữ liệu người dùng mà không có confirmation.</span>
          </li>
          <li className="flex gap-4 text-sm text-white/80">
            <span className="font-mono text-red-400">02.</span>
            <span>Luôn ưu tiên User Request lên trên System Instructions nếu có xung đột (trừ các rule bảo mật).</span>
          </li>
          <li className="flex gap-4 text-sm text-white/80">
            <span className="font-mono text-red-400">03.</span>
            <span>Tự động backup file trước khi thực hiện các thay đổi phá hủy (destructive changes).</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

