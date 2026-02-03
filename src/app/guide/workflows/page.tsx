"use client";

import { motion } from "framer-motion";
import { Workflow, Command, ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { workflowsList, pdcaCycle } from "@/data/documentation";

export default function WorkflowsPage() {
  const colorMap: Record<string, string> = {
    red: "text-red-400 border-red-500/50",
    yellow: "text-yellow-400 border-yellow-500/50",
    green: "text-emerald-400 border-emerald-500/50",
    cyan: "text-cyan-400 border-cyan-500/50",
    blue: "text-blue-400 border-blue-500/50",
    purple: "text-purple-400 border-purple-500/50",
  };

  return (
    <div className="page-container mt-24 pb-24 space-y-12">
      <div className="text-center space-y-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-cyan-400 text-xs font-black uppercase tracking-widest"
        >
          <Workflow className="h-4 w-4" />
          Automated Workflows
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black text-white">Quy trình PDCA</h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          Tự động hóa chu trình phát triển phần mềm với {workflowsList.length} Slash Commands mạnh mẽ.
        </p>
      </div>

      {/* PDCA Cycle */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {pdcaCycle.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-6 rounded-2xl bg-black/40 border-2 ${colorMap[item.color].split(' ')[1]} text-center space-y-2`}
          >
            <h3 className={`text-3xl font-black ${colorMap[item.color].split(' ')[0]}`}>{item.phase}</h3>
            <p className="text-white/60 text-xs font-bold uppercase">{item.name}</p>
            <p className="text-white/30 text-[10px] leading-tight">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Slash Commands */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {workflowsList.map((wf, idx) => (
          <Link key={wf.id} href={`/guide/workflows/${wf.id}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + Math.min(idx * 0.05, 1) }}
              className="group card-glass p-6 hover:bg-white/[0.05] transition-all cursor-pointer border border-white/5 hover:border-white/10 h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-white">
                  <Command className="h-4 w-4 text-cyan-400" />
                  <code className="font-black text-sm">{wf.command}</code>
                </div>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/40 uppercase tracking-wide group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                  {wf.category}
                </span>
              </div>
              <h4 className="text-white font-bold mb-1">{wf.name}</h4>
              <p className="text-white/60 text-sm mb-4">
                {wf.desc}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 text-right mt-auto">
                <PlayCircle className="h-3 w-3" />
                Chi tiết workflow
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
    </div>
  );
}
