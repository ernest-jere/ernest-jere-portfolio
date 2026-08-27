import { ExternalLink } from "lucide-react";

const project = [
  {
    id: 1,
    title: "FreeCodeCamp Data Visualizations",
    Description: "A collection of data visualization dashboards featuring choropleth, heat maps, scatterplots, treemaps, and bar charts built using D3.js and React.",
    image: "/projects/Data Visualization.png",
    url: "https://codepen.io/your-work",
    tag: ["Html", "Css", "JavaScript", "D3.js"]
  },
  {
    id: 2,
    title: "StoreHouse E-Commerce Store",
    Description: "A fully functional online shopping front-end application featuring product listings, detailed item views, and intuitive 'Add to Cart' functionality.",
    image: "/projects/E-commerce App.png",
    url: "https://ecommerce-website-ernest-jere1.vercel.app",
    tag: ["Html", "Css", "ReactJS", "Tailwind"]
  },
  {
    id: 3,
    title: "Invest Portfolio Fintech App Prototype",
    Description: "A mobile-first investment application tracking cash assets, stock recommendations, and real-time portfolio performance tracking for top market equities.",
    image: "/projects/Stock Investiment App.png",
    url: "https://www.figma.com/proto/uxlO9aNtkP77XavfqRRIXA/Stock-Ivestiment-App?node-id=2-2&t=aV7fTnuipcH8YAVT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
    tag: ["Figma", "HIFI Prototype"]
  },
  {
    id: 4, 
    title: "Fintech App Work Breakdown Structure", 
    Description: "An interactive FigJam workspace detailing the user flows, feature roadmaps, and agile work breakdown structure for the investment application.", 
    image: "/projects/Stocks Figjam.png", 
    url: "https://www.figma.com/board/whEPukfBAWv2O2Rn4yChRh/Stocks-Figjam?node-id=0-1&t=JapqsjIrpypuKNGY-1", 
    tag: ["Figma", "FigJam", "UX/UI Flow"] 
  },
  {
    id: 5, 
    title: "EcooGraphix Industrial Trifold Brochure", 
    Description: "A professional 6-panel technical product brochure designed in Adobe InDesign for a global print-packaging supplier, featuring complex data tables, geographic distribution maps, and print-ready prepress layouts.", 
    image: "/projects/EcooGraphix Brochure.png", 
    url: "https://drive.google.com/file/d/1Z3vSJ6h9XHStd6F3zUn7ba00edoQ2leK/view?usp=sharing", 
    tag: ["InDesign", "Print Design", "Layout", "Technical Editorial"] 
  },
  {
  "id": 6,
  "title": "Standard Work Procedures Book Cover Layout",
  "Description": "A professional full-bleed book cover designed in Adobe InDesign for a technical printing industry manual, featuring structured typography, a precise multi-panel print layout, and automated spine text alignment.",
  "image": "/projects/SOP Book Cover.png",
  "url": "https://drive.google.com/file/d/1MyWsPTN7L5kTyuy8eayYy5PgG5MqwebH/view?usp=sharing",
  "tag": ["InDesign", "Print Design", "Cover Layout", "Technical Editorial"]
  } 

];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-2 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Here are some projects. Each project was created with attention to detail and performance.
        </p>
        
        {/* Equal heights: Tailwind's grid natively forces items to have matching heights per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.map((proj, key) => {
            return (
              /* 
                1. Added 'relative' so the child pseudo-element link targets this card container boundary.
                2. Added 'flex flex-col' to let the content inside grow smoothly to fill the container height.
              */
              <div 
                key={key} 
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
                      <span key={idx} className="text-xs bg-primary/10 text-primary font-medium px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Main Text Content: 'grow' expands this div to push the bottom link down */}
                  <div className="grow mb-6">
                    <h3 className="font-bold text-xl tracking-tight text-card-foreground">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {proj.Description}
                    </p>
                  </div>
                  
                  {/* Bottom Actions Row */}
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
                      {/* 
                        CRITICAL: The after:absolute and after:inset-0 styles stretch an invisible overlay layer 
                        across the parent .relative card container, making the whole card safely clickable!
                      */}
                      <ExternalLink 
                        size={18} 
                        className="after:absolute after:inset-0 after:z-10" 
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
