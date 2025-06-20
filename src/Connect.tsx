import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Connect() {
    return (
        <motion.section
            id="Connect"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10 w-full bg-transparent text-white py-20 px-6 font-sans"
        >
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">

                <h2 className="text-4xl sm:text-5xl font-semibold text-gray-300">
                    Have <span className="text-white">something</span> in mind?
                </h2>
                <h3 className="text-4xl sm:text-5xl font-semibold text-white">
                    Let’s connect.
                </h3>


                <p className="text-gray-400 mt-4 max-w-xl">
                    Your ideas deserve to be heard. Let’s connect and create something extraordinary.
                </p>


                <div className="w-full h-px bg-white/10 my-10"></div>


                <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6">

                    <div className="flex flex-col items-center sm:items-start gap-3">
                        <div className="flex items-center gap-3 text-white font-medium text-base">
                            <FaEnvelope className="text-lg" />
                            <span>parthdadhich458@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-white font-medium text-base">
                            <FaPhone className="text-lg" />
                            <span>+91 9784010528</span>
                        </div>
                    </div>


                    <div className="flex justify-center gap-6">
                        {[
                            {
                                icon: <FaLinkedin className="text-2xl" />,
                                href: "https://www.linkedin.com/in/parthdadhich",
                                label: "LinkedIn",
                            },
                            {
                                icon: <FaGithub className="text-2xl" />,
                                href: "https://github.com/parth9784",
                                label: "GitHub",
                            },
                            {
                                icon: <FaEnvelope className="text-2xl" />,
                                href: "mailto:parthdadhich22@gmail.com",
                                label: "Email",
                            },
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={item.label}
                                whileHover={{ scale: 1.15 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="cursor-pointer bg-gray-700 hover:bg-white hover:text-black transition p-3 rounded-full border border-white/10"
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
