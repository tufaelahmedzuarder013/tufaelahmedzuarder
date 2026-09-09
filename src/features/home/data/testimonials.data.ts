export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  stars: number;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Nova Brand Co.",
    quote:
      "Tufael rebuilt our storefront in record time. Our mobile conversion rate jumped by 34% within two weeks of launch. The attention to performance and micro-interactions is world class.",
    stars: 5,
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "Product Director",
    company: "Pulse Analytics",
    quote:
      "Working with Tufael was seamless. He not only wrote clean, maintainable code, but actively suggested UX improvements that our users rave about every day.",
    stars: 5,
  },
  {
    id: "3",
    name: "David Chen",
    role: "Creative Director",
    company: "Drift Studio",
    quote:
      "A rare developer who has genuine aesthetic sensitivity. Every animation felt intentional, weighted, and responsive. Highly recommend him for any high-stakes build.",
    stars: 5,
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
