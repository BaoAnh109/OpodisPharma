# Opodis Pharma Zalo Mini App

Mini App demo được xây dựng bằng ZMP Framework, React và TypeScript. Ứng dụng
giới thiệu sáu sản phẩm chăm sóc sức khỏe, màn hình chi tiết sản phẩm và thông
tin doanh nghiệp Opodis Pharma.

## Kiến trúc

Source sử dụng Feature First Architecture:

```text
src/
├── app/                 # Khởi tạo ứng dụng và router
├── features/
│   ├── products/        # Danh sách, chi tiết và dữ liệu sản phẩm
│   └── company/         # Trang giới thiệu doanh nghiệp
├── shared/              # Component, constant và utility dùng chung
├── assets/              # Logo và ảnh sản phẩm lấy từ website chính thức
└── styles/              # Design token, global style và utility CSS
```

## Tính năng

- Hiển thị sáu sản phẩm; thông tin thành phần, công dụng, quy cách và hướng dẫn
  được đối chiếu từ các trang sản phẩm chính thức.
- Điều hướng từ danh sách đến `/products/:id`.
- Trang giới thiệu Opodis tại `/about`.
- Nút quay lại và trạng thái không tìm thấy sản phẩm.
- Giao diện mobile responsive, hai sản phẩm mỗi hàng.
- Không có backend, database, đăng nhập, giỏ hàng hoặc thanh toán.

> Giá trong ứng dụng chỉ là mock data phục vụ bài test, không phải giá bán
> chính thức của Opodis Pharma.

Ảnh sản phẩm và logo được lưu cục bộ trong `src/assets/images` để Mini App không
phụ thuộc vào URL media bên ngoài khi chạy. Trang Xịt Xua Muỗi Baby hiện chưa
gắn ảnh sản phẩm trong thư viện media của website nên app giữ ảnh minh họa SVG
đã có cho mục này.

## Chạy local

```bash
npm install
npm run start
```

Mở địa chỉ local mà ZMP CLI hiển thị. Có thể kiểm tra production build bằng:

```bash
npm run build
```

## Deploy

```bash
npm run login
npm run deploy
```

Chỉ deploy sau khi đã kiểm tra local và được người phụ trách duyệt.

## Tài liệu tham khảo

- [Zalo Mini App](https://mini.zalo.me/)
- [ZaUI Documentation](https://mini.zalo.me/documents/zaui/)
- [Opodis Pharma](https://opodispharma.com/)
