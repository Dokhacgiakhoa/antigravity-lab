"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { vi } from '@/i18n/locales/vi';
import { en } from '@/i18n/locales/en';

type Locale = 'vi' | 'en';
type Translations = typeof vi;

// Helper to access nested keys safely
function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj) || path;
}

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('vi');
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('antigravity_lang') as Locale;
    if (saved && (saved === 'vi' || saved === 'en')) {
      setLocale(saved);
    }
    setMounted(true);
  }, []);

  // Save to localStorage on change
  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('antigravity_lang', newLocale);
  };

  const translations = locale === 'vi' ? vi : en;

  const t = (key: string) => {
    return getNestedValue(translations, key);
  };

  // Prevent hydration mismatch by rendering children only after mount, 
  // OR simpler: just render children but accept initial flicker/default language
  // For this app, simply returning children is fine, but we might care about flash.
  // Let's return children directly to ensure SEO content is present (default VI), 
  // pushing client update after hydration.
  
  return (
    <LanguageContext.Provider value={{ locale, setLocale: changeLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
