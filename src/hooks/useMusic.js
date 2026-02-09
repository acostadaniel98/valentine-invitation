import { useRef, useState } from "react";

export default function useMusic(src) {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const toggle = async () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(src);
            audioRef.current.loop = true;
        }

        try {
            if (playing) {
                audioRef.current.pause();
            } else {
                await audioRef.current.play();
            }
            setPlaying(!playing);
        } catch {
            console.log("User interaction required");
        }
    };

    return { playing, toggle };
}
