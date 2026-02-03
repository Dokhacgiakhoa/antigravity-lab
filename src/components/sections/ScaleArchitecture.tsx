"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { User, Users, Building, LucideIcon, Bot, Code2, ShieldCheck, Zap, Server, Database, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  User, Users, Building
};

interface ArchitectureProps {
  data: {
    badge: string;
    title: {
      main: string;
      highlight: string;
      sub: string;
    };
    desc: string;
    options: Array<{
      title: string;
      desc: string;
      iconName: string;
      color: string;
    }>;
  };
}

export function ScaleArchitecture({ data }: ArchitectureProps) {
  const [activeMode, setActiveMode] = useState(0);

  return (
    <section className="w-full py-24 px-4 relative">
      <div className="w-[90%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <div className="space-y-10">
          <SectionHeading 
            badge={data.badge}
            title={data.title.main}
            highlight={data.title.highlight}
            highlightColor="blue"
            sub={data.title.sub}
            desc={data.desc}
            align="left"
          />

          <div className="space-y-4">
            {data.options.map((opt, i) => (
              <ScaleOption 
                key={i} 
                title={opt.title} 
                desc={opt.desc} 
                iconName={opt.iconName} 
                color={opt.color} 
                isActive={activeMode === i}
                onClick={() => setActiveMode(i)}
              />
            ))}
          </div>
        </div>

        {/* Right: Interactive Visualizer */}
        <div className="relative h-[650px] w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4285F4]/5 via-transparent to-[#EA4335]/5 rounded-full blur-3xl opacity-30" />
           
           <div className="relative z-10 w-full h-full border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md rounded-[2.5rem] p-8 flex flex-col shadow-2xl overflow-hidden">
              {/* Header for Visualizer */}
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/5">
                <div className="flex gap-2 items-center">
                   <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                  MÔ PHỎNG LIVE
                </div>
              </div>

              {/* Dynamic Content */}
              <div className="flex-1 relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {activeMode === 0 && <SoloNinjaVisualizer key="solo" />}
                  {activeMode === 1 && <AgileSquadVisualizer key="squad" />}
                  {activeMode === 2 && <SoftwareFactoryVisualizer key="factory" />}
                </AnimatePresence>
              </div>

              {/* Footer Legend */}
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between text-[10px] text-white/30 font-mono">
                 <div>Running: v4.0.0-core</div>
                 <div>
                   {activeMode === 0 ? "Threads: 1 | Latency: 5ms" : 
                    activeMode === 1 ? "Agents: 3 | Sync: Async" : 
                    "Pipeline: Strict | Audit: ON"}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function ScaleOption({ 
  title, desc, iconName, color, isActive, onClick 
}: { 
  title: string, desc: string, iconName: string, color: string, isActive: boolean, onClick: () => void 
}) {
  const Icon = iconMap[iconName] || User;
  
  const activeColors = {
    blue: "bg-[#4285F4]/20 border-[#4285F4] shadow-[0_0_30px_rgba(66,133,244,0.3)]",
    red: "bg-[#EA4335]/20 border-[#EA4335] shadow-[0_0_30px_rgba(234,67,53,0.3)]",
    yellow: "bg-[#FBBC04]/20 border-[#FBBC04] shadow-[0_0_30px_rgba(251,188,4,0.3)]",
  }[color];

  const inactiveColors = {
    blue: "text-[#4285F4] group-hover:bg-[#4285F4]/10",
    red: "text-[#EA4335] group-hover:bg-[#EA4335]/10",
    yellow: "text-[#FBBC04] group-hover:bg-[#FBBC04]/10",
  }[color];

  return (
    <div 
      onClick={onClick}
      className={cn(
        "group flex items-start gap-6 p-6 rounded-2xl border transition-all cursor-pointer backdrop-blur-sm",
        isActive 
          ? cn("scale-[1.02]", activeColors) 
          : cn("bg-white/5 border-white/10 hover:border-white/20", inactiveColors)
      )}
    >
      <div className={cn(
        "p-3 rounded-xl transition-colors",
        isActive ? "bg-black/20 text-white" : "bg-black/20"
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className={cn("text-lg font-black tracking-tight", isActive ? "text-white" : "text-white/80")}>
          {title}
        </h4>
        <p className={cn("text-sm leading-relaxed font-medium transition-opacity", isActive ? "text-white/80" : "text-white/40")}>
          {desc}
        </p>
      </div>
    </div>
  );
}

// --- VISUALIZERS ---

function SoloNinjaVisualizer() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden"
    >
       {/* Central Node - HYBRID AGENT */}
       <div className="absolute z-20 flex flex-col items-center gap-3">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#4285F4] to-[#8AB4F8] shadow-[0_0_60px_#4285F4] flex items-center justify-center border-4 border-white/20 relative z-10">
             <Bot className="w-14 h-14 text-white animate-pulse" />
             {/* Hybrid Badge */}
             <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-white text-[#4285F4] font-black text-[10px] border-2 border-[#4285F4] shadow-lg uppercase tracking-wider">
               Đa năng
             </div>
          </div>
          <div className="text-white font-black tracking-[0.2em] text-sm uppercase bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-xl">
            SOLO AGENT
          </div>
       </div>

       {/* Orbiting Skills - Ferris Wheel Animation */}
       <div className="absolute inset-0">
          <OrbitingNode startAngle={0} icon={Code2} label="LẬP TRÌNH" color="bg-cyan-500" />
          <OrbitingNode startAngle={72} icon={Database} label="DỮ LIỆU" color="bg-emerald-500" />
          <OrbitingNode startAngle={144} icon={Server} label="VẬN HÀNH" color="bg-purple-500" />
          <OrbitingNode startAngle={216} icon={ShieldCheck} label="BẢO MẬT" color="bg-red-500" />
          <OrbitingNode startAngle={288} icon={Zap} label="HIỆU NĂNG" color="bg-yellow-500" />
       </div>

       {/* Orbital Rings */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <circle cx="50%" cy="50%" r="140" fill="none" stroke="#4285F4" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="100" fill="none" stroke="#4285F4" strokeWidth="0.5" />
       </svg>
    </motion.div>
  );
}

function AgileSquadVisualizer() {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full relative flex items-center justify-center p-8"
      >
         {/* Triangle Connection Texture - Background */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
               <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                 <polygon points="0 0, 10 3.5, 0 7" fill="#ffffff" opacity="0.3" />
               </marker>
            </defs>
            
            {/* Connection Lines */}
            <line x1="50%" y1="30%" x2="20%" y2="70%" stroke="white" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />
            <line x1="20%" y1="70%" x2="80%" y2="70%" stroke="white" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />
            <line x1="80%" y1="70%" x2="50%" y2="30%" stroke="white" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />
         </svg>

         {/* Animated Packets - Outside SVG because they are Divs */}
         <div className="absolute inset-0 pointer-events-none z-10">
             <PacketPath path="M 50 30 L 20 70" color="#EA4335" delay={0} />
             <PacketPath path="M 20 70 L 80 70" color="#4285F4" delay={2} />
             <PacketPath path="M 80 70 L 50 30" color="#34A853" delay={4} />
         </div>

         {/* Nodes Fixed Positions */}
         {/* Top: 30% Y - Centered on Icon (80px height -> -mt-10) */}
         <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -mt-10 z-20">
            <SquadNode color="bg-[#EA4335]" icon={Workflow} role="KẾ HOẠCH" task="Định nghĩa MVP" />
         </div>

         {/* Left: 20% X, 70% Y - Centered on Icon */}
         <div className="absolute top-[70%] left-[20%] -translate-x-1/2 -mt-10 z-20">
            <SquadNode color="bg-[#4285F4]" icon={Code2} role="CHUYÊN GIA" task="Thực thi" />
         </div>

         {/* Right: 80% X, 70% Y - Centered on Icon */}
         <div className="absolute top-[70%] left-[80%] -translate-x-1/2 -mt-10 z-20">
            <SquadNode color="bg-[#34A853]" icon={ShieldCheck} role="KIỂM SOÁT" task="Xác thực" />
         </div>

         {/* Connection Labels */}
         <div className="absolute top-[46%] left-[25%] text-[10px] text-white/50 rotate-[-50deg] tracking-widest font-mono bg-[#0A0A0A] px-2 z-10"> GIAO VIỆC </div>
         <div className="absolute top-[46%] right-[25%] text-[10px] text-white/50 rotate-[50deg] tracking-widest font-mono bg-[#0A0A0A] px-2 z-10"> KIỂM TRA </div>
         <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 text-[10px] text-white/50 tracking-widest font-mono bg-[#0A0A0A] px-2 z-10"> BÀN GIAO </div>
      </motion.div>
    );
}

// Helper for animating packets along a path
function PacketPath({ path, color, delay }: { path: string, color: string, delay: number }) {
   // Convert simplified "M x1 y1 L x2 y2" (percentages) to 0-1 range for motion if needed, 
   // but Framer's offsetPath isn't simple with percentages in SVG.
   // Instead, we simply animate a circle along the known percentage coordinates.
   
   // Actually, standard SVG coordinates in motion are easiest. 
   // Since we can't easily predict pixel size for `d` path in responsive container, 
   // we will use a simpler absolute animation approach for the packets based on the same start/end logic
   
   const isHorizontal = path.includes("L 80 70"); // Bottom line
   const isLeftDown = path.includes("M 50 30 L 20 70");
   
   // Coordinates corresponding to our lines: 
   // Top: 50% 30%
   // Left: 20% 70%
   // Right: 80% 70%
   
   let initial = {}, animate = {};
   
   if (isLeftDown) { // Planner -> Specialist
       initial = { top: "30%", left: "50%" };
       animate = { top: "70%", left: "20%" };
   } else if (isHorizontal) { // Specialist -> Inspector
       initial = { top: "70%", left: "20%" };
       animate = { top: "70%", left: "80%" };
   } else { // Inspector -> Planner
       initial = { top: "70%", left: "80%" };
       animate = { top: "30%", left: "50%" };
   }

   return (
      <motion.div
        className="absolute w-3 h-3 rounded-full shadow-[0_0_10px_currentColor] z-10"
        style={{ backgroundColor: color }}
        initial={initial}
        animate={animate}
        transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4, // Wait for other 2 segments -> Total cycle 6s
            delay: delay
        }}
      />
   )
}

function SoftwareFactoryVisualizer() {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="w-full h-full relative flex flex-col items-center pt-8"
      >
         {/* Org Chart Connectors */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Root to Midpoint */}
            <line x1="50%" y1="28%" x2="50%" y2="35%" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
            {/* Horizontal Bar */}
            <line x1="15%" y1="35%" x2="85%" y2="35%" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
            {/* Branch Lines - 4 Columns Centers (15, 38, 62, 85) */}
            <line x1="15%" y1="35%" x2="15%" y2="42%" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
            <line x1="38%" y1="35%" x2="38%" y2="42%" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
            <line x1="62%" y1="35%" x2="62%" y2="42%" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
            <line x1="85%" y1="35%" x2="85%" y2="42%" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
         </svg>

         {/* Animated Data Packets - PDCA Flow */}
         <div className="absolute inset-0 pointer-events-none z-10">
             {/* P - Plan (Đỏ/Red) */}
             <FactoryPacket 
                pathX={["50%", "50%", "15%", "15%"]} 
                pathY={["28%", "35%", "35%", "42%"]} 
                delay={0} 
                color="#ef4444" 
             />
             {/* D - Do (Vàng/Yellow) */}
             <FactoryPacket 
                pathX={["50%", "50%", "38%", "38%"]} 
                pathY={["28%", "35%", "35%", "42%"]} 
                delay={0.5} 
                color="#eab308" 
             />
             {/* C - Check (Lục/Green) */}
             <FactoryPacket 
                pathX={["50%", "50%", "62%", "62%"]} 
                pathY={["28%", "35%", "35%", "42%"]} 
                delay={1.2} 
                color="#22c55e" 
             />
             {/* A - Act (Lam/Cyan) */}
             <FactoryPacket 
                pathX={["50%", "50%", "85%", "85%"]} 
                pathY={["28%", "35%", "35%", "42%"]} 
                delay={1.9} 
                color="#06b6d4" 
             />
         </div>

         {/* Level 1: Core Command */}
         <div className="z-20 relative mb-14">
            <OrgNode 
              icon={Bot} 
              title="ĐIỀU PHỐI TỔNG" 
              subtitle="Orchestrator"
              color="bg-yellow-500" 
              isRoot 
            />
            <div className="absolute -right-32 top-4 text-[10px] font-mono text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20">
               ◀ Chiến lược & Phân bổ
            </div>
         </div>

         {/* Level 2: PDCA Departments */}
         <div className="grid grid-cols-4 w-full px-2 gap-2 z-20">
            {/* PLAN */}
            <div className="flex flex-col items-center gap-3">
                <OrgNode icon={Workflow} title="PLAN" subtitle="Planning" color="bg-red-500" vertical />
                <div className="flex flex-col gap-1.5 w-full items-center">
                   <AgentMiniCard role="Product Manager" />
                   <AgentMiniCard role="Product Owner" />
                   <AgentMiniCard role="Project Planner" />
                   <AgentMiniCard role="SEO Specialist" />
                   <AgentMiniCard role="Doc Writer" />
                </div>
            </div>

            {/* DO */}
            <div className="flex flex-col items-center gap-3">
                <OrgNode icon={Code2} title="DO" subtitle="Execution" color="bg-yellow-500" vertical />
                 <div className="flex flex-col gap-1.5 w-full items-center">
                   <AgentMiniCard role="Frontend Specialist" />
                   <AgentMiniCard role="Backend Specialist" />
                   <AgentMiniCard role="Database Architect" />
                   <AgentMiniCard role="Cloud Architect" />
                   <AgentMiniCard role="Mobile Developer" />
                </div>
            </div>

            {/* CHECK */}
            <div className="flex flex-col items-center gap-3">
                <OrgNode icon={ShieldCheck} title="CHECK" subtitle="Verification" color="bg-green-500" vertical />
                 <div className="flex flex-col gap-1.5 w-full items-center">
                   <AgentMiniCard role="Security Auditor" />
                   <AgentMiniCard role="Penetration Tester" />
                   <AgentMiniCard role="Test Engineer" />
                   <AgentMiniCard role="QA Automation" />
                </div>
            </div>

            {/* ACT */}
            <div className="flex flex-col items-center gap-3">
                <OrgNode icon={Zap} title="ACT" subtitle="Optimization" color="bg-cyan-500" vertical />
                 <div className="flex flex-col gap-1.5 w-full items-center">
                   <AgentMiniCard role="DevOps Engineer" />
                   <AgentMiniCard role="Performance Opt" />
                   <AgentMiniCard role="Debugger" />
                </div>
            </div>
         </div>
      </motion.div>
    );
}

function OrgNode({ icon: Icon, title, subtitle, color, isRoot, vertical }: { icon: any, title: string, subtitle: string, color: string, isRoot?: boolean, vertical?: boolean }) {
    return (
        <div className={cn(
            "flex flex-col items-center justify-center rounded-xl border backdrop-blur-md shadow-2xl transition-all hover:scale-105",
             isRoot ? "w-48 h-24 p-4 bg-white/5 border-yellow-500/50" : "w-full py-3 px-2 bg-[#0A0A0A] border-white/10"
        )}>
           <div className={cn("flex items-center gap-2", vertical ? "flex-col text-center" : "flex-row text-left")}>
              <div className={cn("p-1.5 rounded-lg text-white shadow-lg", color)}>
                 <Icon className={cn("text-white", isRoot ? "w-7 h-7" : "w-5 h-5")} />
              </div>
              <div>
                  <div className={cn("font-bold text-white uppercase leading-none mb-0.5", isRoot ? "text-sm" : "text-[11px]")}>{title}</div>
                  <div className="text-[9px] text-white/50 font-mono">{subtitle}</div>
              </div>
           </div>
        </div>
    )
}

function AgentMiniCard({ role }: { role: string }) {
    return (
        <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/5 rounded-full w-full justify-center">
             <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse shrink-0" />
             <span className="text-[10px] text-white/70 font-medium whitespace-nowrap overflow-hidden text-ellipsis">{role}</span>
        </div>
    )
}


// ... (Rest of the file)

function FactoryPacket({ pathX, pathY, delay, color }: { pathX: string[], pathY: string[], delay: number, color: string }) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const sequence = async () => {
            // Initial State (Hidden)
            await animate(scope.current, { opacity: 0, left: pathX[0], top: pathY[0] }, { duration: 0 });
            
            // Wait for start delay
            if (delay > 0) {
                 await new Promise(resolve => setTimeout(resolve, delay * 1000));
            }

            while (scope.current) { // Infinite Loop
                // Reset to start
                await animate(scope.current, { opacity: 0, left: pathX[0], top: pathY[0] }, { duration: 0 });
                
                // Appear
                await animate(scope.current, { opacity: 1 }, { duration: 0.2 });

                // Segment 1: Vertical Down (0 -> 1)
                // Duration: 0.6s
                if (pathY[1] !== pathY[0]) {
                     await animate(scope.current, { top: pathY[1] }, { duration: 0.6, ease: "linear" });
                } else {
                     await new Promise(r => setTimeout(r, 600));
                }

                // Segment 2: Horizontal (1 -> 2)
                // Duration: 1.8s
                if (pathX[2] && pathX[2] !== pathX[1]) {
                    await animate(scope.current, { left: pathX[2] }, { duration: 1.8, ease: "linear" });
                } else {
                    await new Promise(r => setTimeout(r, 1800));
                }

                // Segment 3: Vertical Final (2 -> 3)
                // Duration: 0.6s
                if (pathY[3] && pathY[3] !== pathY[2]) {
                    await animate(scope.current, { top: pathY[3] }, { duration: 0.6, ease: "linear" });
                } else {
                     await new Promise(r => setTimeout(r, 600));
                }

                // Disappear
                await animate(scope.current, { opacity: 0 }, { duration: 0.2 });
                
                // Loop Delay
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        };

        sequence();
        
        return () => {
             // Cleanup handled by scope check 
        };
    }, []);

    return (
        <div
            ref={scope}
            className="absolute w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] z-10 -ml-[4px] -mt-[4px] opacity-0"
            style={{ backgroundColor: color }}
        />
    )
}

