import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import PageTurn from "./components/PageTurn";
import HeartMusicButton from "./components/HeartMusicButton";
import HeartBackground from "./components/HeartBackground";

import Hero from "./sections/Hero";
import EnvelopeLetter from "./components/EnvelopeLetter";
import Memories from "./sections/Memories";
import Proposal from "./sections/Proposal";

export default function App() {
    const [page, setPage] = useState(0);
    const next = () => setPage(p => p + 1);

    const pages = [
        <Hero next={next} />,
        <EnvelopeLetter next={next} />,
        <Memories next={next} />,
        <Proposal />
    ];

    return (
        <>
            <HeartBackground />
            <HeartMusicButton />

            <AnimatePresence mode="wait">
                <PageTurn key={page}>
                    {pages[page]}
                </PageTurn>
            </AnimatePresence>
        </>
    );
}
