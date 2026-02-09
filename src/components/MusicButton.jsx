import { FaMusic } from "react-icons/fa";
import useMusic from "../hooks/useMusic";
import music from "../assets/music.mp3";

export default function MusicButton() {
    const { playing, toggle } = useMusic(music);

    return (
        <button
            onClick={toggle}
            className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg"
            aria-label="Toggle music"
        >
            <FaMusic className={playing ? "animate-pulse" : ""} />
        </button>
    );
}
