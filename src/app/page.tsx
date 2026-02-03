"use client";

import { landingPage } from "@/data/landing-page";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatSection } from "@/components/sections/StatSection";
import { ScaleArchitecture } from "@/components/sections/ScaleArchitecture";
import { LinkageSection } from "@/components/sections/LinkageSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { AgentsSection } from "@/components/sections/AgentsSection";
import { SmartAllocation } from "@/components/sections/SmartAllocation";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full relative">
      {/* Global Glow Effects (Google Colors) */}
      <div className="glow-orb glow-blue top-[-100px] right-[-100px]" />
      <div className="glow-orb glow-red bottom-[200px] left-[-150px]" />
      <div className="glow-orb glow-yellow top-[40%] right-[5%]" />
      <div className="glow-orb glow-green top-[60%] left-[5%]" />
      
      {/* 1. HERO Section */}
      <HeroSection data={landingPage.hero} />

      {/* 2. STATS Section */}
      <StatSection data={landingPage.stats} />

      {/* 3. ARCHITECTURE Section */}
      <ScaleArchitecture data={landingPage.architecture} />

      {/* 4. SMART ALLOCATION Section (New) */}
      <SmartAllocation />

      {/* 5. LINKAGE Section */}
      <LinkageSection data={landingPage.scientificLinkage} />

      {/* 6. FEATURES Grid (Updated v4.0) */}
      <FeatureGrid data={landingPage.features} />

      {/* 7. AGENTS Section */}
      <AgentsSection data={landingPage.agents} />

      {/* 8. FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
