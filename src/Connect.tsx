// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// export default function Connect() {
//     return (
//         <section id="contact" className="w-full bg-[#0a0a23] py-20 px-6 text-white font-sans">
//             <div className="max-w-4xl mx-auto text-center">

//                 {/* Heading */}
//                 <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//                     Have <span className="text-purple-400">something</span> in mind?
//                 </h2>
//                 <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Let’s connect.</h3>
//                 <p className="text-gray-400 max-w-xl mx-auto mb-10">
//                     Your ideas deserve to be built. Let’s collaborate and create something meaningful.
//                 </p>

//                 {/* Contact Info */}
//                 <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm sm:text-base font-medium text-white mb-8">
//                     <a href="mailto:parthdadhich22@gmail.com" className="hover:text-purple-400 transition">parthdadhich22@gmail.com</a>
//                     <span className="hidden sm:inline">|</span>
//                     <span className="text-purple-300">+91 8696774986</span>
//                 </div>


//                 <div className="flex justify-center gap-6">
//                     <a
//                         href="https://www.linkedin.com/in/parthdadhich"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="p-3 rounded-full bg-white/10 hover:bg-purple-500/20 border border-white/10 text-gray-300 hover:text-purple-400 text-xl transition cursor-pointer"
//                     >
//                         <FaLinkedin />
//                     </a>

//                     <a
//                         href="https://github.com/parth9784"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="p-3 rounded-full bg-white/10 hover:bg-purple-500/20 border border-white/10 text-gray-300 hover:text-purple-400 text-xl transition cursor-pointer"
//                     >
//                         <FaGithub />
//                     </a>

//                     <a
//                         href="mailto:parthdadhich22@gmail.com"
//                         className="p-3 rounded-full bg-white/10 hover:bg-purple-500/20 border border-white/10 text-gray-300 hover:text-purple-400 text-xl transition cursor-pointer"
//                     >
//                         <FaEnvelope />
//                     </a>
//                 </div>

//             </div>
//         </section>
//     );
// }
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Connect() {
    return (
        <section id="contact" className="w-full bg-[#0a0a23] py-20 px-6 text-white font-sans">
            <div className="max-w-4xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Have <span className="text-purple-400">something</span> in mind?
                </h2>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Let’s connect.</h3>
                <p className="text-gray-400 max-w-xl mx-auto mb-10">
                    Your ideas deserve to be heard. Let’s collaborate and build something impactful.
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-6 mt-6">
                    {/* LinkedIn Button */}
                    <a
                        href="https://www.linkedin.com/in/parthdadhich"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-purple-600/30 hover:text-purple-300 transition text-white font-medium text-sm sm:text-base"
                    >
                        <FaLinkedin className="text-lg" />
                        LinkedIn
                    </a>

                    {/* GitHub Button */}
                    <a
                        href="https://github.com/parth9784"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-purple-600/30 hover:text-purple-300 transition text-white font-medium text-sm sm:text-base"
                    >
                        <FaGithub className="text-lg" />
                        GitHub
                    </a>

                    {/* Email Button */}
                    <button

                        className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-purple-600/30 hover:text-purple-300 transition text-white font-medium text-sm sm:text-base"
                    >
                        <FaEnvelope className="text-lg" />
                        Email
                    </button>
                </div>
            </div>
        </section>
    );
}
