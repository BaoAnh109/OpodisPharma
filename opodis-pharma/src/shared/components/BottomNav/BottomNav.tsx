import React from "react";
import { Icon, useLocation, useNavigate } from "zmp-ui";

import { ROUTES } from "@/shared/constants/routes";
import { useContactSpeedDial } from "@/shared/state/contactState";

import "./BottomNav.css";

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

  // Determine active tab based on prop or current route
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

  return (
    <nav className="bottom-nav" aria-label="Điều hướng chính phía dưới">
      <div className="bottom-nav__inner">
        <button
          type="button"
          className={`bottom-nav__item ${active === "home" ? "is-active" : ""}`}
          onClick={() => handleTabClick("home")}
          aria-label="Về trang chủ"
          aria-current={active === "home" ? "page" : undefined}
        >
          <div className="bottom-nav__icon-wrapper">
            <span className="bottom-nav__icon">
              <Icon icon="zi-home" size={20} />
            </span>
          </div>
          <span className="bottom-nav__label">Trang chủ</span>
        </button>

        <button
          type="button"
          className={`bottom-nav__item ${active === "products" ? "is-active" : ""}`}
          onClick={() => handleTabClick("products")}
          aria-label="Danh mục sản phẩm"
          aria-current={active === "products" ? "page" : undefined}
        >
          <div className="bottom-nav__icon-wrapper">
            <span className="bottom-nav__icon">
              <Icon icon="zi-more-grid" size={20} />
            </span>
          </div>
          <span className="bottom-nav__label">Sản phẩm</span>
        </button>

        <button
          type="button"
          className={`bottom-nav__item ${active === "about" ? "is-active" : ""}`}
          onClick={() => handleTabClick("about")}
          aria-label="Giới thiệu Opodis"
          aria-current={active === "about" ? "page" : undefined}
        >
          <div className="bottom-nav__icon-wrapper">
            <span className="bottom-nav__icon">
              <Icon icon="zi-info-circle" size={20} />
            </span>
          </div>
          <span className="bottom-nav__label">Về Opodis</span>
        </button>

        <button
          type="button"
          className={`bottom-nav__item ${active === "contact" ? "is-active" : ""}`}
          onClick={() => handleTabClick("contact")}
          aria-label="Liên hệ và hỗ trợ"
          aria-current={active === "contact" ? "page" : undefined}
        >
          <div className="bottom-nav__icon-wrapper">
            <span className="bottom-nav__icon">
              <Icon icon="zi-call" size={20} />
            </span>
          </div>
          <span className="bottom-nav__label">Liên hệ</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
