import Stars from "./star";

export default function Hero({ onScrollToConnect }: { onScrollToConnect: () => void }) {
    return (
        <section id="hero" className="relative min-h-screen bg-gradient-to-b from-[#0a0a23] to-black text-white overflow-hidden pt-24 sm:pt-28">
            <Stars />
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
                <img src="generated-image (1).png" alt="Parth waving" className="w-40 h-40 sm:w-40 sm:h-40 mb-6 shadow-md" />
                <h1 className="text-4xl sm:text-5xl font-light leading-snug mb-4">
                    I'm <span className="font-bold">Parth Dadhich</span>,<br />
                    a <span className="italic text-purple-400 font-semibold text-5xl edu">Full Stack Developer</span><br />
                    based in <span className="font-bold">Bhilwara, Rajasthan</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl">
                    I specialize in building full-stack web applications using the <strong>MERN stack</strong>, <strong>Solana Web3</strong>,
                    and integrating intelligent features with <strong>AI/ML</strong> and <strong>NLP</strong>. I'm passionate about creating
                    scalable and impactful digital solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
                    <button
                        onClick={() => window.open("https://drive.google.com/file/d/1NkkCWDTuUY11H6Lbgo1NAYsLGAEgqzQ3/view?usp=sharing", "_blank")}
                        className="bg-transparent cursor-pointer text-white px-6 py-2 rounded-full font-semibold text-sm border border-white hover:bg-white hover:text-black transition shadow-md">
                        Resume
                    </button>
                    <button onClick={onScrollToConnect} className="bg-transparent cursor-pointer text-white px-6 py-2 rounded-full font-semibold text-sm border border-white hover:bg-white hover:text-black transition shadow-md">
                        Connect With Me
                    </button>
                </div>
            </div>
        </section>
    );
}
