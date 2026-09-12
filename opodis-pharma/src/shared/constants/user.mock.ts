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
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80",
};
