import { Page, useNavigate } from "zmp-ui";

import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import { BRAND } from "@/shared/constants/brand";
import { ROUTES } from "@/shared/constants/routes";

import CompanyStats from "../components/CompanyStats";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <Page className="page-shell" name="about" resetScroll>
      <main>
        <section className="about-hero" aria-labelledby="about-title">
          <span className="eyebrow">HÀNH TRÌNH PHÁT TRIỂN</span>
          <h1 id="about-title">{BRAND.name}</h1>
          <p className="about-hero__tagline">{BRAND.tagline}</p>
          <p className="about-hero__desc">
            Opodis Pharma luôn tâm niệm rằng tất cả mọi người đều có quyền sử dụng và tận hưởng những sản phẩm chất lượng tốt. Chúng tôi sáng tạo nhằm mang đến những giải pháp chất lượng cao phục vụ nhu cầu phòng bệnh và chăm sóc sức khỏe cộng đồng.
          </p>
        </section>

        {/* Company Stats Grid */}
        <section className="content-section" aria-label="Dấu ấn Opodis">
          <SectionTitle
            eyebrow="DẤU ẤN"
            title="Nền tảng xây dựng từ niềm tin"
            description="Những con số khẳng định hành trình nghiên cứu chuyên sâu và đồng hành cùng hệ thống y tế."
          />
          <CompanyStats stats={BRAND.stats} />
        </section>

        {/* Heritage & Technology Story */}
        <section className="about-card" aria-labelledby="heritage-title">
          <h2 id="heritage-title" className="about-card__title">🌿 Di sản nghiên cứu từ Tràm Gió</h2>
          <p className="about-card__text">
            Khởi nguồn từ Công ty Dược liệu Trung Ương 2, Opodis Pharma bắt đầu hành trình giữa những cánh rừng tràm gió miền Trung. Tại đây, chúng tôi đi sâu nghiên cứu loài <em>Melaleuca cajuputi</em> – nguồn hoạt chất <strong>α-Terpineol</strong> tự nhiên có đặc tính kháng khuẩn, kháng nấm và làm dịu vượt trội.
          </p>
          <p className="about-card__text">
            Từ nền tảng ấy, Opodis kết hợp tri thức Đông y và công nghệ bào chế hiện đại Tây y, chuẩn hóa các công thức dược thảo kinh điển: <strong>Cao Trầu Không, Cao Hạt Ngò, Kim Ngân Hoa, Cúc La Mã, Lá Olive</strong>.
          </p>
        </section>

        {/* Standards & Certifications */}
        <section className="about-section" aria-labelledby="standards-title">
          <h2 id="standards-title">Tiêu chuẩn chất lượng quốc tế</h2>
          <p>
            Mọi quy trình từ tuyển chọn nguyên liệu đến dây chuyền đóng gói đều tuân thủ các chuẩn mực nghiêm ngặt nhất của ngành dược và thiết bị y tế.
          </p>
          <div className="standards" aria-label="Các tiêu chuẩn chất lượng">
            {BRAND.standards.map((standard) => (
              <span className="standard-badge" key={standard}>
                ✓ {standard}
              </span>
            ))}
          </div>
        </section>

        {/* Contact info card */}
        <section className="contact-card" aria-labelledby="contact-title">
          <span className="eyebrow">LIÊN HỆ</span>
          <h2 id="contact-title">Kết nối cùng Opodis Pharma</h2>
          <dl className="contact-list">
            <div>
              <dt>Doanh nghiệp</dt>
              <dd>{BRAND.company.name}</dd>
            </div>
            <div>
              <dt>Nhà máy sản xuất</dt>
              <dd>{BRAND.company.address}</dd>
            </div>
            <div>
              <dt>Hotline tư vấn</dt>
              <dd>
                <a href={`tel:${BRAND.company.phone.replace(/[^0-9]/g, "")}`}>
                  {BRAND.company.phone} (Bấm để gọi)
                </a>
              </dd>
            </div>
          </dl>
          <div className="contact-card__actions">
            <button
              type="button"
              className="button button--primary"
              onClick={() => navigate(ROUTES.CONTACT, { animate: true, direction: "forward" })}
            >
              Xem đầy đủ thông tin liên hệ →
            </button>
          </div>
        </section>
      </main>
    </Page>
  );
};

export default AboutPage;
