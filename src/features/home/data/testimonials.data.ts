export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  projectType: string;
  quote: string;
  stars: number;
  highlightMetric: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Nova Brand Co.",
    location: "New York, USA",
    projectType: "Next.js Headless E-commerce",
    quote:
      "Tufael rebuilt our entire storefront in record time. Our mobile conversion rate jumped by 34% within two weeks of launch. The attention to performance and micro-interactions is world class.",
    stars: 5,
    highlightMetric: "+34% Mobile Conversion",
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "VP of Product",
    company: "Pulse Analytics",
    location: "Berlin, Germany",
    projectType: "Real-time SaaS Dashboard",
    quote:
      "Working with Tufael was seamless. He not only wrote clean, maintainable architecture, but actively suggested UX improvements that our enterprise users rave about every day. A true 10x engineer.",
    stars: 5,
    highlightMetric: "Sub-200ms Latency",
  },
  {
    id: "3",
    name: "David Chen",
    role: "Creative Director",
    company: "Drift Studio",
    location: "London, UK",
    projectType: "Kinetic Agency Showcase",
    quote:
      "A rare developer who has genuine aesthetic sensitivity. Every animation felt intentional, weighted, and responsive. He bridged the gap between our Figma prototypes and production with zero friction.",
    stars: 5,
    highlightMetric: "60 FPS Locked Motion",
  },
  {
    id: "4",
    name: "Sarah Jenkins",
    role: "Head of Growth",
    company: "Apex Capital Tech",
    location: "San Francisco, USA",
    projectType: "FinTech Web Platform",
    quote:
      "Tufael's engineering standards are unmatched. He took our legacy codebase, refactored it into Next.js 14 with strict TypeScript, and achieved 100/100 across all Lighthouse metrics. Incredible execution.",
    stars: 5,
    highlightMetric: "100/100 Core Web Vitals",
  },
  {
    id: "5",
    name: "Liam O'Connor",
    role: "Co-Founder & CTO",
    company: "Aura Health & AI",
    location: "Dublin, Ireland",
    projectType: "Telehealth Application",
    quote:
      "From database schema design to complex client-side state, Tufael delivered flawlessly. He communicates daily with Loom video walkthroughs and hit every single sprint deadline ahead of schedule.",
    stars: 5,
    highlightMetric: "On-Time Sprint Delivery",
  },
  {
    id: "6",
    name: "Chloe Takahashi",
    role: "Design Lead",
    company: "Kuro Studio",
    location: "Tokyo, Japan",
    projectType: "Interactive Design System",
    quote:
      "As a designer, it is often frustrating when developers compromise on typography or spacing. With Tufael, what I designed in Figma was reproduced to the sub-pixel level in Tailwind CSS. Pure luxury.",
    stars: 5,
    highlightMetric: "1:1 Pixel Parity",
  },
  {
    id: "7",
    name: "Alexander Wright",
    role: "Managing Director",
    company: "Vanguard Logistics",
    location: "Toronto, Canada",
    projectType: "Enterprise Portal & API",
    quote:
      "We needed a rock-solid developer who could handle high-concurrency traffic during our funding announcement. Tufael built a resilient cloud architecture that served 250k visitors without a single hiccup.",
    stars: 5,
    highlightMetric: "99.99% Uptime Surges",
  },
  {
    id: "8",
    name: "Sofia Morales",
    role: "Product Manager",
    company: "Lumina Labs",
    location: "Madrid, Spain",
    projectType: "AI Workflow Platform",
    quote:
      "Tufael transformed our complex AI workflow into an intuitive, elegant web experience. Our user onboarding drop-off rate plummeted by 42%. He is now our go-to partner for all engineering sprints.",
    stars: 5,
    highlightMetric: "-42% User Drop-Off",
  },
  {
    id: "9",
    name: "Benjamin Scott",
    role: "Chief Marketing Officer",
    company: "Elevate Global",
    location: "Sydney, Australia",
    projectType: "High-Growth Landing Suite",
    quote:
      "The fastest and most communicative engineer we have ever contracted. He understands that speed equals revenue. Our SEO ranking jumped to page 1 because of his technical performance optimizations.",
    stars: 5,
    highlightMetric: "#1 Google Search Rank",
  },
  {
    id: "10",
    name: "Nadia Al-Mansoor",
    role: "Founder",
    company: "Zora Luxury Goods",
    location: "Dubai, UAE",
    projectType: "Ultra-Luxury E-commerce",
    quote:
      "Tufael brought our high-jewelry luxury vision to life with bespoke dark mode aesthetics, fluid page transitions, and bank-grade Stripe checkout security. Our clients are completely mesmerized.",
    stars: 5,
    highlightMetric: "Zero-Latency Checkout",
  },
];

export const FAQS = [
  {
    question: "What is the best way to start working together?",
    answer:
      "Send a message via the contact form with your project overview, timeline, and goals. I usually reply within 24 hours with questions or a suggested scope.",
  },
  {
    question: "How much will my project cost?",
    answer:
      "Every project is scoped individually based on complexity and timeline. Check the packages on the Services page for starting points, or contact me for a tailored estimate.",
  },
  {
    question: "Are you available for freelance projects right now?",
    answer:
      "Yes! I am currently accepting selected new freelance projects and contract engagements. Reach out soon so we can reserve your project slot.",
  },
  {
    question: "What tech stack do you recommend for new projects?",
    answer:
      "For modern web applications, Next.js with React, TypeScript, Redux Toolkit, and Tailwind CSS provides the best combination of speed, SEO, maintainability, and user experience.",
  },
];
