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


                <p className="text-purple-500 text-2xl mb-4">&lt;about&gt;</p>

                <p className="text-base sm:text-[17px] text-gray-300 leading-relaxed pl-4 border-l-2 border-purple-700">
                    I'm <span className="text-white font-medium">Parth Dadhich</span>, a committed{" "}
                    <span className="text-purple-300 font-semibold">Full Stack Developer</span> and{" "}
                    <span className="text-purple-300 font-semibold">Data Science enthusiast</span> currently pursuing a B.Tech in Computer Science (Data Science) at Bennett University.
                    <br /><br />
                    I specialize in building scalable, intelligent web applications using the{" "}
                    <span className="text-white font-medium">MERN stack</span>, complemented by modern tools like{" "}
                    <span className="text-white font-medium">Docker</span>{" "}
                    and AI frameworks such as{" "}
                    <span className="text-white font-medium">LangChain</span>. I have also engineered{" "}
                    <span className="text-white font-medium">Web3-based solutions</span> that seamlessly integrate{" "}
                    <span className="text-white font-medium">AI capabilities</span> to deliver decentralized, intelligent experiences.
                    <br /><br />
                    My key projects include{" "}
                    <span className="text-white font-medium">BlogBridge</span>, a full-stack blogging platform, and a{" "}
                    <span className="text-white font-medium">LangChain-powered Chrome extension</span> that generates context-aware cover letters and smart tooltips.
                    <br /><br />
                    Beyond development, I serve as the{" "}
                    <span className="text-white font-medium">Technical Head of CodeChef Bennett</span>, where I’ve led and organized several technical events and workshops. I’m passionate about{" "}
                    <span className="text-white font-medium">mentoring budding developers</span> and fostering a collaborative tech culture on campus.
                </p>



                {/* Closing Tag */}
                <p className="text-purple-500 text-2xl mt-4">&lt;/about&gt;</p>
            </motion.div>
        </section>
    );
}
