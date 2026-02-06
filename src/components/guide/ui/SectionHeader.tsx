import React from "react";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-black">{title}</h2>
      <p className="text-white/40 text-lg">{subtitle}</p>
    </div>
  );
}
