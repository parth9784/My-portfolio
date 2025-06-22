import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="w-full text-white py-9 sm:mt-4  px-6">

            <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-left font-mono relative z-10"
            >

                {/* Opening Tag */}
                <p className="text-purple-500 text-2xl mb-4">&lt;about&gt;</p>

                {/* Content */}
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed pl-4 border-l-2 border-purple-700">
                    I'm <span className="text-white font-medium">Parth Dadhich</span>, a passionate{" "}
                    <span className="text-purple-300 font-semibold">Full Stack Developer</span> and{" "}
                    <span className="text-purple-300 font-semibold">Data Science enthusiast</span>{" "}
                    currently pursuing my BTech in CSE (Data Science) at Bennett University.
                    <br /><br />
                    I enjoy building web apps, designing smart user experiences, and exploring AI technologies.
                    I've developed projects like{" "}
                    <span className="text-white font-medium">NewsPulse</span> and a{" "}
                    <span className="text-white font-medium">Smart Chrome Tooltip extension</span>{" "}
                    using React, Tailwind, Docker, LangChain, and more.
                    <br /><br />
                    I'm also the{" "}
                    <span className="text-white font-medium">Technical Head at CodeChef Bennett</span> and
                    part of the core team in multiple tech clubs, where I actively contribute to workshops and mentoring.
                </p>

                {/* Closing Tag */}
                <p className="text-purple-500 text-2xl mt-4">&lt;/about&gt;</p>
            </motion.div>
        </section>
    );
}
