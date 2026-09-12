import avatar from "@/assets/avatar/avatar.webp";

export interface UserProfile {
  id: string;
  name: string;
  shortName: string;
  memberTier: string;
  avatar: string;
}

export const MOCK_USER: UserProfile = {
  id: "user_opodis_8899",
  name: "Nguyễn Hoàng Anh",
  shortName: "Anh",
  memberTier: "Thành viên Opodis",
  avatar,
};
