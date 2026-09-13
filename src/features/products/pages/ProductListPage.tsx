import { useEffect, useMemo, useRef, useState } from "react";
import { Icon, Page } from "zmp-ui";

import EmptyState from "@/shared/components/EmptyState/EmptyState";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import {
  PAGE_CONTENT_CLASS,
  PAGE_SHELL_CLASS,
} from "@/shared/constants/tailwind";

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
      if (categoryMenuRef.current && !categoryMenuRef.current.contains(event.target as Node)) {
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
    if (selectedCategory === SALE_CATEGORY) {
      if (!product.originalPrice || product.originalPrice <= product.price) return false;
    } else if (selectedCategory !== ALL_CATEGORY && product.category !== selectedCategory) {
      return false;
    }

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

  const pillClass = (category: string) =>
    `shrink-0 cursor-pointer whitespace-nowrap rounded-full border px-[14px] py-[7px] text-[12px] font-bold transition-all duration-[160ms] ${
      selectedCategory === category
        ? "border-primary-dark bg-primary-soft text-primary-dark"
        : "border-border bg-surface text-text-secondary"
    }`;

  return (
    <Page className={PAGE_SHELL_CLASS} name="products" resetScroll>
      <main className={PAGE_CONTENT_CLASS}>
        <section className="relative pt-1.5" aria-labelledby="catalog-title">
          <SectionTitle
            className="[&>h2]:mt-0.5 [&>h2]:text-[clamp(15px,4.2vw,17px)] [&>h2]:font-bold [&>h2]:leading-[1.35]"
            eyebrow="DANH MỤC SẢN PHẨM"
            title="Sản phẩm chính hãng Opodis"
            description="Đầy đủ các giải pháp chăm sóc gia đình và sát khuẩn y tế chuẩn GMP-WHO."
          />

          <form
            className="mb-3 flex items-stretch gap-2"
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
              setSearchQuery(searchInput.trim());
            }}
          >
            <div className="relative mb-0 flex min-w-0 flex-1 items-center rounded-full border border-border bg-surface transition-[border-color,box-shadow] duration-[160ms] focus-within:border-primary focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(0,168,120,0.15)]">
              <span className="flex items-center justify-center pl-[14px] text-text-secondary">
                <Icon icon="zi-search" size={18} />
              </span>
              <input
                type="text"
                className="h-[42px] min-w-0 flex-1 border-0 bg-transparent py-0 pl-2.5 pr-3 text-[13px] text-text-primary outline-none placeholder:text-text-muted"
                placeholder="Tìm tên, công dụng, thành phần..."
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                aria-label="Tìm kiếm sản phẩm"
              />
              {searchInput ? (
                <button
                  type="button"
                  className="mr-2 flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-full border-0 bg-[rgba(0,0,0,0.08)] text-[11px] text-text-secondary"
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
            <button
              type="submit"
              className="inline-flex h-11 min-w-[68px] flex-none cursor-pointer items-center justify-center gap-[5px] rounded-full border-0 bg-primary-dark px-3 text-[12px] font-black text-white shadow-[0_4px_12px_rgba(0,136,98,0.2)] transition-transform active:scale-[0.97]"
            >
              <span>Tìm</span>
            </button>
          </form>

          <div
            className="mb-2 flex gap-2 overflow-x-auto pb-2.5 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Lọc nhanh theo danh mục"
          >
            <button
              type="button"
              className={pillClass(ALL_CATEGORY)}
              onClick={() => setSelectedCategory(ALL_CATEGORY)}
              aria-selected={selectedCategory === ALL_CATEGORY}
            >
              Tất cả ({PRODUCTS.length})
            </button>
            <button
              type="button"
              className={pillClass(MOM_BABY_CATEGORY)}
              onClick={() => setSelectedCategory(MOM_BABY_CATEGORY)}
              aria-selected={selectedCategory === MOM_BABY_CATEGORY}
            >
              👶 Mẹ và bé ({PRODUCTS.filter((product) => product.category === MOM_BABY_CATEGORY).length})
            </button>
            <button
              type="button"
              className={pillClass(ANTISEPTIC_CATEGORY)}
              onClick={() => setSelectedCategory(ANTISEPTIC_CATEGORY)}
              aria-selected={selectedCategory === ANTISEPTIC_CATEGORY}
            >
              🧴 Sát khuẩn y tế ({PRODUCTS.filter((product) => product.category === ANTISEPTIC_CATEGORY).length})
            </button>
          </div>

          {filteredProducts.length > 0 ? (
            <>
              <div className="mt-[6px] flex items-center justify-between gap-2.5 mb-[14px]">
                <p className="m-0 min-w-0 text-[12px] text-text-secondary">
                  Hiển thị <strong>{pageStartIndex + 1}-{Math.min(pageStartIndex + PRODUCTS_PER_PAGE, filteredProducts.length)}</strong> / {filteredProducts.length} sản phẩm{" "}
                </p>

                <div
                  ref={categoryMenuRef}
                  className={`relative shrink-0 ${isCategoryMenuOpen ? "z-[120]" : ""}`}
                >
                  <button
                    type="button"
                    className="flex min-h-[38px] cursor-pointer items-center justify-between gap-2 rounded-md border border-[rgba(0,168,120,0.28)] bg-primary-soft px-[11px] py-[7px] text-primary-dark shadow-subtle transition-all duration-[160ms] active:bg-[rgba(0,168,120,0.16)]"
                    onClick={() => setIsCategoryMenuOpen((isOpen) => !isOpen)}
                    aria-expanded={isCategoryMenuOpen}
                    aria-controls="product-category-menu"
                  >
                    <span className="flex min-w-0 items-center gap-1.5 text-left text-primary-dark">
                      <Icon icon="zi-more-grid" size={20} />
                      <span className="whitespace-nowrap text-[13px] font-bold leading-none text-primary-deep">
                        Danh mục
                      </span>
                    </span>
                    <span
                      className={`inline-flex shrink-0 items-center justify-center text-primary-dark transition-transform duration-200 ${
                        isCategoryMenuOpen ? "rotate-180" : ""
                      }`}
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
                      className="absolute right-0 top-[calc(100%+8px)] z-[2] h-[min(50vh,360px)] min-h-[250px] w-[min(340px,calc(100vw-32px))] origin-top overflow-hidden rounded-md border border-[rgba(0,168,120,0.18)] bg-white shadow-[0_18px_44px_rgba(22,46,38,0.2)] animate-category-menu-drop"
                      role="menu"
                      aria-label="Chọn danh mục sản phẩm"
                    >
                      <div className="flex h-12 items-center justify-between border-b border-border bg-primary-soft px-[14px] text-primary-deep">
                        <strong className="text-[14px] font-black">Chọn danh mục</strong>
                        <span className="text-[10px] font-bold">{categoryOptions.length} lựa chọn</span>
                      </div>

                      <div className="h-[calc(100%-48px)] overflow-y-auto overscroll-contain">
                        {categoryOptions.map((category) => {
                          const isSelected = selectedCategory === category.id;

                          return (
                            <button
                              key={category.id}
                              type="button"
                              className={`grid min-h-[54px] w-full grid-cols-[38px_minmax(0,1fr)_auto_18px] items-center gap-2.5 border-0 border-b border-solid border-border bg-white px-[13px] py-[7px] text-left text-text-primary last:border-b-0 ${
                                isSelected ? "bg-[rgba(0,168,120,0.07)]" : ""
                              }`}
                              onClick={() => {
                                setSelectedCategory(category.id);
                                setIsCategoryMenuOpen(false);
                              }}
                              role="menuitemradio"
                              aria-checked={isSelected}
                            >
                              <span className="grid h-9 w-9 place-items-center rounded-md bg-surface text-[19px]" aria-hidden="true">
                                {category.icon}
                              </span>
                              <span className="min-w-0 text-[13px] font-extrabold leading-[1.3]">
                                {category.label}
                              </span>
                              <span className="grid h-6 min-w-6 place-items-center rounded-full bg-surface-strong px-1.5 text-[10px] font-extrabold text-text-secondary">
                                {category.count}
                              </span>
                              <span className="text-center text-[14px] font-black text-primary-dark" aria-hidden="true">
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
                <nav className="mt-5 mb-1 flex items-center justify-center gap-2.5" aria-label="Phân trang sản phẩm">
                  <button
                    type="button"
                    className="inline-grid h-8 w-8 cursor-pointer place-items-center rounded-sm border border-border bg-white p-0 text-[22px] leading-none text-primary-dark disabled:cursor-not-allowed disabled:opacity-35"
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                    disabled={currentPage === 1}
                    aria-label="Trang trước"
                  >
                    ‹
                  </button>
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }, (_, index) => {
                      const page = index + 1;
                      return (
                        <button
                          key={page}
                          type="button"
                          className={`inline-grid h-8 w-8 cursor-pointer place-items-center rounded-sm border p-0 text-[12px] font-extrabold ${
                            currentPage === page
                              ? "border-primary-dark bg-primary-dark text-white"
                              : "border-border bg-white text-text-secondary"
                          }`}
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
                    className="inline-grid h-8 w-8 cursor-pointer place-items-center rounded-sm border border-border bg-white p-0 text-[22px] leading-none text-primary-dark disabled:cursor-not-allowed disabled:opacity-35"
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
