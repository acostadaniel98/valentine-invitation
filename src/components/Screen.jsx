import { motion } from "framer-motion";

export default function Screen({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen-safe flex flex-col justify-center items-center p-6 text-center"
        >
            {children}
        </motion.div>
    );
}
