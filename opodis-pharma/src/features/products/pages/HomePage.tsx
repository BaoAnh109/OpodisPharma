import { useEffect, useState } from "react";
import { Page, useNavigate } from "zmp-ui";

import duoc1Img from "@/assets/images/herbal/Duoc1.jpg";
import duoc2Img from "@/assets/images/herbal/Duoc2.jpg";
import duoc3Img from "@/assets/images/herbal/Duoc3.jpg";
import banner1Img from "@/assets/images/banners/banner1.jpg";
import banner2Img from "@/assets/images/banners/banner2.jpg";
import banner3Img from "@/assets/images/banners/banner3.jpg";
import banner4Img from "@/assets/images/banners/banner4.jpg";
import oaLogoImg from "@/assets/images/brand/oa-logo.png";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import { BRAND } from "@/shared/constants/brand";
import { ROUTES } from "@/shared/constants/routes";

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

const HomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Exactly 4 featured products for Home page as requested
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <Page className="page-shell" name="home" resetScroll>
      <main>
        {/* --- Top Carousel Banner --- */}
        <section className="home-carousel" aria-label="Banners giới thiệu">
          <div className="home-carousel__slides">
            {BANNER_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className={`home-carousel__slide ${idx === currentSlide ? "is-active" : ""}`}
                aria-hidden={idx !== currentSlide}
              >
                <img
                  className="home-carousel__image"
                  src={slide.src}
                  alt={slide.alt}
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            ))}
          </div>

          {/* Carousel Indicators / Dots */}
          <div className="home-carousel__indicators" role="tablist" aria-label="Chọn banner">
            {BANNER_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                className={`home-carousel__dot ${idx === currentSlide ? "is-active" : ""}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Chuyển tới banner ${idx + 1}`}
                aria-selected={idx === currentSlide}
              />
            ))}
          </div>
        </section>

        {/* --- Featured Products (Tối đa 4 sản phẩm) --- */}
        <section className="content-section" aria-label="Danh mục nổi bật">
          <div className="featured-category-section">
            <div className="featured-header featured-header--center">
              <div>
                <h2 className="featured-header__title">DANH MỤC NỔI BẬT</h2>
              </div>
            </div>

            <nav className="featured-categories" aria-label="Danh mục sản phẩm nổi bật">
              <button
                type="button"
                className="featured-category featured-category--sale"
                onClick={() => navigate(ROUTES.PRODUCTS, { animate: true, direction: "forward" })}
              >
                <span className="featured-category__icon" aria-hidden="true">🏷️</span>
                <span className="featured-category__label">Sale</span>
              </button>

              {PRODUCT_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className="featured-category"
                  onClick={() => navigate(ROUTES.PRODUCTS, { animate: true, direction: "forward" })}
                  aria-label={`Xem danh mục ${category.label}`}
                >
                  <span className="featured-category__icon" aria-hidden="true">{category.icon}</span>
                  <span className="featured-category__label">{category.label}</span>
                </button>
              ))}

              <button
                type="button"
                className="featured-category featured-category--all"
                onClick={() => navigate(ROUTES.PRODUCTS, { animate: true, direction: "forward" })}
              >
                <span className="featured-category__icon" aria-hidden="true">▦</span>
                <span className="featured-category__label">Xem tất cả</span>
              </button>
            </nav>
          </div>

          <a
            className="zalo-follow-card"
            href={BRAND.social.zalo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quan tâm Zalo Opodis Pharma"
          >
            <span className="zalo-follow-card__heading">Quan tâm OA để nhận các đặc quyền ưu đãi</span>
            <span className="zalo-follow-card__profile">
              <img
                className="zalo-follow-card__logo"
                src={oaLogoImg}
                alt="Logo Opodis Pharma"
                loading="lazy"
              />
              <span className="zalo-follow-card__content">
                <strong className="zalo-follow-card__title">Trí Nghĩa Pharma</strong>
                <span className="zalo-follow-card__description">Official Account</span>
              </span>
              <span className="zalo-follow-card__action">Quan tâm</span>
            </span>
          </a>
          
          <div className="featured-header featured-header--center">
            <div>
              <h2 className="featured-header__title">SẢN PHẨM NỔI BẬT</h2>
              <p className="featured-header__subtitle">Lựa chọn được tin dùng nhất</p>
            </div>
          </div>
          <p className="catalog-status catalog-status--center">
            Các sản phẩm tiêu biểu của Opodis Pharma{" "}
          </p>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="view-more-box">
            <button
              type="button"
              className="button button--secondary view-more-btn"
              onClick={() => navigate(ROUTES.PRODUCTS, { animate: true, direction: "forward" })}
            >
              Xem đầy đủ danh mục sản phẩm ({PRODUCTS.length}) →
            </button>
          </div>
        </section>

        {/* --- Câu chuyện thảo dược (Layout 3 hình nhỏ như web) --- */}
        <section className="herbal-story-section" aria-labelledby="herbal-title">
          <div className="herbal-story-section__header">
            <span className="eyebrow">DI SẢN DƯỢC LIỆU</span>
            <h2 id="herbal-title" className="herbal-story-section__title">
              Câu chuyện thảo dược
            </h2>
            <p className="herbal-story-section__intro">
              Khởi nguồn từ Công ty Dược liệu Trung Ương 2, Opodis Pharma bắt đầu hành trình giữa rừng tràm gió miền Trung, nơi chúng tôi nghiên cứu tinh dầu <em>Melaleuca cajuputi</em> – nguồn hoạt chất <strong>α-Terpineol</strong> quý giá, được chứng minh có khả năng kháng khuẩn, kháng nấm và làm dịu viêm tự nhiên.
            </p>
            <p className="herbal-story-section__subintro">
              Từ nền tảng ấy, Opodis kết hợp tri thức Đông y và Tây y, chuẩn hóa các công thức dược thảo kinh điển: <strong>Cao Trầu Không, Cao Hạt Ngò, Kim Ngân Hoa, Cúc La Mã, Lá Olive</strong>.
            </p>
          </div>

          {/* 3 Herbal Cards with Small Pictures */}
          <div className="herbal-cards-grid">
            <div className="herbal-card">
              <div className="herbal-card__media">
                <img
                  src={duoc1Img}
                  alt="Tinh dầu Tràm Gió & α-Terpineol"
                  className="herbal-card__img"
                  loading="lazy"
                />
              </div>
              <div className="herbal-card__body">
                <h3 className="herbal-card__heading">Tinh dầu Tràm Gió</h3>
                <p className="herbal-card__text">
                  Chiết xuất từ loài tràm gió miền Trung, giàu hoạt chất α-Terpineol tự nhiên giúp kháng khuẩn và làm dịu êm.
                </p>
              </div>
            </div>

            <div className="herbal-card">
              <div className="herbal-card__media">
                <img
                  src={duoc2Img}
                  alt="Cao Trầu Không & Dược liệu"
                  className="herbal-card__img"
                  loading="lazy"
                />
              </div>
              <div className="herbal-card__body">
                <h3 className="herbal-card__heading">Cao Trầu Không & Thảo Dược</h3>
                <p className="herbal-card__text">
                  Kế thừa bài thuốc cổ truyền từ Cao Trầu Không, Hạt Ngò, Kim Ngân Hoa và Cúc La Mã bảo vệ làn da nhạy cảm.
                </p>
              </div>
            </div>

            <div className="herbal-card">
              <div className="herbal-card__media">
                <img
                  src={duoc3Img}
                  alt="Chuẩn hóa GMP-WHO"
                  className="herbal-card__img"
                  loading="lazy"
                />
              </div>
              <div className="herbal-card__body">
                <h3 className="herbal-card__heading">Chuẩn hóa GMP-WHO</h3>
                <p className="herbal-card__text">
                  Sản xuất khép kín tại nhà máy Tây Ninh, kiểm nghiệm HPLC, GC, UV-Vis đáp ứng chuẩn mực y tế khắt khe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Lịch sử phát triển --- */}
        <section className="journey-section" aria-labelledby="journey-title">
          <div className="journey-header">
            <h2 id="journey-title" className="journey-title">
              OPODISPHARMA
            </h2>
            <p className="journey-desc">
              Opodis Pharma luôn tâm niệm rằng tất cả mọi người đều có quyền sử dụng và tận hưởng
              những sản phẩm chất lượng tốt. Vì thế, chúng tôi luôn tận tâm và sáng tạo nhằm mang
              đến những sản phẩm chất lượng cao phục vụ nhu cầu phòng ngừa bệnh và chăm sóc sức
              khỏe cộng đồng.
            </p>
          </div>

          <div className="journey-stats" aria-label="Dấu ấn phát triển của Opodis Pharma">
            <div className="journey-stat">
              <strong className="journey-stat__value">20+</strong>
              <span className="journey-stat__label">Năm nghiên cứu &amp; phát triển</span>
            </div>
            <div className="journey-stat">
              <strong className="journey-stat__value">30+</strong>
              <span className="journey-stat__label">Sản phẩm uy tín trên thị trường</span>
            </div>
            <div className="journey-stat">
              <strong className="journey-stat__value">80+</strong>
              <span className="journey-stat__label">Bệnh viện lựa chọn &amp; tin dùng</span>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
};

export default HomePage;
