import { Page, useNavigate } from "zmp-ui";
import { Icon } from "zmp-ui";

import { BRAND } from "@/shared/constants/brand";
import { ROUTES } from "@/shared/constants/routes";
import {
  PAGE_CONTENT_CLASS,
  PAGE_SHELL_CLASS,
  SECONDARY_BUTTON_CLASS,
} from "@/shared/constants/tailwind";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <Page className={PAGE_SHELL_CLASS} name="contact" resetScroll>
      <main className={PAGE_CONTENT_CLASS}>
        <section className="px-0 pb-5 pt-2.5" aria-labelledby="contact-main-title">
          <span className="text-[clamp(16px,4.6vw,19px)] font-black uppercase leading-[1.35] tracking-[0.4px] text-primary-dark">
            HỖ TRỢ & KẾT NỐI
          </span>
          <h1
            id="contact-main-title"
            className="mt-1.5 text-[clamp(24px,6.5vw,27px)] font-black leading-[1.3]"
          >
            Trung tâm Chăm sóc & Tư vấn Khách hàng
          </h1>
          <p className="mt-2.5 text-text-secondary leading-[1.6]">
            Đội ngũ dược sĩ và chuyên viên Opodis Pharma luôn sẵn sàng hỗ trợ giải đáp thông tin về sản phẩm, hướng dẫn sử dụng và mạng lưới phân phối.
          </p>
        </section>


        {/* Direct Call Banner */}
        <div className="mt-[18px] flex items-center justify-between gap-3 rounded-lg border border-[rgba(0,168,120,0.25)] bg-[linear-gradient(135deg,#eaf8f3_0%,#d8f3e8_100%)] px-[18px] py-4 shadow-card">
          <div className="flex flex-col">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.5px] text-primary-deep">
              Tổng đài bàn nhà máy
            </span>
            <strong className="mt-0.5 text-[18px] font-black text-primary-dark">
              {BRAND.company.phone}
            </strong>
            <span className="mt-0.5 text-[11px] text-text-secondary">
              Giờ làm việc: 8:00 - 17:00 (Thứ 2 - Thứ 6)
            </span>
          </div>
          <a
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-primary-dark px-4 py-2.5 text-[12px] font-extrabold text-white no-underline shadow-[0_4px_12px_rgba(0,136,98,0.3)]"
            href={`tel:${BRAND.company.phone.replace(/[^0-9]/g, "")}`}
            aria-label="Gọi ngay hotline"
          >
            <Icon icon="zi-call" size={20} />
            <span>Gọi ngay</span>
          </a>
        </div>

        {/* Facilities & Address Cards */}
        <section className="mt-6 grid gap-[14px]" aria-label="Địa chỉ trụ sở và nhà máy">
          <div className="rounded-lg border border-border bg-surface px-[18px] py-4">
            <div className="mb-1.5 text-[11.5px] font-black tracking-[0.5px] text-primary-dark">
              🏭 NHÀ MÁY SẢN XUẤT GMP-WHO
            </div>
            <h3 className="m-0 text-[16px] font-black">{BRAND.company.name}</h3>
            <p className="mt-1.5 text-[13px] font-semibold text-primary-deep">
              📍 {BRAND.company.address}
            </p>
            <p className="mt-2 text-[12px] leading-[1.6] text-text-secondary">
              Khu phức hợp sản xuất dược phẩm và hóa mỹ phẩm đạt chuẩn GMP-WHO và ISO 13485:2016, đảm bảo kiểm soát chất lượng từ khâu nguyên liệu đến thành phẩm.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface px-[18px] py-4">
            <div className="mb-1.5 text-[11.5px] font-black tracking-[0.5px] text-primary-dark">
              🏥 MẠNG LƯỚI Y TẾ
            </div>
            <h3 className="m-0 text-[16px] font-black">Hệ thống phân phối trên toàn quốc</h3>
            <p className="mt-2 text-[12px] leading-[1.6] text-text-secondary">
              Các sản phẩm Phytobebe, Phytogyno, Clincare, Opodex hiện được cung ứng tại hơn 80 bệnh viện, trung tâm y tế, chuỗi nhà thuốc uy tín và đại lý trên cả nước.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface px-[18px] py-4">
            <div className="mb-1.5 text-[11.5px] font-black tracking-[0.5px] text-primary-dark">
              🌐 KÊNH TRỰC TUYẾN
            </div>
            <h3 className="m-0 text-[16px] font-black">Website chính thức</h3>
            <p className="mt-2 text-[12px] leading-[1.6] text-text-secondary">
              Tra cứu thông tin kiểm nghiệm, số công bố mỹ phẩm và các dòng sản phẩm mới nhất tại:
            </p>
            <a
              className="mt-2 inline-block text-[12px] font-bold text-primary-dark"
              href="https://opodispharma.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://opodispharma.com/ <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {/* Return to Products CTA */}
        <div className="mt-7 rounded-lg border border-dashed border-border bg-white p-[18px] text-center">
          <p className="mb-3 text-[13px] text-text-secondary">
            Tìm hiểu các dòng sản phẩm chăm sóc sức khỏe của Opodis
          </p>
          <button
            type="button"
            className={SECONDARY_BUTTON_CLASS}
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
