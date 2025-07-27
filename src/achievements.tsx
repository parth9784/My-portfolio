// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FileText,
//   Search,
//   ClipboardList,
//   FileBarChart2,
//   BookOpenText,
//   Languages,
// } from "lucide-react";

// const features = [
//   {
//     icon: FileText,
//     title: "Smart Drafting",
//     description:
//       "Generate legally sound documents, notices, contracts, and letters instantly with AI assistance.",
//   },
//   {
//     icon: Search,
//     title: "Document Q&A",
//     description:
//       "Ask LexAi questions about uploaded legal documents and get direct, contextual answers.",
//   },
//   {
//     icon: ClipboardList,
//     title: "Contract Reviewing",
//     description:
//       "Highlight risky clauses, missing elements, or summarize contracts in seconds using NLP-powered analysis.",
//   },
//   {
//     icon: FileBarChart2,
//     title: "Case Reports & Analysis",
//     description:
//       "Upload judgments, FIRs, or case laws — LexAi extracts key arguments, citations, and provides summaries.",
//   },
//   {
//     icon: BookOpenText,
//     title: "Legal Research",
//     description:
//       "Save hours of reading with AI-based legal research and case referencing suggestions tailored to your context.",
//   },
//   {
//     icon: Languages,
//     title: "OCR & Translation",
//     description:
//       "Convert scanned legal documents to searchable text and translate between regional Indian languages and English.",
//   },
// ];

// export default function AboutPage() {
//   const containerRef = useRef(null);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const container = containerRef.current;
//       if (!container) return;

//       const rect = container.getBoundingClientRect();
//       const scrollY = -rect.top;
//       const containerHeight = container.offsetHeight - window.innerHeight;
//       const progress = Math.min(1, Math.max(0, scrollY / containerHeight));
//       const activeIndex = Math.floor(progress * features.length);

//       cardRefs.current.forEach((card, i) => {
//         if (!card) return;

//         const localProgress = progress * features.length - i;

//         if (localProgress < 0) {
//           card.style.transform = `translateY(-80px) scale(0.85) rotate(-10deg)`;
//           card.style.opacity = "0.2";
//         } else if (localProgress >= 0 && localProgress < 1) {
//           const scale = 1 + 0.05 * Math.sin(localProgress * Math.PI);
//           card.style.transform = `translateY(0) scale(${scale}) rotate(0deg)`;
//           card.style.opacity = "1";
//         } else {
//           const stackOffset = (i - activeIndex) * 10;
//           const scale = 1 - (i - activeIndex) * 0.03;
//           card.style.transform = `translateY(${stackOffset}px) scale(${scale}) rotate(-5deg)`;
//           card.style.opacity = "0.6";
//         }
//       });
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="bg-[#f5f7fa] text-gray-800 py-20 px-6 sm:px-10 lg:px-24">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-5xl mx-auto text-center"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold text-[#C18D21] mb-6">About LexAi</h1>
//         <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//           LexAi is your intelligent legal assistant designed to empower lawyers, legal teams,
//           and law students with cutting-edge AI tools.
//         </p>
//       </motion.div>

//       <section ref={containerRef} className="min-h-[600vh] flex relative mt-24">
//         <div className="sticky top-0 w-1/2 h-screen flex flex-col justify-center px-10">
//           <motion.h2
//             className="text-4xl lg:text-5xl font-bold text-[#C18D21] mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Core Capabilities
//           </motion.h2>
//           <p className="text-lg text-gray-600 leading-relaxed max-w-md">
//             LexAi empowers the legal ecosystem with AI-driven document drafting, analysis, and automation.
//           </p>
//         </div>

//         <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center">
//           <div className="relative w-[300px] h-[320px]">
//             {features.map((feature, i) => (
//               <motion.div
//                 key={i}
//                 ref={(el) => (cardRefs.current[i] = el)}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
//                   bg-white rounded-2xl px-8 py-10 border-t-4 border-[#C18D21] shadow-xl 
//                   transition-all duration-700 ease-out text-center flex flex-col items-center justify-center"
//               >
//                 <div className="w-14 h-14 mb-4 rounded-full bg-[#C18D21]/10 flex items-center justify-center shadow-inner">
//                   <feature.icon size={28} className="text-[#C18D21]" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#C18D21] mb-3">{feature.title}</h3>
//                 <p className="text-gray-700 text-sm leading-relaxed max-w-[260px]">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }
