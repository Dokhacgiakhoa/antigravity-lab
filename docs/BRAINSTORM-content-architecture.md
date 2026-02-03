## 🧠 Brainstorm: Kiến trúc Nội dung & Giao diện Scalable

### Context
Website `antigravity-lab` đang ở giai đoạn sơ khai. Cần chuyển đổi từ tư duy "Hardcoded Text" sang "Data-Driven" để dễ dàng cập nhật nội dung v4.0 khổng lồ. Đồng thời cần quy hoạch lại Sitemap và Component để tái sử dụng hiệu quả.

---

### Option A: TypeScript Data Config (Static Type-Safe)
Toàn bộ nội dung website (Text, Links, Image Paths, Feature Lists) được tách ra thành các file constant `.ts` trong thư mục `src/data/`.

- **Cấu trúc**:
  - `src/data/hero.ts`: Banner, Title, CTA.
  - `src/data/features.ts`: Danh sách tính năng (Bento Grid).
  - `src/data/navigation.ts`: Menu, Footer links.
  - `src/data/routes.ts`: Định nghĩa Sitemap.

✅ **Pros:**
- **Type Safety**: Dễ dàng bắt lỗi thiếu nội dung, sai kiểu dữ liệu.
- **Developer Experience**: Autocomplete khi code UI rất sướng.
- **Maintainability**: Sửa text không cần đụng vào code JSX/TSX.
- **Performance**: Zero-runtime overhead (bundle cứng vào JS).

❌ **Cons:**
- Không hỗ trợ format text phức tạp (như Bold, Italic) trong chuỗi string đơn giản (phải dùng `dangerouslySetInnerHTML` hoặc parse riêng).

📊 **Effort:** Medium

---

### Option B: Local MDX/Markdown Content
Sử dụng Markdown cho các phần nội dung dài, và Frontmatter cho metadata.

✅ **Pros:**
- Viết content sướng tay, hỗ trợ format rich text.
- Tốt cho blog/docs.

❌ **Cons:**
- Cần setup thêm thư viện parse MDX.
- Hơi "cồng kềnh" nếu chỉ dùng cho Landing Page section ngắn gọn.

📊 **Effort:** High

---

### Option C: Hybrid Architecture (Recommended)
Kết hợp **Option A** cho Landing Page (Cấu trúc chặt chẽ) và **Option B** cho trang Hướng dẫn/Docs (Nội dung tự do).

- **Landing Page**: Dùng `src/data/*.ts`.
- **Docs/Guide**: Dùng cấu trúc file system routing của Next.js (như hiện tại).
- **Phân trang**: Nếu Landing Page quá dài -> Tách thành các trang con `/features`, `/technology`, `/roadmap`.

✅ **Pros:**
- Tận dụng điểm mạnh nhất của cả 2 thế giới.
- Linh hoạt tối đa.

❌ **Cons:**
- Cần quản lý 2 luồng dữ liệu khác nhau.

📊 **Effort:** Medium-High

---

## 💡 Recommendation

Chọn **Option C (Hybrid)**, nhưng giai đoạn này tập trung triển khai **Option A** trước để build xong `Landing Page` và các trang giới thiệu chính.

### Định hướng Sitemap mới:
1.  **Home** (`/`): Tổng quan, Hero, Key Highlights (Bento).
2.  **Features** (`/features`): Chi tiết 4 Product Types, Security System, Auto-Learning.
3.  **Architecture** (`/architecture`): Giải thích Scale-Adaptive, Scientific Linkage.
4.  **Docs** (`/docs`): (Giữ nguyên phần Guide hiện tại nhưng re-skin).

**Hướng đi:**
1. Tạo `src/data` chứa toàn bộ text v4.0.
2. Refactor `page.tsx` thành các components nhỏ nhận data làm props.
3. Apply Google Gemini Theme cho toàn bộ components.
