import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({
    onScrollToExperience,
    onScrollToProjects,
    onScrollToConnect,
}: {
    onScrollToExperience: () => void;
    onScrollToProjects: () => void;
    onScrollToConnect: () => void;
}) {
    const { scrollYProgress } = useScroll();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Experience", onClick: onScrollToExperience },
        { label: "Projects", onClick: onScrollToProjects },
        { label: "Connect", onClick: onScrollToConnect },
    ];

    return (
        <nav className="w-full overflow-hidden fixed top-0 z-50 bg-black/30 backdrop-blur-md">
            <div className="relative w-full max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">

                <img src="logo.png" alt="logo" className="w-10 h-10 cursor-pointer" />


                <ul className="hidden md:flex gap-6 text-sm sm:text-base">
                    {navLinks.map(({ label, onClick }, idx) => (
                        <li key={idx}>
                            <button
                                onClick={onClick}
                                className="relative group overflow-hidden cursor-pointer"
                            >
                                <span>{label}</span>
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full" />
                            </button>
                        </li>
                    ))}


                    <li>
                        <a
                            href="https://www.linkedin.com/in/parthdadhich"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group overflow-hidden"
                        >
                            <span className=" transition">LinkedIn</span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1NkkCWDTuUY11H6Lbgo1NAYsLGAEgqzQ3/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group overflow-hidden"
                        >
                            <span className=" transition">Resume</span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full" />
                        </a>
                    </li>
                </ul>


                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>


            {isOpen && (
                <div className="md:hidden px-4 pb-4 text-white flex flex-col gap-4 bg-black/80 backdrop-blur-md">
                    {navLinks.map(({ label, onClick }, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                onClick();
                                setIsOpen(false);
                            }}
                            className="text-left hover:text-purple-400 transition"
                        >
                            {label}
                        </button>
                    ))}
                    <a
                        href="https://www.linkedin.com/in/parthdadhich"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1NkkCWDTuUY11H6Lbgo1NAYsLGAEgqzQ3/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                    >
                        Resume
                    </a>
                </div>
            )}


            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="absolute bottom-0 left-0 h-[2px] bg-purple-500 w-full origin-left"
            />
        </nav>
    );
}
