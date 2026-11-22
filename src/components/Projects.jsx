import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const CATEGORIES = ["All", "Full-Stack", "UX/UI Design", "Print Design"];

const project = [
  {
    id: 1,
    title: "Crypto Prices Tracker",
    category: "Full-Stack",
    Description: "A real-time cryptocurrency dashboard featuring a responsive 7-day historical price chart, live token statistics, and automated API-driven data syncing.",
    image: "/projects/Crypto Tracker.png",
    url: "https://crypto-price-website-six.vercel.app/",
    tag: ["Html", "Css", "ReactJS", "Vite", "Recharts"]
  },
  {
    id: 2,
    title: "StoreHouse E-Commerce Store",
    category: "Full-Stack",
    Description: "A fully functional online shopping front-end application featuring product listings, detailed item views, and intuitive 'Add to Cart' functionality.",
    image: "/projects/E-commerce App.png",
    url: "https://ecommerce-website-ernest-jere1.vercel.app",
    tag: ["Html", "Css", "ReactJS", "Tailwind"]
  },
  {
    id: 3,
    title: "Impressions Autonomous Storefront Platform",
    category: "Full-Stack",
    Description: "A high-performance full-stack web application featuring an automated ZAR print pricing matrix switcher, background process routing (Digital/UV vs. Litho/Screen), integrated Cloudinary signatureless API file uploads, and a built-in localStorage client lead tracker workspace dashboard.",
    image: "/projects/Impressions.png",
    url: "https://design-print-shop.vercel.app/",
    tag: ["React Frontend", "Tailwind v4", "Vite 8", "Automated Pricing", "Full-Stack Dev"]
  },
  {
    id: 4,
    title: "InvestTrack: End-to-End Fintech UX/UI & Live Equity Dashboard",
    category: "Full-Stack",
    Description: "An end-to-end product design and full-stack engineering showcase bridging UX/UI strategy and production code. Starts from agile FigJam work breakdown structures and high-fidelity mobile prototypes in Figma, culminating in a Node.js automation pipeline that compiles Figma design variables into Tailwind CSS v4 @theme tokens. Streams live NYSE and JSE ADR market quotes via Finnhub REST API with USD/ZAR conversion, live market hours status, weighted Beta risk scoring, Sector Allocation analytics, a 7-day net worth chart, and CSV exports.",
    image: "/projects/InvestTrack.png",
    url: "https://stock-investment-app-mrh1.vercel.app/",
    links: [
      { label: "Live App", url: "https://stock-investment-app-mrh1.vercel.app/" },
      { label: "Figma Prototype", url: "https://www.figma.com/proto/uxlO9aNtkP77XavfqRRIXA/Stock-Ivestiment-App?node-id=42-31&t=EJzK9XqFgrkYjqnv-1&scaling=scale-down&content-scaling=fixed&page-id=16%3A177&starting-point-node-id=42%3A31" },
      { label: "FigJam WBS", url: "https://www.figma.com/board/whEPukfBAWv2O2Rn4yChRh/Stocks-Figjam?node-id=0-1&t=JapqsjIrpypuKNGY-1" },
      { label: "tokens.json", url: "https://github.com/ernest-jere/stock-investment-app/blob/main/design-tokens.tokens.json" }
    ],
    tag: [
      "ReactJS",
      "Tailwind CSS v4",
      "Figma Variables",
      "UX/UI & FigJam",
      "Node.js Automation",
      "Finnhub API",
      "Recharts",
      "Vercel"
    ]
  },
  {
    id: 5,
    title: "StoreHouse: End-to-End Food Delivery UX/UI & React App",
    category: "Full-Stack",
    Description: "An end-to-end mobile-first food delivery application bridging high-fidelity Figma prototyping with production React code via a custom Node.js automation script (parse-tokens.js) that compiles Figma design variables directly into Tailwind CSS v4 @theme tokens. Features interactive category filtering, real-time search, a dynamic spice-level slider, portion steppers, toppings/sides customizers, a slide-over multi-item cart drawer, Light/Dark theme switching, and ZAR checkout with 15% VAT calculation.",
    image: "/projects/Storehouse.png",
    url: "https://storehouse-food-delivery.vercel.app/",
    links: [
      { label: "Live App", url: "https://storehouse-food-delivery.vercel.app/" },
      { label: "Figma Prototype", url: "https://www.figma.com/proto/jduPg8DbrCNQgYeFY03sn1/Food-Delivery-App?node-id=5-23&t=EBoVUc6tpJidxfzM-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" },
      { label: "tokens.json (Figma Variables)", url: "https://github.com/ernest-jere/storehouse-food-delivery/blob/main/tokens.json" },
      { label: "parse-tokens.js (Token Compiler)", url: "https://github.com/ernest-jere/storehouse-food-delivery/blob/main/parse-tokens.js" }
    ],
    tag: [
      "ReactJS",
      "Tailwind CSS v4",
      "Figma Variables",
      "W3C Design Tokens",
      "Node.js Automation",
      "UX/UI Design",
      "Vite",
      "Vercel"
    ]
  },
  {
    id: 6,
    title: "Phlox Construction Corporate Landing Page & Design System",
    category: "UX/UI Design",
    Description: "A structured corporate construction website prototype backed by a scalable Figma Design System and reusable Component Library. Features an impactful industrial hero section, overlapping editorial photography, leadership team cards, and newsletter conversion flows.",
    image: "/projects/Construction Landing Page.png",
    url: "https://www.figma.com/proto/okJUXgYj9fxSu3xwZhkM8p/FCC-Project-2?node-id=173-334&t=G2HYRqJ1uxGTLqQ4-1&scaling=scale-down&content-scaling=fixed&page-id=141%3A180&starting-point-node-id=173%3A334",
    links: [
      {
        label: "Figma Prototype",
        url: "https://www.figma.com/proto/okJUXgYj9fxSu3xwZhkM8p/FCC-Project-2?node-id=173-334&t=G2HYRqJ1uxGTLqQ4-1&scaling=scale-down&content-scaling=fixed&page-id=141%3A180&starting-point-node-id=173%3A334"
      },
      {
        label: "Design System",
        url: "https://www.figma.com/design/okJUXgYj9fxSu3xwZhkM8p/FCC-Project-2?node-id=0-1&t=Hs4cBq5eHnOM3tKi-1"
      },
      {
        label: "Component Library",
        url: "https://www.figma.com/design/okJUXgYj9fxSu3xwZhkM8p/FCC-Project-2?node-id=163-63&t=Hs4cBq5eHnOM3tKi-1"
      }
    ],
    tag: ["Figma", "Design System", "Component Library", "HIFI Prototype", "UX/UI Design"]
  },
  {
    id: 7,
    title: "Life Cycle of a Butterfly Educational Poster",
    category: "Print Design",
    Description: "A single-page educational classroom poster designed in Adobe InDesign for KS1 learners (ages 5–7). Structured with custom paragraph styles, master pages, and layered artwork to break down the four stages of butterfly metamorphosis into an engaging, easy-to-read visual sequence.",
    image: "/projects/Butterfly Lifecycle Poster.png",
    url: "https://drive.google.com/file/d/18eh4SQys4lGklcSqOPTts3r7ZHLQbsQd/view?usp=sharing",
    tag: ["InDesign", "Print Design", "Educational Editorial", "Typography", "Layout"]
  },
  {
    id: 8,
    title: "EcooGraphix Industrial Trifold Brochure",
    category: "Print Design",
    Description: "A professional 6-panel technical product brochure designed in Adobe InDesign for a global print-packaging supplier, featuring complex data tables, geographic distribution maps, and print-ready prepress layouts.",
    image: "/projects/EcooGraphix Brochure.png",
    url: "https://drive.google.com/file/d/1Z3vSJ6h9XHStd6F3zUn7ba00edoQ2leK/view?usp=sharing",
    tag: ["InDesign", "Print Design", "Layout", "Technical Editorial"]
  },
  {
    id: 9,
    title: "Standard Work Procedures Book Cover Layout",
    category: "Print Design",
    Description: "A professional full-bleed book cover designed in Adobe InDesign for a technical printing industry manual, featuring structured typography, a precise multi-panel print layout, and automated spine text alignment.",
    image: "/projects/SOP Book Cover.png",
    url: "https://drive.google.com/file/d/1MyWsPTN7L5kTyuy8eayYy5PgG5MqwebH/view?usp=sharing",
    tag: ["InDesign", "Print Design", "Cover Layout", "Technical Editorial"]
  },
  {
    id: 10,
    title: "Base360 Omnichannel Landing Page Prototype",
    category: "UX/UI Design",
    Description: "A world-class e-commerce and corporate light-mode landing page design tracking an end-to-end AI agent automation flow—from public social media comments to CRM lead conversion and automated voice outreach.",
    image: "/projects/Base360.png",
    url: "https://figma.com",
    tag: ["Figma", "HIFI Prototype", "UX/UI Flow", "Bento Grid", "Product Strategy"]
  },
  {
    id: 11,
    title: "Safari & Global Travel Booking Landing Page",
    category: "UX/UI Design",
    Description: "A high-contrast, dark-mode travel and safari booking landing page prototype featuring an interactive destination search bar, curated international attraction carousels with star ratings, social proof Google Reviews, a regional destination showcase grid, and key platform trust metrics.",
    image: "/projects/Travel Website.png",
    url: "https://figma.com",
    tag: ["Figma", "HIFI Prototype", "UX/UI Design", "Dark Mode", "Landing Page"]
  }
];
export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? project
      : project.filter((proj) => proj.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-2 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-secondary mb-8 max-w-2xl mx-auto">
          Here are some projects. Each project was created with attention to detail and performance.
        </p>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Equal heights: Tailwind's grid natively forces items to have matching heights per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => {
            return (
              <div
                key={proj.id}
                className="group relative flex flex-col bg-card rounded-lg overflow-hidden shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {/* Image Aspect Box */}
                <div className="h-48 overflow-hidden bg-muted">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Inner flex wrapper filling remaining card space */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Badges/Tags container */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tag.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/10 text-primary font-medium px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Main Text Content: 'grow' expands this div to push the bottom links down */}
                  <div className="grow mb-6">
                    <h3 className="font-bold text-xl tracking-tight text-card-foreground">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {proj.Description}
                    </p>
                  </div>

                  {/* Bottom Actions Row */}
                  {proj.links && proj.links.length > 0 ? (
                    <div className="flex flex-col divide-y divide-border pt-2 border-t border-border">
                      {proj.links.map((linkItem, idx) => (
                        <a
                          key={idx}
                          href={linkItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center justify-between py-2.5 first:pt-1 last:pb-0 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          <span>{linkItem.label}</span>
                          <ExternalLink
                            size={16}
                            className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                          />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                        View Project
                      </span>
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground group-hover:text-primary transition-colors p-1"
                      >
                        <ExternalLink
                          size={18}
                          className="after:absolute after:inset-0 after:z-10"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
