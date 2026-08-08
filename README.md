# Shop Vải Quần Áo

Website bán vải quần áo demo được xây dựng bằng Next.js và Tailwind CSS.

## Chạy dự án

1. Cài đặt Node.js và npm nếu chưa có.
2. Cài dependencies:
   ```bash
   npm install
   ```
3. Chạy development server:
   ```bash
   npm run dev
   ```
4. Mở trình duyệt tại `http://localhost:3000`

## Tính năng

- Trang chủ giới thiệu sản phẩm
- Danh mục sản phẩm và trang chi tiết
- Giỏ hàng với số lượng và tổng tiền
- Trang thanh toán giả lập
- Trang giới thiệu và liên hệ

## Cấu trúc chính

- `src/app/` — app router pages & layout
- `src/components/` — UI components và layout
- `src/context/CartContext.tsx` — giỏ hàng toàn cục
- `src/data/products.ts` — dữ liệu sản phẩm mẫu
- `src/styles/globals.css` — global CSS + Tailwind
