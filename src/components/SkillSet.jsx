import { motion } from "framer-motion";

export const SkillSet = () => {

    const skillSet = [
        { name: "HTML", level: 95, category: "frontend" },
        { name: "DTP/Prepress", level: 95, category: "design" }, // Fixed typo "Bootstarp"
        { name: "Tailwind", level: 95, category: "frontend" },
        { name: "JavaScript", level: 90, category: "frontend" },
        { name: "ReactJS", level: 90, category: "frontend" },
        { name: "D3.js", level: 80, category: "frontend" },
        { name: "Figma", level: 85, category: "design" },
        { name: "Illustrator", level: 95, category: "design" }, // Fixed typo "Illustratoe"
        { name: "Photoshop", level: 95, category: "design" },
        { name: "InDesign", level: 95, category: "design" },
        { name: "Git/GitHub", level: 80, category: "tool" }, // Fixed typo "Git/GiHub"
        { name: "Vs Code", level: 80, category: "tool" },
    ];

    const neoColors = [
        "#ff00cc", // pink
        "#28f10e", // purple
        "#e0dd0d", // white
    ];

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center "> 
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
                    {skillSet.map((skill, key) => {
                        const neon = neoColors[key % neoColors.length]; 
                        
                        return (
                            <motion.div 
                                key={key}
                                initial={{ opacity: 0, scale: 0.6 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: key * 0.06 }} 
                                viewport={{ once: true }}
                                className="relative w-32 h-32 border-2 flex flex-col items-center justify-center"
                                style={{
                                    borderColor: neon,
                                    boxShadow: `0 0 10px 6px ${neon}`,
                                    background: "transparent"
                                }}
                            >
                                <div className="text-2xl font-bold" style={{ color: neon }}>
                                    {skill.level}% 
                                </div>
                                <div className="text-sm mt-1 uppercase tracking-wide text-center px-1">
                                    {skill.name}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
