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

  const isAntiseptic = product.category.toLowerCase().includes("khử khuẩn") || product.category.toLowerCase().includes("sát khuẩn");

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
        <span
          className={`product-card__badge ${
            isAntiseptic ? "product-card__badge--blue" : "product-card__badge--green"
          }`}
        >
          {isAntiseptic ? "Sát khuẩn Y tế" : "Chăm sóc Thảo dược"}
        </span>
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
        <span className="product-card__volume">{product.volume}</span>

        <div className="product-card__footer">
          <div className="product-card__price-wrap">
            <span className="product-card__price">{formatCurrency(product.price)}</span>
            <span className="product-card__price-hint">Giá test</span>
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
