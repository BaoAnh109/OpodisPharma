import type { Product } from "../../types/product.types";
import ProductCard from "../ProductCard/ProductCard";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div
      className="grid grid-cols-2 gap-2"
      aria-label="Danh sách sản phẩm"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
