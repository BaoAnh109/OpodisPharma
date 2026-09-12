import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigationType } from "react-router-dom";
import { Icon, useLocation, useNavigate } from "zmp-ui";

import AboutPage from "@/features/company/pages/AboutPage";
import ContactPage from "@/features/company/pages/ContactPage";
import HomePage from "@/features/products/pages/HomePage";
import ProductListPage from "@/features/products/pages/ProductListPage";
import { ROUTES } from "@/shared/constants/routes";

const EDGE_START_DISTANCE = 36;
const SWIPE_TRIGGER_RATIO = 0.5;

type TouchState = {
  startX: number;
  startY: number;
  routeElement: HTMLElement | null;
  triggerDistance: number;
  committed: boolean;
};

type TimerRef = {
  current: number | null;
};

const clearTimer = (timer: TimerRef) => {
  if (timer.current !== null) {
    window.clearTimeout(timer.current);
    timer.current = null;
  }
};

const clearRouteTransform = (routeElement: HTMLElement | null) => {
  if (!routeElement) return;
  routeElement.style.removeProperty("transform");
  routeElement.style.removeProperty("transition");
  routeElement.style.removeProperty("will-change");
  routeElement.style.removeProperty("z-index");
};

const getPathname = (path: string) => path.split(/[?#]/, 1)[0];

const getFallbackPreviewPath = (pathname: string) =>
  pathname.startsWith("/products/") ? ROUTES.PRODUCTS : ROUTES.HOME;

const renderPreviewPage = (path: string): ReactNode => {
  const pathname = getPathname(path);

  if (pathname.startsWith("/products/")) {
    return <ProductListPage />;
  }

  switch (pathname) {
    case ROUTES.PRODUCTS:
      return <ProductListPage />;
    case ROUTES.ABOUT:
      return <AboutPage />;
    case ROUTES.CONTACT:
      return <ContactPage />;
    case ROUTES.HOME:
    default:
      return <HomePage />;
  }
};

const SwipeBack = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigationType = useNavigationType();
  const touchState = useRef<TouchState | null>(null);
  const navigationTimer = useRef<number | null>(null);
  const routeResetTimer = useRef<number | null>(null);
  const routeHistory = useRef<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [swipeProgress, setSwipeProgress] = useState(0);

  const currentPath = `${location.pathname}${location.search}${location.hash}`;
  const previousPath =
    routeHistory.current.length > 1
      ? routeHistory.current[routeHistory.current.length - 2]
      : getFallbackPreviewPath(location.pathname);

  useEffect(() => {
    const history = routeHistory.current;
    const currentIndex = history.lastIndexOf(currentPath);

    if (history.length === 0) {
      history.push(currentPath);
      return;
    }

    if (navigationType === "POP") {
      if (currentIndex >= 0) {
        history.splice(currentIndex + 1);
      } else {
        history.push(currentPath);
      }
      return;
    }

    if (navigationType === "REPLACE") {
      history[history.length - 1] = currentPath;
      return;
    }

    if (history[history.length - 1] !== currentPath) {
      history.push(currentPath);
    }
  }, [currentPath, navigationType]);

  useEffect(() => {
    const canGoBack = location.pathname !== ROUTES.HOME;

    if (!canGoBack) {
      touchState.current = null;
      setIsDragging(false);
      setSwipeProgress(0);
      return undefined;
    }

    const restoreRoutePosition = (routeElement: HTMLElement | null) => {
      if (!routeElement) return;

      clearTimer(routeResetTimer);
      routeElement.style.transition = "transform 180ms ease-out";
      routeElement.style.transform = "translate3d(0, 0, 0)";
      routeResetTimer.current = window.setTimeout(() => {
        clearRouteTransform(routeElement);
        routeResetTimer.current = null;
      }, 180);
    };

    const resetTouch = () => {
      const currentState = touchState.current;
      if (!currentState || currentState.committed) return;

      restoreRoutePosition(currentState.routeElement);
      touchState.current = null;
      setIsDragging(false);
      setSwipeProgress(0);
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        resetTouch();
        return;
      }

      if (document.querySelector('[role="dialog"][aria-modal="true"]')) {
        resetTouch();
        return;
      }

      const target = event.target;
      if (
        target instanceof Element &&
        target.closest(
          'a, button, input, textarea, select, [contenteditable="true"], [role="button"]',
        )
      ) {
        resetTouch();
        return;
      }

      const touch = event.touches[0];
      if (touch.clientX > EDGE_START_DISTANCE) {
        resetTouch();
        return;
      }

      clearTimer(routeResetTimer);

      touchState.current = {
        startX: touch.clientX,
        startY: touch.clientY,
        routeElement: document.querySelector<HTMLElement>(".zaui-routes-item"),
        triggerDistance: Math.max(140, Math.round(window.innerWidth * SWIPE_TRIGGER_RATIO)),
        committed: false,
      };
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentState = touchState.current;
      if (!currentState || currentState.committed || event.touches.length !== 1) {
        return;
      }

      const touch = event.touches[0];
      const deltaX = touch.clientX - currentState.startX;
      const deltaY = touch.clientY - currentState.startY;
      const verticalDistance = Math.abs(deltaY);

      if (deltaX <= 0 || verticalDistance > Math.max(18, deltaX * 0.85)) {
        if (verticalDistance > 18 || deltaX < -8) {
          resetTouch();
        }
        return;
      }

      event.preventDefault();

      const routeOffset = Math.min(deltaX * 0.88, currentState.triggerDistance * 1.15);
      if (currentState.routeElement) {
        currentState.routeElement.style.willChange = "transform";
        currentState.routeElement.style.transition = "none";
        currentState.routeElement.style.zIndex = "2";
        currentState.routeElement.style.transform = `translate3d(${routeOffset}px, 0, 0)`;
      }

      setIsDragging(true);
      setSwipeProgress(Math.min(deltaX / currentState.triggerDistance, 1));

      if (deltaX >= currentState.triggerDistance && verticalDistance <= 80) {
        currentState.committed = true;
        clearTimer(routeResetTimer);
        if (currentState.routeElement) {
          currentState.routeElement.style.transition = "transform 180ms ease-out";
          currentState.routeElement.style.transform = "translate3d(100%, 0, 0)";
        }

        clearTimer(navigationTimer);
        navigationTimer.current = window.setTimeout(() => {
          touchState.current = null;
          setIsDragging(false);
          setSwipeProgress(0);
          navigate(-1);
          navigationTimer.current = null;
        }, 160);
      }
    };

    const handleTouchEnd = () => {
      const currentState = touchState.current;
      if (!currentState || currentState.committed) return;
      resetTouch();
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      clearTimer(navigationTimer);
      clearTimer(routeResetTimer);
      clearRouteTransform(touchState.current?.routeElement ?? null);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [location.pathname, navigate]);

  const handleArrowClick = () => {
    if (navigationTimer.current !== null) {
      window.clearTimeout(navigationTimer.current);
      navigationTimer.current = null;
    }

    clearRouteTransform(touchState.current?.routeElement ?? null);
    touchState.current = null;
    setIsDragging(false);
    setSwipeProgress(0);
    navigate(-1);
  };

  if (location.pathname === ROUTES.HOME || !isDragging) {
    return null;
  }

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[1] overflow-hidden bg-white"
        aria-hidden="true"
      >
        <div className="h-full w-full overflow-hidden">{renderPreviewPage(previousPath)}</div>
      </div>

      <div className="pointer-events-none fixed inset-y-0 left-0 z-[1100] flex items-center">
        <button
          type="button"
          aria-label="Quay lại trang trước"
          onClick={handleArrowClick}
          className="pointer-events-auto ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-primary-dark text-white shadow-[0_6px_18px_rgba(0,96,69,0.3)] transition-[opacity,transform,background-color] duration-150 hover:bg-primary"
          style={{
            opacity: 0.55 + swipeProgress * 0.45,
            transform: `translate3d(${Math.round(swipeProgress * 16)}px, 0, 0) scale(${0.9 + swipeProgress * 0.1})`,
          }}
        >
          <Icon icon="zi-arrow-left" size={22} />
        </button>
      </div>
    </>
  );
};

export default SwipeBack;
