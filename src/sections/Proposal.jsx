import { useState } from "react";
import HeartConfetti from "../components/HeartConfetti";

export default function Proposal() {
    const [yes, setYes] = useState(false);

    return (
        <div className="text-center space-y-6">
            <HeartConfetti show={yes} />

            {!yes ? (
                <>
                    <h2 className="text-3xl">
                        ¿Aceptas seguir siendo mi San Valentín? 💕
                    </h2>

                    <button
                        onClick={() => setYes(true)}
                        className="btn-romantic text-xl"
                    >
                        Ti 💖
                    </button>
                </>
            ) : (
                <h2 className="text-4xl gold-text gold-glow">
                    Sabía que dirías que sí 💘
                </h2>
            )}
        </div>
    );
}
