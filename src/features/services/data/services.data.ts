import { ServiceItem } from "../types/service.types";

export const SERVICES: ServiceItem[] = [
  {
    id: "web",
    slug: "web-development",
    title: "Web Development",
    shortDesc: "Production-grade websites & web apps, built to scale.",
    bestFor: "Production-grade websites & web apps, built to scale.",
    overview:
      "I build fast, reliable websites and web applications with modern frameworks. Clean architecture, responsive on every device, and structured so your product can grow without friction.",
    heroImage:
      "https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=1000",
    included: [
      "Custom responsive builds (mobile, tablet, desktop)",
      "Component-based architecture in React / Next.js",
      "REST API design & third-party integrations",
      "SEO-friendly, accessible markup",
      "Testing, QA & cross-browser checks",
    ],
    deliverables: [
      "Production-ready codebase",
      "Deployment & live launch setup",
      "Clear documentation & handover",
      "30 days post-launch support",
    ],
    techStack: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    icon: "code",
  },
  {
    id: "uiux",
    slug: "ui-ux-design",
    title: "UI / UX Design",
    shortDesc: "Intuitive interfaces and cohesive design systems.",
    bestFor: "Products needing modern aesthetic clarity and seamless usability.",
    overview:
      "User-centered design that translates product requirements into clean visual hierarchies, intuitive flows, and delightful micro-interactions.",
    heroImage:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1000",
    included: [
      "Wireframing & user journey mapping",
      "High-fidelity visual design in Figma",
      "Design systems & component tokens",
      "Interactive prototypes for validation",
      "Developer-ready specs and redlines",
    ],
    deliverables: [
      "Figma design system & UI library",
      "Clickable interactive prototypes",
      "Responsive screen layouts",
      "Typography & color guideline documentation",
    ],
    techStack: ["Figma", "Design Systems", "Prototyping", "Design Tokens"],
    icon: "palette",
  },
  {
    id: "performance",
    slug: "performance-optimization",
    title: "Performance Optimization",
    shortDesc: "Sub-second load times and 95+ Core Web Vitals.",
    bestFor: "Existing sites suffering from sluggish loads, poor SEO or bounce rates.",
    overview:
      "I audit, diagnose, and refactor slow websites to achieve blazing speeds, perfect Lighthouse scores, and optimal conversion rates.",
    heroImage:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1000",
    included: [
      "Complete Core Web Vitals audit (LCP, FID, CLS)",
      "Image and asset compression pipelines",
      "JavaScript bundle analysis & code-splitting",
      "Caching strategies & CDN configuration",
      "Database & API latency tuning",
    ],
    deliverables: [
      "Before & after benchmark performance report",
      "Lighthouse 95+ score achievement",
      "Optimized production bundle",
      "Long-term monitoring strategy",
    ],
    techStack: ["Lighthouse", "Web Vitals", "Next.js Bundle Analyzer", "CDN Caching"],
    icon: "zap",
  },
  {
    id: "motion",
    slug: "motion-interaction",
    title: "Motion & Interaction",
    shortDesc: "Subtle physics-based animations that delight users.",
    bestFor: "Brands seeking premium, memorable, award-level web presence.",
    overview:
      "Transform static layouts into responsive, dynamic experiences with smooth scroll effects, magnetic elements, and interactive gestures that elevate perception.",
    heroImage:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1000",
    included: [
      "Page transitions & curtain reveals",
      "Scroll-driven narrative animations",
      "Custom cursor & magnetic button physics",
      "3D interactive hover & tilt states",
      "Accessible reduced-motion fallbacks",
    ],
    deliverables: [
      "Custom animation component library",
      "60fps hardware-accelerated code",
      "Reduced-motion compliance",
      "Interactive interaction guide",
    ],
    techStack: ["Framer Motion", "Tailwind CSS", "Canvas", "CSS Houdini"],
    icon: "sparkles",
  },
];
