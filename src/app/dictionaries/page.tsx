"use client";

import { useState } from "react";
import { 
  BookOpen, Search, ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TERMS_DATA } from "@/data/glossary";
import { useLanguage } from "@/contexts/LanguageContext";
import { localize } from "@/lib/i18n";

export default function ConceptsPage() {
  const [activeId, setActiveId] = useState("agent");
  const [searchQuery, setSearchQuery] = useState("");
  const { t, locale } = useLanguage();

  // Flatten items for easier searching/finding
  const allItems = TERMS_DATA.flatMap(cat => cat.items.map(item => ({ 
    ...item, 
    category: localize(cat, 'category', locale),
    term: localize(item, 'term', locale),
    desc: localize(item, 'desc', locale)
  })));
  const activeItem = allItems.find(item => item.id === activeId) || allItems[0];

  // Filter for search
  const filteredGroups = TERMS_DATA.map(group => {
    const localizedCategory = localize(group, 'category', locale);
    return {
      ...group,
      category: localizedCategory,
      items: group.items.map(item => ({
        ...item,
        term: localize(item, 'term', locale),
        desc: localize(item, 'desc', locale)
      })).filter(item => 
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    };
  }).filter(group => group.items.length > 0);

  return (
    <div className="page-container mt-12 space-y-12 pb-24">
      {/* Header Section */}
      <section className="text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-6 py-2 rounded-full text-emerald-400 text-xs font-black tracking-widest uppercase"
        >
          <BookOpen className="h-4 w-4" />
          {t('dictionaries.title')}
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          {t('dictionaries.title')}
        </h1>
        
        <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          {t('dictionaries.subTitle')}
        </p>
      </section>

      {/* Content Grid */}
      <section className="grid md:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar - Navigation */}
        <div className="md:col-span-4 lg:col-span-3 space-y-6">
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-500/20 blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity rounded-xl" />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 group-focus-within:text-emerald-400 transition-colors z-10" />
            <input 
              type="text" 
              placeholder={t('dictionaries.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:bg-black/80 focus:border-emerald-500/50 transition-all outline-none shadow-lg backdrop-blur-md"
            />
          </div>

          {/* Terms List */}
          <div className="space-y-8 max-h-[26rem] overflow-y-auto custom-scrollbar pr-2">
            {filteredGroups.length === 0 ? (
              <p className="text-white/30 text-center text-sm py-8">{t('dictionaries.noResult')}</p>
            ) : (
              filteredGroups.map((group, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-[10px] font-bold text-[#FCD34D] uppercase tracking-widest flex items-center gap-2 pl-2 border-l border-[#FCD34D]/30">
                    <span className="opacity-60">{group.icon}</span> {group.category}
                  </h3>
                  <div className="space-y-1">
                    {group.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveId(item.id)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-lg transition-all text-sm font-medium flex items-center justify-between group relative overflow-hidden",
                          activeId === item.id 
                            ? "bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/30" 
                            : "text-white/60 hover:bg-white/5 hover:text-white hover:pl-5"
                        )}
                      >
                        <span className="relative z-10 truncate">{item.term}</span>
                        {activeId === item.id && <ArrowRight className="h-3 w-3 relative z-10 flex-shrink-0 ml-2" />}
                        {activeId !== item.id && (
                          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Content - Detail View */}
        <div className="md:col-span-8 lg:col-span-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="card-glass p-8 md:p-16 min-h-[500px] flex flex-col items-start gap-8 relative overflow-hidden border-emerald-500/20 bg-gradient-to-br from-white/[0.03] to-transparent"
            >
              {/* Premium Background Effects */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none mix-blend-screen" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none mix-blend-screen" />
              
              <div className="w-full flex items-start justify-between relative z-10">
                <div className="space-y-8 w-full max-w-2xl">
                  {/* Category Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-emerald-400/80"
                  >
                    {activeItem.icon}
                    {activeItem.category}
                  </motion.div>
                  
                  <div className="space-y-4">
                    {/* Term Title */}
                    <motion.h2 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-5xl md:text-7xl font-black text-white tracking-tighter"
                    >
                      {activeItem.term}
                    </motion.h2>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: 100 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" 
                    />
                  </div>
                  
                  {/* Description */}
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-base md:text-lg text-white/60 leading-relaxed font-light"
                  >
                    {activeItem.desc}
                  </motion.p>
                </div>

                {/* Icon Display */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="hidden lg:flex flex-shrink-0 w-48 h-48 rounded-[3rem] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 items-center justify-center text-emerald-400 shadow-2xl backdrop-blur-xl group hover:scale-105 transition-transform duration-500"
                >
                  <div className="scale-[3] group-hover:rotate-12 transition-transform duration-500">
                    {activeItem.icon}
                  </div>
                </motion.div>
              </div>

              {/* Footer Metadata */}
              <div className="mt-auto w-full pt-12 border-t border-white/5 flex justify-between items-center text-white/20 text-xs font-mono uppercase tracking-widest">
                <span>{t('dictionaries.systemId')}: {activeItem.id}</span>
                <span>{t('dictionaries.protocol')}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
