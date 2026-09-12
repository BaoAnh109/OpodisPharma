import { Page, useNavigate } from "zmp-ui";
import { Icon } from "zmp-ui";

import { BRAND } from "@/shared/constants/brand";
import { ROUTES } from "@/shared/constants/routes";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <Page className="page-shell" name="contact" resetScroll>
      <main>
        <section className="contact-hero" aria-labelledby="contact-main-title">
          <span className="eyebrow">HỖ TRỢ & KẾT NỐI</span>
          <h1 id="contact-main-title">Trung tâm Chăm sóc & Tư vấn Khách hàng</h1>
          <p className="contact-hero__desc">
            Đội ngũ dược sĩ và chuyên viên Opodis Pharma luôn sẵn sàng hỗ trợ giải đáp thông tin về sản phẩm, hướng dẫn sử dụng và mạng lưới phân phối.
          </p>
        </section>


        {/* Direct Call Banner */}
        <div className="contact-quick-call">
          <div className="contact-quick-call__info">
            <span className="contact-quick-call__label">Tổng đài bàn nhà máy</span>
            <strong className="contact-quick-call__number">{BRAND.company.phone}</strong>
            <span className="contact-quick-call__time">Giờ làm việc: 8:00 - 17:00 (Thứ 2 - Thứ 6)</span>
          </div>
          <a
            className="contact-quick-call__btn"
            href={`tel:${BRAND.company.phone.replace(/[^0-9]/g, "")}`}
            aria-label="Gọi ngay hotline"
          >
            <Icon icon="zi-call" size={20} />
            <span>Gọi ngay</span>
          </a>
        </div>

        {/* Facilities & Address Cards */}
        <section className="contact-locations" aria-label="Địa chỉ trụ sở và nhà máy">
          <div className="location-card">
            <div className="location-card__badge">🏭 NHÀ MÁY SẢN XUẤT GMP-WHO</div>
            <h3 className="location-card__name">{BRAND.company.name}</h3>
            <p className="location-card__address">
              📍 {BRAND.company.address}
            </p>
            <p className="location-card__desc">
              Khu phức hợp sản xuất dược phẩm và hóa mỹ phẩm đạt chuẩn GMP-WHO và ISO 13485:2016, đảm bảo kiểm soát chất lượng từ khâu nguyên liệu đến thành phẩm.
            </p>
          </div>

          <div className="location-card">
            <div className="location-card__badge">🏥 MẠNG LƯỚI Y TẾ</div>
            <h3 className="location-card__name">Hệ thống phân phối trên toàn quốc</h3>
            <p className="location-card__desc">
              Các sản phẩm Phytobebe, Phytogyno, Clincare, Opodex hiện được cung ứng tại hơn 80 bệnh viện, trung tâm y tế, chuỗi nhà thuốc uy tín và đại lý trên cả nước.
            </p>
          </div>

          <div className="location-card">
            <div className="location-card__badge">🌐 KÊNH TRỰC TUYẾN</div>
            <h3 className="location-card__name">Website chính thức</h3>
            <p className="location-card__desc">
              Tra cứu thông tin kiểm nghiệm, số công bố mỹ phẩm và các dòng sản phẩm mới nhất tại:
            </p>
            <a
              className="location-card__link"
              href="https://opodispharma.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://opodispharma.com/ <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {/* Return to Products CTA */}
        <div className="contact-cta">
          <p>Tìm hiểu các dòng sản phẩm chăm sóc sức khỏe của Opodis</p>
          <button
            type="button"
            className="button button--secondary"
            onClick={() => navigate(ROUTES.PRODUCTS, { animate: true, direction: "backward" })}
          >
            Xem danh mục sản phẩm →
          </button>
        </div>
      </main>
    </Page>
  );
};

export default ContactPage;
