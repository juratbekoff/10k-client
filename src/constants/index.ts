export const loginUrl = "http://localhost:5175/login";
export const registerUrl = "http://localhost:5175/register";

export interface postProps {
  id: number;
  adminId: number;
  categoryId: number;
  title: string;
  descr: string;
  cover_image: string;
  views: number;
  isCPA: boolean;
  isActive: boolean;
  ads_post_link: string | null;
  createdAt: string;
  updatedAt: string;
  category: {
    name: string;
  };
}
