export type ProjectCategory = "all" | "web" | "ecommerce" | "landing" | "mobile";

export interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  categoryLabel: string;
  category: "web" | "ecommerce" | "landing" | "mobile";
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  year: string;
  role: string;
  stack: string[];
  liveUrl?: string;
  heroImage: string;
  galleryImages: string[];
}
