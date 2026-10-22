export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  bestFor: string;
  overview: string;
  heroImage: string;
  showcaseImage?: string;
  tag?: string;
  category?: string;
  featured?: boolean;
  metrics?: { value: string; label: string }[];
  included: string[];
  deliverables: string[];
  techStack: string[];
  icon: string;
}
