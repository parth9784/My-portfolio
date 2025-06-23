import { motion } from "framer-motion";

export default function Education() {
    return (
        <section id="education" className="w-full py-16 px-6 text-white bg-black font-mono relative z-10">
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                {/* Opening tag */}
                <p className="text-purple-400 text-2xl mb-6">&lt;education&gt;</p>

                <div className="border-l-2 border-purple-600 pl-6">

                    {/* Entry 1 */}
                    <motion.div
                        className="mb-10 relative"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute -left-4 top-2 w-3 h-3 bg-purple-500 rounded-full border-2 border-white" />
                        <h3 className="text-lg font-semibold ml-1">Bennett University, Greater Noida</h3>
                        <span className="text-sm text-purple-300">B.Tech – Computer Science (Data Science) | 2022 – 2026</span>
                        <p className="mt-2 text-sm text-gray-400">
                            CGPA: <span className="text-white font-medium">9.8</span>. Key coursework includes Data Structures, Machine Learning, NLP, and Full Stack Development.
                            Awarded the <span className="text-purple-300 font-medium">Dean’s List</span> four times.
                        </p>
                    </motion.div>

                    {/* Entry 2 */}
                    <motion.div
                        className="mb-10 relative"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute -left-4 top-2 w-3 h-3 bg-purple-500 rounded-full border-2 border-white" />
                        <h3 className="text-lg font-semibold ml-1">Shree Mahesh Public School, Bhilwara</h3>
                        <span className="text-sm text-purple-300">Class 12th – CBSE | 2022</span>
                        <p className="mt-2 text-sm text-gray-400">
                            Scored <span className="text-white font-medium">94%</span> with focus on Mathematics, Physics, and Computer Science.
                        </p>
                    </motion.div>

                    {/* Entry 3 */}
                    <motion.div
                        className="mb-10 relative"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute -left-4 top-2 w-3 h-3 bg-purple-500 rounded-full border-2 border-white" />
                        <h3 className="text-lg font-semibold ml-1">Shree Mahesh Public School, Bhilwara</h3>
                        <span className="text-sm text-purple-300">Class 10th – CBSE | 2020</span>
                        <p className="mt-2 text-sm text-gray-400">
                            Achieved <span className="text-white font-medium">92.4%</span> with excellence in Science and Mathematics.
                        </p>
                    </motion.div>
                </div>

                {/* Closing tag */}
                <p className="text-purple-400 text-2xl mt-6">&lt;/education&gt;</p>
            </motion.div>
        </section>
    );
}
