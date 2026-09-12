export const ROUTES = {
  HOME: "/",
  PRODUCTS: "/products",
  ABOUT: "/about",
  CONTACT: "/contact",
  PRODUCT_DETAIL_PATTERN: "/products/:id",
  PRODUCT_DETAIL: (id: number | string) => `/products/${id}`,
} as const;
