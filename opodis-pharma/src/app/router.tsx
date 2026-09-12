import {
  AnimationRoutes,
  Route,
  ZMPRouter,
} from "zmp-ui";

import AboutPage from "@/features/company/pages/AboutPage";
import ContactPage from "@/features/company/pages/ContactPage";
import HomePage from "@/features/products/pages/HomePage";
import ProductDetailPage from "@/features/products/pages/ProductDetailPage";
import ProductListPage from "@/features/products/pages/ProductListPage";
import { ROUTES } from "@/shared/constants/routes";
import AppHeader from "@/shared/components/AppHeader/AppHeader";
import BottomNav from "@/shared/components/BottomNav/BottomNav";
import ContactSpeedDial from "@/shared/components/ContactSpeedDial/ContactSpeedDial";
import SwipeBack from "@/shared/components/SwipeBack/SwipeBack";

const Router = () => {
  return (
    <ZMPRouter>
      <AppHeader />
      <AnimationRoutes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.PRODUCTS} element={<ProductListPage />} />
        <Route path={ROUTES.PRODUCT_DETAIL_PATTERN} element={<ProductDetailPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
      </AnimationRoutes>
      <BottomNav />
      <ContactSpeedDial />
      <SwipeBack />
    </ZMPRouter>
  );
};

export default Router;
