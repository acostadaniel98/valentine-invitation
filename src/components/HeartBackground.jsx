import { motion } from "framer-motion";

export default function HeartBackground() {
    const hearts = Array.from({ length: 12 });

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        y: "100vh",
                        x: Math.random() * window.innerWidth,
                        opacity: 0.2
                    }}
                    animate={{ y: "-10vh" }}
                    transition={{
                        duration: 12 + Math.random() * 10,
                        repeat: Infinity
                    }}
                    className="absolute text-pink-300 text-2xl"
                >
                    💗
                </motion.div>
            ))}
        </div>
    );
}
