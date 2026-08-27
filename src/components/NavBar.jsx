import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react"; // 1. Added missing imports
import { cn } from "../assets/lib/utils";

export const NavBar = () => {
  const navItem = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contacts", href: "#contacts" }
  ];

  const [scrolling, setScrolling] = useState(false);
  // Changing to false initially so menu is closed by default
  const [isOpenMenu, setIsOpenMenu] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    setScrolling(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed w-full top-0 left-0 z-40 transition-all duration-300",
      scrolling 
      ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" 
      : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <a className="text-xl font-bold flex items-center" href="#home">
          <span className="relative z-10">
            <span className="text-glow text-primary">Personal</span> Portfolio
          </span>
        </a>

        {/* 💻 Large screen navbar */}
        <div className="hidden md:flex space-x-8">
          {navItem.map((item, key) => (
            <a key={key} 
            href={item.href} 
            className="hover:text-primary transition-colors duration-200">
              {item.name}
            </a>
          ))}
        </div>

        {/* 📱 Small screen navBar Toggle */}
        <button 
        onClick={() => setIsOpenMenu(!isOpenMenu)} 
        className="block md:hidden z-50 relative">
          {isOpenMenu ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* 📱 Small screen Menu Overlay */}
        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden", // Fixed typos
          isOpenMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col space-y-6 text-xl">
            {navItem.map((item, key) => (
              <a 
                key={key} 
                href={item.href} 
                onClick={() => setIsOpenMenu(false)} 
                className="hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
