"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

interface HeroSectionProps {
  data: {
    badge: string;
    title: {
      line1: string;
      line2: string;
      words?: Array<{ text: string, color: string }>;
      highlight1: string; // Legacy
      highlight2: string; // Legacy
    };
    cta: {
      primary: string;
      secondary: string;
    };
    slides: Array<{
      image: string;
      alt: string;
      desc: string;
    }>;
  };
}

export function HeroSection({ data }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.slides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, [data.slides.length]);

  return (
    <section className="w-full pt-4 pb-4 px-4 overflow-hidden">
        <div className="w-[90%] max-w-[120rem] mx-auto">
          <div className="hero-frame h-[650px] w-full relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            
            {/* Background Slideshow */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image 
                  src={data.slides[currentSlide].image}
                  alt={data.slides[currentSlide].alt}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                  sizes="100vw"
                />
                {/* Fallback overlay for legibility */}
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black/20 to-transparent z-10" />
            
            <div className="absolute bottom-12 left-8 md:left-16 w-full md:w-[70%] space-y-8 z-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-2xl px-4 py-1.5 rounded-full border border-white/20 w-fit"
              >
                <div className="w-2 h-2 bg-[#4285F4] rounded-full animate-pulse" />
                <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase">{data.badge}</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] uppercase italic tracking-tighter drop-shadow-2xl flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">{data.title.line1}</span>
                    {data.title.words ? (
                      <div className="flex gap-4">
                        <span className="text-[#4285F4] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.9)]">{data.title.words[0].text}</span> {/* VIBE (Blue) */}
                        <span className="text-[#EA4335] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.9)]">{data.title.words[1].text}</span>   {/* CODING (Red) */}
                      </div>
                    ) : (
                      <span className="text-[#4285F4] drop-shadow-[0_0_30px_rgba(66,133,244,0.5)]">{data.title.highlight1}</span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <span className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">{data.title.line2}</span>
                    {data.title.words ? (
                      <div className="flex gap-4">
                        <span className="text-[#FBBC04] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.9)]">{data.title.words[2].text}</span> {/* ANTIGRAVITY (Yellow) */}
                        <span className="text-[#34A853] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.9)]">{data.title.words[3].text}</span>   {/* IDE (Green) */}
                      </div>
                    ) : (
                       <span className="text-[#EA4335]">{data.title.highlight2}</span>
                    )}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link href="/tutorial">
                  <Button size="lg" className="h-16 px-10 bg-gradient-to-r from-[#4285F4] to-[#1967D2] hover:from-[#669DF6] hover:to-[#4285F4] text-white font-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(66,133,244,0.6)]">
                    {data.cta.primary}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-4 rounded-full border border-white/10 group hover:border-[#4285F4]/30 transition-all cursor-copy">
                  <Terminal className="h-5 w-5 text-[#4285F4]" />
                  <code className="text-sm font-mono text-white/70">{data.cta.secondary}</code>
                </div>
              </motion.div>

              {/* Slider Indicators */}
              <div className="flex gap-2 pt-4">
                {data.slides.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'w-8 bg-[#4285F4]' : 'w-2 bg-white/30'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
