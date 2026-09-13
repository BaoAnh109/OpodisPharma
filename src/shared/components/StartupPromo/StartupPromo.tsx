import { useState } from "react";
import { Icon, Modal } from "zmp-ui";

import pharmaPromo from "@/assets/images/banners/banner3.webp";

const StartupPromo = () => {
  const [visible, setVisible] = useState(true);

  const closePromo = () => setVisible(false);

  return (
    <Modal
      visible={visible}
      onClose={closePromo}
      maskClosable
      unmountOnClose
      zIndex={2000}
      modalClassName="!w-[min(92vw,420px)] !max-w-[420px] !overflow-visible !rounded-2xl !bg-transparent !p-0 !shadow-none [&_.zaui-modal-content-main]:!p-0 [&_.zaui-modal-content-title]:!hidden [&_.zaui-modal-content-description]:!hidden"
      maskClassName="!bg-slate-900/60"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_20px_48px_rgba(15,23,42,0.3)]">
        <img
          src={pharmaPromo}
          alt="Sản phẩm dược Opodis Pharma"
          className="block h-auto max-h-[76vh] w-full object-contain"
        />
        <button
          type="button"
          aria-label="Đóng quảng cáo"
          onClick={closePromo}
          className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-white shadow-md transition-colors hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-white/80"
        >
          <Icon icon="zi-close" size={18} />
        </button>
      </div>
    </Modal>
  );
};

export default StartupPromo;
