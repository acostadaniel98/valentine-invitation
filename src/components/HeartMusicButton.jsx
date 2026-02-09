import useMusic from "../hooks/useMusic";

export default function HeartMusicButton() {
    const { playing, toggle } = useMusic("/music.mp3");

    return (
        <button
            onClick={toggle}
            className="music-btn"
        >
            {playing ? "💖" : "🤍"}
        </button>
    );
}
