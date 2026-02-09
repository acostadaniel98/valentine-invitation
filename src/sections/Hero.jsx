import Screen from "../components/Screen";

export default function Hero({ next }) {
    return (
        <Screen>
            <h1 className="text-4xl md:text-6xl font-romantic mb-6">
                Para mi amada esposa Ale 💕
            </h1>

            <p className="text-xl mb-10">
                Una pequeña sorpresa para el amor de mi vida
            </p>

            <button onClick={next} className="btn-romantic">
                Comenzar 💖
            </button>
        </Screen>
    );
}
