// ==========================================
// MAIN SECTION
// ==========================================
export const MainSection = () => {
    return (
        <section id="main" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6 mb-8"> 
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="text-gradient opacity-80 animate-fade-in">Hi, I am </span>
                        <span className="text-primary opacity-90 animate-fade-in-delay-1">Ernest,</span>
                        <span className="text-gradient opacity-90 animate-fade-in-delay-2"> Designer</span>
                        <span className="text-gradient opacity-90 animate-fade-in-delay-2"> & </span>
                        <span className="text-gradient opacity-90 animate-fade-in-delay-2">Frontend</span>
                        <span className="text-primary opacity-90 animate-fade-in-delay-1"> Developer</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-80 
                    animate-fade-in-delay-3">
                        5+ Years Design Precision. Prepress (DTP) - Figma, HTML, CSS, JavaScript, ReactJs, Adobe CS.
                    </p>
                </div>
                <a href="#projects" className="inline-block px-6 py-2 rounded-full bg-primary 
                text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95">
                    View My Projects
                </a>
            </div>
            {/* Kept bottom-8 to give it clearance from the absolute bottom edge */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-70 hover:opacity-100 transition-opacity">
                <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Scroll</span>
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};