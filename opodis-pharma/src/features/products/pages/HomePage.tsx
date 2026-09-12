import { useEffect, useState } from "react";
import { Page, useNavigate } from "zmp-ui";

import betelImg from "@/assets/images/herbal/betel.svg";
import cajuputImg from "@/assets/images/herbal/cajuput.svg";
import labGmpImg from "@/assets/images/herbal/lab-gmp.svg";
import banner1Img from "@/assets/images/banners/banner1.jpg";
import banner2Img from "@/assets/images/banners/banner2.jpg";
import banner3Img from "@/assets/images/banners/banner3.jpg";
import banner4Img from "@/assets/images/banners/banner4.jpg";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
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
        <section className="content-section" aria-label="Sản phẩm nổi bật">
          <div className="featured-header">
            <div>
              <span className="eyebrow">SẢN PHẨM NỔI BẬT</span>
              <h2 className="featured-header__title">Lựa chọn được tin dùng nhất</h2>
            </div>
            <button
              type="button"
              className="featured-header__all-btn"
              onClick={() => navigate(ROUTES.PRODUCTS, { animate: true, direction: "forward" })}
            >
              Xem tất cả ({PRODUCTS.length}) <span aria-hidden="true">→</span>
            </button>
          </div>

          <p className="catalog-status">
            4 sản phẩm tiêu biểu của Opodis Pharma{" "}
            <span className="catalog-status__note">(*Giá minh họa bài test)</span>
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
                  src={cajuputImg}
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
                  src={betelImg}
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
                  src={labGmpImg}
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

        {/* --- Hành trình 20 năm --- */}
        <section className="journey-section" aria-labelledby="journey-title">
          <div className="journey-header">
            <span className="eyebrow">LỊCH SỬ PHÁT TRIỂN</span>
            <h2 id="journey-title" className="journey-title">
              Hành trình hơn 20 năm đồng hành cùng sức khỏe
            </h2>
            <p className="journey-desc">
              Khi khoa học gặp gỡ thiên nhiên Việt – từng bước khẳng định uy tín với hệ thống bệnh viện và người tiêu dùng.
            </p>
          </div>

          <div className="journey-timeline">
            <div className="journey-item">
              <div className="journey-item__marker">
                <span className="journey-item__icon">🏛️</span>
              </div>
              <div className="journey-item__content">
                <span className="journey-item__year">Tiền thân</span>
                <h4 className="journey-item__title">Công ty Dược liệu Trung Ương 2</h4>
                <p className="journey-item__desc">
                  Đặt nền móng nghiên cứu dược liệu bản địa Việt Nam, kế thừa tinh hoa khoa học từ các dược sĩ đầu ngành.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-item__marker">
                <span className="journey-item__icon">🌿</span>
              </div>
              <div className="journey-item__content">
                <span className="journey-item__year">Nghiên cứu đột phá</span>
                <h4 className="journey-item__title">Chiết xuất hoạt chất α-Terpineol</h4>
                <p className="journey-item__desc">
                  Thương mại hóa thành công sản phẩm tắm gội trẻ em Phytobebe và dung dịch vệ sinh Phytogyno tin cậy cho phụ nữ.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-item__marker">
                <span className="journey-item__icon">🏭</span>
              </div>
              <div className="journey-item__content">
                <span className="journey-item__year">Chuẩn hóa</span>
                <h4 className="journey-item__title">Nhà máy GMP-WHO & ISO 13485</h4>
                <p className="journey-item__desc">
                  Xây dựng cụm nhà máy hiện đại tại KCN Linh Trung III (Tây Ninh), khép kín quy trình từ chiết xuất đến đóng gói.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-item__marker">
                <span className="journey-item__icon">🏥</span>
              </div>
              <div className="journey-item__content">
                <span className="journey-item__year">Hiện tại</span>
                <h4 className="journey-item__title">80+ Bệnh viện và Cơ sở Y tế</h4>
                <p className="journey-item__desc">
                  Hơn 30 sản phẩm uy tín, phục vụ sát khuẩn y tế chuyên sâu và chăm sóc sức khỏe gia đình khắp cả nước.
                </p>
              </div>
            </div>
          </div>

          <div className="journey-cta">
            <button
              type="button"
              className="button button--secondary"
              onClick={() => navigate(ROUTES.ABOUT, { animate: true, direction: "forward" })}
            >
              Tìm hiểu thêm về Opodis Pharma <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      </main>
    </Page>
  );
};

export default HomePage;
