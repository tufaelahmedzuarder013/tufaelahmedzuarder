import { ServiceItem } from "../types/service.types";

export const SERVICES: ServiceItem[] = [
  {
    id: "web",
    slug: "web-development",
    title: "Full-Stack Web Development",
    shortDesc: "Production-grade websites & scalable web applications.",
    bestFor: "Startups and enterprises needing fast, reliable, and scalable web apps.",
    tag: "WEB DEVELOPMENT",
    category: "FULL STACK & SAAS",
    showcaseImage: "/images/services/web-dev-showcase.jpg",
    metrics: [
      { value: "+300%", label: "SPEED GAIN" },
      { value: "99.9%", label: "SYSTEM UPTIME" },
      { value: "100%", label: "RESPONSIVE" },
    ],
    overview:
      "I build fast, reliable websites and web applications with modern frameworks. Clean architecture, responsive across every device, and structured so your product can grow without friction.",
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
    title: "UI / UX & Product Design",
    shortDesc: "Intuitive interfaces, design systems, and delightful UX.",
    bestFor: "Products needing modern aesthetic clarity and seamless usability.",
    tag: "UI / UX DESIGN",
    category: "DESIGN SYSTEMS",
    showcaseImage: "/images/services/uiux-design-showcase.jpg",
    metrics: [
      { value: "+180%", label: "CONVERSION RATE" },
      { value: "4.9★", label: "USER RATING" },
      { value: "120+", label: "DESIGN TOKENS" },
    ],
    overview:
      "User-centered design that translates complex product requirements into clean visual hierarchies, intuitive user journeys, and pixel-perfect micro-interactions.",
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
    title: "Performance & Core Web Vitals",
    shortDesc: "Sub-second load times and 100/100 Lighthouse benchmarks.",
    bestFor: "Existing sites suffering from sluggish loads, poor SEO, or bounce rates.",
    tag: "PERFORMANCE",
    category: "CORE WEB VITALS",
    showcaseImage: "/images/services/performance-showcase.jpg",
    metrics: [
      { value: "100", label: "LIGHTHOUSE SCORE" },
      { value: "0.4s", label: "LCP LOAD TIME" },
      { value: "-65%", label: "BOUNCE RATE" },
    ],
    overview:
      "I audit, diagnose, and refactor slow web applications to achieve lightning speeds, near-perfect Lighthouse scores, and significant boosts in search rankings and conversions.",
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
    title: "Motion & Interactive Experiences",
    shortDesc: "Fluid 60fps physics-based animations that captivate visitors.",
    bestFor: "Brands seeking premium, memorable, award-level web presence.",
    tag: "MOTION & 3D",
    category: "INTERACTIVE CRAFT",
    showcaseImage: "/images/services/motion-showcase.jpg",
    metrics: [
      { value: "60 FPS", label: "FLUID MOTION" },
      { value: "+240%", label: "ENGAGEMENT" },
      { value: "0ms", label: "RENDER JANK" },
    ],
    overview:
      "Transform static layouts into living, responsive experiences with smooth scroll narratives, physics-based micro-interactions, and hardware-accelerated animations that leave a lasting impression.",
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
