import { motion } from "framer-motion";

const projects = [
    {
        title: "NewsPulse",
        description:
            "A news-fetching React web app that pulls real-time headlines using a REST API.",
    },
    {
        title: "Smart Tooltip Extension",
        description:
            "Chrome extension using LangChain to summarize selected text on any webpage.",
    },
    {
        title: "NFT Sales Dashboard",
        description:
            "React + Zustand dashboard to visualize top NFT sales with animated UI.",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="w-full bg-black text-white py-16 px-6 font-sans">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 text-center mb-12">
                    Projects
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className="relative group bg-[#0a0a23] border border-purple-500 rounded-lg overflow-hidden shadow-md"
                        >
                            {/* Title content */}
                            <div className="p-6 h-48 flex items-center justify-center">
                                <h3 className="text-lg font-semibold text-center">{project.title}</h3>
                            </div>

                            {/* Hover Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-black/80 flex items-center justify-center px-4 text-sm text-gray-300 text-center backdrop-blur-md"
                            >
                                {project.description}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
