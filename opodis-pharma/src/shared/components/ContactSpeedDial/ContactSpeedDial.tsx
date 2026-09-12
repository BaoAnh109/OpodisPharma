import React, { useEffect } from "react";
import { Icon } from "zmp-ui";

import { BRAND } from "@/shared/constants/brand";
import { useContactSpeedDial } from "@/shared/state/contactState";

const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" width="23" height="23" fill="white" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.512 3.734 7.214V22l3.376-1.854c.915.254 1.884.392 2.89.392 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.055 12.438l-2.697-2.88-5.263 2.88 5.79-6.146 2.766 2.88 5.194-2.88-5.79 6.146z" />
  </svg>
);

const ZaloIcon = () => (
  <svg viewBox="0 0 36 36" width="24" height="24" fill="none" aria-hidden="true">
    <path
      d="M18 5C11.373 5 6 10.025 6 16.223c0 3.465 1.688 6.574 4.35 8.616L9.2 29.5l4.89-1.756C15.342 28.196 16.643 28.5 18 28.5c6.627 0 12-5.025 12-11.223S24.627 5 18 5z"
      fill="#ffffff"
    />
    <path
      d="M11 19.4h3.4l-2.6-3.8c-.2-.3-.2-.7 0-.9.2-.2.6-.4 1-.4h3.8v1.4h-2.9l2.6 3.8c.2.2.2.7 0 .9-.2.2-.6.4-1 .4H11v-1.4zm6.5-5.1h1.5v5.1h-1.5v-5.1zm4.2 0h1.5v3.7h2.2v1.4h-3.7v-5.1zm5.2 2.6c0-1.5 1.1-2.7 2.6-2.7 1.5 0 2.6 1.2 2.6 2.7s-1.1 2.7-2.6 2.7c-1.5 0-2.6-1.2-2.6-2.7zm3.8 0c0-.8-.5-1.4-1.2-1.4s-1.2.6-1.2 1.4.5 1.4 1.2 1.4 1.2-.6 1.2-1.4z"
      fill="#0068ff"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="21" height="21" fill="white" aria-hidden="true">
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
  </svg>
);

type SatelliteKind = "messenger" | "zalo" | "hotline";

