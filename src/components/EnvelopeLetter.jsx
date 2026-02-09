import { useState } from "react";
import { motion } from "framer-motion";

export default function EnvelopeLetter({ next }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen-safe">

            {!open ? (
                <div
                    onClick={() => setOpen(true)}
                    className="relative w-72 h-44 cursor-pointer"
                >
                    {/* Sobre */}
                    <div className="absolute inset-0 bg-pink-300 rounded-lg shadow-xl" />

                    {/* Tapa */}
                    <motion.div
                        animate={open ? { rotateX: 180 } : {}}
                        transition={{ duration: 1 }}
                        style={{ transformOrigin: "top" }}
                        className="absolute inset-0 bg-pink-400 rounded-lg"
                    />

                    <p className="absolute inset-0 flex items-center justify-center text-white text-xl">
                        💌 Toca el sobre
                    </p>
                </div>
            ) : (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="romantic-card p-8 max-w-xl text-center space-y-4"
                >
                    <p>Mi amada Ale,</p>

                    <p>
                        Casarme contigo ha sido la mejor decisión que he tomado en mi vida.
                    </p>

                    <p>
                        Todos los dias a tu lado han sido llenos de experiencias y risas juntos.
                    </p>

                    <p>
                        Te amo, amo amarte, te adoro tanto y cada día me enamoro más de ti.
                    </p>

                    <p>
                        Quiero ser siempre tu apoyo incondicional.
                    </p>

                    <p>Gracias por ser mi hogar, mi apoyo y mi bestie 💖</p>

                    <button onClick={next} className="btn-romantic mt-4">
                        Ver recuerdos 💕
                    </button>
                </motion.div>
            )}
        </div>
    );
}
