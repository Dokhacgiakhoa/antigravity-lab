import React from "react";

interface ConceptCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  color?: string;
}

export function ConceptCard({ icon, title, desc, features, color = "emerald" }: ConceptCardProps) {
  const colors: Record<string, { border: string; bg: string; iconBg: string; text: string; dot: string }> = {
    sky: { 
      border: "border-sky-500/20 hover:border-sky-400/50", 
      bg: "bg-sky-500/5", 
      iconBg: "bg-sky-500/10",
      text: "text-sky-400",
      dot: "bg-sky-400"
    },
    amber: { 
      border: "border-amber-500/20 hover:border-amber-400/50", 
      bg: "bg-amber-500/5", 
      iconBg: "bg-amber-500/10",
      text: "text-amber-400", 
      dot: "bg-amber-400"
    },
    rose: { 
      border: "border-rose-500/20 hover:border-rose-400/50", 
      bg: "bg-rose-500/5", 
      iconBg: "bg-rose-500/10",
      text: "text-rose-400", 
      dot: "bg-rose-400"
    },
    emerald: { 
      border: "border-emerald-500/20 hover:border-emerald-400/50", 
      bg: "bg-emerald-500/5", 
      iconBg: "bg-emerald-500/10",
      text: "text-emerald-400", 
      dot: "bg-emerald-400"
    },
  };

  const c = colors[color] || colors.emerald;

  return (
    <div className={`card-glass p-8 space-y-6 ${c.bg} border ${c.border} hover:bg-black/40 transition-all group relative overflow-hidden rounded-3xl shadow-xl`}>
      <div className={`w-16 h-16 rounded-2xl ${c.iconBg} border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className={`text-xl font-black text-white italic whitespace-nowrap group-hover:${c.text} transition-colors tracking-tight`}>{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed font-medium">{desc}</p>
      </div>
      <ul className="space-y-3 pt-6 border-t border-white/5">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-4 text-white/70 text-sm">
            <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-2 shrink-0 shadow-[0_0_8px_${c.dot.replace('bg-', '')}]`} />
            <span className="font-medium leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
