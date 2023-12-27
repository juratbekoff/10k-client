export interface Post {
  id: number;
  adminId: number;
  categoryId: number;
  title: string;
  descr: string;
  cover_image: string;
  views: number;
  isCPA: boolean;
  isActive: boolean;
  ads_post_link: string;
  source_name: string;
  source_link: string;
  createdAt: string;
  updatedAt: string;
  category: {
    name: string;
  };
}
