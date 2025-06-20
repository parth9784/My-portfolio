import { motion } from "framer-motion";

export default function Stars() {
    const starStyles = Array.from({ length: 180 }).map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 2 + 1;

        return (
            <motion.div
                key={i}
                className="absolute rounded-full bg-white opacity-80 blur-[1px]"
                style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                }}
                animate={{
                    y: ["0px", "15px", "-15px", "0px"],
                    opacity: [0.8, 1, 0.6, 0.8],
                }}
                transition={{
                    duration: Math.random() * 6 + 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                }}
            />
        );
    });

    return <div className="absolute inset-0 z-0">{starStyles}</div>;
}
