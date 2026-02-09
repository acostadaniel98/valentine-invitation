export default function HeartImage({ src }) {
    return (
        <div className="heart-frame">
            <img
                src={src}
                loading="lazy"
                alt="recuerdo romántico"
            />
        </div>
    );
}
