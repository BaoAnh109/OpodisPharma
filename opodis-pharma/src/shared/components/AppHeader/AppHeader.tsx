import { Avatar, useNavigate } from "zmp-ui";

import logo from "@/assets/images/brand/opodis-logo_full.png";
import { ROUTES } from "@/shared/constants/routes";
import { MOCK_USER } from "@/shared/constants/user.mock";

interface AppHeaderProps {
  compact?: boolean;
}

const AppHeader = ({ compact = false }: AppHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-x-0 top-0 z-[100] box-border border-b border-[rgba(0,168,120,0.08)] bg-white pb-[6px] pl-3 pr-[104px] pt-[max(var(--zaui-safe-area-inset-top,0px),env(safe-area-inset-top,0px))] shadow-[0_1px_6px_rgba(0,0,0,0.03)] max-[370px]:pl-2 max-[370px]:pr-24">
      <header
        className={`mx-auto flex h-auto w-full max-w-[520px] items-center justify-between gap-2 box-border pb-px ${
          compact ? "h-[60px]" : ""
        }`}
      >
        <button
          className="inline-flex h-[50px] shrink-0 cursor-pointer items-center border-0 bg-transparent p-0"
          type="button"
          onClick={() => navigate(ROUTES.HOME, { animate: true, direction: "backward" })}
          aria-label="Về trang chủ Opodis Pharma"
        >
          <img
            className="block h-12 w-auto max-w-[120px] object-contain"
            src={logo}
            alt="Opodis Pharma"
            width={120}
            height={48}
          />
        </button>

        {/* User Profile Badge (Mock Logged-in User) */}
        <div
          className="inline-flex h-8 min-w-0 shrink items-center gap-1.5 select-none rounded-full border border-[rgba(0,168,120,0.18)] bg-[rgba(0,168,120,0.08)] py-px pl-2.5 pr-0 max-[420px]:gap-1 max-[420px]:pl-2 max-[370px]:pr-[5px]"
          aria-label="Tài khoản người dùng đã đăng nhập"
        >
          <div className="flex min-w-0 flex-col items-end text-right leading-[1.15]">
            <span className="whitespace-nowrap text-[9px] font-semibold text-text-secondary max-[420px]:hidden">
              Xin chào,
            </span>
            <span className="max-w-[80px] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] font-extrabold text-primary-deep max-[420px]:max-w-[64px] max-[420px]:text-[11px]">
              {MOCK_USER.shortName}
            </span>
          </div>
          <div className="flex shrink-0 items-center justify-center">
            <Avatar
              className="shadow-[0_2px_6px_rgba(0,168,120,0.25)]"
              size={28}
              online
              src={MOCK_USER.avatar}
            >
              HA
            </Avatar>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AppHeader;
