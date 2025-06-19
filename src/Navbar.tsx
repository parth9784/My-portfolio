// import { motion } from "motion/react";

// export default function Navbar() {
//     return (
//         <>
//             <nav className="w-full fixed top-0 z-50 bg-black/30 backdrop-blur-md px-7">

//                 <div className="w-full mx-auto px-4 py-1 flex justify-between items-center text-white">


//                     <img src="logo.png" alt="logo" className="w-15 h-15 cursor-pointer" />


//                     <ul className="flex gap-8 text-sm sm:text-base">
//                         <li>
//                             <a href="#projects" className="hover:text-purple-400 transition">
//                                 Projects
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="https://www.linkedin.com/in/parthdadhich"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:text-purple-400 transition"
//                             >
//                                 LinkedIn
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="https://drive.google.com/file/d/1NkkCWDTuUY11H6Lbgo1NAYsLGAEgqzQ3/view?usp=sharing"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:text-purple-400 transition"
//                             >
//                                 Resume
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//             <motion.div className="bg-blue-400 h-3 w-full top-0 left-0"></motion.div>
//         </>
//     );
// }
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
    const { scrollYProgress } = useScroll()
    return (
        <nav className="w-full fixed top-0 z-50 bg-black/30 backdrop-blur-md px-6 py-3 flex items-center justify-center">

            <div className="relative w-full mx-auto px-4 py-1 flex justify-between items-center text-white">

                <img src="logo.png" alt="logo" className="w-12 h-12 cursor-pointer" />


                <ul className="flex gap-8 text-sm sm:text-base">
                    <li>
                        <a href="#projects" className="hover:text-purple-400 transition">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/parthdadhich"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-400 transition"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1NkkCWDTuUY11H6Lbgo1NAYsLGAEgqzQ3/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-400 transition"
                        >
                            Resume
                        </a>
                    </li>
                </ul>


                <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="absolute bottom-0 left-0 h-[2px] bg-purple-500 w-full"

                />
            </div>
        </nav>
    );
}
