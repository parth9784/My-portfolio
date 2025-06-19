import { useEffect, useState } from "react";

export default function LightCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: any) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            className="pointer-events-none fixed z-[9999] rounded-full bg-white blur-md "
            style={{
                top: pos.y - 24,
                left: pos.x - 24,
                width: "38px",
                height: "38px",
                transform: "translate(-50%, -50%)",
            }}
        />
    );
}
