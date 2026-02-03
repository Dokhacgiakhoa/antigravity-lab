# PLAN: Thiết kế lại Kiến trúc Content & UI (Data-Driven)

Mục tiêu: Chuyển đổi website sang kiến trúc dựa trên dữ liệu (Data-Driven), tách biệt nội dung và giao diện, cập nhật đầy đủ tính năng v4.0.

## 📦 Phase 1: Xây dựng Content Data Layer
Tạo thư mục `src/data` và định nghĩa các file chứa nội dung tĩnh.
1.  `src/data/site-config.ts`: Metadata chung (Title, Description, Social links).
2.  `src/data/navigation.ts`: Cấu trúc Menu (Navbar, Footer, Sidebar).
3.  `src/data/landing-page.ts`:
    *   **Hero**: Title, Subtitle, CTA.
    *   **Features**: Danh sách feature mới (AI Security, Self-Learning).
    *   **Stats**: Số liệu thống kê.
    *   **Architecture**: Scale options, Allocation logic.
4.  `src/data/product-types.ts`: Chi tiết 4 loại sản phẩm (User App, Tool, AI Agent, Asset).

## 🧩 Phase 2: Component Atomic Design
Phá vỡ `page.tsx` khổng lồ hiện tại thành các components nhỏ, tái sử dụng được.
1.  `src/components/sections/HeroSection.tsx`: Nhận data từ `Hero` config.
2.  `src/components/sections/FeatureGrid.tsx`: Render Bento Grid động từ mảng features.
3.  `src/components/sections/ScaleArchitecture.tsx`: Visualize mô hình Scale-Adaptive.
4.  `src/components/sections/SmartAllocation.tsx`: (Mới) Visualize 4 Product Types.
5.  `src/components/ui/SectionHeading.tsx`: Component tiêu đề section chuẩn Google Theme.

## 🗺️ Phase 3: Sitemap & Routing
Mở rộng cấu trúc trang để tránh dồn quá nhiều vào Home.
1.  `/features`: Trang chi tiết về tính năng công nghệ (Technical Deep-dive).
2.  `/architecture`: Trang giải thích triết lý thiết kế (Scale-Adaptive, DNA).
3.  Cập nhật `/guide`: Re-skin theo theme mới.

## 🎨 Phase 4: UI/UX Refinement (Google Gemini Theme)
Đảm bảo mọi component mới tuân thủ Design System đã định nghĩa trong `globals.css`.
- Sử dụng màu Google Blue/Red/Yellow/Green đúng ngữ cảnh.
- Hiệu ứng Space Glow & Glassmorphism.

---

## 🛠️ Danh mục kiểm tra (Checklist)
1. [ ] Đã tách hết text cứng ra file `.ts` chưa?
2. [ ] Nội dung v4.0 (Malware Shield, Auto-Upgrade) đã có chưa?
3. [ ] Mobile Responsive cho các component mới?
4. [ ] Type-safety cho các file data?

## 🤖 Phân công
- **Project Structure**: Tạo file data trước.
- **Frontend Dev**: Build component nhận data.
- **Content Writer**: Populate nội dung tiếng Việt chuẩn chỉnh.
