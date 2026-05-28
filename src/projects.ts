export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    slug: "materiales-ventura",
    title: "Materiales Ventura",
    category: "E-Commerce",
    description:
      "A full-featured e-commerce platform for a construction materials supplier. We designed a clean, product-focused storefront with advanced filtering, a streamlined checkout flow, and integration with inventory management systems. The site dramatically increased online orders and reduced phone inquiries by 40%.",
    image: "/Proyectos/Macbook-Air-materialesventura.com.webp",
    url: "https://materialesventura.com/",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
  },
  {
    slug: "fixmyhome-llc",
    title: "FixMyHome LLC",
    category: "Corporate Website",
    description:
      "A high-converting corporate website for a Houston-based home renovation company. We crafted a premium visual identity with before-and-after project showcases, integrated quote request forms, and an interactive service configurator. The redesign led to a 3x increase in qualified leads within the first month.",
    image: "/Proyectos/Macbook-Air-fixmyhomellc.com.webp",
    url: "https://fixmyhomellc.com/",
    technologies: ["React", "Vite", "Framer Motion", "Supabase"],
  },
  {
    slug: "la-redonda",
    title: "La Redonda",
    category: "Restaurant & Hospitality",
    description:
      "An elegant digital presence for a popular restaurant, featuring an immersive hero experience, a beautifully designed menu section, online reservation system, and event booking capabilities. The warm color palette and smooth animations reflect the restaurant's inviting atmosphere.",
    image: "/Proyectos/Macbook-Air-la-redonda-page.vercel.app.webp",
    url: "https://la-redonda-page.vercel.app/",
    technologies: ["React", "Vercel", "Tailwind CSS", "Framer Motion"],
  },
  {
    slug: "centro-podologico",
    title: "Centro Podológico",
    category: "Healthcare",
    description:
      "A professional, trust-building website for a podiatry clinic. We focused on accessibility, clear service descriptions, and an easy-to-use appointment booking system. The design conveys medical professionalism while remaining warm and approachable for patients.",
    image: "/Proyectos/Macbook-Air-centro-podologico.netlify.app.webp",
    url: "https://centro-podologico.netlify.app/",
    technologies: ["React", "Netlify", "CSS Modules", "Google Calendar API"],
  },
  {
    slug: "testa-interiores",
    title: "Testa Interiores",
    category: "Interior Design",
    description:
      "A visually stunning portfolio website for an interior design studio. We built an image-forward experience with full-screen project galleries, smooth page transitions, and a minimalist aesthetic that lets the design work speak for itself. The site serves as a digital showroom that attracts high-end clientele.",
    image: "/Proyectos/Macbook-Air-testa-interiores.netlify.app.webp",
    url: "https://testa-interiores.netlify.app/",
    technologies: ["React", "Framer Motion", "Netlify", "Tailwind CSS"],
  },
  {
    slug: "nuvia-cosmeteologia",
    title: "Nuvia Cosmeteología",
    category: "Beauty & Wellness",
    description:
      "A refined, brand-centric website for a cosmetic and skin care professional. The design features a soft, luxurious color palette, service catalogs with detailed descriptions, and integrated social media feeds. Online booking and WhatsApp integration streamline client communication.",
    image: "/Proyectos/Macbook-Air-nuviacosmeteologia.netlify.app.webp",
    url: "https://nuviacosmeteologia.netlify.app/",
    technologies: ["React", "Tailwind CSS", "Netlify", "WhatsApp API"],
  },
  {
    slug: "stackmana",
    title: "Stackmana",
    category: "SaaS Platform",
    description:
      "A modern SaaS landing page designed to convert developer audiences. We built a bold, dark-themed interface with interactive feature demos, animated code snippets, and a clear pricing table. The technical aesthetic and fast performance perfectly match the brand's developer-first positioning.",
    image: "/Proyectos/Macbook-Air-stackmana.com.webp",
    url: "https://stackmana.com/",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
];
