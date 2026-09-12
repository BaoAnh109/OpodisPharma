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
    <div className="app-header-bar">
      <header className={`app-header${compact ? " app-header--compact" : ""}`}>
        <button
          className="app-header__brand"
          type="button"
          onClick={() => navigate(ROUTES.HOME, { animate: true, direction: "backward" })}
          aria-label="Về trang chủ Opodis Pharma"
        >
          <img
            className="app-header__logo"
            src={logo}
            alt="Opodis Pharma"
            width={110}
            height={42}
          />
        </button>

        {/* User Profile Badge (Mock Logged-in User) */}
        <div className="app-header__user" aria-label="Tài khoản người dùng đã đăng nhập">
          <div className="app-header__user-info">
            <span className="app-header__user-greeting">Xin chào,</span>
            <span className="app-header__user-name">{MOCK_USER.shortName}</span>
          </div>
          <div className="app-header__user-avatar">
            <Avatar
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
