# Opodis Pharma - Zalo Mini App Demo

Opodis Pharma là một **Zalo Mini App dạng demo** dùng để giới thiệu thương hiệu, danh mục sản phẩm và các kênh liên hệ của Opodis Pharma. Ứng dụng được xây dựng theo hướng mobile-first bằng React, TypeScript và bộ công cụ Zalo Mini App (ZMP).

> **Lưu ý quan trọng:** Đây là project minh họa phục vụ học tập, bài test và trình diễn giao diện. Toàn bộ dữ liệu đang được khai báo tĩnh trong source code; ứng dụng **không sử dụng database, backend hoặc API nghiệp vụ**. Giá bán, giá khuyến mãi, đánh giá, lượt bán, hồ sơ người dùng và nội dung quảng bá chỉ là dữ liệu demo, không được dùng làm thông tin thương mại hoặc y khoa chính thức.

## Chức năng chính

- Trang chủ với slider banner tự động, danh mục nổi bật, sản phẩm nổi bật, câu chuyện dược liệu và số liệu giới thiệu doanh nghiệp.
- Danh mục gồm 23 sản phẩm demo.
- Tìm kiếm sản phẩm theo tên và mô tả.
- Lọc theo nhóm sản phẩm hoặc các sản phẩm đang có giá khuyến mãi.
- Phân trang danh sách, hiện hiển thị 4 sản phẩm mỗi trang.
- Trang chi tiết sản phẩm gồm hình ảnh, giá minh họa, thành phần, công dụng, cách dùng, cảnh báo và đường dẫn tham khảo.
- Trang giới thiệu doanh nghiệp và trang thông tin liên hệ.
- Thanh điều hướng dưới cùng dành cho thiết bị di động.
- Thao tác vuốt từ cạnh trái để quay lại trang trước.
- Popup banner khi mở ứng dụng.
- Menu liên hệ nhanh qua Messenger, Zalo và số điện thoại.
- Giao diện responsive, tối ưu cho khung hiển thị của Zalo Mini App.

## Công nghệ sử dụng

| Nhóm | Công nghệ | Vai trò |
| --- | --- | --- |
| Nền tảng | Zalo Mini App, ZMP CLI | Chạy và đóng gói ứng dụng trong hệ sinh thái Zalo Mini App |
| Giao diện | React 18, TypeScript | Xây dựng component và kiểm tra kiểu dữ liệu |
| Zalo SDK/UI | `zmp-sdk`, `zmp-ui` | Cấu hình app view, router, page, modal, icon và các thành phần giao diện Zalo |
| Build tool | Vite 5, `zmp-vite-plugin` | Development server và production build |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer | Xây dựng giao diện responsive và design token |
| Font | Nunito qua `@fontsource/nunito` | Font chữ được đóng gói cùng ứng dụng |
| State | React Hooks, `useSyncExternalStore` | Quản lý state cục bộ và trạng thái menu liên hệ dùng chung |
| Tài nguyên | WebP lưu cục bộ | Banner, logo, avatar và hình ảnh sản phẩm |

`jotai` và `sass` vẫn có trong dependencies của template ban đầu, nhưng source hiện tại chưa sử dụng Jotai atom và cũng chưa có file SCSS. Trạng thái đang được quản lý bằng React Hooks; style chính nằm trong Tailwind CSS và `src/styles/globals.css`.

## Kiến trúc dự án

Source code được tổ chức theo **Feature-first Architecture**: code theo nghiệp vụ nằm trong `features`, còn thành phần có thể dùng lại nằm trong `shared`.

```text
opodis-pharma/
├── app-config.json                 # Cấu hình hiển thị của Zalo Mini App
├── index.html                      # HTML entry point
├── package.json                    # Dependencies và npm scripts
├── package-lock.json               # Khóa phiên bản dependencies
├── postcss.config.js               # Cấu hình PostCSS
├── tailwind.config.js              # Theme, màu sắc và animation Tailwind
├── tsconfig.json                   # Cấu hình TypeScript và alias @/*
├── vite.config.mts                 # Cấu hình Vite và ZMP plugin
├── zmp-cli.json                    # Cấu hình project cho ZMP CLI
└── src/
    ├── app.ts                      # Entry tương thích với ZMP
    ├── main.tsx                    # Khởi tạo React root và global styles
    ├── app/
    │   ├── App.tsx                 # App shell, theme và cấu hình app view
    │   └── router.tsx              # Khai báo toàn bộ route
    ├── features/
    │   ├── products/
    │   │   ├── components/         # ProductCard, ProductGrid
    │   │   ├── data/               # products.mock.ts - dữ liệu sản phẩm demo
    │   │   ├── pages/              # Trang chủ, danh sách và chi tiết sản phẩm
    │   │   └── types/              # Kiểu dữ liệu Product
    │   └── company/
    │       ├── components/         # Thành phần thống kê doanh nghiệp
    │       └── pages/              # Trang giới thiệu và liên hệ
    ├── shared/
    │   ├── components/             # Header, bottom nav, popup, empty state,...
    │   ├── constants/              # Route, thông tin thương hiệu, mock user
    │   ├── state/                  # State dùng chung cho menu liên hệ
    │   └── utils/                  # Hàm định dạng tiền tệ
    ├── assets/
    │   ├── avatar/                 # Avatar người dùng demo
    │   └── images/                 # Banner, logo, ảnh dược liệu và sản phẩm
    └── styles/
        └── globals.css             # Tailwind directives và global styles
```

### Luồng khởi tạo

```text
index.html
    └── src/app.ts
        └── src/main.tsx
            └── src/app/App.tsx
                └── src/app/router.tsx
                    ├── feature pages
                    └── shared components
```