// --- HELPER COMPONENTS ---

function OrbitingNode({ startAngle, icon: Icon, label, color }: { startAngle: number, icon: any, label: string, color: string }) {
    // Radius of the orbit
    const radius = 140; 

    return (
        <motion.div 
           // Container placed at center
           className="absolute top-1/2 left-1/2" 
           style={{ width: 0, height: 0 }}
           // Rotate the entire container
           initial={{ rotate: startAngle }}
           animate={{ rotate: startAngle + 360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
            {/* The satellite positioned at radius distance */}
            <motion.div 
                className="absolute flex flex-col items-center justify-center w-12"
                style={{ 
                    // Push it out to the radius distance
                    x: radius, 
                    y: -24, // Half of height (approx) to center vertically
                }}
                // Counter-rotate the satellite itself to keep it upright
                initial={{ rotate: -startAngle }}
                animate={{ rotate: -startAngle - 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                 <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg border border-white/20 z-10 box-content", color)}>
                    <Icon className="w-6 h-6" />
                 </div>
                 <span className="text-[10px] font-black text-white/90 mt-2 tracking-wider bg-black/60 px-2 py-0.5 rounded-sm border border-white/10 shadow-sm backdrop-blur-sm whitespace-nowrap z-10">
                    {label}
                 </span>
            </motion.div>
        </motion.div>
    )
}

function SquadNode({ color, icon: Icon, role, task }: { color: string, icon: any, role: string, task: string }) {
    return (
        <div className="flex flex-col items-center gap-3 relative group cursor-default hover:scale-105 transition-transform">
            <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10", color)}>
                <Icon className="text-white w-10 h-10" />
            </div>
            <div className="text-center">
               <div className="font-black text-white text-xs uppercase tracking-widest mb-1 mt-1">{role}</div>
               <div className="text-[10px] text-white/50 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5">{task}</div>
            </div>
        </div>
    )
}


