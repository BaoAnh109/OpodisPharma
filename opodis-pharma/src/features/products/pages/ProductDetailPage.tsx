import { Page, useNavigate, useParams } from "zmp-ui";
import { Icon } from "zmp-ui";

import EmptyState from "@/shared/components/EmptyState/EmptyState";
import { ROUTES } from "@/shared/constants/routes";
import { formatCurrency } from "@/shared/utils/formatCurrency";

import { PRODUCTS } from "../data/products.mock";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const product = PRODUCTS.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <Page className="page-shell" name="product-not-found">
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

  return (
    <Page className="page-shell page-shell--detail" name={`product-${product.id}`} resetScroll>
      <main>
        {/* Navigation back bar */}
        <div className="detail-top-nav">
          <button className="back-button" type="button" onClick={() => navigate(-1)}>
            <span aria-hidden="true">←</span> Quay lại
          </button>
          <span className="detail-top-nav__category">{product.category}</span>
        </div>

        <article className="product-detail">
          {/* Main Product Presentation */}
          <div className="product-detail__image-wrapper">
            <span
              className={`product-card__badge ${
                isAntiseptic ? "product-card__badge--blue" : "product-card__badge--green"
              }`}
            >
              {isAntiseptic ? "Chuẩn Y tế Bệnh viện" : "Dược thảo chọn lọc"}
            </span>
            <img className="product-detail__image" src={product.image} alt={product.name} />
          </div>

          <div className="product-detail__content">
            <span className="eyebrow">{product.category}</span>
            <h1 className="product-detail__title">{product.name}</h1>

            <div className="product-detail__meta">
              <span className="meta-chip">📦 {product.volume}</span>
              {product.registration ? (
                <span className="meta-chip meta-chip--reg">📜 {product.registration}</span>
              ) : null}
            </div>

            <div className="product-detail__price-card">
              <div className="product-detail__price-wrap">
                <span className="price-label">Giá minh họa test</span>
                <span className="product-detail__price">{formatCurrency(product.price)}</span>
              </div>
              <span className="price-tag-badge">Chính hãng Opodis</span>
            </div>

            <p className="mock-price-note">
              * Giá hiển thị là dữ liệu minh họa cho bài test Mini App, không phải giá bán lẻ chính thức.
            </p>

            <p className="product-detail__description">{product.shortDescription}</p>

            {/* Structured Sections */}
            <div className="detail-card">
              <h2 className="detail-card__title">🌿 Thành phần nổi bật</h2>
              <ul className="detail-list">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient}>
                    <span className="bullet-check">✓</span> {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-card">
              <h2 className="detail-card__title">✨ Công dụng chính</h2>
              <ul className="detail-list">
                {product.benefits.map((benefit) => (
                  <li key={benefit}>
                    <span className="bullet-check">✓</span> {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-card">
              <h2 className="detail-card__title">📖 Hướng dẫn sử dụng</h2>
              <p className="detail-copy">{product.usage}</p>
            </div>

            {product.warning ? (
              <div className="detail-card detail-card--warning">
                <h2 className="detail-card__title">⚠️ Lưu ý an toàn</h2>
                <p className="detail-copy">{product.warning}</p>
              </div>
            ) : null}

            {/* Official Source Reference */}
            <section className="detail-source" aria-label="Nguồn thông tin sản phẩm">
              <p className="detail-source__label">Nguồn dữ liệu đối chiếu</p>
              <a
                className="detail-source__link"
                href={product.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                Xem sản phẩm trên opodispharma.com <span aria-hidden="true">↗</span>
              </a>
              <p className="detail-source__note">
                Nội dung đối chiếu từ website chính thức của Opodis Pharma.
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* Sticky Bottom Action Bar for Detail View */}
      <div className="detail-bottom-bar" role="toolbar" aria-label="Tác vụ sản phẩm">
        <button
          type="button"
          className="detail-bottom-bar__home-btn"
          onClick={() => navigate(ROUTES.HOME)}
          aria-label="Về trang chủ"
        >
          <Icon icon="zi-home" size={20} />
          <span>Trang chủ</span>
        </button>

        <a
          className="detail-bottom-bar__action-btn"
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