Alias `@/*` trỏ tới `src/*`, vì vậy import nội bộ có thể viết dưới dạng `@/features/...` hoặc `@/shared/...`.

## Các route

| Đường dẫn | Màn hình |
| --- | --- |
| `/` | Trang chủ |
| `/products` | Danh sách, tìm kiếm, lọc và phân trang sản phẩm |
| `/products/:id` | Chi tiết một sản phẩm theo `id` |
| `/about` | Giới thiệu Opodis Pharma |
| `/contact` | Thông tin và kênh liên hệ |

Các route được khai báo tập trung tại `src/shared/constants/routes.ts` và được ánh xạ tới page trong `src/app/router.tsx`.

## Dữ liệu demo và giới hạn hiện tại

Project hiện hoạt động hoàn toàn ở phía client:

- `src/features/products/data/products.mock.ts` chứa 23 sản phẩm demo dưới dạng mảng TypeScript.
- `src/shared/constants/user.mock.ts` chứa hồ sơ người dùng giả lập hiển thị trên header.
- `src/shared/constants/brand.ts` chứa nội dung thương hiệu, địa chỉ và các đường dẫn liên hệ.
- Hình ảnh được import từ `src/assets` và đóng gói trực tiếp vào production build.
- Trạng thái giao diện chỉ tồn tại trong bộ nhớ và sẽ được khởi tạo lại khi reload ứng dụng.
- Các `sourceUrl`, link Zalo, Messenger, website và `tel:` chỉ mở dịch vụ bên ngoài; chúng không phải API dữ liệu của ứng dụng.

Ứng dụng hiện **không có**:

- Database hoặc cơ chế lưu dữ liệu lâu dài.
- Backend/server API.
- Đồng bộ dữ liệu sản phẩm theo thời gian thực.
- Đăng nhập hoặc lấy hồ sơ Zalo thật.
- Trang quản trị nội dung.
- Giỏ hàng, đặt hàng, thanh toán hoặc quản lý đơn hàng.
- Hệ thống đánh giá và thống kê lượt bán thật.

Khi phát triển thành sản phẩm thực tế, cần thay các file mock bằng API/backend phù hợp, bổ sung xác thực, phân quyền, kiểm tra dữ liệu đầu vào, xử lý lỗi mạng và cơ chế bảo vệ dữ liệu người dùng.

## Cài đặt và chạy local

### Yêu cầu

- Node.js và npm. Project chưa khóa phiên bản Node cụ thể trong `package.json`.
- Zalo Mini App ID và tài khoản có quyền truy cập nếu cần chạy/deploy trên nền tảng Zalo.

### Cài dependencies

Từ thư mục chứa file `package.json`:

```bash
npm ci
```

Có thể dùng `npm install` khi cần cập nhật dependencies hoặc không dùng lockfile hiện có.

### Chạy development

```bash
npm run start
```

Sau khi ZMP CLI khởi động, mở địa chỉ hoặc quét mã được hiển thị trong terminal để xem ứng dụng.

### Kiểm tra production build

```bash
npm run build
```

### Xem thử bản build

```bash
npm run preview
```

## NPM scripts

| Lệnh | Mô tả |
| --- | --- |
| `npm run login` | Đăng nhập ZMP CLI |
| `npm run start` | Chạy development server bằng ZMP CLI |
| `npm run build` | Tạo production build bằng Vite |
| `npm run preview` | Chạy server xem thử production build |
| `npm run deploy` | Deploy Mini App qua ZMP CLI |

Project hiện chưa cấu hình script riêng cho automated test, lint hoặc type-check. Lệnh kiểm tra tối thiểu trước khi bàn giao là `npm run build`.

## Cấu hình quan trọng

- `app-config.json`: tiêu đề, màu header, status bar và cách hiển thị action bar của Mini App.
- `zmp-cli.json`: metadata và cấu hình project dùng bởi ZMP CLI.
- `vite.config.mts`: tích hợp ZMP với Vite, cấu hình build và alias `@`.
- `tailwind.config.js`: font, màu thương hiệu, border radius, shadow và animation.
- `src/shared/constants/brand.ts`: thông tin doanh nghiệp và các kênh liên hệ đang hiển thị trong app.

Trước khi deploy cho một Mini App khác, cần kiểm tra lại toàn bộ metadata, App ID/quyền truy cập và các thông tin liên hệ để tránh dùng nhầm cấu hình demo.

## Cập nhật dữ liệu sản phẩm demo

1. Thêm ảnh WebP vào `src/assets/images/products` hoặc thư mục `catalog`.
2. Import ảnh và thêm bản ghi mới vào `src/features/products/data/products.mock.ts`.
3. Bảo đảm bản ghi đúng với interface `Product` trong `src/features/products/types/product.types.ts`.
4. Dùng một `id` duy nhất vì route chi tiết tìm sản phẩm theo trường này.
5. Chạy `npm run build` để phát hiện lỗi import và lỗi TypeScript trước khi bàn giao.

## Deploy

```bash
npm run login
npm run build
npm run deploy
```

Chỉ deploy sau khi đã thay thông tin demo cần thiết, kiểm tra ứng dụng trên thiết bị thật và được người phụ trách Mini App phê duyệt.

## Phạm vi sử dụng

Project có trường `private: true` và giấy phép `UNLICENSED` trong `package.json`. Không mặc định sao chép, phân phối hoặc sử dụng thương mại source code và tài nguyên hình ảnh nếu chưa có sự cho phép của chủ sở hữu.

## Tài liệu tham khảo

- [Zalo Mini App](https://mini.zalo.me/)
- [ZaUI Documentation](https://mini.zalo.me/documents/zaui/)
- [Opodis Pharma](https://opodispharma.com/)
