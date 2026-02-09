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

    const pages = [
        Hero,
        EnvelopeLetter,
        Memories,
        Proposal
    ];

    const [page, setPage] = useState(0);

    const next = () => {
        setPage(p => Math.min(p + 1, pages.length - 1));
    };

    const CurrentPage = pages[page];

    return (
        <>
            <HeartBackground />
            <HeartMusicButton />

            <AnimatePresence mode="wait">
                <PageTurn key={page}>
                    <CurrentPage next={next} />
                </PageTurn>
            </AnimatePresence>
        </>
    );
}
