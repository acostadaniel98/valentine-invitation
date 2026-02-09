import Screen from "../components/Screen";
import HeartImage from "../components/HeartImage";

import img1 from "../assets/photos/1.jpeg";
import img2 from "../assets/photos/2.jpeg";
import img3 from "../assets/photos/3.jpeg";
import img4 from "../assets/photos/4.jpeg";

export default function Memories({ next }) {

    const photos = [img1, img2, img3, img4];

    return (
        <Screen>
            <h2 className="text-3xl mb-6 text-center">
                Nuestros recuerdos 💗
            </h2>

            <div className="grid grid-cols-2 gap-6 justify-items-center">
                {photos.map((p, i) => (
                    <HeartImage key={i} src={p} />
                ))}
            </div>

            <button
                onClick={next}
                className="btn-romantic mt-10"
            >
                Siguiente 💕
            </button>
        </Screen>
    );
}
