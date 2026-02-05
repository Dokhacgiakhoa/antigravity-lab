import { 
  Layout, Palette, Database, Globe, Shield, Terminal, MessageSquare, Zap, Target, Search, Activity,
  ShoppingCart, Users, BookOpen, Smartphone, BarChart3, Cloud, Layers
} from "lucide-react";

export interface ProjectExecution {
  prompt: string;
  explanation: string;
}

export interface SampleProject {
  id: string;
  title: string;
  desc: string;
  icon: any;
  tech: string[];
  executions: ProjectExecution[];
  color: string;
}

export const SAMPLES_DATA: SampleProject[] = [
  {
    id: "premium-saas",
    title: "Landing Page SaaS Cao Cấp",
    desc: "Xây dựng trang đích (Landing Page) cho nền tảng SaaS với phong cách hiện đại, sử dụng hiệu ứng kính (Glassmorphism) và cuộn mượt mà.",
    icon: Layout,
    color: "blue",
    tech: ["Next.js 15", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    executions: [
      {
        prompt: "/create một trang landing page cho ứng dụng quản lý tài chính cá nhân mang phong cách Gen Z",
        explanation: "Lệnh này kích hoạt hệ thống scaffold để tạo cấu trúc thư mục chuẩn, cài đặt các thư viện UI cần thiết và dựng khung layout ban đầu (Hero, Features, Pricing)."
      },
      {
        prompt: "/ui-ux-pro-max ứng dụng tone màu xanh neon và đen huyền bí với hiệu ứng kính (Glassmorphism)",
        explanation: "Agent chuyên về thiết kế sẽ quét tệp globals.css và các component để áp dụng hệ màu sắc mới, thêm backdrop-blur và các hiệu ứng đổ bóng cao cấp."
      },
      {
        prompt: "/document tạo hướng dẫn triển khai lên Vercel và cấu trúc tệp README chuyên nghiệp",
        explanation: "AI sẽ tự động phân tích mã nguồn để viết tài liệu hướng dẫn kỹ thuật bằng tiếng Việt, liệt kê các biến môi trường cần thiết và các bước để chạy production."
      }
    ]
  },
  {
    id: "ai-portfolio",
    title: "Hồ Sơ Năng Lực AI Agency",
    desc: "Trang giới thiệu năng lực của một AI Agency, tập trung vào việc hiển thị các case study và tích hợp các công nghệ 3D/AI mới nhất.",
    icon: Zap,
    color: "emerald",
    tech: ["React 19", "Three.js", "Tailwind v4", "Vercel AI SDK"],
    executions: [
      {
        prompt: "/create portfolio chuyên nghiệp cho công ty tư vấn giải pháp AI tích hợp thư viện Three.js",
        explanation: "Khởi tạo môi trường lập trình đồ họa 3D, thiết lập các scene mẫu và cấu trúc tệp tin để tối ưu hóa việc hiển thị các khối hình học AI phức tạp."
      },
      {
        prompt: "/seo tối ưu hóa toàn bộ nội dung cho các bộ máy tìm kiếm AI (GEO) và chuẩn E-E-A-T",
        explanation: "Agent thực hiện quét toàn bộ thẻ meta, tiêu đề và nội dung để đảm bảo tính chuyên gia, thẩm quyền và tin cậy theo thuật toán mới nhất của Google."
      },
      {
        prompt: "/audit kiểm tra hiệu năng Core Web Vitals và tối ưu hóa tốc độ tải trang",
        explanation: "Thực hiện đo đạc các chỉ số LCP, FID, CLS và đưa ra các đề xuất nén ảnh, tách code (code-splitting) để đạt điểm tuyệt đối trên Lighthouse."
      }
    ]
  },
  {
    id: "enterprise-dashboard",
    title: "Dashboard Quản Trị Doanh Nghiệp",
    desc: "Hệ thống quản trị phức tạp với biểu đồ thời gian thực, quản lý quyền truy cập (RBAC) và bảo mật đa lớp chuẩn doanh nghiệp.",
    icon: Shield,
    color: "red",
    tech: ["Next.js", "Prisma ORM", "PostgreSQL", "Recharts"],
    executions: [
      {
        prompt: "/create hệ thống dashboard quản lý Logistic tích hợp Prisma và PostgreSQL",
        explanation: "Tự động thiết kế sơ đồ cơ sở dữ liệu (Schema), tạo các file migration và dựng các API route cơ bản để xử lý dữ liệu (CRUD)."
      },
      {
        prompt: "/security kiểm tra lỗ hổng SQL Injection và thiết lập hệ thống phân quyền RBAC chặt chẽ",
        explanation: "Agent rà soát lại toàn bộ mã nguồn backend, nhúng các module bảo mật và thiết lập middleware để kiểm soát quyền truy cập của từng nhóm nhân viên."
      },
      {
        prompt: "/orchestrate gọi hội đồng chuyên gia Backend và Database để tối ưu hóa các lệnh truy vấn phức tạp",
        explanation: "Kích hoạt mô hình đa agent để cùng thảo luận và đưa ra giải pháp tối ưu index, caching giúp hệ thống xử lý hàng triệu bản ghi trong tích tắc."
      }
    ]
  },
  {
    id: "ai-ecommerce",
    title: "Sàn TMĐT Tích Hợp AI",
    desc: "Nền tảng thương mại điện tử thế hệ mới, tích hợp tìm kiếm ngữ nghĩa (Semantic Search) và gợi ý sản phẩm cá nhân hóa.",
    icon: ShoppingCart,
    color: "yellow",
    tech: ["Next.js", "Supabase", "Stripe", "Vector DB"],
    executions: [
      {
        prompt: "/create cửa hàng trực tuyến hiện đại với tính năng tìm kiếm thông minh và thanh toán Stripe",
        explanation: "Dựng khung dự án E-commerce đầy đủ tính năng: giỏ hàng, trang thanh toán, và tích hợp sẵn cổng thanh toán quốc tế an toàn."
      },
      {
        prompt: "/enhance tích hợp Vector Search để tìm kiếm sản phẩm theo mô tả tự nhiên",
        explanation: "Cài đặt và cấu hình cơ sở dữ liệu Vector để AI có thể hiểu ý định tìm kiếm của khách hàng (ví dụ: 'áo khoác ấm cho mùa đông đà lạt') thay vì chỉ khớp từ khóa."
      },
      {
        prompt: "/monitor theo dõi hành vi mua sắm và tỷ lệ chuyển đổi thời gian thực",
        explanation: "Thiết lập các dashboard theo dõi doanh thu, tỷ lệ bỏ giỏ hàng và đề xuất các chiến lược tối ưu hóa trải nghiệm người dùng (UX)."
      }
    ]
  },
  {
    id: "realtime-collab",
    title: "Bảng Trắng Tương Tác Thời Gian Thực",
    desc: "Bảng trắng cộng tác trực tuyến cho phép nhiều người dùng vẽ, ghi chú và làm việc cùng lúc với độ trễ thấp.",
    icon: Users,
    color: "purple",
    tech: ["React Flow", "Liveblocks", "Websocket", "Yjs"],
    executions: [
      {
        prompt: "/create ứng dụng bảng trắng cộng tác thời gian thực hỗ trợ Multiplayer",
        explanation: "Khởi tạo dự án với các thư viện chuyên dụng cho việc đồng bộ trạng thái (State) giữa nhiều người dùng mà không bị xung đột dữ liệu."
      },
      {
        prompt: "/ui-ux-pro-max thiết kế giao diện Dark Mode tối giản tập trung vào không gian làm việc",
        explanation: "Tối ưu hóa không gian hiển thị, thiết kế các thanh công cụ trôi (floating toolbar) và áp dụng bảng màu tương phản cao giúp người dùng tập trung sáng tạo."
      },
      {
        prompt: "/test mô phỏng 100 người dùng truy cập cùng lúc để kiểm tra độ trễ (Latency)",
        explanation: "Agent tạo ra các người dùng ảo (bots) để thực hiện thao tác vẽ và di chuyển liên tục, từ đó đo lường khả năng chịu tải của hệ thống WebSocket."
      }
    ]
  },
  {
    id: "tech-blog",
    title: "Blog Công Nghệ Hiệu Năng Cao",
    desc: "Blog công nghệ tối ưu hóa tối đa cho SEO và tốc độ tải trang, sử dụng kiến trúc Static Site Generation (SSG).",
    icon: BookOpen,
    color: "pink",
    tech: ["Astro", "Sanity CMS", "Tailwind", "Partytown"],
    executions: [
      {
        prompt: "/create blog cá nhân siêu tốc sử dụng Astro và kết nối Sanity CMS",
        explanation: "Xây dựng nền tảng nội dung với kiến trúc Island Architecture, giúp trang web load gần như tức thì bằng cách loại bỏ JavaScript không cần thiết."
      },
      {
        prompt: "/seo tự động tạo Schema JSON-LD và sitemap cho hàng nghìn bài viết",
        explanation: "Agent phân tích cấu trúc nội dung để sinh ra các thẻ dữ liệu có cấu trúc (Structured Data), giúp bài viết dễ dàng đạt Top 0 (Featured Snippet) trên Google."
      },
      {
        prompt: "/deploy thiết lập quy trình CI/CD để tự động build lại trang khi có bài viết mới",
        explanation: "Cấu hình Github Actions để mỗi khi bạn đăng bài trên CMS, hệ thống sẽ tự động kích hoạt quy trình build và deploy phiên bản mới nhất ra CDN."
      }
    ]
  }
];
