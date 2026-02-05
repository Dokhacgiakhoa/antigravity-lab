import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundVideo } from "@/components/ui/background-video";
import { cn } from "@/lib/utils";

const nunito = Nunito_Sans({ 
  subsets: ["latin", "vietnamese"],
  adjustFontFallback: false
});

export const metadata: Metadata = {
  title: "Google Antigravity - Hệ điều hành Trí tuệ cho AI Engineers",
  description: "Khung vận hành (Orchestration Framework) giúp biến AI thành Đội ngũ Chuyên gia chuyên nghiệp. Quy trình chuẩn PDCA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body 
        className={cn(nunito.className, "min-h-screen font-sans antialiased dark bg-[#05070a]")}
      >
        <BackgroundVideo />
        
        {/* Dreamy Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          {/* Large Warm Glow - Top Left */}
          <div className="glow-orb glow-warm -top-48 -left-24 opacity-30 mix-blend-screen" />
          
          {/* Cool Glow - Bottom Right */}
          <div className="glow-orb glow-cool top-1/2 -right-24 opacity-20 mix-blend-screen" />
        </div>
        
        <div className="relative flex min-h-screen flex-col z-10">
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <footer className="w-full py-12 border-t border-white/5 bg-black/20 backdrop-blur-md">
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-sm text-white/40">
                © 2026 Google Antigravity. Phát triển với ❤️ bởi Dokhacgiakhoa.
              </p>
              <div className="flex gap-6">
                <a href="https://github.com/Dokhacgiakhoa/google-antigravity" target="_blank" className="text-white/40 hover:text-[#FCD34D] transition-colors">GitHub</a>
                <a href="#" className="text-white/40 hover:text-[#FCD34D] transition-colors">Cộng đồng</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
