"use client";

import { BookOpen, Command, Terminal, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function GuidePage() {
  return (
    <div className="page-container mt-32 space-y-32 pb-32">
      {/* Header */}
      <section className="text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/20 px-6 py-2 rounded-full text-blue-400 text-xs font-black tracking-widest uppercase"
        >
          <BookOpen className="h-4 w-4" />
          Tài liệu hướng dẫn
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          Hướng dẫn <span className="text-white">sử dụng</span>
        </h1>
        
        <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Làm chủ các kỹ năng điều khiển AI để hiện thực hóa ý tưởng của bạn.
        </p>
      </section>

      {/* Guide Grid */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <GuideCard 
          icon={<Terminal className="text-[#FCD34D]" />}
          title="Hello World"
          step="01"
          desc="Tạo ứng dụng đầu tiên của bạn chỉ trong 30 giây với một câu lệnh đơn giản."
        />
        <GuideCard 
          icon={<Command className="text-emerald-400" />}
          title="Slash Commands"
          step="02"
          desc="Sử dụng 11 lệnh tắt như /brainstorm, /ui-ux-pro-max để kích hoạt các quy trình nghiệp vụ phức tạp."
        />
        <GuideCard 
          icon={<Zap className="text-cyan-400" />}
          title="Kích hoạt Skills"
          step="03"
          desc="Sử dụng kho kỹ năng mở rộng để tự động hóa các tác vụ lặp đi lặp lại."
        />
        <GuideCard 
          icon={<BookOpen className="text-purple-400" />}
          title="Quản lý Project"
          step="04"
          desc="Tổ chức workspace và điều phối nhiều Agent làm việc cùng lúc."
        />
      </section>

      {/*Strategy Section - Moved from Concepts*/}
      <section className="space-y-16 max-w-6xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-black">Core Capabilities</h2>
          <p className="text-white/40 text-lg font-light">3 công cụ chính để bạn làm chủ hệ sinh thái AntiGravity.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <GlossyCard 
            icon={<Zap className="text-emerald-400 h-8 w-8" />}
            title="1. Prompt (Lệnh)"
            tag="Direct Execution"
            desc="Gửi yêu cầu bằng ngôn ngữ tự nhiên. AI sẽ hiểu ý định của bạn và thực thi ngay lập tức."
          />
          <GlossyCard 
            icon={<Command className="text-cyan-400 h-8 w-8" />}
            title="2. Workflows"
            tag="Automated Process"
            desc="Sử dụng các lệnh /slash để kích hoạt chuỗi hành động phức tạp đã được tối ưu hóa sẵn."
          />
          <GlossyCard 
            icon={<BookOpen className="text-[#FCD34D] h-8 w-8" />}
            title="3. Skills"
            tag="Native Capabilities"
            desc="AI tự học và sử dụng các công cụ như Trình duyệt, Shell, Tìm kiếm để hoàn thành nhiệm vụ."
          />
        </div>
      </section>

      {/* Dictionary Section - Moved from Concepts */}
      <section className="card-glass bg-white/5 border-white/5 p-12 md:p-20 relative overflow-hidden max-w-6xl mx-auto">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FCD34D]/10 blur-[100px] rounded-full" />
        
        <div className="relative z-10 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-white">Core Technologies</h2>
            <p className="text-white/40">Giải mã các công nghệ giúp AntiGravity khác biệt.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <TermCard 
              term="Specialist Agents" 
              simple="Specialist Agents" 
              detail="Đội ngũ kỹ sư AI chuyên biệt cho từng tác vụ: Frontend, Backend, Security, Debugger, v.v."
            />
            <TermCard 
              term="Intelligent Routing" 
              simple="Intelligent Routing" 
              detail="Hệ thống tự động phân tích câu hỏi và định tuyến đến đúng Chuyên gia phù hợp nhất mà không cần bạn chỉ định."
            />
            <TermCard 
              term="Socratic Gate" 
              simple="Socratic Gate" 
              detail="AI sẽ đặt câu hỏi ngược lại để làm rõ yêu cầu mơ hồ trước khi bắt tay vào thực hiện, giúp tránh sai sót."
            />
            <TermCard 
              term="Workflows" 
              simple="Slash Commands" 
              detail="11 quy trình chuẩn hóa (như /deploy, /test) giúp tự động hóa các tác vụ lặp đi lặp lại một cách chính xác."
            />
            <TermCard 
              term="Smart Context" 
              simple="Smart Context" 
              detail="AI tự động đọc và hiểu toàn bộ cấu trúc dự án, file dependencies và quy tắc code trước khi đưa ra giải pháp."
            />
          </div>
        </div>
      </section>

      {/* Agents Reference */}
      <section className="max-w-6xl mx-auto space-y-12 py-20 border-t border-white/5">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-white">20 Specialist Agents</h2>
          <p className="text-white/40">Đội ngũ chuyên gia AI sẵn sàng tham gia dự án của bạn.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <RefCard title="@orchestrator" type="Quản lý" desc="Điều phối nhiều agent cùng lúc để xử lý tác vụ phức tạp." />
          <RefCard title="@project-planner" type="Hoạch định" desc="Phân tích yêu cầu và lên kế hoạch triển khai chi tiết." />
          <RefCard title="@frontend-specialist" type="Web UI" desc="Chuyên gia React/Next.js, Tailwind và trải nghiệm người dùng." />
          <RefCard title="@backend-specialist" type="System" desc="Xây dựng API, Business Logic và xử lý dữ liệu phía server." />
          <RefCard title="@database-architect" type="Data" desc="Thiết kế Schema, tối ưu câu lệnh SQL và quan hệ dữ liệu." />
          <RefCard title="@mobile-developer" type="Mobile" desc="Phát triển ứng dụng iOS/Android với React Native hoặc Flutter." />
          <RefCard title="@security-auditor" type="Bảo mật" desc="Rà soát lỗ hổng, tuân thủ tiêu chuẩn OWASP và bảo vệ hệ thống." />
          <RefCard title="@debugger" type="Fix Bug" desc="Phân tích nguyên nhân gốc rễ (Root Cause Analysis) và sửa lỗi." />
          <RefCard title="@devops-engineer" type="Infra" desc="Thiết lập CI/CD pipeline, Docker và quản lý server." />
          <RefCard title="@test-engineer" type="QA" desc="Viết và chạy các kịch bản kiểm thử (Unit, Integration, E2E)." />
          <RefCard title="@seo-specialist" type="Growth" desc="Tối ưu hóa công cụ tìm kiếm và chỉ số Core Web Vitals." />
          <RefCard title="@product-manager" type="Product" desc="Phân tích user stories và quản lý yêu cầu sản phẩm." />
        </div>
      </section>

      {/* Skills Reference */}
      <section className="max-w-6xl mx-auto space-y-12 py-20 border-t border-white/5">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-white">40+ Kỹ năng (Skills)</h2>
          <p className="text-white/40">Các module kiến thức chuyên sâu được nạp tự động.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <SkillGroup title="Frontend & UI" skills={['nextjs-react-expert', 'tailwind-patterns', 'frontend-design', 'web-design-guidelines']} />
          <SkillGroup title="Backend & API" skills={['api-patterns', 'nodejs-best-practices', 'python-patterns', 'database-design']} />
          <SkillGroup title="Chất lượng & Test" skills={['testing-patterns', 'webapp-testing', 'tdd-workflow', 'code-review-checklist']} />
          <SkillGroup title="Bảo mật & Ops" skills={['vulnerability-scanner', 'red-team-tactics', 'deployment-procedures', 'server-management']} />
          <SkillGroup title="Kiến trúc" skills={['app-builder', 'architecture', 'plan-writing', 'brainstorming', 'mcp-builder']} />
          <SkillGroup title="Khác" skills={['clean-code', 'seo-fundamentals', 'bash-linux', 'i18n-localization']} />
        </div>
      </section>

      {/* Workflows Reference */}
      <section className="max-w-6xl mx-auto space-y-12 py-20 border-t border-white/5">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-white">11 Workflows</h2>
          <p className="text-white/40">Quy trình chuẩn hóa kích hoạt bằng Slash Command.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <RefCard title="/brainstorm" type="Khám phá" desc="Socratic discovery - Tìm ra giải pháp tốt nhất trước khi code." />
          <RefCard title="/create" type="Khởi tạo" desc="Xây dựng tính năng hoặc ứng dụng mới từ đầu." />
          <RefCard title="/debug" type="Sửa lỗi" desc="Quy trình tìm và diệt lỗi có hệ thống." />
          <RefCard title="/deploy" type="Vận hành" desc="Đưa ứng dụng lên môi trường Production/Staging." />
          <RefCard title="/enhance" type="Nâng cấp" desc="Cải thiện code hoặc thêm tính năng vào module có sẵn." />
          <RefCard title="/plan" type="Kế hoạch" desc="Phân rã task lớn thành các bước thực hiện nhỏ." />
          <RefCard title="/test" type="Kiểm thử" desc="Tự động sinh và chạy các test case." />
          <RefCard title="/ui-ux-pro-max" type="Design" desc="Thiết kế giao diện chuẩn Pro Max với 50 style khác nhau." />
          <RefCard title="/orchestrate" type="Điều phối" desc="Gọi nhiều agent cùng tham gia hội chẩn." />
        </div>
      </section>

      {/* CLI Reference */}
      <section className="max-w-4xl mx-auto space-y-12 py-20 border-t border-white/5">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-white">CLI Reference</h2>
          <p className="text-white/40">Các lệnh quản lý Antigravity Kit.</p>
        </div>
        <div className="space-y-4">
          <div className="card-glass p-6 flex items-center justify-between">
            <code className="text-emerald-400 font-mono font-bold">ag-kit init</code>
            <span className="text-white/60">Khởi tạo thư mục .agent vào dự án (Tải templates mới nhất)</span>
          </div>
          <div className="card-glass p-6 flex items-center justify-between">
            <code className="text-emerald-400 font-mono font-bold">ag-kit update</code>
            <span className="text-white/60">Cập nhật Kit lên phiên bản mới nhất (Ghi đè .agent)</span>
          </div>
          <div className="card-glass p-6 flex items-center justify-between">
            <code className="text-emerald-400 font-mono font-bold">ag-kit status</code>
            <span className="text-white/60">Kiểm tra phiên bản và trạng thái các Agents/Skills</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function GuideCard({ icon, title, desc, step }: { icon: React.ReactNode, title: string, desc: string, step: string }) {
  return (
    <div className="card-glass p-8 md:p-12 group hover:bg-white/5 transition-colors">
      <div className="flex justify-between items-start mb-8">
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl">
          {icon}
        </div>
        <span className="text-white/10 font-black text-6xl select-none">{step}</span>
      </div>
      <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#FCD34D] transition-colors">{title}</h3>
      <p className="text-white/40 leading-relaxed text-base">{desc}</p>
    </div>
  );
}

function GlossyCard({ icon, title, tag, desc }: { icon: React.ReactNode, title: string, tag: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -12, scale: 1.02 }} 
      className="card-glass p-10 h-full flex flex-col group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-16 -mt-16 group-hover:bg-white/10 transition-colors" />
      <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-10 group-hover:rotate-12 transition-all">
        {icon}
      </div>
      <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40 mb-6 w-fit">
        {tag}
      </div>
      <h3 className="text-2xl font-black mb-6 text-white">{title}</h3>
      <p className="text-white/50 leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}

function TermCard({ term, simple, detail }: { term: string, simple: string, detail: string }) {
  return (
    <div className="space-y-4 group">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-[#FCD34D] group-hover:scale-150 transition-transform shadow-[0_0_10px_#FCD34D]" />
        <h3 className="text-xl font-black text-white">{term}</h3>
      </div>
      <p className="text-white/40 text-sm leading-relaxed">{detail}</p>
    </div>
  );
}

function RefCard({ title, type, desc }: { title: string, type: string, desc: string }) {
  return (
    <div className="card-glass p-6 space-y-3 hover:bg-white/5 transition-colors group">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-black text-white font-mono">{title}</h3>
        <span className="text-[10px] uppercase font-bold tracking-wider text-white/30 bg-white/5 px-2 py-1 rounded">{type}</span>
      </div>
      <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70">{desc}</p>
    </div>
  );
}

function SkillGroup({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
        <div className="w-1 h-4 bg-emerald-400 rounded-full" />
        {title}
      </h3>
      <div className="grid gap-2">
        {skills.map(skill => (
          <div key={skill} className="card-glass px-4 py-3 text-sm font-mono text-white/60 hover:text-white hover:bg-white/5 transition-colors">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
