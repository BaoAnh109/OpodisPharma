import React from "react";
import { Icon, useLocation, useNavigate } from "zmp-ui";

import { ROUTES } from "@/shared/constants/routes";
import { useContactSpeedDial } from "@/shared/state/contactState";

export type NavTabKey = "home" | "products" | "about" | "contact";

interface BottomNavProps {
  currentTab?: NavTabKey;
}

const TAB_ORDER: Record<NavTabKey, number> = {
  home: 0,
  products: 1,
  about: 2,
  contact: 3,
};

const TAB_ROUTES: Record<NavTabKey, string> = {
  home: ROUTES.HOME,
  products: ROUTES.PRODUCTS,
  about: ROUTES.ABOUT,
  contact: ROUTES.CONTACT,
};

const BottomNav: React.FC<BottomNavProps> = ({ currentTab }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setIsSpeedDialOpen] = useContactSpeedDial();

  const getActiveTab = (): NavTabKey => {
    if (currentTab) return currentTab;
    const path = location.pathname;
    if (path === ROUTES.PRODUCTS) return "products";
    if (path === ROUTES.ABOUT) return "about";
    if (path === ROUTES.CONTACT) return "contact";
    return "home";
  };

  const active = getActiveTab();

  // Ẩn BottomNav khi đang ở trang chi tiết sản phẩm (trang chi tiết có thanh tác vụ riêng)
  if (location.pathname.startsWith("/products/") && location.pathname !== ROUTES.PRODUCTS) {
    return null;
  }

  const handleTabClick = (tab: NavTabKey) => {
    setIsSpeedDialOpen(false);
    if (tab === active) return;

    const currentIndex = TAB_ORDER[active];
    const targetIndex = TAB_ORDER[tab];
    const direction = targetIndex > currentIndex ? "forward" : "backward";

    navigate(TAB_ROUTES[tab], {
      animate: true,
      direction,
    });
  };

  const itemClass = (tab: NavTabKey) =>
    `relative flex h-full min-w-0 flex-1 cursor-pointer select-none flex-col items-center justify-center gap-[3px] border-0 bg-transparent px-1 pb-1 pt-1.5 text-text-secondary transition-[color,transform] duration-[180ms] active:scale-[0.92] ${
      active === tab
        ? "text-primary-dark after:absolute after:left-1/2 after:top-0 after:h-[3px] after:w-5 after:-translate-x-1/2 after:rounded-b-[3px] after:bg-primary after:content-['']"
        : ""
    }`;

  const iconWrapperClass = (tab: NavTabKey) =>
    `relative grid h-7 w-[38px] place-items-center rounded-full transition-[background-color,color,transform] duration-200 ${
      active === tab ? "bg-primary-soft text-primary-dark" : ""
    }`;

  const labelClass = (tab: NavTabKey) =>
    `whitespace-nowrap text-[11px] font-semibold tracking-[-0.01em] transition-[color,font-weight] duration-200 ${
      active === tab ? "font-extrabold text-primary-dark" : ""
    }`;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-[rgba(0,168,120,0.12)] bg-[rgba(255,255,255,0.94)] pb-[env(safe-area-inset-bottom,10px)] shadow-[0_-4px_20px_rgba(10,38,28,0.06)] backdrop-blur-[16px]"
      aria-label="Điều hướng chính phía dưới"
    >
      <div className="mx-auto flex h-[64px] max-w-[520px] items-center justify-around px-2">
        <button
          type="button"
          className={itemClass("home")}
          onClick={() => handleTabClick("home")}
          aria-label="Về trang chủ"
          aria-current={active === "home" ? "page" : undefined}
        >
          <div className={iconWrapperClass("home")}>
            <span className="flex items-center justify-center text-[22px] leading-none">
              <Icon icon="zi-home" size={20} />
            </span>
          </div>
          <span className={labelClass("home")}>Trang chủ</span>
        </button>

        <button
          type="button"
          className={itemClass("products")}
          onClick={() => handleTabClick("products")}
          aria-label="Danh mục sản phẩm"
          aria-current={active === "products" ? "page" : undefined}
        >
          <div className={iconWrapperClass("products")}>
            <span className="flex items-center justify-center text-[22px] leading-none">
              <Icon icon="zi-more-grid" size={20} />
            </span>
          </div>
          <span className={labelClass("products")}>Sản phẩm</span>
        </button>

        <button
          type="button"
          className={itemClass("about")}
          onClick={() => handleTabClick("about")}
          aria-label="Giới thiệu Opodis"
          aria-current={active === "about" ? "page" : undefined}
        >
          <div className={iconWrapperClass("about")}>
            <span className="flex items-center justify-center text-[22px] leading-none">
              <Icon icon="zi-info-circle" size={20} />
            </span>
          </div>
          <span className={labelClass("about")}>Về Opodis</span>
        </button>

        <button
          type="button"
          className={itemClass("contact")}
          onClick={() => handleTabClick("contact")}
          aria-label="Liên hệ và hỗ trợ"
          aria-current={active === "contact" ? "page" : undefined}
        >
          <div className={iconWrapperClass("contact")}>
            <span className="flex items-center justify-center text-[22px] leading-none">
              <Icon icon="zi-call" size={20} />
            </span>
          </div>
          <span className={labelClass("contact")}>Liên hệ</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
