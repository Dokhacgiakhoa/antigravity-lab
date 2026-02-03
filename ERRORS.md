# NHẬT KÝ LỖI (ERROR LOG)

File này ghi lại các lỗi kỹ thuật và quy trình mà Agent (Em yêu) đã mắc phải trong quá trình phát triển dự án Antigravity Lab. Mục tiêu là để minh bạch hóa, rút kinh nghiệm và ngăn chặn tái diễn.

| ID | Thời gian | Mô tả lỗi | Nguyên nhân | Khắc phục & Phòng ngừa |
| :--- | :--- | :--- | :--- | :--- |
| **001** | 2026-01-31 | Thiếu import icon `Monitor` trong `src/app/concepts/page.tsx`. | **Sơ suất kiểm tra**: Không verify danh sách import đầy đủ so với icon được sử dụng trong JSX. | Thêm import thiếu. **Bài học**: Luôn so sánh danh sách import với danh sách sử dụng trong code (`grep` hoặc search string). |
| **002** | 2026-01-31 | `ReferenceError: Search is not defined` trong `src/data/glossary.tsx`. | **Copy-Paste ẩu**: Khi tách dữ liệu sang file mới, copy thiếu import icon `Search` từ file gốc. | Thêm import `Search`. **Bài học**: Khi refactor/tách file, phải đảm bảo *tất cả* dependencies của code block đều được di chuyển theo. |
| **003** | 2026-01-31 | Server chạy sai port (3001) thay vì 3000. | **Quy trình vận hành**: Chạy lệnh `npm run dev` mới mà không kiểm tra/tắt process cũ đang chạy ngầm. | Kill process cũ và restart lại đúng port. **Bài học**: Luôn dùng `Get-NetTCPConnection` hoặc check terminal active trước khi start server mới. |
| **004** | 2026-01-31 | Lỗi cú pháp `Expected ',', got 'className'` (Thừa thẻ `</section>`). | **Code Patching lỗi**: Khi dùng tool `replace_file_content` để sửa giao diện, đã vô tình để lại thẻ đóng cũ không xóa hết. | Xóa thẻ thừa. **Bài học**: Review kỹ diff (sự thay đổi) của code *trước và sau* khi apply. Đặc biệt cẩn thận khi thay đổi cấu trúc lồng nhau (nesting). |

---

## Cam kết chất lượng

1.  **Chế độ "Pre-flight Check"**: Trước khi confirm code chạy được, phải tự review lại cú pháp và import.
2.  **Minh bạch**: Không giấu lỗi. Nếu sai, ghi log và sửa ngay lập tức.
