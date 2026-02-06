

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
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const heroData = {
    ...landingPage.hero,
    badge: t('home.hero.badge'),
    title: {
      ...landingPage.hero.title,
      line1: t('home.hero.titleLine1'),
      line2: t('home.hero.titleLine2'),
    },
    cta: { // HeroSection logic was already updated to look at t() directly for CTA, but passing updated data doesn't hurt.
      // Actually HeroSection uses t('home.cta') inside. So I don't STRICTLY need to update this, but for consistency I will.
      primary: t('home.hero.cta'),
      secondary: landingPage.hero.cta.secondary
    },
    slides: landingPage.hero.slides.map((s, i) => ({
      ...s,
      desc: t(`home.hero.slides.${i}.desc`)
    }))
  };

  const statsData = landingPage.stats.map((item, i) => {
    // Mapping index to keys: 0->skills, 1->agents, 2->workflows (based on order in landing-page.ts)
    const keys = ['skills', 'agents', 'workflows'];
    const key = keys[i];
    return {
      ...item,
      label: t(`home.stats.${key}.label`),
      desc: t(`home.stats.${key}.desc`)
    };
  });

  const architectureData = {
    ...landingPage.architecture,
    badge: t('home.architecture.badge'),
    title: {
      main: t('home.architecture.title'),
      highlight: t('home.architecture.highlight'),
      sub: t('home.architecture.sub')
    },
    desc: t('home.architecture.desc'),
    options: [
      // Map based on order in landing-page.ts: Solo, Team, Enterprise
      { ...landingPage.architecture.options[0], title: t('home.architecture.options.solo.title'), desc: t('home.architecture.options.solo.desc') },
      { ...landingPage.architecture.options[1], title: t('home.architecture.options.team.title'), desc: t('home.architecture.options.team.desc') },
      { ...landingPage.architecture.options[2], title: t('home.architecture.options.enterprise.title'), desc: t('home.architecture.options.enterprise.desc') }
    ]
  };

  const linkageData = {
    ...landingPage.scientificLinkage,
    badge: t('home.linkage.badge'),
    title: {
      main: t('home.linkage.title'),
      highlight: t('home.linkage.highlight')
    },
    desc: t('home.linkage.desc'),
    cards: [
      { ...landingPage.scientificLinkage.cards[0], title: t('home.linkage.card1.title') },
      { ...landingPage.scientificLinkage.cards[1], title: t('home.linkage.card2.title') },
      { ...landingPage.scientificLinkage.cards[2], title: t('home.linkage.card3.title') }
    ]
  };

  const agentsData = {
    ...landingPage.agents,
    badge: t('home.agents.badge'),
    title: {
      main: t('home.agents.title'),
      highlight: t('home.agents.highlight')
    },
    desc: t('home.agents.desc'),
    list: [
      // Orchestrator, Frontend, Backend, Security, DevOps
      { ...landingPage.agents.list[0], role: t('home.agents.roles.orchestrator') },
      { ...landingPage.agents.list[1], role: t('home.agents.roles.frontend') },
      { ...landingPage.agents.list[2], role: t('home.agents.roles.backend') },
      { ...landingPage.agents.list[3], role: t('home.agents.roles.security') },
      { ...landingPage.agents.list[4], role: t('home.agents.roles.devops') },
    ]
  };

  const featuresData = {
    ...landingPage.features,
    badge: t('home.features.badge'),
    title: {
      main: t('home.features.title'),
      highlight: t('home.features.highlight')
    },
    items: [
       // Malware, Learning, Update, Testing, UI, SEO
       { ...landingPage.features.items[0], title: t('home.features.malware.title'), desc: t('home.features.malware.desc') },
       { ...landingPage.features.items[1], title: t('home.features.learning.title'), desc: t('home.features.learning.desc') },
       { ...landingPage.features.items[2], title: t('home.features.update.title'), desc: t('home.features.update.desc') },
       { ...landingPage.features.items[3], title: t('home.features.testing.title'), desc: t('home.features.testing.desc') },
       { ...landingPage.features.items[4], title: t('home.features.ui.title'), desc: t('home.features.ui.desc') },
       { ...landingPage.features.items[5], title: t('home.features.seo.title'), desc: t('home.features.seo.desc') },
    ]
  };


  return (
    <div className="flex flex-col items-center w-full relative">
      {/* Global Glow Effects (Google Colors) */}
      <div className="glow-orb glow-blue top-[-100px] right-[-100px]" />
      <div className="glow-orb glow-red bottom-[200px] left-[-150px]" />
      <div className="glow-orb glow-yellow top-[40%] right-[5%]" />
      <div className="glow-orb glow-green top-[60%] left-[5%]" />
      
      {/* 1. HERO Section */}
      <HeroSection data={heroData} />

      {/* 2. STATS Section */}
      <StatSection data={statsData} />

      {/* 3. ARCHITECTURE Section */}
      <ScaleArchitecture data={architectureData} />

      {/* 4. SMART ALLOCATION Section (New) */}
      <SmartAllocation />

      {/* 5. LINKAGE Section */}
      <LinkageSection data={linkageData} />

      {/* 6. FEATURES Grid (Updated v4.0) */}
      <FeatureGrid data={featuresData} />

      {/* 7. AGENTS Section */}
      <AgentsSection data={agentsData} />

      {/* 8. FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
