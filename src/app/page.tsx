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

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section - Inspired by Concept Image 3 */}
      <section className="w-full pt-12 pb-20 px-4">
        <div className="w-[85%] max-w-[120rem] mx-auto">
          <div className="image-frame aspect-[21/9] w-full relative group">
            <Image 
              src="/dreamy-hero.png"
              alt="Dreamy Astronaut"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent" />
            
            {/* Overlay Content */}
            <div className="absolute bottom-12 left-8 md:left-16 max-w-2xl space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 w-fit"
              >
                <Star className="h-4 w-4 text-[#FCD34D]" fill="#FCD34D" />
                <span className="text-sm font-bold text-white tracking-widest uppercase">Next Generation Agentic IDE</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white text-4xl md:text-5xl font-black leading-tight uppercase"
              >
                TRẢI NGHIỆM <span className="text-[#FCD34D]">VIBE CODING</span><br/>DÀNH CHO MỌI NGƯỜI
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/tutorial">
                  <Button size="lg" className="btn-emerald h-14 px-10 group/btn">
                    Bắt đầu ngay
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/concepts">
                  <Button size="lg" className="btn-cyan h-14 px-10">
                    Khám phá khái nhiệm
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Cards - Bubble Style */}
      <section className="w-full py-20 px-4 relative">
        <div className="w-[80%] max-w-[120rem] mx-auto grid gap-8 md:grid-cols-3">
          <motion.div whileHover={{ y: -10 }} className="card-glass space-y-6 p-10">
            <div className="w-16 h-16 rounded-3xl bg-[#FCD34D]/20 flex items-center justify-center">
              <MessageSquare className="h-8 w-8 text-[#FCD34D]" />
            </div>
            <h2 className="text-xl font-bold">16 Chuyên gia AI</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Bạn không cần chọn Agent. Hệ thống <strong>Intelligent Routing</strong> sẽ tự động 
              phân tích yêu cầu và gọi đúng chuyên gia (Frontend, Backend, Security...) để xử lý.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="card-glass space-y-6 p-10 border-emerald-500/20">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 flex items-center justify-center">
              <Brain className="h-8 w-8 text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold text-emerald-400">40+ Kỹ năng (Skills)</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Trang bị sẵn hơn 40 module kiến thức chuyên sâu: từ Clean Code, API Design 
              đến Security Audit. AI tự động học và áp dụng khi cần thiết.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="card-glass space-y-6 p-10">
            <div className="w-16 h-16 rounded-3xl bg-cyan-500/20 flex items-center justify-center">
              <Globe className="h-8 w-8 text-cyan-400" />
            </div>
            <h2 className="text-xl font-bold text-cyan-400">11 Workflows</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Kích hoạt quy trình chuẩn hóa bằng Slash Command: <code>/create</code> để tạo app, 
              <code>/debug</code> để sửa lỗi, hay <code>/deploy</code> để đưa lên production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Section - Grid inspired by Concept 1 & 2 */}
      <section className="w-full py-24 bg-white/5 backdrop-blur-3xl border-y border-white/5">
        <div className="w-[85%] max-w-[120rem] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <Badge content="Tính năng" />
              <h2 className="text-3xl md:text-4xl font-black">Tính năng phi thường</h2>
            </div>
            <p className="max-w-md text-white/40 text-base">
              Bộ công cụ hỗ trợ lập trình hiện đại giúp bạn xây dựng phần mềm mà không cần kiến thức chuyên sâu.
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
              desc="Giao diện quản trị tập trung giúp bạn theo dõi toàn bộ tiến độ, các tài vụ và luồng suy nghĩ của trợ lý AI."
            />
            <FeatureItem 
              icon={<Gift />} title="Dùng thử không giới hạn" 
              desc="Tham gia ngay hôm nay để trải nghiệm các tính năng mạnh mẽ của AntiGravity hoàn toàn miễn phí."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 relative flex flex-col items-center text-center px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#FCD34D] to-transparent" />
        <h2 className="text-4xl md:text-5xl font-black mb-12">Bắt đầu ngay hôm nay</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Button size="lg" className="btn-emerald h-16 px-12 text-lg">Tải xuống ngay</Button>
          <Button size="lg" className="btn-cyan h-16 px-12 text-lg">Tài liệu chi tiết</Button>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ icon, title, desc, colSpan = "" }: { icon: React.ReactNode, title: string, desc: string, colSpan?: string }) {
  return (
    <motion.div whileHover={{ scale: 0.98 }} className={cn("card-glass flex flex-col group", colSpan)}>
      <div className="text-[#FCD34D] bg-white/5 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:bg-[#FCD34D] group-hover:text-black transition-all mb-8">
        {icon}
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-4 text-white leading-tight min-h-[3rem] flex items-end">{title}</h3>
        <p className="text-sm text-white/40 leading-relaxed min-h-[2.5rem] line-clamp-2">
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

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
