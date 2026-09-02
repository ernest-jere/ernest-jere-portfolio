import { BackgroundAnimations } from "@/components/Background";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavBar} from "@/components/NavBar";
import { MainSection } from "@/components/MainSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillSet } from "@/components/SkillSet";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (
        /* FIXED: changed text-forground to text-foreground, and overflow-hidden to overflow-x-hidden */
        <div id="home" className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
            <ThemeToggle />
            <BackgroundAnimations />
            <NavBar />
            <main className="relative w-full">
                <MainSection />
                <AboutSection />
            </main>
            <SkillSet />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
};