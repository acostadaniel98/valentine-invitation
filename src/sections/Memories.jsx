import Screen from "../components/Screen";
import HeartImage from "../components/HeartImage";

export default function Memories({ next }) {
    const photos = [
        `${base}photos/1.jpeg`,
        `${base}photos/2.jpeg`,
        `${base}photos/3.jpeg`,
        `${base}photos/4.jpeg`,
    ];

    return (
        <Screen>
            <h2 className="text-3xl mb-6">Nuestros recuerdos 💗</h2>

            <div className="grid grid-cols-2 gap-6">
                {photos.map((p, i) => (
                    <HeartImage key={i} src={p} />
                ))}
            </div>

            <button onClick={next} className="btn-romantic mt-10">
                Siguiente 💕
            </button>
        </Screen>
    );
}
