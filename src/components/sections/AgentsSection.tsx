"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { User, Shield, Brain, Laptop } from "lucide-react";

interface AgentsProps {
  data: {
    badge: string;
    title: {
      main: string;
      highlight: string;
    };
    desc: string;
    list: Array<{
        name: string;
        role: string;
    }>
  };
}

export function AgentsSection({ data }: AgentsProps) {
  return (
    <section className="w-full py-24 px-4 border-t border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="w-[90%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Visual - Compact Orbit Design */}
        <div className="relative h-[300px] w-full max-w-[350px] mx-auto border border-white/10 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/5 to-[#EA4335]/5" />
            
            {/* Subtle orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-44 h-44 rounded-full border border-white/5" />
                <div className="absolute w-28 h-28 rounded-full border border-white/10" />
            </div>
            
            {/* Central Orchestrator */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4285F4] to-[#EA4335] flex items-center justify-center shadow-xl">
                    <span className="text-white font-black text-lg">AI</span>
                </div>
            </div>
            
            {/* Orbiting Agents - Tighter */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                {/* Top */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2">
                    <AgentAvatar icon={User} color="blue" />
                </div>
                {/* Right */}
                <div className="absolute top-1/2 right-6 -translate-y-1/2">
                    <AgentAvatar icon={Shield} color="red" />
                </div>
                {/* Bottom */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                    <AgentAvatar icon={Brain} color="yellow" />
                </div>
                {/* Left */}
                <div className="absolute top-1/2 left-6 -translate-y-1/2">
                    <AgentAvatar icon={Laptop} color="green" />
                </div>
            </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-10">
          <SectionHeading 
            badge={data.badge}
            title={data.title.main}
            highlight={data.title.highlight}
            highlightColor="red"
            desc={data.desc}
            align="left"
          />

          <div className="flex flex-wrap gap-4">
            {data.list.map((agent, i) => (
               <div key={i} className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white/80 hover:bg-white/10 transition-colors cursor-default">
                  <span className="text-[#EA4335] mr-2">{agent.name}</span> 
                  <span className="opacity-50">|</span> 
                  <span className="ml-2 opacity-60 font-normal">{agent.role}</span>
               </div>
            ))}
            <div className="px-5 py-3 rounded-full border border-dashed border-white/20 text-sm text-white/40">
                +10 More
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentAvatar({ icon: Icon, color }: { icon: any, color: string }) {
    const colorClasses = {
        blue: "text-[#4285F4] bg-[#4285F4]/10 border-[#4285F4]/30",
        red: "text-[#EA4335] bg-[#EA4335]/10 border-[#EA4335]/30",
        yellow: "text-[#FBBC04] bg-[#FBBC04]/10 border-[#FBBC04]/30",
        green: "text-[#34A853] bg-[#34A853]/10 border-[#34A853]/30",
    }[color];

    return (
        <motion.div 
            whileHover={{ scale: 1.15 }}
            className={cn("w-12 h-12 rounded-lg border-2 flex items-center justify-center backdrop-blur-md shadow-lg", colorClasses)}
        >
            <Icon className="w-6 h-6" />
        </motion.div>
    )
}
