export const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-border bg-card px-6 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row max-w-4xl">
        
        {/* Left Side: Copyright */}
        <p className="text-sm text-foreground opacity-70">
          &copy; {new Date().getFullYear()} Developed by Ernest. All Rights Reserved.
        </p>

        {/* Right Side: Quick Links / Socials */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#main" className="text-primary hover:underline transition-all">
            Back to Top
          </a>
          <a href="#projects" className="text-foreground opacity-70 hover:opacity-100 transition-all">
            Projects
          </a>
        </div>

      </div>
    </footer>
  );
};
