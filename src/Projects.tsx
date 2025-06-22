// import { motion } from "framer-motion";

// const projects = [
//     {
//         title: "BlogBridge",
//         image: "bbl.png",
//         description:
//             "Developed a full-stack blogging platform using the MERN stack, integrating intuitive UI with robust backend functionalities. Improved user engagement by 20% through enhanced navigation and responsive design.",
//         link: "https://blogbridge-sand.vercel.app/"
//     },
//     {
//         title: "NewsPulse",
//         image: "new.png",
//         description:
//             "Built a dynamic web application in React that fetches real-time news via REST APIs. Focused on delivering a clean, immersive UI to improve the overall reading experience and demonstrate efficient API integration.",
//         link: "https://news-web-app-navy-gamma.vercel.app/"
//     },
//     {
//         title: "Cover Letter Extension",
//         image: "covv.png",
//         description:
//             "Built a React + LangChain Chrome extension that auto-generates personalized cover letters using LLMs.",
//         link: "https://github.com/parth9784/Cover-Letter-Extension"
//     },
//     {
//         title: "News Classification Pipelines",
//         image: "newscla.png",
//         description:
//             "Developed NLP pipelines to classify 50K+ news articles with up to 99% accuracy using ML and Word2Vec.",
//         link: "https://github.com/parth9784/News_Classification_Pipelines"
//     }

// ];


// export default function Projects() {
//     return (
//         <section id="projects" className="w-full py-16 px-6 text-white bg-black font-mono relative z-10">
//             <div className="max-w-7xl mx-auto">

//                 <p className="text-purple-400 text-2xl mb-6">&lt;projects&gt;</p>


//                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
//                     {projects.map((project, index) => (
//                         <motion.div
//                             key={index}
//                             whileHover={{ scale: 1.02 }}
//                             initial={{ opacity: 0, y: 40 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: index * 0.2 }}
//                             className="group relative rounded-xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 shadow-lg"
//                         >
//                             {/* Project Image */}
//                             <img
//                                 src={project.image}
//                                 alt={project.title}
//                                 className="w-full h-40 object-center"
//                             />

//                             {/* Static content */}
//                             <div className="p-4">
//                                 <h3 className="text-base font-semibold text-purple-300">{project.title}</h3>
//                                 <p className="text-xs text-gray-400">Hover to explore</p>
//                             </div>

//                             {/* Hover Overlay */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileHover={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center px-6 opacity-0 group-hover:opacity-100"
//                             >
//                                 <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
//                                 <p className="text-sm text-gray-300">{project.description}</p>

//                                 {/* View Project Button */}
//                                 <a
//                                     href={project.link}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="mt-4 inline-block px-4 py-2 text-sm font-semibold text-black bg-purple-400 rounded-full hover:bg-purple-500 transition"
//                                 >
//                                     View Project
//                                 </a>
//                             </motion.div>

//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Closing tag */}
//                 <p className="text-center text-gray-400 text-sm mt-8 italic">
//                     Innovation doesn’t stop here — exciting builds are on the way!
//                 </p>
//                 <p className="text-purple-400 text-2xl mt-10">&lt;/projects&gt;</p>
//             </div>
//         </section>
//     );
// }
import { motion } from "framer-motion";

const projects = [
    {
        title: "BlogBridge",
        image: "bbl.png",
        description:
            "Full-stack blogging platform built using MERN with improved UI/UX.",
        link: "https://blogbridge-sand.vercel.app/",
    },
    {
        title: "NewsPulse",
        image: "new.png",
        description:
            "React app fetching real-time news via REST APIs with clean UI.",
        link: "https://news-web-app-navy-gamma.vercel.app/",
    },
    {
        title: "Cover Letter Extension",
        image: "covv.png",
        description:
            "Chrome extension using LangChain + React for cover letter generation.",
        link: "https://github.com/parth9784/Cover-Letter-Extension",
    },
    {
        title: "News Classification",
        image: "newscla.png",
        description:
            "Classified 50K+ news articles with 99% accuracy using NLP + Word2Vec.",
        link: "https://github.com/parth9784/News_Classification_Pipelines",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="w-full py-16 px-4 sm:px-6 text-white bg-black font-mono relative z-10"
        >
            <div className="max-w-7xl mx-auto">
                <p className="text-purple-400 text-2xl mb-6">&lt;projects&gt;</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative rounded-lg overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 shadow-md"
                            style={{ height: "260px" }}
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[120px] object-cover"
                            />

                            {/* Title & Hover Instruction */}
                            <div className="p-3">
                                <h3 className="text-sm font-semibold text-purple-300">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-gray-400">Hover to explore</p>
                            </div>

                            {/* Overlay */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100"
                            >
                                <h3 className="text-sm font-bold text-white mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-gray-300">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-block px-4 py-1 text-xs font-semibold text-black bg-purple-400 rounded-full hover:bg-purple-500 transition"
                                >
                                    View Project
                                </a>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>


                <p className="text-center text-gray-400 text-xs mt-6 italic">
                    Innovation doesn’t stop here — exciting builds are on the way!
                </p>
                <p className="text-purple-400 text-2xl mt-8">&lt;/projects&gt;</p>
            </div>
        </section>
    );
}
