import { Page, useNavigate } from "zmp-ui";

import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import { BRAND } from "@/shared/constants/brand";
import { ROUTES } from "@/shared/constants/routes";
import {
  PAGE_CONTENT_CLASS,
  PAGE_SHELL_CLASS,
  PRIMARY_BUTTON_CLASS,
} from "@/shared/constants/tailwind";

import CompanyStats from "../components/CompanyStats";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <Page className={PAGE_SHELL_CLASS} name="about" resetScroll>
      <main className={PAGE_CONTENT_CLASS}>
        <section
          className="rounded-xl bg-[linear-gradient(135deg,#f4fcf9_0%,#d6f2e7_52%,#a9dfcf_100%)] px-5 py-[25px]"
          aria-labelledby="about-title"
        >
          <span className="text-[clamp(16px,4.6vw,19px)] font-black uppercase leading-[1.35] tracking-[0.4px] text-primary-dark">
            HÀNH TRÌNH PHÁT TRIỂN
          </span>
          <h1
            id="about-title"
            className="mt-2 text-[clamp(28px,8vw,36px)] font-black leading-[1.15] tracking-[-0.03em]"
          >
            {BRAND.name}
          </h1>
          <p className="mt-2 text-[15px] font-bold text-primary-deep">{BRAND.tagline}</p>
          <p className="mt-2.5 text-text-secondary leading-[1.7]">
            Opodis Pharma luôn tâm niệm rằng tất cả mọi người đều có quyền sử dụng và tận hưởng những sản phẩm chất lượng tốt. Chúng tôi sáng tạo nhằm mang đến những giải pháp chất lượng cao phục vụ nhu cầu phòng bệnh và chăm sóc sức khỏe cộng đồng.
          </p>
        </section>

        {/* Company Stats Grid */}
        <section className="mt-8" aria-label="Dấu ấn Opodis">
          <SectionTitle
            eyebrow="DẤU ẤN"
            title="Nền tảng xây dựng từ niềm tin"
            description="Những con số khẳng định hành trình nghiên cứu chuyên sâu và đồng hành cùng hệ thống y tế."
          />
          <CompanyStats stats={BRAND.stats} />
        </section>

        {/* Heritage & Technology Story */}
        <section className="mt-6 rounded-lg border border-border bg-surface p-5" aria-labelledby="heritage-title">
          <h2 id="heritage-title" className="mb-3 text-[19px] font-black text-primary-deep">
            🌿 Di sản nghiên cứu từ Tràm Gió
          </h2>
          <p className="mb-2.5 text-text-secondary leading-[1.65]">
            Khởi nguồn từ Công ty Dược liệu Trung Ương 2, Opodis Pharma bắt đầu hành trình giữa những cánh rừng tràm gió miền Trung. Tại đây, chúng tôi đi sâu nghiên cứu loài <em>Melaleuca cajuputi</em> – nguồn hoạt chất <strong>α-Terpineol</strong> tự nhiên có đặc tính kháng khuẩn, kháng nấm và làm dịu vượt trội.
          </p>
          <p className="mb-2.5 text-text-secondary leading-[1.65]">
            Từ nền tảng ấy, Opodis kết hợp tri thức Đông y và công nghệ bào chế hiện đại Tây y, chuẩn hóa các công thức dược thảo kinh điển: <strong>Cao Trầu Không, Cao Hạt Ngò, Kim Ngân Hoa, Cúc La Mã, Lá Olive</strong>.
          </p>
        </section>

        {/* Standards & Certifications */}
        <section className="mt-[18px] rounded-lg border border-border p-[19px]" aria-labelledby="standards-title">
          <h2 id="standards-title" className="m-0 text-[21px] font-black leading-[1.3]">
            Tiêu chuẩn chất lượng quốc tế
          </h2>
          <p className="mt-2 text-text-secondary leading-[1.65]">
            Mọi quy trình từ tuyển chọn nguyên liệu đến dây chuyền đóng gói đều tuân thủ các chuẩn mực nghiêm ngặt nhất của ngành dược và thiết bị y tế.
          </p>
          <div className="mt-[15px] flex flex-wrap gap-2" aria-label="Các tiêu chuẩn chất lượng">
            {BRAND.standards.map((standard) => (
              <span
                className="rounded-full bg-primary-soft px-2.5 py-[7px] text-[11px] font-extrabold text-primary-dark"
                key={standard}
              >
                ✓ {standard}
              </span>
            ))}
          </div>
        </section>

        {/* Contact info card */}
        <section className="mt-[18px] rounded-lg border border-border p-[19px]" aria-labelledby="contact-title">
          <span className="text-[clamp(16px,4.6vw,19px)] font-black uppercase leading-[1.35] tracking-[0.4px] text-primary-dark">
            LIÊN HỆ
          </span>
          <h2 id="contact-title" className="m-0 text-[21px] font-black leading-[1.3]">
            Kết nối cùng Opodis Pharma
          </h2>
          <dl className="mt-[15px] grid gap-[13px]">
            <div className="grid gap-[3px]">
              <dt className="text-[11px] font-bold text-text-secondary">Doanh nghiệp</dt>
              <dd className="m-0 font-bold leading-[1.5]">{BRAND.company.name}</dd>
            </div>
            <div className="grid gap-[3px]">
              <dt className="text-[11px] font-bold text-text-secondary">Nhà máy sản xuất</dt>
              <dd className="m-0 font-bold leading-[1.5]">{BRAND.company.address}</dd>
            </div>
            <div className="grid gap-[3px]">
              <dt className="text-[11px] font-bold text-text-secondary">Hotline tư vấn</dt>
              <dd className="m-0 font-bold leading-[1.5]">
                <a href={`tel:${BRAND.company.phone.replace(/[^0-9]/g, "")}`}>
                  {BRAND.company.phone} (Bấm để gọi)
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-[18px]">
            <button
              type="button"
              className={PRIMARY_BUTTON_CLASS}
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
