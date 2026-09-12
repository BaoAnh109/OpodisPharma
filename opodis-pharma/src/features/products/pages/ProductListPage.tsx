import { useEffect, useMemo, useRef, useState } from "react";
import { Icon, Page } from "zmp-ui";

import EmptyState from "@/shared/components/EmptyState/EmptyState";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";

import ProductGrid from "../components/ProductGrid/ProductGrid";
import { PRODUCTS } from "../data/products.mock";

const ALL_CATEGORY = "all";
const SALE_CATEGORY = "sale";
const MOM_BABY_CATEGORY = "Chăm sóc mẹ và bé";
const ANTISEPTIC_CATEGORY = "Khử khuẩn – sát khuẩn tay";
const PRODUCTS_PER_PAGE = 4;

const ProductListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORY);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const categoryMenuRef = useRef<HTMLDivElement>(null);

  const categoryOptions = useMemo(() => {
    const productCategories = Array.from(new Set(PRODUCTS.map((product) => product.category)));

    return [
      {
        id: ALL_CATEGORY,
        label: "Tất cả sản phẩm",
        icon: "▦",
        count: PRODUCTS.length,
      },
      {
        id: SALE_CATEGORY,
        label: "Sản phẩm đang Sale",
        icon: "🏷️",
        count: PRODUCTS.filter(
          (product) => product.originalPrice && product.originalPrice > product.price,
        ).length,
      },
      ...productCategories.map((category) => ({
        id: category,
        label: category,
        icon: category.toLowerCase().includes("mẹ và bé") ? "👶" : "🧴",
        count: PRODUCTS.filter((product) => product.category === category).length,
      })),
    ];
  }, []);

  useEffect(() => {
    if (!isCategoryMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        categoryMenuRef.current &&
        !categoryMenuRef.current.contains(event.target as Node)
      ) {
        event.preventDefault();
        event.stopPropagation();
        setIsCategoryMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsCategoryMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown, true);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCategoryMenuOpen]);

  const filteredProducts = PRODUCTS.filter((product) => {
    // Filter by category
    if (selectedCategory === SALE_CATEGORY) {
      if (!product.originalPrice || product.originalPrice <= product.price) return false;
    } else if (
      selectedCategory !== ALL_CATEGORY &&
      product.category !== selectedCategory
    ) {
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

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const pageStartIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    pageStartIndex,
    pageStartIndex + PRODUCTS_PER_PAGE,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

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
          <form
            className="catalog-search-form"
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
              setSearchQuery(searchInput.trim());
            }}
          >
            <div className="search-bar">
              <span className="search-bar__icon">
                <Icon icon="zi-search" size={18} />
              </span>
              <input
                type="text"
                className="search-bar__input"
                placeholder="Tìm tên, công dụng, thành phần..."
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                aria-label="Tìm kiếm sản phẩm"
              />
              {searchInput ? (
                <button
                  type="button"
                  className="search-bar__clear"
                  onClick={() => {
                    setSearchInput("");
                    setSearchQuery("");
                  }}
                  aria-label="Xóa tìm kiếm"
                >
                  ✕
                </button>
              ) : null}
            </div>
            <button type="submit" className="catalog-search-form__submit">
              <span>Tìm</span>
            </button>
          </form>

          {/* Quick category filter chips */}
          <div className="category-pills" role="tablist" aria-label="Lọc nhanh theo danh mục">
            <button
              type="button"
              className={`category-pill ${selectedCategory === ALL_CATEGORY ? "is-active" : ""}`}
              onClick={() => setSelectedCategory(ALL_CATEGORY)}
              aria-selected={selectedCategory === ALL_CATEGORY}
            >
              Tất cả ({PRODUCTS.length})
            </button>
            <button
              type="button"
              className={`category-pill ${selectedCategory === MOM_BABY_CATEGORY ? "is-active" : ""}`}
              onClick={() => setSelectedCategory(MOM_BABY_CATEGORY)}
              aria-selected={selectedCategory === MOM_BABY_CATEGORY}
            >
              👶 Mẹ và bé ({PRODUCTS.filter((product) => product.category === MOM_BABY_CATEGORY).length})
            </button>
            <button
              type="button"
              className={`category-pill ${selectedCategory === ANTISEPTIC_CATEGORY ? "is-active" : ""}`}
              onClick={() => setSelectedCategory(ANTISEPTIC_CATEGORY)}
              aria-selected={selectedCategory === ANTISEPTIC_CATEGORY}
            >
              🧴 Sát khuẩn y tế ({PRODUCTS.filter((product) => product.category === ANTISEPTIC_CATEGORY).length})
            </button>
          </div>

          {/* Product Grid or Empty State */}
          {filteredProducts.length > 0 ? (
            <>
              <div className="catalog-status-row">
                <p className="catalog-status">
                  Hiển thị <strong>{pageStartIndex + 1}-{Math.min(pageStartIndex + PRODUCTS_PER_PAGE, filteredProducts.length)}</strong> / {filteredProducts.length} sản phẩm{" "}
                </p>

                {/* Dropdown category menu */}
                <div
                  ref={categoryMenuRef}
                  className={`category-filter ${isCategoryMenuOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="category-filter__trigger"
                    onClick={() => setIsCategoryMenuOpen((isOpen) => !isOpen)}
                    aria-expanded={isCategoryMenuOpen}
                    aria-controls="product-category-menu"
                  >
                    <span className="category-filter__trigger-main">
                      <Icon icon="zi-more-grid" size={20} />
                      <span className="category-filter__trigger-label">Danh mục</span>
                    </span>
                    <span
                      className={`category-filter__chevron ${isCategoryMenuOpen ? "is-open" : ""}`}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        width="14"
                        height="14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 6L8 10.25L12.25 6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {isCategoryMenuOpen ? (
                    <div
                      id="product-category-menu"
                      className="category-filter__menu"
                      role="menu"
                      aria-label="Chọn danh mục sản phẩm"
                    >
                      <div className="category-filter__menu-header">
                        <strong>Chọn danh mục</strong>
                        <span>{categoryOptions.length} lựa chọn</span>
                      </div>

                      <div className="category-filter__menu-list">
                        {categoryOptions.map((category) => {
                          const isSelected = selectedCategory === category.id;

                          return (
                            <button
                              key={category.id}
                              type="button"
                              className={`category-filter__item ${isSelected ? "is-selected" : ""}`}
                              onClick={() => {
                                setSelectedCategory(category.id);
                                setIsCategoryMenuOpen(false);
                              }}
                              role="menuitemradio"
                              aria-checked={isSelected}
                            >
                              <span className="category-filter__item-icon" aria-hidden="true">
                                {category.icon}
                              </span>
                              <span className="category-filter__item-label">{category.label}</span>
                              <span className="category-filter__item-count">{category.count}</span>
                              <span className="category-filter__item-check" aria-hidden="true">
                                {isSelected ? "✓" : ""}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <ProductGrid products={paginatedProducts} />
              {totalPages > 1 ? (
                <nav className="product-pagination" aria-label="Phân trang sản phẩm">
                  <button
                    type="button"
                    className="product-pagination__arrow"
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                    disabled={currentPage === 1}
                    aria-label="Trang trước"
                  >
                    ‹
                  </button>
                  <div className="product-pagination__pages">
                    {Array.from({ length: totalPages }, (_, index) => {
                      const page = index + 1;
                      return (
                        <button
                          key={page}
                          type="button"
                          className={`product-pagination__page ${currentPage === page ? "is-active" : ""}`}
                          onClick={() => setCurrentPage(page)}
                          aria-current={currentPage === page ? "page" : undefined}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    type="button"
                    className="product-pagination__arrow"
                    onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                    disabled={currentPage === totalPages}
                    aria-label="Trang sau"
                  >
                    ›
                  </button>
                </nav>
              ) : null}
            </>
          ) : (
            <EmptyState
              title="Không tìm thấy sản phẩm"
              description={`Không có sản phẩm nào phù hợp với từ khóa "${searchQuery}". Vui lòng thử lại.`}
              actionLabel="Xem tất cả sản phẩm"
              onAction={() => {
                setSearchInput("");
                setSearchQuery("");
                setSelectedCategory(ALL_CATEGORY);
              }}
            />
          )}
        </section>
      </main>
    </Page>
  );
};

export default ProductListPage;
