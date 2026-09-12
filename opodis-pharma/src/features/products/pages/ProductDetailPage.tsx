import type { ReactNode } from "react";
import { Page, useNavigate, useParams } from "zmp-ui";
import { Icon } from "zmp-ui";

import EmptyState from "@/shared/components/EmptyState/EmptyState";
import { ROUTES } from "@/shared/constants/routes";
import {
  PAGE_CONTENT_CLASS,
  PAGE_SHELL_CLASS,
  PAGE_SHELL_DETAIL_CLASS,
} from "@/shared/constants/tailwind";
import { formatCurrency } from "@/shared/utils/formatCurrency";

import { PRODUCTS } from "../data/products.mock";

const EYEBROW_CLASS =
  "text-[clamp(16px,4.6vw,19px)] font-black uppercase leading-[1.35] tracking-[0.4px] text-primary-dark";

const DETAIL_LIST_CLASS =
  "m-0 mt-[13px] grid list-none gap-[9px] p-0";

const DetailCard = ({
  title,
  children,
  warning = false,
}: {
  title: string;
  children: ReactNode;
  warning?: boolean;
}) => (
  <div
    className={`mt-4 rounded-lg border p-4 ${
      warning
        ? "border-[rgba(192,57,43,0.2)] bg-[#fff9f8]"
        : "border-border bg-surface"
    }`}
  >
    <h2
      className={`m-0 mb-2.5 text-[16px] font-[850] text-primary-deep ${
        warning ? "text-danger" : ""
      }`}
    >
      {title}
    </h2>
    {children}
  </div>
);

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const product = PRODUCTS.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <Page className={PAGE_SHELL_CLASS} name="product-not-found">
        <EmptyState
          title="Không tìm thấy sản phẩm"
          description="Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã được cập nhật."
          actionLabel="Về danh sách sản phẩm"
          onAction={() => navigate(ROUTES.HOME)}
        />
      </Page>
    );
  }

  const isAntiseptic =
    product.category.toLowerCase().includes("khử khuẩn") ||
    product.category.toLowerCase().includes("sát khuẩn");

  const hasDiscount = Boolean(product.originalPrice && product.originalPrice > product.price);
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  const rating = product.rating ?? 4.9;
  const reviewsCount = product.reviewsCount ?? 128;
  const soldCount = product.soldCount ?? "1.2k";

  return (
    <Page className={PAGE_SHELL_DETAIL_CLASS} name={`product-${product.id}`} resetScroll>
      <main className={PAGE_CONTENT_CLASS}>
        <div className="mb-[14px] flex items-center justify-between">
          <button
            className="mb-4 mt-0.5 inline-flex min-h-10 cursor-pointer items-center gap-[7px] rounded-md border border-border bg-white px-[11px] py-2 text-text-primary transition-[border-color,color] hover:border-primary hover:text-primary-dark"
            type="button"
            onClick={() => navigate(-1)}
          >
            <span aria-hidden="true">←</span> Quay lại
          </button>
          <span className="text-[13px] font-extrabold uppercase text-primary-dark">{product.category}</span>
        </div>

        <article className="overflow-hidden rounded-xl border border-border bg-white shadow-card">
          <div className="relative flex min-h-[290px] items-center justify-center bg-surface px-5 py-5">
            <span
              className={`absolute left-2 top-2 z-[2] rounded-full px-2 py-[3px] text-[9px] font-bold uppercase tracking-[0.2px] ${
                isAntiseptic
                  ? "border border-[rgba(14,116,144,0.22)] bg-[rgba(14,116,144,0.12)] text-[#0e7490]"
                  : "border border-[rgba(0,168,120,0.25)] bg-[rgba(0,168,120,0.14)] text-primary-dark"
              }`}
            >
              {isAntiseptic ? "Chuẩn Y tế Bệnh viện" : "Dược thảo chọn lọc"}
            </span>
            {hasDiscount ? (
              <span className="absolute right-3 top-3 z-[2] rounded-sm bg-danger px-[9px] py-1 text-[12px] font-extrabold leading-none text-white shadow-[0_3px_8px_rgba(192,57,43,0.22)]">
                -{discountPercent}%
              </span>
            ) : null}
            <img className="block max-h-[330px] w-full object-contain" src={product.image} alt={product.name} />
          </div>

          {product.gallery?.length ? (
            <div
              className="flex gap-2 overflow-x-auto border-t border-border bg-white px-[14px] pb-3 pt-2.5 [scrollbar-width:thin]"
              aria-label={`Hình ảnh liên quan của ${product.name}`}
            >
              {product.gallery.map((image, index) => (
                <img
                  key={image}
                  className="block h-14 w-14 shrink-0 rounded-md border border-border bg-surface object-cover"
                  src={image}
                  alt={`${product.name} - hình ảnh ${index + 2}`}
                  loading="lazy"
                />
              ))}
            </div>
          ) : null}

          <div className="border-t border-border px-5 pb-[26px] pt-[22px]">
            <span className={EYEBROW_CLASS}>{product.category}</span>
            <h1 className="mt-1.5 text-[26px] font-black leading-[1.25]">{product.name}</h1>

            <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[12px] text-text-secondary">
              <div className="inline-flex items-center gap-px" aria-label={`Đánh giá ${rating.toFixed(1)} trên 5 sao`}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-[14px] leading-none text-[#f59e0b]">★</span>
                ))}
              </div>
              <span className="font-extrabold text-[#d97706]">{rating.toFixed(1)}</span>
              <span className="font-bold text-border">·</span>
              <span className="font-medium">{reviewsCount} đánh giá</span>
              <span className="font-bold text-border">·</span>
              <span className="font-medium">Đã bán {soldCount}</span>
            </div>

            <div className="mt-2.5 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-sm border border-border bg-surface px-2.5 py-[5px] text-[11px] font-semibold text-text-secondary">
                📦 {product.volume}
              </span>
              {product.registration ? (
                <span className="inline-flex items-center rounded-sm border border-[rgba(0,168,120,0.2)] bg-primary-soft px-2.5 py-[5px] text-[11px] font-semibold text-primary-deep">
                  📜 {product.registration}
                </span>
              ) : null}
            </div>

            <div
              className={`mt-4 flex items-center justify-between rounded-md border px-4 py-3 ${
                hasDiscount
                  ? "border-[rgba(220,38,38,0.22)] bg-[linear-gradient(135deg,#fff5f5_0%,#ffebeb_100%)]"
                  : "border-[rgba(0,168,120,0.2)] bg-[linear-gradient(135deg,#f0fbf7_0%,#e6f6ef_100%)]"
              }`}
            >
              <div className="flex flex-col">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-[24px] font-black leading-[1.2] text-danger">
                    {formatCurrency(product.price)}
                  </span>
                  {hasDiscount ? (
                    <span className="text-[13px] font-semibold text-text-muted line-through">
                      {formatCurrency(product.originalPrice!)}
                    </span>
                  ) : null}
                  {hasDiscount ? (
                    <span className="inline-flex items-center rounded-sm bg-danger px-[7px] py-0.5 text-[11px] font-extrabold text-white shadow-[0_2px_5px_rgba(220,38,38,0.25)]">
                      -{discountPercent}%
                    </span>
                  ) : null}
                </div>
              </div>
              <span className="rounded-full bg-primary-dark px-2.5 py-1 text-[10px] font-bold text-white">
                ✓ Chính hãng Opodis
              </span>
            </div>

            <p className="mt-[18px] text-text-secondary leading-[1.7]">{product.shortDescription}</p>

            <DetailCard title="🌿 Thành phần nổi bật">
              <ul className={DETAIL_LIST_CLASS}>
                {product.ingredients.map((ingredient) => (
                  <li className="relative pl-[23px] text-text-secondary before:absolute before:left-0.5 before:top-[0.62em] before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-primary before:content-['']" key={ingredient}>
                    <span className="mr-1.5 font-extrabold text-primary-dark">✓</span> {ingredient}
                  </li>
                ))}
              </ul>
            </DetailCard>

            <DetailCard title="✨ Công dụng chính">
              <ul className={DETAIL_LIST_CLASS}>
                {product.benefits.map((benefit) => (
                  <li className="relative pl-[23px] text-text-secondary before:absolute before:left-0.5 before:top-[0.62em] before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-primary before:content-['']" key={benefit}>
                    <span className="mr-1.5 font-extrabold text-primary-dark">✓</span> {benefit}
                  </li>
                ))}
              </ul>
            </DetailCard>

            <DetailCard title="📖 Hướng dẫn sử dụng">
              <p className="mt-[11px] text-text-secondary leading-[1.7]">{product.usage}</p>
            </DetailCard>

            {product.warning ? (
              <DetailCard title="⚠️ Lưu ý an toàn" warning>
                <p className="mt-[11px] text-text-secondary leading-[1.7]">{product.warning}</p>
              </DetailCard>
            ) : null}

            <div className="mt-4 rounded-lg border border-border bg-surface p-4">
              <div className="mb-3 flex items-center justify-between gap-3 border-b border-border pb-3">
                <div>
                  <h2 className="m-0 mb-0.5 text-[16px] font-[850] text-primary-deep">
                    ⭐ Đánh giá sản phẩm
                  </h2>
                  <p className="m-0 text-[11px] text-text-secondary">
                    {rating.toFixed(1)}/5 sao ({reviewsCount} đánh giá từ khách hàng)
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-center justify-center rounded-md border border-[rgba(245,158,11,0.25)] bg-[#fffbeb] px-3.5 py-1.5">
                  <span className="text-[20px] font-black leading-none text-[#d97706]">{rating.toFixed(1)}</span>
                  <div className="mt-[3px] flex gap-px text-[11px] text-[#f59e0b]">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s}>★</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="rounded-sm border border-[rgba(0,0,0,0.04)] bg-[#f8fafc] px-3 py-2.5">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-soft text-[11px] font-extrabold text-primary-dark">TN</span>
                    <div className="flex flex-1 flex-col">
                      <span className="text-[12px] font-bold leading-[1.2] text-text-primary">Thanh Nhàn</span>
                      <div className="text-[11px] leading-[1.2] text-[#f59e0b]">★★★★★</div>
                    </div>
                    <span className="whitespace-nowrap rounded-full bg-[rgba(0,168,120,0.1)] px-1.5 py-0.5 text-[10px] font-bold text-primary-dark">✓ Đã mua hàng</span>
                  </div>
                  <p className="m-0 text-[12px] leading-[1.45] text-text-secondary">
                    Giao hàng nhanh, sản phẩm chuẩn công ty Opodis Pharma, tem mác nguyên vẹn và mùi thảo dược rất dễ chịu.
                  </p>
                </div>

                <div className="rounded-sm border border-[rgba(0,0,0,0.04)] bg-[#f8fafc] px-3 py-2.5">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-soft text-[11px] font-extrabold text-primary-dark">VT</span>
                    <div className="flex flex-1 flex-col">
                      <span className="text-[12px] font-bold leading-[1.2] text-text-primary">Văn Toàn (Dược sĩ)</span>
                      <div className="text-[11px] leading-[1.2] text-[#f59e0b]">★★★★★</div>
                    </div>
                    <span className="whitespace-nowrap rounded-full bg-[rgba(0,168,120,0.1)] px-1.5 py-0.5 text-[10px] font-bold text-primary-dark">✓ Đã mua hàng</span>
                  </div>
                  <p className="m-0 text-[12px] leading-[1.45] text-text-secondary">
                    Sản phẩm đạt chuẩn GMP-WHO của nhà máy Dược liệu, an toàn và lành tính, nhà thuốc mình tư vấn cho khách rất yên tâm.
                  </p>
                </div>
              </div>
            </div>

            <section className="mt-[26px] border-t border-border pt-[17px]" aria-label="Nguồn thông tin sản phẩm">
              <p className="m-0 text-[11px] font-extrabold uppercase tracking-[0.08em] text-text-secondary">
                Nguồn dữ liệu đối chiếu
              </p>
              <a
                className="mt-1.5 inline-flex gap-[5px] font-extrabold no-underline"
                href={product.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                Xem sản phẩm trên opodispharma.com <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-1.5 text-[11px] leading-[1.5] text-text-secondary">
                Nội dung đối chiếu từ website chính thức của Opodis Pharma.
              </p>
            </section>
          </div>
        </article>
      </main>

      <div
        className="fixed inset-x-0 bottom-0 z-[100] mx-auto flex max-w-[520px] items-center gap-3 border-t border-border bg-[rgba(255,255,255,0.95)] px-4 pb-[calc(10px+env(safe-area-inset-bottom,10px))] pt-2.5 shadow-nav backdrop-blur-[14px]"
        role="toolbar"
        aria-label="Tác vụ sản phẩm"
      >
        <button
          type="button"
          className="flex cursor-pointer flex-col items-center justify-center gap-0.5 border-0 bg-transparent px-3 py-1.5 text-[10px] font-bold text-text-secondary"
          onClick={() => navigate(ROUTES.HOME)}
          aria-label="Về trang chủ"
        >
          <Icon icon="zi-home" size={20} />
          <span>Trang chủ</span>
        </button>

        <a
          className="inline-flex h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-primary-dark px-[18px] text-[13px] font-bold text-white no-underline shadow-[0_4px_14px_rgba(0,136,98,0.25)] outline-none transition-transform duration-[140ms] active:scale-[0.97]"
          href="tel:02763898656"
          aria-label="Tư vấn sản phẩm qua hotline"
        >
          <Icon icon="zi-call" size={18} />
          <span>Tư vấn: 0276 3898 656</span>
        </a>
      </div>
    </Page>
  );
};

export default ProductDetailPage;
