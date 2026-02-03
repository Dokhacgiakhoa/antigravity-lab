# PLAN: Xây dựng hệ thống Hướng dẫn (Tutorial System)

Hệ thống hướng dẫn chi tiết cho Antigravity Lab v4.0, bao gồm Menu Dropdown và các trang nội dung chuyên sâu cho từng thành phần lõi.

## 🔴 Cấu trúc thư mục mới
- `src/app/guide/page.tsx`: Trang tổng quát (đã có, cần cập nhật link).
- `src/app/guide/rules/page.tsx`: Hướng dẫn về Rules.
- `src/app/guide/agents/page.tsx`: Hướng dẫn về Agents.
- `src/app/guide/skills/page.tsx`: Hướng dẫn về Skills.
- `src/app/guide/workflows/page.tsx`: Hướng dẫn về Workflows.
- `src/app/guide/shared/page.tsx`: Hướng dẫn về .shared (DNA).

---

## 📑 Phân rã nhiệm vụ

### Phase 1: Cập nhật Navigation (Navbar)
1. **Chỉnh sửa `Navbar.tsx`**:
   - Chuyển `navItems` thành cấu trúc hỗ trợ dropdown.
   - Implement `DropdownContent` component sử dụng Framer Motion để tạo hiệu ứng mượt mà.
   - Thêm các mục con: Rules, Agents, Skills, Workflows, Shared.

### Phase 2: Xây dựng các trang nội dung (Pages)
1. **Trang Quy tắc (Rules)**: Giải thích cách AI tuân thủ lệnh, các file `.md` trong thư mục rules.
2. **Trang Tác nhân (Agents)**: Giới thiệu các Persona AI (Orchestrator, Planner, Specialist).
3. **Trang Kỹ năng (Skills)**: Cách AI học các kỹ năng mới và sử dụng các công cụ có sẵn.
4. **Trang Luồng công việc (Workflows)**: Giải thích các Slash Commands và chu trình PDCA.
5. **Trang DNA (.shared)**: Kiến trúc chia sẻ tri thức giữa các dự án.

### Phase 3: Đồng bộ và Tối ưu hóa UI/UX
1. Cập nhật các link trên trang `/guide` tổng quát để dẫn tới các trang chi tiết.
2. Đảm bảo tính responsive trên Mobile (Mobile Menu cần hỗ trợ dropdown/accordion).
3. Thêm các micro-animations khi hover vào các item trong dropdown.

---

## 🛠️ Danh mục kiểm tra (Pre-flight Checklist)
1. [ ] Kiểm tra tính toàn vẹn của Link (không có 404).
2. [ ] Đảm bảo UI khớp với Design System hiện tại (FCD34D yellow, dark mode).
3. [ ] Kiểm tra hiệu năng khi dùng Framer Motion cho Dropdown.
4. [ ] Verify nội dung tiếng Việt chuyên nghiệp, súc tích.

---

## 🤖 Phân công Agent
- **FE Agent**: Thực hiện chỉnh sửa Navbar và tạo các Page UI.
- **DB Agent**: Không cần thiết (Stateless UI).
- **BE Agent**: Không cần thiết.

---

## 🚀 Cách thực hiện
1. Người dùng phê duyệt kế hoạch.
2. AI tiến hành sửa `Navbar.tsx`.
3. AI tạo các file page.tsx mới trong `src/app/guide/[slug]/`.
4. Verification và hoàn tất.