const ContactSpeedDial: React.FC = () => {
  const [isOpen, setIsOpen] = useContactSpeedDial();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const satelliteClass = (kind: SatelliteKind) => {
    const openPosition = {
      messenger:
        "translate-x-0 translate-y-[-78px] scale-100 delay-[50ms] max-[370px]:translate-y-[-72px] max-[370px]:scale-[0.94]",
      zalo:
        "translate-x-[-55px] translate-y-[-55px] scale-100 delay-[20ms] max-[370px]:translate-x-[-50px] max-[370px]:translate-y-[-50px] max-[370px]:scale-[0.94]",
      hotline:
        "translate-x-[-78px] translate-y-0 scale-100 delay-0 max-[370px]:translate-x-[-72px] max-[370px]:scale-[0.94]",
    }[kind];

    return `absolute left-[3px] top-[3px] z-[5] flex h-[46px] w-[46px] items-center justify-center translate-x-0 translate-y-0 text-center no-underline outline-none opacity-0 pointer-events-none transition-[transform,opacity] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
      isOpen
        ? `opacity-100 pointer-events-auto ${openPosition}`
        : "scale-[0.2]"
    }`;
  };

  const labelClass = isOpen
    ? "pointer-events-none absolute right-[calc(100%+12px)] translate-x-0 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(15,23,42,0.88)] px-[10px] py-1 text-[11px] font-bold text-white opacity-100 shadow-[0_2px_8px_rgba(0,0,0,0.2)] backdrop-blur-[8px] transition-[opacity,transform] duration-200"
    : "pointer-events-none absolute right-[calc(100%+12px)] translate-x-[6px] rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(15,23,42,0.88)] px-[10px] py-1 text-[11px] font-bold text-white opacity-0 shadow-[0_2px_8px_rgba(0,0,0,0.2)] backdrop-blur-[8px] transition-[opacity,transform] duration-200";

  return (
    <div className="relative z-[120]">
      <div
        className={`pointer-events-none fixed inset-0 z-[115] bg-[rgba(15,23,42,0.38)] opacity-0 backdrop-blur-[2px] transition-opacity duration-[240ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "pointer-events-auto opacity-100" : ""
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="fixed bottom-[calc(64px+env(safe-area-inset-bottom,14px)+14px)] right-4 z-[120] h-[52px] w-[52px] max-[370px]:right-3" role="region" aria-label="Kênh liên hệ nhanh Opodis Pharma">
        <a
          className={satelliteClass("messenger")}
          href={BRAND.social?.messenger || "https://m.me/678768355318156"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nhắn tin qua Facebook Messenger Opodis Pharma"
          onClick={handleClose}
          tabIndex={isOpen ? 0 : -1}
        >
          <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[rgba(255,255,255,0.9)] bg-[radial-gradient(circle_at_35%_35%,#9b59b6,#6c3483)] shadow-[0_0_0_7px_rgba(123,44,191,0.24),0_4px_14px_rgba(123,44,191,0.45)] transition-[transform,filter] duration-[160ms] active:scale-[0.92] active:brightness-110">
            <MessengerIcon />
          </div>
          <span className={labelClass}>Messenger</span>
        </a>

        <a
          className={satelliteClass("zalo")}
          href={BRAND.social?.zalo || "https://zalo.me/0789394239"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo tư vấn trực tiếp Opodis Pharma: 0789 394 239"
          onClick={handleClose}
          tabIndex={isOpen ? 0 : -1}
        >
          <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[rgba(255,255,255,0.9)] bg-[radial-gradient(circle_at_35%_35%,#29b6f6,#0068ff)] shadow-[0_0_0_7px_rgba(0,104,255,0.24),0_4px_14px_rgba(0,104,255,0.45)] transition-[transform,filter] duration-[160ms] active:scale-[0.92] active:brightness-110">
            <ZaloIcon />
          </div>
          <span className={labelClass}>Chat Zalo</span>
        </a>

        <a
          className={satelliteClass("hotline")}
          href={`tel:${(BRAND.company?.mobile || "0789394239").replace(/[^0-9]/g, "")}`}
          aria-label="Gọi ngay Hotline tư vấn: 0789 394 239"
          onClick={handleClose}
          tabIndex={isOpen ? 0 : -1}
        >
          <div className="flex h-[46px] w-[46px] shrink-0 animate-hotline-pulse items-center justify-center rounded-full border-[1.5px] border-[rgba(255,255,255,0.9)] bg-[radial-gradient(circle_at_35%_35%,#e74c3c,#c0392b)] shadow-[0_0_0_7px_rgba(231,76,60,0.24),0_4px_14px_rgba(231,76,60,0.45)] transition-[transform,filter] duration-[160ms] active:scale-[0.92] active:brightness-110">
            <PhoneIcon />
          </div>
          <span className={labelClass}>0789 394 239</span>
        </a>

        <button
          type="button"
          className={`relative z-10 flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-2 border-[rgba(255,255,255,0.85)] bg-[linear-gradient(135deg,#00a878,#00845c)] p-0 text-white shadow-[0_4px_16px_rgba(0,168,120,0.38),0_2px_6px_rgba(0,0,0,0.12)] outline-none transition-[transform,background-color,box-shadow] duration-[250ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] active:scale-[0.92] ${
            isOpen
              ? "rotate-90 bg-none bg-[#334155] shadow-[0_4px_14px_rgba(15,23,42,0.3)]"
              : ""
          }`}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Đóng menu liên hệ" : "Mở 3 kênh liên hệ Opodis Pharma (Messenger, Zalo, Hotline)"}
        >
          <span
            className={`pointer-events-none absolute -inset-[6px] rounded-full border-2 border-[rgba(0,168,120,0.5)] animate-contact-ripple ${
              isOpen ? "hidden" : ""
            }`}
            aria-hidden="true"
          />
          <span className="flex items-center justify-center transition-transform duration-200">
            {isOpen ? <Icon icon="zi-close" size={24} /> : <Icon icon="zi-call" size={24} />}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContactSpeedDial;
