import { motion } from "framer-motion";

export default function HeartConfetti({ show }) {
    if (!show) return null;

    const hearts = Array.from({ length: 40 });

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {hearts.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        y: -50,
                        x: Math.random() * window.innerWidth
                    }}
                    animate={{
                        y: "100vh",
                        rotate: 360
                    }}
                    transition={{
                        duration: 4 + Math.random() * 3,
                    }}
                    className="absolute text-2xl"
                >
                    💖
                </motion.div>
            ))}
        </div>
    );
}
