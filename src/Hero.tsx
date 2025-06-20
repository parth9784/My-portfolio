import Stars from "./star";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen bg-gradient-to-b from-[#0a0a23] to-black text-white overflow-hidden mt-1">

            <Stars />
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-17 mt-6">
                <img src='generated-image (1).png' alt="Parth waving" className="w-36 h-36 mb-4" />

                <h1 className="text-4xl sm:text-6xl font-light leading-snug">
                    I'm <span className="font-bold">Parth Dadhich</span>,<br />
                    a <span className="italic text-purple-400 font-semibold text-5xl edu">Full Stack Developer</span> <br />
                    based in <span className="font-bold">Bhilwara, Rajasthan</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl">
                    I specialize in building full-stack web applications using the <strong>MERN stack</strong>, <strong>Solana Web3</strong>,
                    and integrating intelligent features with <strong>AI/ML</strong> and <strong>NLP</strong>. I'm passionate about creating
                    scalable and impactful digital solutions.
                </p>
                <button
                    className="bg-white text-black px-6 py-2 rounded-full font-semibold text-sm border border-black hover:bg-gray-100 transition"
                >
                    My Works
                </button>


            </div>
        </section>
    );
}
