import { ProjectItem } from "../types/project.types";

const P = (id: number, w: number = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const PROJECTS: ProjectItem[] = [
  {
    id: 7191162,
    slug: "nova-commerce",
    title: "Nova Commerce",
    categoryLabel: "E-commerce Platform",
    category: "ecommerce",
    summary: "A modern storefront built for speed and conversions.",
    overview:
      "Nova Commerce is a full e-commerce experience with a fast product catalog, smooth cart and checkout, and a clean admin dashboard for managing orders and inventory.",
    challenge:
      "The client's old store was slow and clunky on mobile, hurting conversions. They needed a fast, modern build that felt effortless to shop on any device.",
    solution:
      "I rebuilt the store on Next.js with optimized images, lazy-loaded sections, and a streamlined checkout. The result loads in under two seconds and feels instant as you browse.",
    year: "2025",
    role: "Full-Stack Development",
    stack: ["Next.js", "Stripe", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://tufaelahmedzuarder.com",
    heroImage: P(7191162, 1100),
    galleryImages: [P(7621352, 800), P(326514, 800)],
  },
  {
    id: 326514,
    slug: "pulse-dashboard",
    title: "Pulse Dashboard",
    categoryLabel: "Analytics Web App",
    category: "web",
    summary: "Real-time metrics with intuitive charts and filters.",
    overview:
      "Pulse Dashboard centralizes marketing, sales, and product usage into one high-performance interface with custom interactive charts.",
    challenge:
      "Handling thousands of data points without lagging the browser or confusing the user with cluttered visuals.",
    solution:
      "Engineered an optimized React architecture using memoization, server-side aggregation, and smooth canvas charting that renders 60fps.",
    year: "2024",
    role: "Frontend Architecture",
    stack: ["React", "TypeScript", "Redux Toolkit", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://tufaelahmedzuarder.com",
    heroImage: P(326514, 1100),
    galleryImages: [P(7191162, 800), P(131778, 800)],
  },
  {
    id: 285814,
    slug: "drift-studio",
    title: "Drift Studio",
    categoryLabel: "Agency Landing Page",
    category: "landing",
    summary: "High-impact visual design with buttery smooth scroll.",
    overview:
      "A creative agency showcase featuring full-bleed typography, interactive mouse-following cursor physics, and horizontal scroll sections.",
    challenge:
      "Balancing heavy motion graphics with sub-second page loads and seamless mobile touch responsiveness.",
    solution:
      "Implemented modular scroll triggers, GPU-accelerated transforms, and adaptive asset loading based on connection speed.",
    year: "2025",
    role: "Creative Development",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "WebGL"],
    liveUrl: "https://tufaelahmedzuarder.com",
    heroImage: P(285814, 1100),
    galleryImages: [P(8408538, 800), P(7679865, 800)],
  },
  {
    id: 131778,
    slug: "tasker-pro",
    title: "Tasker Pro",
    categoryLabel: "Productivity Web App",
    category: "web",
    summary: "Collaborative project management with instant sync.",
    overview:
      "Tasker Pro lets distributed teams organize sprints, manage kanban boards, and track time with instant updates across all active team members.",
    challenge:
      "Enabling instant multi-user drag-and-drop state synchronization without race conditions.",
    solution:
      "Used optimistic UI updates with Redux Toolkit and WebSockets to make every user action feel completely zero-latency.",
    year: "2024",
    role: "Full-Stack Development",
    stack: ["React", "Redux", "Node.js", "Socket.io", "PostgreSQL"],
    liveUrl: "https://tufaelahmedzuarder.com",
    heroImage: P(131778, 1100),
    galleryImages: [P(326514, 800), P(19876064, 800)],
  },
  {
    id: 7621352,
    slug: "mode-market",
    title: "Mode Market",
    categoryLabel: "Fashion E-commerce",
    category: "ecommerce",
    summary: "Editorial style shopping experience with lightning search.",
    overview:
      "A boutique fashion brand store with multi-faceted filtering, size guide modals, and integrated payment gateway.",
    challenge:
      "Delivering high-fashion magazine aesthetics while retaining high conversion rates and accessible keyboard navigation.",
    solution:
      "Built custom image grids with layout shift prevention, combined with fuzzy instant search across 5,000+ SKUs.",
    year: "2024",
    role: "UI/UX & Frontend",
    stack: ["Next.js", "Tailwind CSS", "Shopify Storefront API", "TypeScript"],
    liveUrl: "https://tufaelahmedzuarder.com",
    heroImage: P(7621352, 1100),
    galleryImages: [P(7191162, 800), P(8533353, 800)],
  },
  {
    id: 8408538,
    slug: "noorify",
    title: "Noorify",
    categoryLabel: "Mobile App UI",
    category: "mobile",
    summary: "Clean, distraction-free lifestyle mobile application.",
    overview:
      "Designed and developed the complete mobile UI/UX and responsive web counterpart with haptic-inspired micro-interactions.",
    challenge:
      "Translating complex multi-step user onboarding into an effortless 60-second walkthrough.",
    solution:
      "Created an intuitive swipeable card interface with progress indicators that boosted completion rates by 42%.",
    year: "2024",
    role: "UI/UX Design & React Native",
    stack: ["React Native", "Figma", "Redux Toolkit", "Expo"],
    liveUrl: "https://tufaelahmedzuarder.com",
    heroImage: P(8408538, 1100),
    galleryImages: [P(4132328, 800), P(285814, 800)],
  },
  {
    id: 6638402,
    slug: "atlas-realty",
    title: "Atlas Realty",
    categoryLabel: "Real Estate Platform",
    category: "web",
    summary: "Property discovery with interactive map clustering.",
    overview:
      "A modern portal for luxury estates and commercial listings with dynamic boundary searches, mortgage calculators, and virtual tours.",
    challenge:
      "Smoothly rendering thousands of map pins simultaneously while filtering prices and property attributes in real time.",
    solution:
      "Implemented spatial geo-indexing and map clustering that updates in under 50 milliseconds.",
    year: "2025",
    role: "Full-Stack Development",
    stack: ["Next.js", "Mapbox GL", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://tufaelahmedzuarder.com",
    heroImage: P(6638402, 1100),
    galleryImages: [P(326514, 800), P(1181319, 800)],
  },
  {
    id: 7679865,
    slug: "brewline",
    title: "Brewline",
    categoryLabel: "Coffee Brand Landing",
    category: "landing",
    summary: "Artisan roastery storytelling with subscription builder.",
    overview:
      "An engaging brand story experience that guides coffee lovers through bean origins, tasting notes, and a custom monthly subscription bundle.",
    challenge:
      "Creating an emotional connection with the product while keeping the checkout funnel simple and fast.",
    solution:
      "Designed rich sensorial typography, custom vector graphics, and a dynamic 3-step roast finder.",
    year: "2024",
    role: "Design & Development",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Stripe"],
    liveUrl: "https://tufaelahmedzuarder.com",
    heroImage: P(7679865, 1100),
    galleryImages: [P(285814, 800), P(7621352, 800)],
  },
  {
    id: 4132328,
    slug: "fitpulse",
    title: "FitPulse",
    categoryLabel: "Fitness Tracking App",
    category: "mobile",
    summary: "Workout and nutrition companion with personalized insights.",
    overview:
      "A cross-platform mobile fitness app that tracks daily routines, calculates calorie targets, and generates weekly visual progress summaries.",
    challenge:
      "Making data logging rapid so users don't abandon entry during intense workout sessions.",
    solution:
      "Built one-tap workout logging with offline-first local SQLite caching and background sync.",
    year: "2024",
    role: "Mobile UI & Frontend",
    stack: ["React Native", "TypeScript", "Redux Toolkit", "SQLite"],
    liveUrl: "https://tufaelahmedzuarder.com",
    heroImage: P(4132328, 1100),
    galleryImages: [P(8408538, 800), P(131778, 800)],
  },
  {
    id: 15863066,
    slug: "lumen-ai",
    title: "Lumen AI",
    categoryLabel: "SaaS Marketing Site",
    category: "landing",
    summary: "Sleek dark-mode landing page for an AI productivity suite.",
    overview:
      "A high-converting SaaS landing page with interactive prompt demos, feature comparison tables, and dynamic billing toggle.",
    challenge:
      "Explaining complex generative AI capabilities in a clear, compelling, and visually arresting manner.",
    solution:
      "Designed interactive UI mockups and glowing particle canvas effects that showcase the AI output live in the browser.",
    year: "2025",
    role: "UI/UX & Web Development",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveUrl: "https://tufaelahmedzuarder.com",
    heroImage: P(15863066, 1100),
    galleryImages: [P(285814, 800), P(326514, 800)],
  },
  {
    id: 19876064,
    slug: "cartly",
    title: "Cartly",
    categoryLabel: "Marketplace Web App",
    category: "web",
    summary: "Peer-to-peer commerce platform with instant messaging.",
    overview:
      "A multi-vendor marketplace connecting local makers with buyers, featuring integrated escrow payments and seller analytics.",
    challenge:
      "Building a dual-sided marketplace with role-based permissions and instant vendor payouts.",
    solution:
      "Created a robust Next.js and Node.js backend with Stripe Connect and WebSockets for real-time order tracking.",
    year: "2024",
    role: "Full-Stack Development",
    stack: ["Next.js", "Node.js", "Stripe Connect", "MongoDB", "Tailwind"],
    liveUrl: "https://tufaelahmedzuarder.com",
    heroImage: P(19876064, 1100),
    galleryImages: [P(7191162, 800), P(131778, 800)],
  },
  {
    id: 8533353,
    slug: "verdant",
    title: "Verdant",
    categoryLabel: "Plant Shop E-commerce",
    category: "ecommerce",
    summary: "Botanical boutique with customized plant care guides.",
    overview:
      "An organic e-commerce experience for rare house plants, featuring automated lighting advice based on buyer zip codes.",
    challenge:
      "Balancing delicate organic botanical branding with high-volume e-commerce performance.",
    solution:
      "Engineered a calm, minimalist aesthetic with sub-second page transitions, fast cart drawers, and zero layout shift.",
    year: "2024",
    role: "Design & Development",
    stack: ["Next.js", "Shopify", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://tufaelahmedzuarder.com",
    heroImage: P(8533353, 1100),
    galleryImages: [P(7621352, 800), P(7679865, 800)],
  },
];
