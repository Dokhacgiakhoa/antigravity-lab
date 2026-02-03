import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative flex flex-col items-center justify-center gap-4">
        {/* Antigravity Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-blue-500 animate-spin" style={{ animationDuration: '1s' }} />
          <div className="absolute inset-2 rounded-full border-t-2 border-l-2 border-red-500 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
          <div className="absolute inset-4 rounded-full border-b-2 border-r-2 border-yellow-500 animate-spin" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="flex items-center gap-1">
          <span className="text-xs font-mono text-white/60 uppercase tracking-widest animate-pulse">Initializing Vibe</span>
          <span className="flex gap-0.5">
            <span className="w-1 h-1 bg-white/60 rounded-full animate-bounce delay-0" />
            <span className="w-1 h-1 bg-white/60 rounded-full animate-bounce delay-150" />
            <span className="w-1 h-1 bg-white/60 rounded-full animate-bounce delay-300" />
          </span>
        </div>
      </div>
    </div>
  );
}
