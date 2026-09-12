import { useNavigate } from "zmp-ui";

import { ROUTES } from "@/shared/constants/routes";
import { formatCurrency } from "@/shared/utils/formatCurrency";

import type { Product } from "../../types/product.types";

import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const hasDiscount = Boolean(product.originalPrice && product.originalPrice > product.price);
  const discountPercent = hasDiscount
    ? Math.round((1 - product.price / product.originalPrice!) * 100)
    : 0;

  return (
    <article
      className="product-card"
      onClick={() => navigate(ROUTES.PRODUCT_DETAIL(product.id))}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigate(ROUTES.PRODUCT_DETAIL(product.id));
        }
      }}
      aria-label={`Xem chi tiết sản phẩm ${product.name}`}
    >
      <div className="product-card__image-wrapper">
        {hasDiscount ? (
          <span className="product-card__discount">-{discountPercent}%</span>
        ) : null}
        <img
          className="product-card__image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>

      <div className="product-card__content">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__meta-row">
          <span className="product-card__volume">{product.volume}</span>
          <span className="product-card__rating">
            <span className="product-card__star">★</span>
            <span className="product-card__rating-score">{product.rating ?? 4.9}</span>
          </span>
        </div>

        <div className="product-card__footer">
          <div className="product-card__price-wrap">
            <span className={`product-card__price ${hasDiscount ? "product-card__price--sale" : ""}`}>
              {formatCurrency(product.price)}
            </span>
            {hasDiscount ? (
              <span className="product-card__original-price">
                {formatCurrency(product.originalPrice!)}
              </span>
            ) : null}
          </div>
          <span className="product-card__btn" aria-hidden="true">
            Chi tiết
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
