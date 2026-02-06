"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  badgeIcon?: LucideIcon;
  badgeLabel: React.ReactNode;
  title: React.ReactNode;
  description: string;
  color?: "blue" | "yellow" | "emerald" | "rose" | "cyan";
}

export function PageHeader({ badgeIcon: Icon, badgeLabel, title, description, color = "blue" }: PageHeaderProps) {
  
  const colors = {
    blue: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    yellow: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.1)]",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    rose: "text-red-400 bg-red-500/10 border-red-500/20",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  };

  const badgeStyle = colors[color] || colors.blue;

  return (
    <section className="text-center space-y-4">
      <motion.div
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase border ${badgeStyle}`}
      >
        {Icon && <Icon className="h-4 w-4" />}
        {badgeLabel}
      </motion.div>
      
      <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
        {title}
      </h1>
      
      <p className="text-white/40 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
        {description}
      </p>
    </section>
  );
}
