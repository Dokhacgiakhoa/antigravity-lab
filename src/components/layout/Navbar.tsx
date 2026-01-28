"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Github, Menu, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Trang chủ", href: "/" },
  { name: "Cài đặt", href: "/tutorial" },
  { name: "Hướng dẫn", href: "/guide" },
  { name: "Thuật ngữ", href: "/concepts" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-10 pointer-events-none">
      <nav 
        className={cn(
          "pointer-events-auto relative flex items-center h-16 rounded-full border transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl px-3",
          // FIXED WIDTH: No more width changes on scroll
          "w-full max-w-5xl bg-white/5 border-white/10",
          scrolled && "bg-black/80 border-white/20"
        )}
      >
        <div className="flex w-full items-center justify-between relative px-2">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 z-20 group flex-shrink-0">
            <div className="w-10 h-10 bg-[#FCD34D] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(252,211,77,0.4)] group-hover:rotate-12 transition-transform">
              <Rocket className="h-5 w-5 text-black" />
            </div>
            <span className="hidden lg:inline-block font-black text-[#FCD34D] text-sm">
              AntiGravity Lab
            </span>
          </Link>

          {/* Menu Items with Stable Sliding Pill */}
          <div className="relative flex items-center p-1 bg-white/5 rounded-full border border-white/5 z-10 mx-4">
            {/* Stable Moving Background */}
            <motion.div
              className="absolute h-[calc(100%-8px)] bg-[#FCD34D] rounded-full shadow-[0_0_15px_rgba(252,211,77,0.4)]"
              initial={false}
              animate={{
                left: `${(navItems.findIndex(item => item.href === pathname) * (100 / navItems.length))}%`,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              style={{
                top: '4px',
                width: `calc(${100 / navItems.length}% - 8px)`,
                margin: '0 4px'
              }}
            />

            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative z-10 px-5 md:px-8 py-2 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-colors duration-500 whitespace-nowrap",
                    isActive ? "text-black" : "text-white/40 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Section Actions */}
          <div className="flex items-center gap-3 z-20 flex-shrink-0">
            <Link href="https://github.com/vudovn/antigravity-kit" target="_blank" className="hidden sm:block">
              <div className="p-2.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors">
                <Github className="h-4 w-4 text-white/80" />
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">v2.0 Beta</span>
            </div>

            <button
              className="p-3 md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="fixed inset-x-6 top-24 z-50 p-6 rounded-[2.5rem] bg-black/95 backdrop-blur-3xl border border-white/10 md:hidden pointer-events-auto shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "p-6 rounded-3xl text-xl font-black text-center transition-all",
                    pathname === item.href ? "bg-[#FCD34D] text-black" : "bg-white/5 text-white"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
