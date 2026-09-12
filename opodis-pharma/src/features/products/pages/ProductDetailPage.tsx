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

  const hasDiscount = Boolean(product.originalPrice && product.originalPrice > product.price);
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  const rating = product.rating ?? 4.9;
  const reviewsCount = product.reviewsCount ?? 128;
  const soldCount = product.soldCount ?? "1.2k";

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
            {hasDiscount ? (
              <span className="product-card__discount product-card__discount--detail">
                -{discountPercent}%
              </span>
            ) : null}
            <img className="product-detail__image" src={product.image} alt={product.name} />
          </div>

          {product.gallery?.length ? (
            <div className="product-detail__gallery" aria-label={`Hình ảnh liên quan của ${product.name}`}>
              {product.gallery.map((image, index) => (
                <img
                  key={image}
                  className="product-detail__gallery-image"
                  src={image}
                  alt={`${product.name} - hình ảnh ${index + 2}`}
                  loading="lazy"
                />
              ))}
            </div>
          ) : null}

          <div className="product-detail__content">
            <span className="eyebrow">{product.category}</span>
            <h1 className="product-detail__title">{product.name}</h1>

            {/* Product Rating & Social Proof */}
            <div className="product-detail__rating-row">
              <div className="product-detail__stars" aria-label={`Đánh giá ${rating.toFixed(1)} trên 5 sao`}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="product-detail__star">★</span>
                ))}
              </div>
              <span className="product-detail__rating-score">{rating.toFixed(1)}</span>
              <span className="product-detail__rating-divider">·</span>
              <span className="product-detail__rating-reviews">{reviewsCount} đánh giá</span>
              <span className="product-detail__rating-divider">·</span>
              <span className="product-detail__rating-sold">Đã bán {soldCount}</span>
            </div>

            <div className="product-detail__meta">
              <span className="meta-chip">📦 {product.volume}</span>
              {product.registration ? (
                <span className="meta-chip meta-chip--reg">📜 {product.registration}</span>
              ) : null}
            </div>

            {/* Price Card */}
            <div className={`product-detail__price-card ${hasDiscount ? "product-detail__price-card--sale" : ""}`}>
              <div className="product-detail__price-wrap">
                <div className="product-detail__price-row">
                  <span className={`product-detail__price ${hasDiscount ? "product-detail__price--sale" : ""}`}>
                    {formatCurrency(product.price)}
                  </span>
                  {hasDiscount ? (
                    <span className="product-detail__original-price">
                      {formatCurrency(product.originalPrice!)}
                    </span>
                  ) : null}
                  {hasDiscount ? (
                    <span className="product-detail__discount-pill">
                      -{discountPercent}%
                    </span>
                  ) : null}
                </div>
              </div>
              <span className="price-tag-badge">
                ✓ Chính hãng Opodis
              </span>
            </div>

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

            {/* Customer Rating & Reviews Section */}
            <div className="detail-card detail-card--reviews">
              <div className="detail-reviews__header">
                <div>
                  <h2 className="detail-card__title">⭐ Đánh giá sản phẩm</h2>
                  <p className="detail-reviews__sub">
                    {rating.toFixed(1)}/5 sao ({reviewsCount} đánh giá từ khách hàng)
                  </p>
                </div>
                <div className="detail-reviews__score-box">
                  <span className="detail-reviews__big-score">{rating.toFixed(1)}</span>
                  <div className="detail-reviews__stars-row">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="star-icon">★</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="detail-reviews__list">
                <div className="review-comment">
                  <div className="review-comment__header">
                    <span className="review-comment__avatar">TN</span>
                    <div className="review-comment__meta">
                      <span className="review-comment__author">Thanh Nhàn</span>
                      <div className="review-comment__stars">★★★★★</div>
                    </div>
                    <span className="review-comment__verified">✓ Đã mua hàng</span>
                  </div>
                  <p className="review-comment__text">
                    Giao hàng nhanh, sản phẩm chuẩn công ty Opodis Pharma, tem mác nguyên vẹn và mùi thảo dược rất dễ chịu.
                  </p>
                </div>

                <div className="review-comment">
                  <div className="review-comment__header">
                    <span className="review-comment__avatar">VT</span>
                    <div className="review-comment__meta">
                      <span className="review-comment__author">Văn Toàn (Dược sĩ)</span>
                      <div className="review-comment__stars">★★★★★</div>
                    </div>
                    <span className="review-comment__verified">✓ Đã mua hàng</span>
                  </div>
                  <p className="review-comment__text">
                    Sản phẩm đạt chuẩn GMP-WHO của nhà máy Dược liệu, an toàn và lành tính, nhà thuốc mình tư vấn cho khách rất yên tâm.
                  </p>
                </div>
              </div>
            </div>

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
