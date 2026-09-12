import { useNavigate } from "zmp-ui";

import { ROUTES } from "@/shared/constants/routes";
import { formatCurrency } from "@/shared/utils/formatCurrency";

import type { Product } from "../../types/product.types";

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
      className="group relative flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-md border border-border bg-white p-0 text-left text-text-primary shadow-subtle outline-none transition-[transform,box-shadow,border-color] duration-[180ms] hover:-translate-y-0.5 hover:border-[rgba(0,168,120,0.35)] hover:shadow-[0_8px_24px_rgba(22,46,38,0.1)] active:scale-[0.98]"
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
      <div className="relative flex aspect-[1/0.95] items-center justify-center overflow-hidden bg-[#f8fbf9] p-0">
        {hasDiscount ? (
          <span className="absolute right-2 top-2 z-[2] rounded-sm bg-danger px-[7px] py-1 text-[10px] font-black leading-none text-white shadow-[0_3px_8px_rgba(192,57,43,0.22)]">
            -{discountPercent}%
          </span>
        ) : null}
        <img
          className="block h-full w-full object-contain transition-transform duration-[220ms] group-hover:scale-[1.04]"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-2.5 pb-3.5 pt-3 max-[360px]:px-2 max-[360px]:pb-3 max-[360px]:pt-2.5">
        <span className="truncate text-[10px] font-bold uppercase tracking-[0.4px] leading-[1.3] text-primary-dark">
          {product.category}
        </span>
        <h3 className="mt-1 min-h-[36px] overflow-hidden text-[14px] font-extrabold leading-[1.3] text-text-primary [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] max-[360px]:text-[13px]">
          {product.name}
        </h3>
        <div className="mt-[5px] flex items-center justify-between gap-1">
          <span className="truncate text-[11px] text-text-secondary">{product.volume}</span>
          <span className="inline-flex items-center gap-0.5 text-[11px]">
            <span className="text-[11px] leading-none text-[#f59e0b]">★</span>
            <span className="text-[10.5px] font-bold text-text-secondary">
              {product.rating ?? 4.9}
            </span>
          </span>
        </div>

        <div className="mt-2.5 flex items-start justify-between gap-1.5 border-t border-dashed border-border pt-2">
          <div className="flex flex-col">
            <span className="text-[14px] font-black leading-[1.2] text-danger max-[360px]:text-[13px]">
              {formatCurrency(product.price)}
            </span>
            {hasDiscount ? (
              <span className="mt-0.5 text-[10px] font-semibold leading-[1.2] text-text-muted line-through">
                {formatCurrency(product.originalPrice!)}
              </span>
            ) : null}
          </div>
          <span className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary-soft px-[9px] py-1 text-[10px] font-bold text-primary-deep transition-[background-color,color] duration-150 group-hover:bg-primary group-hover:text-white max-[360px]:px-[7px] max-[360px]:py-[3px] max-[360px]:text-[9px]">
            Chi tiết
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
