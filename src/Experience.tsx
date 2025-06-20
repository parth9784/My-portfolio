import { motion } from "framer-motion";

export default function Experience() {
    const timeline = [
        {
            title: "Devslane Training",
            date: "June 2024 – Oct 2024",
            description:
                "Completed full-stack training covering React.js, Git, UI design, and backend fundamentals under the Devslane Developer Training Program.",
        },
        {
            title: "Software Engineer Intern – CodeYogi",
            date: "Jan 2025 – Present",
            description:
                "Engineered a Rune-based Bitcoin Testnet app using Bitcoin Core and TypeScript, enabling secure token issuance and Taproot-compliant wallet interactions. Also developed a full-stack Solana AI app with React, Tailwind, Node.js, and Solana Web3.js for real-time decentralized insights.",
        },
    ];

    return (
        <section id="experience" className="w-full py-16 px-6 text-white bg-black font-mono">
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                {/* Opening Tag */}
                <p className="text-purple-400 text-2xl mb-4">&lt;experience&gt;</p>

                <div className="relative border-l-2 border-purple-600 pl-6">
                    {[...timeline].reverse().map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="mb-12 relative"
                        >
                            <div className="absolute -left-4 top-2 w-3 h-3 bg-purple-500 rounded-full border-2 border-white" />

                            <h3 className="text-lg text-white font-semibold ml-2">{item.title}</h3>
                            <span className="text-xs text-purple-300">{item.date}</span>
                            <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Tag */}
                <p className="text-purple-400 text-2xl mt-6">&lt;/experience&gt;</p>
            </motion.div>
        </section>
    );
}
