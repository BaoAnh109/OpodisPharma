import { useEffect, useState } from "react";
import { Page, useNavigate } from "zmp-ui";

import duoc1Img from "@/assets/images/herbal/Duoc1.webp";
import duoc2Img from "@/assets/images/herbal/Duoc2.webp";
import duoc3Img from "@/assets/images/herbal/Duoc3.webp";
import banner1Img from "@/assets/images/banners/banner1.webp";
import banner2Img from "@/assets/images/banners/banner2.webp";
import banner3Img from "@/assets/images/banners/banner3.webp";
import banner4Img from "@/assets/images/banners/banner4.webp";
import oaLogoImg from "@/assets/images/brand/oa-logo.webp";
import { BRAND } from "@/shared/constants/brand";
import { ROUTES } from "@/shared/constants/routes";
import {
  PAGE_CONTENT_CLASS,
  PAGE_SHELL_CLASS,
  SECONDARY_BUTTON_CLASS,
} from "@/shared/constants/tailwind";

import ProductCard from "../components/ProductCard/ProductCard";
import { PRODUCTS } from "../data/products.mock";

const BANNER_SLIDES = [
  {
    id: 1,
    src: banner1Img,
    alt: "Opodis Pharma - Thảo dược dịu lành cho mẹ và bé",
  },
  {
    id: 2,
    src: banner2Img,
    alt: "Opodis Pharma - Dịu êm cho bé, yên tâm cho mẹ",
  },
  {
    id: 3,
    src: banner3Img,
    alt: "Opodis Pharma - Bảo vệ sức khỏe từ đôi tay",
  },
  {
    id: 4,
    src: banner4Img,
    alt: "Opodis Pharma - Chuẩn sạch cho phái mạnh",
  },
];

const PRODUCT_CATEGORIES = [
  { id: "premium", label: "OPODIS FAMILY PREMIUM", icon: "✨" },
  { id: "mom-baby", label: "CHĂM SÓC MẸ VÀ BÉ", icon: "👶" },
  { id: "family", label: "CHĂM SÓC GIA ĐÌNH", icon: "🏡" },
  { id: "antiseptic", label: "KHỬ KHUẨN – SÁT KHUẨN", icon: "🧴" },
  { id: "herbal", label: "CHĂM SÓC THẢO DƯỢC", icon: "🌿" },
  { id: "medical-antiseptic", label: "SÁT KHUẨN Y TẾ", icon: "🏥" },
] as const;

const EYEBROW_CLASS =
  "text-[clamp(16px,4.6vw,19px)] font-black uppercase leading-[1.35] tracking-[0.4px] text-primary-dark";

const FEATURED_HEADER_CLASS =
  "flex items-end justify-center gap-2.5 mb-2 text-center max-[420px]:flex-col max-[420px]:items-start max-[420px]:gap-2";

const HomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = PRODUCTS.slice(0, 4);

  const goToProducts = () =>
    navigate(ROUTES.PRODUCTS, { animate: true, direction: "forward" });

  return (
    <Page className={PAGE_SHELL_CLASS} name="home" resetScroll>
      <main className={PAGE_CONTENT_CLASS}>
        {/* --- Top Carousel Banner --- */}
        <section
          className="relative mt-2 w-full overflow-hidden rounded-xl bg-surface shadow-card"
          aria-label="Banners giới thiệu"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            {BANNER_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
        className={`absolute inset-0 transition-[opacity,visibility] duration-[280ms] ${
          idx === currentSlide
            ? "visible z-[1] opacity-100"
            : "invisible opacity-0"
        }`}
                aria-hidden={idx !== currentSlide}
              >
                <img
                  className="block h-full w-full object-cover object-center"
                  src={slide.src}
                  alt={slide.alt}
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <div
            className="absolute inset-x-0 bottom-3 z-[2] flex items-center justify-center gap-1.5"
            role="tablist"
            aria-label="Chọn banner"
          >
            {BANNER_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                className={`h-2 rounded-full border-0 p-0 transition-[width,background-color] duration-200 ${
                  idx === currentSlide
                    ? "w-[22px] bg-primary-dark"
                    : "w-2 bg-[rgba(0,136,98,0.25)]"
                }`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Chuyển tới banner ${idx + 1}`}
                aria-selected={idx === currentSlide}
              />
            ))}
          </div>
        </section>

        {/* --- Featured Products (Tối đa 4 sản phẩm) --- */}
        <section className="mt-[18px]" aria-label="Danh mục nổi bật">
          <div className="mb-5 rounded-xl border border-[rgba(0,168,120,0.18)] bg-[linear-gradient(180deg,#f3faf6_0%,#ffffff_100%)] px-[14px] pb-4 pt-[18px] shadow-card">
            <div className={FEATURED_HEADER_CLASS}>
              <div className="w-full min-w-0 text-center">
                <h2 className="m-0 text-[clamp(18px,5vw,21px)] font-extrabold leading-[1.2] tracking-[0.03em] text-primary-dark">
                  DANH MỤC NỔI BẬT
                </h2>
              </div>
            </div>

            <nav
              className="mt-3 grid grid-cols-4 gap-x-1 gap-y-2"
              aria-label="Danh mục sản phẩm nổi bật"
            >
              <button
                type="button"
                className="group flex min-w-0 cursor-pointer flex-col items-center gap-1.5 border-0 bg-transparent p-0 text-text-primary outline-none focus-visible:outline-none"
                onClick={goToProducts}
              >
                <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-[15px] border border-[#ffd2d2] bg-[#fff1f1] text-[25px] transition-[transform,box-shadow] duration-150 group-active:scale-[0.94] group-active:shadow-none">
                  🏷️
                </span>
                <span className="line-clamp-2 min-h-7 overflow-hidden text-center text-[10.5px] font-extrabold leading-[1.25] text-[#d93939]">
                  Sale
                </span>
              </button>

              {PRODUCT_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className="group flex min-w-0 cursor-pointer flex-col items-center gap-1.5 border-0 bg-transparent p-0 text-text-primary outline-none focus-visible:outline-none"
                  onClick={goToProducts}
                  aria-label={`Xem danh mục ${category.label}`}
                >
                  <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-[15px] border border-border bg-white text-[25px] shadow-subtle transition-[transform,box-shadow] duration-150 group-active:scale-[0.94] group-active:shadow-none">
                    {category.icon}
                  </span>
                  <span className="line-clamp-2 min-h-7 overflow-hidden text-center text-[10.5px] font-extrabold leading-[1.25] text-text-primary">
                    {category.label}
                  </span>
                </button>
              ))}

              <button
                type="button"
                className="group flex min-w-0 cursor-pointer flex-col items-center gap-1.5 border-0 bg-transparent p-0 text-text-primary outline-none focus-visible:outline-none"
                onClick={goToProducts}
              >
                <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-[15px] border border-[rgba(0,168,120,0.18)] bg-primary-soft text-[32px] text-primary-dark shadow-subtle transition-[transform,box-shadow] duration-150 group-active:scale-[0.94] group-active:shadow-none">
                  ▦
                </span>
                <span className="line-clamp-2 min-h-7 overflow-hidden text-center text-[10.5px] font-extrabold leading-[1.25] text-text-primary">
                  Xem tất cả
                </span>
              </button>
            </nav>
          </div>

          <a
            className="mb-4 flex flex-col gap-2 rounded-lg border border-[rgba(0,104,255,0.18)] bg-white px-[14px] pb-3 pt-[11px] text-text-primary no-underline shadow-card transition-[transform,box-shadow] duration-150 active:translate-y-px active:shadow-subtle"
            href={BRAND.social.zalo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quan tâm Zalo Opodis Pharma"
          >
            <span className="text-[13px] font-bold leading-[1.3] text-[#59636f]">
              Quan tâm OA để nhận các đặc quyền ưu đãi
            </span>
            <span className="flex min-w-0 items-center gap-2.5">
              <img
                className="block h-[46px] w-[46px] shrink-0 overflow-hidden rounded-[9px] border border-[#edf0f4] bg-white object-cover"
                src={oaLogoImg}
                alt="Logo Opodis Pharma"
                loading="lazy"
              />
              <span className="flex min-w-0 flex-1 flex-col">
                <strong className="text-[14px] font-extrabold leading-[1.25] text-text-primary">
                  Trí Nghĩa Pharma
                </strong>
                <span className="mt-0.5 text-[12px] leading-[1.35] text-text-secondary">
                  Official Account
                </span>
              </span>
              <span className="shrink-0 rounded-[9px] bg-primary px-[14px] py-2 text-[13px] font-bold text-white max-[380px]:px-[11px] max-[380px]:py-[7px] max-[380px]:text-[12px]">
                Quan tâm
              </span>
            </span>
          </a>

          <div className={FEATURED_HEADER_CLASS}>
            <div className="w-full min-w-0 text-center">
              <h2 className="m-0 text-[clamp(18px,5vw,21px)] font-extrabold leading-[1.2] tracking-[0.03em] text-primary-dark">
                SẢN PHẨM NỔI BẬT
              </h2>
              <p className="mt-1 text-[14px] font-bold leading-[1.3] text-text-primary">
                Lựa chọn được tin dùng nhất
              </p>
            </div>
          </div>
          <p className="mt-[6px] mb-[14px] text-center text-[12px] text-text-secondary">
            Các sản phẩm tiêu biểu của Opodis Pharma{" "}
          </p>

          <div className="grid grid-cols-2 gap-2">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-[18px] text-center">
            <button
              type="button"
              className={`${SECONDARY_BUTTON_CLASS} w-full text-[13px] font-extrabold`}
              onClick={goToProducts}
            >
              Xem đầy đủ danh mục sản phẩm ({PRODUCTS.length}) →
            </button>
          </div>
        </section>

        {/* --- Câu chuyện thảo dược (Layout 3 hình nhỏ như web) --- */}
        <section
          className="mt-9 rounded-xl border border-[rgba(0,168,120,0.18)] bg-[linear-gradient(180deg,#f3faf6_0%,#ffffff_100%)] px-[18px] py-6 shadow-card"
          aria-labelledby="herbal-title"
        >
          <div className="mb-5">
            <span className={EYEBROW_CLASS}>DI SẢN DƯỢC LIỆU</span>
            <h2 className="mt-1.5 text-[26px] font-black text-primary-deep" id="herbal-title">
              Câu chuyện thảo dược
            </h2>
            <p className="mt-2.5 text-[13px] leading-[1.65] text-text-primary">
              Khởi nguồn từ Công ty Dược liệu Trung Ương 2, Opodis Pharma bắt đầu hành trình giữa rừng tràm gió miền Trung, nơi chúng tôi nghiên cứu tinh dầu <em>Melaleuca cajuputi</em> – nguồn hoạt chất <strong>α-Terpineol</strong> quý giá, được chứng minh có khả năng kháng khuẩn, kháng nấm và làm dịu viêm tự nhiên.
            </p>
            <p className="mt-2 text-[12.5px] leading-[1.6] text-text-secondary">
              Từ nền tảng ấy, Opodis kết hợp tri thức Đông y và Tây y, chuẩn hóa các công thức dược thảo kinh điển: <strong>Cao Trầu Không, Cao Hạt Ngò, Kim Ngân Hoa, Cúc La Mã, Lá Olive</strong>.
            </p>
          </div>

          <div className="grid gap-2">
            <div className="flex items-center gap-[14px] rounded-lg border border-border bg-white px-[14px] py-3 shadow-[0_2px_8px_rgba(22,46,38,0.04)] transition-[transform,box-shadow] duration-150 active:scale-[0.985]">
              <div className="grid h-[58px] w-[58px] shrink-0 place-items-center overflow-hidden rounded-md bg-surface">
                <img className="h-full w-full object-cover" src={duoc1Img} alt="Tinh dầu Tràm Gió & α-Terpineol" loading="lazy" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="m-0 text-[15.5px] font-black leading-[1.3] text-primary-deep">Tinh dầu Tràm Gió</h3>
                <p className="mt-[3px] text-[11.5px] leading-[1.45] text-text-secondary">
                  Chiết xuất từ loài tràm gió miền Trung, giàu hoạt chất α-Terpineol tự nhiên giúp kháng khuẩn và làm dịu êm.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[14px] rounded-lg border border-border bg-white px-[14px] py-3 shadow-[0_2px_8px_rgba(22,46,38,0.04)] transition-[transform,box-shadow] duration-150 active:scale-[0.985]">
              <div className="grid h-[58px] w-[58px] shrink-0 place-items-center overflow-hidden rounded-md bg-surface">
                <img className="h-full w-full object-cover" src={duoc2Img} alt="Cao Trầu Không & Dược liệu" loading="lazy" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="m-0 text-[15.5px] font-black leading-[1.3] text-primary-deep">Cao Trầu Không & Thảo Dược</h3>
                <p className="mt-[3px] text-[11.5px] leading-[1.45] text-text-secondary">
                  Kế thừa bài thuốc cổ truyền từ Cao Trầu Không, Hạt Ngò, Kim Ngân Hoa và Cúc La Mã bảo vệ làn da nhạy cảm.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[14px] rounded-lg border border-border bg-white px-[14px] py-3 shadow-[0_2px_8px_rgba(22,46,38,0.04)] transition-[transform,box-shadow] duration-150 active:scale-[0.985]">
              <div className="grid h-[58px] w-[58px] shrink-0 place-items-center overflow-hidden rounded-md bg-surface">
                <img className="h-full w-full object-cover" src={duoc3Img} alt="Chuẩn hóa GMP-WHO" loading="lazy" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="m-0 text-[15.5px] font-black leading-[1.3] text-primary-deep">Chuẩn hóa GMP-WHO</h3>
                <p className="mt-[3px] text-[11.5px] leading-[1.45] text-text-secondary">
                  Sản xuất khép kín tại nhà máy Tây Ninh, kiểm nghiệm HPLC, GC, UV-Vis đáp ứng chuẩn mực y tế khắt khe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Lịch sử phát triển --- */}
        <section className="mt-9 rounded-xl bg-[#f8fbed] px-[18px] pb-8 pt-[30px] max-[370px]:px-3" aria-labelledby="journey-title">
          <div className="text-center">
            <h2
              id="journey-title"
              className="m-0 text-[clamp(28px,9vw,42px)] font-black leading-none tracking-[0.02em] text-[#08753d]"
            >
              OPODISPHARMA
            </h2>
            <p className="mx-auto mt-[18px] max-w-[460px] text-[12.5px] font-semibold leading-[1.55] text-[#006936]">
              Opodis Pharma luôn tâm niệm rằng tất cả mọi người đều có quyền sử dụng và tận hưởng những sản phẩm chất lượng tốt. Vì thế, chúng tôi luôn tận tâm và sáng tạo nhằm mang đến những sản phẩm chất lượng cao phục vụ nhu cầu phòng ngừa bệnh và chăm sóc sức khỏe cộng đồng.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 max-[370px]:gap-1.5" aria-label="Dấu ấn phát triển của Opodis Pharma">
            <div className="flex min-w-0 flex-col items-center text-center">
              <strong className="text-[clamp(36px,12vw,58px)] font-black leading-none tracking-[-0.04em] text-[#08753d]">20+</strong>
              <span className="mt-4 text-[12px] font-semibold leading-[1.45] text-[#006936] max-[370px]:text-[10.5px]">Năm nghiên cứu &amp; phát triển</span>
            </div>
            <div className="flex min-w-0 flex-col items-center text-center">
              <strong className="text-[clamp(36px,12vw,58px)] font-black leading-none tracking-[-0.04em] text-[#08753d]">30+</strong>
              <span className="mt-4 text-[12px] font-semibold leading-[1.45] text-[#006936] max-[370px]:text-[10.5px]">Sản phẩm uy tín trên thị trường</span>
            </div>
            <div className="flex min-w-0 flex-col items-center text-center">
              <strong className="text-[clamp(36px,12vw,58px)] font-black leading-none tracking-[-0.04em] text-[#08753d]">80+</strong>
              <span className="mt-4 text-[12px] font-semibold leading-[1.45] text-[#006936] max-[370px]:text-[10.5px]">Bệnh viện lựa chọn &amp; tin dùng</span>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
};

export default HomePage;
