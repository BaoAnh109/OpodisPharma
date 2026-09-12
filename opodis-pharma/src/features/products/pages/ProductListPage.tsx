import { useState } from "react";
import { Icon, Page } from "zmp-ui";

import EmptyState from "@/shared/components/EmptyState/EmptyState";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";

import ProductGrid from "../components/ProductGrid/ProductGrid";
import { PRODUCTS } from "../data/products.mock";

type CategoryFilter = "all" | "mom-baby" | "antiseptic";

const ProductListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = PRODUCTS.filter((product) => {
    // Filter by category
    if (selectedCategory === "mom-baby") {
      if (!product.category.toLowerCase().includes("mẹ và bé")) return false;
    } else if (selectedCategory === "antiseptic") {
      if (
        !product.category.toLowerCase().includes("sát khuẩn") &&
        !product.category.toLowerCase().includes("khử khuẩn")
      )
        return false;
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = product.name.toLowerCase().includes(q);
      const matchCategory = product.category.toLowerCase().includes(q);
      const matchDesc = product.shortDescription.toLowerCase().includes(q);
      const matchIngredient = product.ingredients.some((ing) => ing.toLowerCase().includes(q));
      return matchName || matchCategory || matchDesc || matchIngredient;
    }

    return true;
  });

  return (
    <Page className="page-shell" name="products" resetScroll>
      <main>
        <section className="catalog-hero" aria-labelledby="catalog-title">
          <SectionTitle
            eyebrow="DANH MỤC SẢN PHẨM"
            title="Sản phẩm chính hãng Opodis"
            description="Đầy đủ các giải pháp chăm sóc gia đình và sát khuẩn y tế chuẩn GMP-WHO."
          />

          {/* Search Box */}
          <div className="search-bar">
            <span className="search-bar__icon">
              <Icon icon="zi-search" size={18} />
            </span>
            <input
              type="text"
              className="search-bar__input"
              placeholder="Tìm theo tên sản phẩm, công dụng, thành phần..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Tìm kiếm sản phẩm"
            />
            {searchQuery ? (
              <button
                type="button"
                className="search-bar__clear"
                onClick={() => setSearchQuery("")}
                aria-label="Xóa tìm kiếm"
              >
                ✕
              </button>
            ) : null}
          </div>

          {/* Category Filter Chips */}
          <div className="category-pills" role="tablist" aria-label="Lọc theo danh mục">
            <button
              type="button"
              className={`category-pill ${selectedCategory === "all" ? "is-active" : ""}`}
              onClick={() => setSelectedCategory("all")}
              aria-selected={selectedCategory === "all"}
            >
              Tất cả ({PRODUCTS.length})
            </button>
            <button
              type="button"
              className={`category-pill ${selectedCategory === "mom-baby" ? "is-active" : ""}`}
              onClick={() => setSelectedCategory("mom-baby")}
              aria-selected={selectedCategory === "mom-baby"}
            >
              👶 Mẹ và bé (4)
            </button>
            <button
              type="button"
              className={`category-pill ${selectedCategory === "antiseptic" ? "is-active" : ""}`}
              onClick={() => setSelectedCategory("antiseptic")}
              aria-selected={selectedCategory === "antiseptic"}
            >
              🧴 Sát khuẩn y tế (2)
            </button>
          </div>

          {/* Product Grid or Empty State */}
          {filteredProducts.length > 0 ? (
            <>
              <p className="catalog-status">
                Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm{" "}
                <span className="catalog-status__note">(*Giá minh họa bài test)</span>
              </p>
              <ProductGrid products={filteredProducts} />
            </>
          ) : (
            <EmptyState
              title="Không tìm thấy sản phẩm"
              description={`Không có sản phẩm nào phù hợp với từ khóa "${searchQuery}". Vui lòng thử lại.`}
              actionLabel="Xem tất cả sản phẩm"
              onAction={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            />
          )}
        </section>
      </main>
    </Page>
  );
};

export default ProductListPage;
