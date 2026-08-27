import { Palette, Code, Layers, ArrowRight, Download } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative w-full bg-background">
            <div className="container mx-auto max-w-5xl">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-8
                 text-center">
                    About <span className="text-primary">me</span>
                </h2>
                
                {/* 1. TOP LAYOUT: Two Column Narrative Bio */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-12">
                    <div className="space-y-12 md:space-y-18">
                        <h2 className="md:pt-6 text-2xl font-bold tracking-tight">
                            Design & Frontend Development
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Detail-oriented UX Designer & Frontend Developer leveraging 5+
                            years of high-precision prepress (DTP) expertise to build scalable,
                            component-based architectures in ReactJs, JavaScript, HTML, CSS,
                            Adobe CS, and Figma.
                        </p>
                    </div>
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                        <p>
                            With 5+ years I have delivered print-to-digital production workflows and responsive web interfaces.
                            Led prepress upgrade projects and production process
                            improvements that reduced turnaround time of plate production
                            by 50% and waste by 90%.
                        </p>
                        <p>
                            Built customer-facing landing pages and sites using HTML/CSS/React, 
                            improving delivery speed and client satisfaction. Seeking senior frontend/design roles focused
                            on UX-driven, production-ready builds. 
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                    <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full 
                    bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] 
                    hover:scale-105 active:scale-95"
                    >
                        Get in touch
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a 
                    href="/CV_2026_UXD_FED.pdf"  
                    download="Ernest_Designer_Dev_CV.pdf" 
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full 
                    border border-primary text-primary font-medium transition-all duration-300 hover:bg-primary/10 active:scale-95"
                    >
                        Download CV
                        <Download className="w-4 h-4" />
                    </a>
                </div>

                {/* 3. BOTTOM LAYOUT: Core Services Grid (1 column on mobile, 3 columns on desktop) */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-center tracking-tight text-muted-foreground uppercase text-xs tracking-widest">
                        What I Do Best
                    </h3>
                    {/* FIXED: Fixed dash typos into valid Tailwind grid utilities */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        
                        {/* Card 1: Frontend Development */}
                        <div className="group relative w-full h-40 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl flex flex-col justify-center items-center p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10">
                            <Code className="w-8 h-8 mb-3 opacity-90" />
                            <h4 className="text-lg font-bold tracking-tight">Frontend Development</h4>
                        </div>

                        {/* Card 2: UX Design */}
                        <div className="group relative w-full h-40 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl flex flex-col justify-center items-center p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10">
                            <Layers className="w-8 h-8 mb-3 opacity-90 transition-transform duration-300 group-hover:scale-110" />
                            <h4 className="text-lg font-bold tracking-tight">UX Design</h4>
                        </div>

                        {/* Card 3: UI Design */}
                        <div className="group relative w-full h-40 bg-gradient-to-br from-orange-500 to-rose-600 text-white rounded-2xl flex flex-col justify-center items-center p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10">
                            <Palette className="w-8 h-8 mb-3 opacity-90" />
                            <h4 className="text-lg font-bold tracking-tight">UI Design</h4>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
