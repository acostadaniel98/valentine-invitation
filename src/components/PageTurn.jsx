import { motion } from "framer-motion";

export default function PageTurn({ children, pageKey }) {
    return (
        <motion.div
            key={pageKey}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ transformPerspective: 1200 }}
            className="min-h-screen-safe flex items-center justify-center"
        >
            {children}
        </motion.div>
    );
}
