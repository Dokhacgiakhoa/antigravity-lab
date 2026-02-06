import { 
  Layout, Palette, Database, Globe, Shield, Terminal, MessageSquare, Zap, Target, Search, Activity,
  ShoppingCart, Users, BookOpen, Smartphone, BarChart3, Cloud, Layers, Heart, Video, GraduationCap, 
  CreditCard, Stethoscope, Share2, Rocket
} from "lucide-react";

export interface ProjectExecution {
  prompt: string;
  promptEn?: string;
  explanation: string;
  explanationEn?: string;
}

export interface SampleProject {
  id: string;
  title: string;
  titleEn?: string;
  desc: string;
  descEn?: string;
  icon: any;
  tech: string[];
  executions: ProjectExecution[];
  color: string;
}

export const SAMPLES_DATA: SampleProject[] = [
  {
    id: "ai-ecommerce",
    title: "Sàn TMĐT Tích Hợp AI",
    titleEn: "AI-Integrated E-commerce",
    desc: "Hệ thống thương mại điện tử quy mô lớn, tích hợp AI tìm kiếm ngữ nghĩa, gợi ý sản phẩm và cá nhân hóa trải nghiệm.",
    descEn: "Large-scale e-commerce system featuring AI semantic search, product recommendations, and personalized user experiences.",
    icon: ShoppingCart,
    color: "blue",
    tech: ["Next.js 15", "Supabase", "Vector DB", "Stripe", "Redis"],
    executions: [
      {
        prompt: "/plan thiết kế kiến trúc sàn TMĐT bán đồ nội thất với tính năng tìm kiếm bằng hình ảnh và giọng nói",
        promptEn: "/plan design an e-commerce architecture for furniture with image and voice search features",
        explanation: "Bước 1: Lập kế hoạch. Phân tích yêu cầu, vẽ sơ đồ ERD (Products, Users, Orders, Reviews), xác định Tech Stack và chiến lược caching.",
        explanationEn: "Step 1: Planning. Analyze requirements, draw ERD diagrams (Products, Users, Orders, Reviews), define Tech Stack, and caching strategy."
      },
      {
        prompt: "/create dự án e-commerce sử dụng Next.js 15 App Router, Tailwind CSS v4 và Prisma ORM",
        promptEn: "/create e-commerce project using Next.js 15 App Router, Tailwind CSS v4, and Prisma ORM",
        explanation: "Bước 2: Khởi tạo Project. Scaffold cấu trúc thư mục chuẩn Enterprise (src/features, src/shared), cài đặt dependencies tối ưu.",
        explanationEn: "Step 2: Initialize Project. Scaffold enterprise-standard folder structure (src/features, src/shared), install optimized dependencies."
      },
      {
        prompt: "Viết Prisma Schema cho bảng Product, Variant và Inventory, tuân thủ @rules:database-design.md",
        promptEn: "Write Prisma Schema for Product, Variant, and Inventory tables, following @rules:database-design.md",
        explanation: "Bước 3: Database Design. Định nghĩa schema, thiết lập quan hệ Indexing, Foreign Keys chuẩn 3NF để tối ưu truy vấn.",
        explanationEn: "Step 3: Database Design. Define schema, set up indexing relationships, and Foreign Keys following 3NF standards for optimized queries."
      },
      {
        prompt: "/produce-api xây dựng API lọc sản phẩm theo 15 tiêu chí (giá, màu, kích thước...) với tốc độ <100ms",
        promptEn: "/produce-api build product filtering API with 15 criteria (price, color, size...) with speed <100ms",
        explanation: "Bước 4: Backend API. Implement Dynamic Filtering, Pagination và sử dụng Redis để cache kết quả tìm kiếm phổ biến.",
        explanationEn: "Step 4: Backend API. Implement Dynamic Filtering, Pagination, and use Redis to cache popular search results."
      },
      {
        prompt: "/ui-ux-pro-max thiết kế trang danh sách sản phẩm dạng Masonry Grid, có Infinite Scroll",
        promptEn: "/ui-ux-pro-max design product listing page as Masonry Grid with Infinite Scroll",
        explanation: "Bước 5: Frontend UI. Xây dựng giao diện responsive, lazy loading hình ảnh, skeleton loading để tối ưu UX.",
        explanationEn: "Step 5: Frontend UI. Build responsive interface, image lazy loading, and skeleton loading for UX optimization."
      },
      {
        prompt: "Tích hợp tính năng 'Tìm kiếm ngữ nghĩa' dùng Pinecone Vector DB, cho phép search 'ghế sofa êm cho mùa đông'",
        promptEn: "Integrate 'Semantic Search' using Pinecone Vector DB, allowing searches like 'comfy sofa for winter'",
        explanation: "Bước 6: AI Integration. Nhúng OpenAI Embeddings để chuyển đổi text sang vector, giúp tìm kiếm theo ý định người dùng (Semantic Search).",
        explanationEn: "Step 6: AI Integration. Embed OpenAI Embeddings to convert text to vectors, enabling Semantic Search based on user intent."
      },
      {
        prompt: "Xây dựng giỏ hàng (Cart) đồng bộ Real-time giữa các thiết bị dùng Supabase Realtime",
        promptEn: "Build 'Cart' with Real-time sync across devices using Supabase Realtime",
        explanation: "Bước 7: Feature Logic. Xử lý logic giỏ hàng phức tạp, đồng bộ trạng thái khi người dùng chuyển từ điện thoại sang laptop.",
        explanationEn: "Step 7: Feature Logic. Handle complex cart logic and sync state when users switch between mobile and laptop."
      },
      {
        prompt: "Kiểm tra bảo mật thanh toán Stripe Webhook, chống Double-Spending theo @rules:security.md",
        promptEn: "Test Stripe Webhook payment security, prevent Double-Spending according to @rules:security.md",
        explanation: "Bước 8: Security. Rà soát logic thanh toán, xác thực chữ ký (Signature Verification) và xử lý idempotency.",
        explanationEn: "Step 8: Security. Audit payment logic, implement Signature Verification, and handle idempotency."
      },
      {
        prompt: "/seo tự động tạo 10.000 trang chi tiết sản phẩm chuẩn SEO (Dynamic Sitemap, Schema Product)",
        promptEn: "/seo automatically generate 10,000 SEO-compliant product detail pages (Dynamic Sitemap, Schema Product)",
        explanation: "Bước 9: SEO Automation. Cấu hình Dynamic Metadata, JSON-LD Structured Data để Google Index nhanh chóng.",
        explanationEn: "Step 9: SEO Automation. Configure Dynamic Metadata and JSON-LD Structured Data for fast Google indexing."
      },
      {
        prompt: "/deploy thiết lập CI/CD pipeline, chạy migration và deploy lên Vercel Edge Network",
        promptEn: "/deploy set up CI/CD pipeline, run migrations, and deploy to Vercel Edge Network",
        explanation: "Bước 10: Launch. Đưa sản phẩm ra thị trường với quy trình deploy tự động, zero-downtime.",
        explanationEn: "Step 10: Launch. Release product with automated, zero-downtime deployment process."
      }
    ]
  },
  {
    id: "fintech-saas",
    title: "FinTech Dashboard & Analytics",
    titleEn: "FinTech Dashboard & Analytics",
    desc: "Nền tảng quản lý tài chính SaaS, tập trung vào bảo mật, biểu đồ thời gian thực và xử lý dữ liệu lớn.",
    descEn: "SaaS financial management platform focusing on security, real-time charts, and big data processing.",
    icon: CreditCard,
    color: "emerald",
    tech: ["Next.js", "Clerk Auth", "Tinybird", "Recharts", "Postgres"],
    executions: [
      {
        prompt: "/brainstorm tính năng dashboard quản lý dòng tiền cho doanh nghiệp SME",
        promptEn: "/brainstorm cash flow management dashboard features for SMEs",
        explanation: "Bước 1: Ideation. Gợi ý các widget quan trọng (Cashflow, P&L, Burn Rate) và luồng trải nghiệm người dùng (User Journey).",
        explanationEn: "Step 1: Ideation. Suggest critical widgets (Cashflow, P&L, Burn Rate) and User Journey maps."
      },
      {
        prompt: "/create hệ thống Dashboard Admin sử dụng Shadcn UI và Tremor charts",
        promptEn: "/create Admin Dashboard system using Shadcn UI and Tremor charts",
        explanation: "Bước 2: Setup. Khởi tạo UI Kit chuyên dụng cho dashboard dữ liệu, đảm bảo tính nhất quán và đẹp mắt.",
        explanationEn: "Step 2: Setup. Initialize specialized UI Kit for data dashboards, ensuring consistency and aesthetics."
      },
      {
        prompt: "Thiết lập Authentication đa lớp (MFA) với Clerk, phân quyền RBAC theo @rules:security.md",
        promptEn: "Set up multi-factor authentication (MFA) with Clerk, implement RBAC according to @rules:security.md",
        explanation: "Bước 3: Auth & Security. Cài đặt đăng nhập an toàn, phân quyền Admin/Editor/Viewer chặt chẽ từng API Route.",
        explanationEn: "Step 3: Auth & Security. Configure secure login and strict Admin/Editor/Viewer permissions for each API route."
      },
      {
        prompt: "/produce-api tạo API Streaming dữ liệu giao dịch realtime sử dụng Server-Sent Events (SSE)",
        promptEn: "/produce-api create real-time transaction streaming API using Server-Sent Events (SSE)",
        explanation: "Bước 4: Realtime Data. Xây dựng pipeline đẩy dữ liệu liên tục xuống client mà không cần refresh trang.",
        explanationEn: "Step 4: Realtime Data. Build a pipeline to stream data continuously to the client without page refreshes."
      },
      {
        prompt: "Viết component biểu đồ nến (Candlestick) tương tác cao, zoom/pan mượt mà với D3.js",
        promptEn: "Write highly interactive Candlestick component with smooth zoom/pan using D3.js",
        explanation: "Bước 5: Data Viz. Implement biểu đồ tài chính phức tạp, xử lý lượng dữ liệu lớn (big data) trên Canvas/SVG.",
        explanationEn: "Step 5: Data Viz. Implement complex financial charts and handle big data sets on Canvas/SVG."
      },
      {
        prompt: "Tối ưu hóa câu truy vấn SQL lấy báo cáo doanh thu năm, tuân thủ @rules:database-design.md",
        promptEn: "Optimize SQL query for annual revenue reports, following @rules:database-design.md",
        explanation: "Bước 6: Performance DB. Phân tích Explain Analyze, thêm Index cho các cột ngày tháng, group by hiệu quả.",
        explanationEn: "Step 6: Performance DB. Analyze with Explain Analyze, add indexes for date columns, and optimize group by queries."
      },
      {
        prompt: "/audit kiểm tra tính tuân thủ tiêu chuẩn tài chính (PCI DSS compliant) trong code",
        promptEn: "/audit check financial compliance standards (PCI DSS) in the code",
        explanation: "Bước 7: Compliance. Quét mã nguồn để đảm bảo không lưu log thẻ tín dụng, mã hóa dữ liệu nhạy cảm (PII).",
        explanationEn: "Step 7: Compliance. Scan source code to ensure no credit card logs are stored and encrypt PII data."
      },
      {
        prompt: "Refactor module tính toán lãi suất kép để tránh lỗi làm tròn số (Floating Point) theo @rules:clean-code.md",
        promptEn: "Refactor compound interest calculation module to avoid floating point errors per @rules:clean-code.md",
        explanation: "Bước 8: Code Quality. Sử dụng thư viện Decimal.js để xử lý tiền tệ chính xác tuyệt đối.",
        explanationEn: "Step 8: Code Quality. Use Decimal.js library for absolute currency precision."
      },
      {
        prompt: "/monitor thiết lập cảnh báo khi có giao dịch bất thường (Fraud Detection) qua Slack",
        promptEn: "/monitor set up Slack alerts for anomalous transactions (Fraud Detection)",
        explanation: "Bước 9: Monitoring. Theo dõi pattern giao dịch, bắn alert ngay lập tức khi phát hiện nghi vấn gian lận.",
        explanationEn: "Step 9: Monitoring. Monitor transaction patterns and fire immediate alerts upon fraud suspicion."
      }
    ]
  },
  {
    id: "creative-3d",
    title: "Creative Portfolio 3D",
    titleEn: "Creative 3D Portfolio",
    desc: "Website Portfolio dành cho Creative Agency, sử dụng công nghệ WebGL/Three.js để tạo trải nghiệm thị giác đỉnh cao.",
    descEn: "Creative Agency portfolio website using WebGL/Three.js for high-end visual experiences.",
    icon: Palette,
    color: "purple",
    tech: ["Three.js", "React Three Fiber", "GSAP", "Lenis Scroll"],
    executions: [
      {
        prompt: "/brainstorm concept 'Vũ trụ số' cho landing page studio thiết kế",
        promptEn: "/brainstorm 'Digital Universe' concept for a design studio landing page",
        explanation: "Bước 1: Concept Art. Lên ý tưởng về không gian 3D, ánh sáng neon, vật liệu kim loại và chuyển động camera.",
        explanationEn: "Step 1: Concept Art. Ideate 3D spaces, neon lighting, metallic materials, and camera movements."
      },
      {
        prompt: "/create dự án Next.js tối ưu cho WebGL, cài đặt R3F và Drei",
        promptEn: "/create Next.js project optimized for WebGL, install R3F and Drei",
        explanation: "Bước 2: Project Base. Cấu hình Next.js transpile packages để hỗ trợ tốt nhất cho các thư viện 3D.",
        explanationEn: "Step 2: Project Base. Configure Next.js transpile packages to optimally support 3D libraries."
      },
      {
        prompt: "Code shader GLSL tạo hiệu ứng nước chảy (Water Ripple) biến dạng theo con trỏ chuột",
        promptEn: "Code GLSL shader for interactive Water Ripple effects following the mouse cursor",
        explanation: "Bước 3: Shaders. Viết custom shader để tạo hiệu ứng hình ảnh độc bản, không đụng hàng.",
        explanationEn: "Step 3: Shaders. Write custom shaders for unique, standout visual effects."
      },
      {
        prompt: "Tối ưu model 3D (GLB), nén Draco và thiết lập Level of Detail (LOD) để load nhanh",
        promptEn: "Optimize 3D models (GLB), use Draco compression, and set Level of Detail (LOD) for fast loading",
        explanation: "Bước 4: Asset Optimization. Xử lý file 3D nặng thành các file nhỏ gọn, giảm polygon mà vẫn giữ chi tiết.",
        explanationEn: "Step 4: Asset Optimization. Process heavy 3D files into compact ones, reducing polygons while maintaining detail."
      },
      {
        prompt: "/ui-ux-pro-max tích hợp Lenis để cuộn trang mượt mà (Smooth Scroll) kết hợp Parallax",
        promptEn: "/ui-ux-pro-max integrate Lenis for smooth scrolling combined with Parallax effects",
        explanation: "Bước 5: Interaction. Đồng bộ chuyển động cuộn của chuột với các hiệu ứng 3D, tạo cảm giác mượt mà (butter smooth).",
        explanationEn: "Step 5: Interaction. Sync mouse scroll with 3D effects for a butter-smooth experience."
      },
      {
        prompt: "/seo cấu hình Open Graph động, gen ảnh preview cho từng dự án khi chia sẻ lên Facebook",
        promptEn: "/seo configure dynamic Open Graph, generate preview images for project shares",
        explanation: "Bước 6: Social SEO. Tự động sinh ảnh thumbnail chứa tên dự án để tăng tỷ lệ click khi share link.",
        explanationEn: "Step 6: Social SEO. Automatically generate project-specific thumbnails to increase click-through rates on social shares."
      },
      {
        prompt: "/audit kiểm tra Performance trên mobile, đảm bảo đạt 60fps trên iPhone cũ",
        promptEn: "/audit check mobile performance, ensuring 60fps on older iPhones",
        explanation: "Bước 7: Performance Audit. Profile FPS, giảm resolution pixel ratio trên thiết bị yếu để giữ trải nghiệm mượt.",
        explanationEn: "Step 7: Performance Audit. Profile FPS and reduce pixel ratio on weak devices to maintain smooth performance."
      },
      {
        prompt: "Thiết lập Loading Screen nghệ thuật, preload assets quan trọng trước khi vào trang",
        promptEn: "Set up artistic Loading Screen, preload critical assets before entering the page",
        explanation: "Bước 1: UX Polish. Tránh tình trạng 'pop-in' vật thể, hiển thị thanh loading đẹp mắt giữ chân người dùng.",
        explanationEn: "Step 8: UX Polish. Prevent object 'pop-in' and display a beautiful loading bar to retain users."
      }
    ]
  },
  {
    id: "edtech-platform",
    title: "EdTech Learning Platform",
    titleEn: "EdTech Learning Platform",
    desc: "Nền tảng học trực tuyến (LMS) với video streaming, bài tập trắc nghiệm và gamification đua top.",
    descEn: "Online learning platform (LMS) with video streaming, quizzes, and gamification leaderboard.",
    icon: GraduationCap,
    color: "yellow",
    tech: ["Next.js", "Mux Video", "Socket.io", "Gamification"],
    executions: [
      {
        prompt: "/plan luồng người dùng: Đăng ký -> Mua khóa học -> Học Video -> Làm Quiz -> Nhận chứng chỉ",
        promptEn: "/plan user flow: Sign up -> Buy course -> Watch video -> Take quiz -> Receive certificate",
        explanation: "Bước 1: Flow Design. Vẽ User Flow chi tiết để đảm bảo không có điểm cụt trong trải nghiệm học tập.",
        explanationEn: "Step 1: Flow Design. Draw detailed User Flows to ensure no dead ends in the learning experience."
      },
      {
        prompt: "/create nền tảng LMS tích hợp trình phát video tùy chỉnh (Custom Player) có ghi chú timeline",
        promptEn: "/create LMS platform with a custom video player featuring timeline notes",
        explanation: "Bước 2: Core Features. Xây dựng trình phát video cho phép học viên đánh dấu (bookmark) và ghi chú ngay trên thanh thời gian.",
        explanationEn: "Step 2: Core Features. Build a video player that allows students to bookmark and take notes directly on the timeline."
      },
      {
        prompt: "Thiết kế CSDL lưu tiến độ học tập (Progress Tracking) chính xác đến từng giây, tuân thủ @rules:database-design.md",
        promptEn: "Design DB to track learning progress down to the second, following @rules:database-design.md",
        explanation: "Bước 3: Database. Schema lưu trữ trạng thái hoàn thành, điểm số, thời gian học để report chính xác.",
        explanationEn: "Step 3: Database. Schema for storing completion status, scores, and study time for accurate reporting."
      },
      {
        prompt: "Xây dựng hệ thống Gamification: XP, Huy hiệu (Badges) và Bảng xếp hạng Real-time",
        promptEn: "Build Gamification system: XP, Badges, and Real-time Leaderboards",
        explanation: "Bước 4: Engagement. Logic tính điểm thưởng khi hoàn thành bài học, cập nhật Leaderboard ngay lập tức qua WebSocket.",
        explanationEn: "Step 4: Engagement. Reward logic for lesson completion, updating the leaderboard instantly via WebSocket."
      },
      {
        prompt: "/ui-ux-pro-max thiết kế trang Chứng chỉ (Certificate) đẹp, hỗ trợ xuất PDF và chia sẻ LinkedIn",
        promptEn: "/ui-ux-pro-max design beautiful Certificates with PDF export and LinkedIn sharing",
        explanation: "Bước 5: Viral Features. Tạo mẫu chứng chỉ chuyên nghiệp, gen PDF dynamic từ tên học viên để họ chia sẻ tạo thương hiệu.",
        explanationEn: "Step 5: Viral Features. Create professional certificate templates, dynamically generating PDFs from student names for brand sharing."
      },
      {
        prompt: "Tạo hệ thống Quiz tương tác: Kéo thả, Điền từ, Code online (Sandpack integration)",
        promptEn: "Create interactive Quizzes: Drag & Drop, Fill-in-the-blanks, and online coding (Sandpack integration)",
        explanation: "Bước 6: Interactive Content. Tích hợp trình soạn thảo code ngay trong bài học để học viên thực hành lập trình.",
        explanationEn: "Step 6: Interactive Content. Integrate a code editor directly into lessons for hands-on programming practice."
      },
      {
        prompt: "/monitor theo dõi chất lượng streaming video (Buffering rate) và CDN latency",
        promptEn: "/monitor track video streaming quality (Buffering rate) and CDN latency",
        explanation: "Bước 7: Quality Control. Giám sát trải nghiệm xem video, đảm bảo không bị giật lag dù mạng yếu.",
        explanationEn: "Step 7: Quality Control. Monitor video playback experience, ensuring no lag even on weak networks."
      }
    ]
  },
  {
    id: "healthcare-iot",
    title: "HealthCare IoT System",
    titleEn: "HealthCare IoT System",
    desc: "Hệ thống y tế số kết nối thiết bị IoT đo chỉ số sức khỏe, quản lý bệnh án điện tử và đặt lịch khám.",
    descEn: "Digital healthcare system connecting IoT devices for health monitoring, EHR management, and appointment scheduling.",
    icon: Heart,
    color: "red",
    tech: ["NestJS", "MQTT", "TimescaleDB", "WebRTC"],
    executions: [
      {
        prompt: "/plan kiến trúc hệ thống IoT y tế tuân thủ tiêu chuẩn HIPAA và GDPR",
        promptEn: "/plan healthcare IoT system architecture following HIPAA and GDPR standards",
        explanation: "Bước 1: Architecture & Compliance. Thiết kế hệ thống bảo mật cấp cao nhất, mã hóa dữ liệu đầu cuối (E2EE).",
        explanationEn: "Step 1: Architecture & Compliance. Design top-tier security systems with end-to-end encryption (E2EE)."
      },
      {
        prompt: "Cấu hình MQTT Broker để nhận dữ liệu từ hàng ngàn thiết bị đeo tay (Wearables) cùng lúc",
        promptEn: "Configure MQTT Broker to receive data from thousands of Wearables simultaneously",
        explanation: "Bước 2: IoT Connectivity. Xử lý luồng dữ liệu nhịp tim, huyết áp gửi về liên tục với độ trễ thấp.",
        explanationEn: "Step 2: IoT Connectivity. Process heart rate and blood pressure data streams continuously with low latency."
      },
      {
        prompt: "Lưu trữ dữ liệu chuỗi thời gian (Time-series) vào TimescaleDB để vẽ biểu đồ sức khỏe",
        promptEn: "Store time-series data in TimescaleDB for health charts",
        explanation: "Bước 3: Big Data Storage. Tối ưu database để lưu hàng tỷ bản ghi sensor log mà vẫn query nhanh.",
        explanationEn: "Step 3: Big Data Storage. Optimize the database to store billions of sensor logs while maintaining fast queries."
      },
      {
        prompt: "/create tính năng Video Call tư vấn từ xa (Telemedicine) sử dụng WebRTC",
        promptEn: "/create Telemedicine video call feature using WebRTC",
        explanation: "Bước 4: Telehealth. Xây dựng phòng khám ảo, kết nối bác sĩ và bệnh nhân qua video call bảo mật.",
        explanationEn: "Step 4: Telehealth. Build virtual clinics connecting doctors and patients over secure video calls."
      },
      {
        prompt: "Kiểm tra lỗ hổng IDOR trong API xem bệnh án, tuân thủ tuyệt đối @rules:security.md",
        promptEn: "Check for IDOR vulnerabilities in EHR viewing API, strictly adhering to @rules:security.md",
        explanation: "Bước 5: Security Audit. Đảm bảo bệnh nhân A không thể xem hồ sơ của bệnh nhân B bằng cách đổi ID trên URL.",
        explanationEn: "Step 5: Security Audit. Ensure Patient A cannot view Patient B's records by altering IDs in the URL."
      },
      {
        prompt: "/audit rà soát quy trình backup và disaster recovery (DR) cho dữ liệu bệnh nhân",
        promptEn: "/audit review backup and disaster recovery (DR) procedures for patient data",
        explanation: "Bước 6: Reliability. Thiết lập quy trình sao lưu, phục hồi thảm họa để không bao giờ mất dữ liệu y tế.",
        explanationEn: "Step 6: Reliability. Establish backup and disaster recovery protocols to ensure no medical data loss."
      },
      {
        prompt: "Xây dựng module nhắc uống thuốc và lịch khám qua Notification/SMS/Email đa kênh",
        promptEn: "Build medication reminder and appointment module via multi-channel Notification/SMS/Email",
        explanation: "Bước 7: Notifications. Logic lập lịch (Scheduler) gửi nhắc nhở thông minh dựa trên toa thuốc bác sĩ kê.",
        explanationEn: "Step 7: Notifications. Scheduler logic for intelligent reminders based on doctor prescriptions."
      }
    ]
  },
  {
    id: "social-network",
    title: "Social Network & Community",
    titleEn: "Social Network & Community",
    desc: "Mạng xã hội quy mô lớn với News Feed thuật toán, Chat real-time và hệ thống Notification phức tạp.",
    descEn: "Large-scale social network with algorithmic News Feed, real-time chat, and complex notification systems.",
    icon: Share2,
    color: "pink",
    tech: ["Next.js", "Neo4j (Graph DB)", "Kafka", "Redis"],
    executions: [
      {
        prompt: "/plan mô hình dữ liệu đồ thị (Graph) cho quan hệ Bạn bè/Follower",
        promptEn: "/plan Graph data model for Friends/Follower relationships",
        explanation: "Bước 1: Data Modeling. Sử dụng Graph Database để tối ưu truy vấn 'bạn của bạn' và các mối quan hệ xã hội phức tạp.",
        explanationEn: "Step 1: Data Modeling. Use Graph Database to optimize 'friend-of-friend' queries and complex social links."
      },
      {
        prompt: "/create ứng dụng Mobile-first PWA, hỗ trợ Offline mode và Install to Home Screen",
        promptEn: "/create Mobile-first PWA app with Offline mode and 'Install to Home Screen' support",
        explanation: "Bước 2: PWA Development. Biến web app thành ứng dụng di động, cache nội dung để xem được khi mất mạng.",
        explanationEn: "Step 2: PWA Development. Turn the web app into a mobile application, caching content for offline viewing."
      },
      {
        prompt: "Xây dựng News Feed Algorithm đơn giản: Ưu tiên bài viết từ bạn thân và nội dung viral",
        promptEn: "Build simple News Feed Algorithm: Prioritize close friends and viral content",
        explanation: "Bước 3: Feed Logic. Thuật toán sắp xếp bài đăng dựa trên trọng số tương tác (Like, Comment, Share).",
        explanationEn: "Step 3: Feed Logic. Algorithmic sorting of posts based on interaction weights (Like, Comment, Share)."
      },
      {
        prompt: "/produce-api xử lý upload ảnh/video số lượng lớn, resize và nén tự động qua Cloudinary",
        promptEn: "/produce-api handle bulk image/video uploads, auto-resize, and compression via Cloudinary",
        explanation: "Bước 4: Media Processing. Pipeline xử lý media tự động, tạo các phiên bản chất lượng khác nhau cho từng thiết bị.",
        explanationEn: "Step 4: Media Processing. Automated media processing pipeline, generating different quality versions for various devices."
      },
      {
        prompt: "Implement hệ thống Chat 1-1, Group Chat, Typing indicator dùng Socket.io",
        promptEn: "Implement 1-1 Chat, Group Chat, and Typing indicators using Socket.io",
        explanation: "Bước 5: Real-time Communication. Xây dựng chat server riêng biệt, scale độc lập để chịu tải hàng triệu kết nối.",
        explanationEn: "Step 5: Real-time Communication. Build a dedicated, independently scalable chat server to handle millions of connections."
      },
      {
        prompt: "Tối ưu hóa performance Infinite Scroll để lướt mượt mà như Native App theo @rules:clean-code.md",
        promptEn: "Optimize Infinite Scroll performance for native-app-like smoothness per @rules:clean-code.md",
        explanation: "Bước 6: Frontend Performance. Sử dụng Virtualization (React Window) để chỉ render các item đang hiển thị trên màn hình.",
        explanationEn: "Step 6: Frontend Performance. Use Windowing/Virtualization (React Window) to render only on-screen items."
      },
      {
        prompt: "/monitor giám sát độ trễ Notification và tỷ lệ gửi tin thất bại",
        promptEn: "/monitor track Notification latency and delivery failure rates",
        explanation: "Bước 7: System Health. Theo dõi sát sao các chỉ số realtime để đảm bảo người dùng không bị lỡ thông báo.",
        explanationEn: "Step 7: System Health. Closely monitor real-time metrics to ensure users never miss notifications."
      }
    ]
  },
  {
    id: "enterprise-ops",
    title: "DevOps & Quản Trị Hệ Thống",
    titleEn: "DevOps & Systems Administration",
    desc: "Hệ thống vận hành (Ops) chuẩn mực cho Tech Lead: CI/CD, Infrastructure as Code (IaC) và Observability.",
    descEn: "Standardized operations (Ops) system for Tech Leads: CI/CD, Infrastructure as Code (IaC), and Observability.",
    icon: Terminal,
    color: "red",
    tech: ["Docker", "Kubernetes", "Github Actions", "Terraform", "Prometheus"],
    executions: [
      {
        prompt: "/onboard tạo script tự động setup môi trường dev (Docker Compose) cho nhân viên mới",
        promptEn: "/onboard create script to auto-setup dev environment (Docker Compose) for new hires",
        explanation: "Bước 1: Developer Experience. Script '1-click' để dựng toàn bộ database, redis, backend, frontend local.",
        explanationEn: "Step 1: Developer Experience. A '1-click' script to set up complete local database, Redis, backend, and frontend."
      },
      {
        prompt: "/create workflow Github Actions: Lint -> Test -> Build -> Docker Push -> Deploy K8s",
        promptEn: "/create Github Actions workflow: Lint -> Test -> Build -> Docker Push -> Deploy to K8s",
        explanation: "Bước 2: CI/CD Pipeline. Chuỗi tự động hóa từ lúc commit code đến khi code chạy trên production cluster.",
        explanationEn: "Step 2: CI/CD Pipeline. Automated sequence from code commit to running on the production cluster."
      },
      {
        prompt: "Viết Terraform script để dựng hạ tầng AWS (EC2, RDS, S3, VPC) tự động",
        promptEn: "Write Terraform scripts to auto-provision AWS infrastructure (EC2, RDS, S3, VPC)",
        explanation: "Bước 3: IaC. Quản lý infrastructure bằng code, dễ dàng versioning và nhân bản môi trường (Staging/Prod).",
        explanationEn: "Step 3: IaC. Manage infrastructure as code, simplifying environment versioning and replication (Staging/Prod)."
      },
      {
        prompt: "/test triển khai Load Testing với K6, mô phỏng 50.000 CCU đánh vào API Gateway",
        promptEn: "/test implement Load Testing with K6, simulating 50,000 CCU on the API Gateway",
        explanation: "Bước 4: Stress Test. Tìm điểm gãy (Breaking Point) của hệ thống để lên phương án Scaling phù hợp.",
        explanationEn: "Step 4: Stress Test. Find system breaking points to plan appropriate scaling strategies."
      },
      {
        prompt: "Cấu hình Prometheus và Grafana để visualize metric hệ thống (CPU, RAM, Request/s)",
        promptEn: "Configure Prometheus and Grafana for system metrics visualization (CPU, RAM, Request/s)",
        explanation: "Bước 5: Observability. Dashboard giám sát sức khỏe hệ thống trực quan, giúp Ops team nhìn thấy mọi vấn đề.",
        explanationEn: "Step 5: Observability. Visual health monitoring dashboards helping Ops teams spot any issues instantly."
      },
      {
        prompt: "Thiết lập Log Aggregation (ELK Stack) để tra cứu log tập trung từ 20 microservices",
        promptEn: "Set up Log Aggregation (ELK Stack) for centralized logging across 20 microservices",
        explanation: "Bước 6: Logging Check. Gom log từ nhiều container về một nơi để dễ dàng debug và trace lỗi (Tracing).",
        explanationEn: "Step 6: Logging Check. Aggregate logs from multiple containers to one place for easy debugging and tracing."
      },
      {
        prompt: "/security quét Docker Image tìm lỗ hổng CVE định kỳ hàng tuần",
        promptEn: "/security scan Docker images for CVE vulnerabilities weekly",
        explanation: "Bước 7: SecOps. Tự động scan các base image, thư viện cũ để vá lỗi bảo mật kịp thời.",
        explanationEn: "Step 7: SecOps. Automatically scan base images and old libraries to patch security vulnerabilities promptly."
      },
      {
        prompt: "/release-version tự động đánh tag git, sinh Changlog và thông báo lên kênh Slack công ty",
        promptEn: "/release-version auto-tag Git, generate Changelogs, and notify company Slack channels",
        explanation: "Bước 8: Release Automation. Bot tự động thông báo cho toàn công ty biết về tính năng mới vừa được deploy.",
        explanationEn: "Step 8: Release Automation. Bot automatically notifies the company about newly deployed features."
      }
    ]
  }
];
