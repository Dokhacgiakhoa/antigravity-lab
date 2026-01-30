"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Bot, Layers, Globe, FileText, MessageSquare, Cpu, 
  Rocket, Terminal, Sparkles, Zap, Brain, Monitor, Gift,
  ArrowRight, Star
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Background Orbs */}
      <div className="glow-orb glow-warm top-[-100px] right-[-100px] opacity-20" />
      <div className="glow-orb glow-cool bottom-[20%] left-[-100px] opacity-10" />

      {/* Hero Section - Inspired by Concept Image 3 */}
      <section className="w-full pt-20 pb-4 px-4">
        <div className="w-[85%] max-w-[120rem] mx-auto">
          <div className="image-frame aspect-[21/9] w-full relative group">
            <Image 
              src="/dreamy-hero.png"
              alt="Dreamy Astronaut"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-black/20" />
            
            {/* Overlay Content */}
            <div className="absolute bottom-12 left-8 md:left-16 max-w-2xl space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/20 w-fit"
              >
                <Star className="h-4 w-4 text-[#FCD34D]" fill="#FCD34D" />
                <span className="text-[10px] font-black text-white tracking-[0.3em] uppercase">Bộ não AI Agent tối thượng</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white text-4xl md:text-6xl font-black leading-tight uppercase tracking-tighter"
              >
                TRẢI NGHIỆM <span className="text-[#FCD34D] drop-shadow-[0_0_15px_rgba(252,211,77,0.3)]">VIBE CODING</span><br/>DÀNH CHO MỌI NGƯỜI
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/tutorial">
                  <Button size="lg" className="btn-emerald h-14 px-10 group/btn rounded-full">
                    Bắt đầu ngay
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/concepts">
                  <Button size="lg" className="btn-cyan h-14 px-10 rounded-full">
                    Khám phá khái niệm
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Cards - Bubble Style */}
      <section className="w-full pt-6 pb-12 px-4 relative">
        <div className="w-[85%] max-w-[120rem] mx-auto grid gap-6 md:grid-cols-3">
          <motion.div whileHover={{ y: -10 }} className="card-glass space-y-6 p-10 border-amber-500/10 hover:border-amber-500/30">
            <div className="w-16 h-16 rounded-3xl bg-[#FCD34D]/10 flex items-center justify-center border border-[#FCD34D]/20 shadow-[0_0_20px_rgba(252,211,77,0.1)]">
              <MessageSquare className="h-8 w-8 text-[#FCD34D]" />
            </div>
            <h2 className="text-xl font-black tracking-tight text-[#FCD34D]">15+ Specialist Agents</h2>
            <p className="text-white/50 text-sm leading-relaxed font-medium">
              Bạn không cần chọn Agent. Hệ thống <strong className="text-white">Intelligent Routing</strong> sẽ tự động 
              phân tích yêu cầu và gọi đúng chuyên gia (Frontend, Backend, Security...) để xử lý.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="card-glass space-y-6 p-10 border-emerald-500/10 hover:border-emerald-500/30">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <Brain className="h-8 w-8 text-emerald-400" />
            </div>
            <h2 className="text-xl font-black tracking-tight text-emerald-400">20+ Master Skills</h2>
            <p className="text-white/50 text-sm leading-relaxed font-medium">
              Trang bị sẵn hơn 20 module kiến thức chuyên sâu: từ Clean Code, API Design 
              đến Security Audit. AI tự động học và áp dụng khi cần thiết.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="card-glass space-y-6 p-10 border-cyan-500/10 hover:border-cyan-500/30">
            <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <Globe className="h-8 w-8 text-cyan-400" />
            </div>
            <h2 className="text-xl font-black tracking-tight text-cyan-400">11 Workflows</h2>
            <p className="text-white/50 text-sm leading-relaxed font-medium">
              Kích hoạt quy trình chuẩn hóa bằng Slash Command: <code className="text-cyan-300">/create</code> để tạo app, 
              <code className="text-cyan-300">/debug</code> để sửa lỗi, hay <code className="text-cyan-300">/deploy</code> để đưa lên production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Section - Grid inspired by Concept 1 & 2 */}
      <section className="w-full py-12 bg-white/[0.02] backdrop-blur-3xl border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(252,211,77,0.03)_0%,transparent_70%)]" />
        <div className="w-[85%] max-w-[120rem] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <Badge content="Tính năng phi thường" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">BỘ CÔNG CỤ<br/><span className="text-[#FCD34D]">THẾ HỆ MỚI</span></h2>
            </div>
            <p className="max-w-md text-white/40 text-lg font-medium leading-relaxed">
              Giải phóng sức sáng tạo với những công cụ vượt trội, hỗ trợ bạn xây dựng mọi ứng dụng trong thời gian ngắn nhất.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4 md:grid-rows-2">
            <FeatureItem 
              icon={<Bot />} title="Multi-Agent Orchestration" colSpan="md:col-span-2"
              desc="Hệ thống phối hợp nhiều AI chuyên gia cùng tham gia giải quyết một vấn đề phức tạp từ nhiều góc độ khác nhau."
            />
            <FeatureItem 
              icon={<Terminal />} title="Agentic IDE" 
              desc="Môi trường lập trình thế hệ mới tích hợp sâu AI, cho phép thực thi lệnh và tự động hóa quy trình ngay lập tức."
            />
            <FeatureItem 
              icon={<Monitor />} title="Browser Testing" 
              desc="AI chủ động điều khiển trình duyệt Chrome để kiểm tra giao diện và tính năng của ứng dụng một cách độc lập."
            />
            <FeatureItem 
              icon={<FileText />} title="Visual Artifacts" 
              desc="Hiển thị kết quả công việc dưới dạng hình ảnh, đoạn mã và video minh họa sống động ngay trong cuộc hội thoại."
            />
            <FeatureItem 
              icon={<Layers />} title="Orchestration Center" colSpan="md:col-span-2"
              desc="Giao diện quản trị tập trung giúp bạn theo dõi toàn bộ tiến độ, các tác vụ và luồng suy nghĩ của trợ lý AI."
            />
            <FeatureItem 
              icon={<Gift />} title="Dùng thử không giới hạn" 
              desc="Tham gia ngay hôm nay để trải nghiệm các tính năng mạnh mẽ của AntiGravity hoàn toàn miễn phí."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 relative flex flex-col items-center text-center px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#FCD34D] to-transparent" />
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FCD34D]/10 blur-[120px] rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter uppercase">
            BẮT ĐẦU <span className="text-[#FCD34D]">NGAY HÔM NAY</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/40 text-lg mb-12 font-medium">
            Gia nhập cộng đồng các nhà phát triển sử dụng công cụ AI tiên tiến nhất để hiện thực hóa mọi ý tưởng.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/tutorial">
              <Button size="lg" className="btn-emerald h-16 px-12 text-lg rounded-full">Tải xuống ngay</Button>
            </Link>
            <Link href="/guide">
              <Button size="lg" className="btn-cyan h-16 px-12 text-lg rounded-full">Tài liệu chi tiết</Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function FeatureItem({ icon, title, desc, colSpan = "" }: { icon: React.ReactNode, title: string, desc: string, colSpan?: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 0.98, y: -5 }} 
      className={cn("card-glass flex flex-col group border-white/5 hover:border-[#FCD34D]/30 transition-all duration-500", colSpan)}
    >
      <div className="text-[#FCD34D] bg-white/[0.03] w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-[#FCD34D] group-hover:text-black transition-all duration-500 mb-6 border border-white/5">
        {icon}
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-black mb-3 text-white leading-tight">{title}</h3>
        <p className="text-sm text-white/40 leading-relaxed font-medium">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function Badge({ content }: { content: string }) {
  return (
    <div className="badge-teal w-fit uppercase tracking-tighter">
      {content}
    </div>
  );
}


