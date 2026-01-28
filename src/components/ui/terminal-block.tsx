"use client";

import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TerminalBlockProps {
  command: string;
}

export function TerminalBlock({ command }: TerminalBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 shadow-2xl font-mono text-sm group">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-3 flex items-center gap-2 text-white/40 text-xs">
            <Terminal className="w-3 h-3" />
            <span>bash</span>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="text-white/40 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/10"
          title="Copy command"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-6 overflow-x-auto custom-scrollbar">
        <div className="text-emerald-400 font-mono text-sm space-y-2 whitespace-nowrap">
          {command.split('\n').map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-3 select-none text-white/30">$</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
