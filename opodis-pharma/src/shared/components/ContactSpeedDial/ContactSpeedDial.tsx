import React, { useEffect } from "react";
import { Icon } from "zmp-ui";

import { BRAND } from "@/shared/constants/brand";
import { useContactSpeedDial } from "@/shared/state/contactState";

import "./ContactSpeedDial.css";

// SVG Icons matching brand aesthetics
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
      d="M11 19.4h3.4l-2.6-3.8c-.2-.3-.2-.7 0-.9.2-.2.6-.4 1-.4h3.8v1.4h-2.9l2.6 3.8c.2.3.2.7 0 .9-.2.2-.6.4-1 .4H11v-1.4zm6.5-5.1h1.5v5.1h-1.5v-5.1zm4.2 0h1.5v3.7h2.2v1.4h-3.7v-5.1zm5.2 2.6c0-1.5 1.1-2.7 2.6-2.7 1.5 0 2.6 1.2 2.6 2.7s-1.1 2.7-2.6 2.7c-1.5 0-2.6-1.2-2.6-2.7zm3.8 0c0-.8-.5-1.4-1.2-1.4s-1.2.6-1.2 1.4.5 1.4 1.2 1.4 1.2-.6 1.2-1.4z"
      fill="#0068ff"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="21" height="21" fill="white" aria-hidden="true">
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
  </svg>
);

const ContactSpeedDial: React.FC = () => {
  const [isOpen, setIsOpen] = useContactSpeedDial();

  // Close on Escape key
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

  return (
    <div className={`contact-speed-dial ${isOpen ? "is-open" : ""}`}>
      {/* Backdrop overlay: touching outside collapses the radial menu */}
      <div
        className={`contact-speed-dial__backdrop ${isOpen ? "is-active" : ""}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="contact-speed-dial__container" role="region" aria-label="Kênh liên hệ nhanh Opodis Pharma">
        {/* 1. Messenger Button (Radial: Top / 90 deg) */}
        <a
          className="contact-speed-dial__satellite contact-speed-dial__satellite--messenger"
          href={BRAND.social?.messenger || "https://m.me/678768355318156"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nhắn tin qua Facebook Messenger Opodis Pharma"
          onClick={handleClose}
          tabIndex={isOpen ? 0 : -1}
        >
          <div className="contact-speed-dial__icon-circle">
            <MessengerIcon />
          </div>
          <span className="contact-speed-dial__label">Messenger</span>
        </a>

        {/* 2. Zalo Button (Radial: Top-Left / 135 deg) */}
        <a
          className="contact-speed-dial__satellite contact-speed-dial__satellite--zalo"
          href={BRAND.social?.zalo || "https://zalo.me/0789394239"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo tư vấn trực tiếp Opodis Pharma: 0789 394 239"
          onClick={handleClose}
          tabIndex={isOpen ? 0 : -1}
        >
          <div className="contact-speed-dial__icon-circle">
            <ZaloIcon />
          </div>
          <span className="contact-speed-dial__label">Chat Zalo</span>
        </a>

        {/* 3. Hotline Call Button (Radial: Left / 180 deg) */}
        <a
          className="contact-speed-dial__satellite contact-speed-dial__satellite--hotline"
          href={`tel:${(BRAND.company?.mobile || "0789394239").replace(/[^0-9]/g, "")}`}
          aria-label="Gọi ngay Hotline tư vấn: 0789 394 239"
          onClick={handleClose}
          tabIndex={isOpen ? 0 : -1}
        >
          <div className="contact-speed-dial__icon-circle">
            <PhoneIcon />
          </div>
          <span className="contact-speed-dial__label">0789 394 239</span>
        </a>

        {/* Main Central Toggle Button */}
        <button
          type="button"
          className={`contact-speed-dial__trigger ${isOpen ? "is-active" : ""}`}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Đóng menu liên hệ" : "Mở 3 kênh liên hệ Opodis Pharma (Messenger, Zalo, Hotline)"}
        >
          <span className="contact-speed-dial__trigger-ripple" aria-hidden="true" />
          <span className="contact-speed-dial__trigger-icon">
            {isOpen ? (
              <Icon icon="zi-close" size={24} />
            ) : (
              <Icon icon="zi-call" size={24} />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContactSpeedDial;
