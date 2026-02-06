"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-12 border-t border-white/5 bg-black/20 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-white/40">
          © 2026 Google Antigravity. {t('footer.developedBy')}
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/Dokhacgiakhoa/google-antigravity" target="_blank" className="text-white/40 hover:text-[#FCD34D] transition-colors">{t('footer.system')}</a>
          <a href="#" className="text-white/40 hover:text-[#FCD34D] transition-colors">{t('footer.community')}</a>
        </div>
      </div>
    </footer>
  );
}
