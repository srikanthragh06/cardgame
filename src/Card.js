export default function Card({ card, className }) {
    return (
        <div className={`flex-1 px-4 py-  object-cover  ${className}`}>
            <img
                src={`${process.env.PUBLIC_URL}/cardsImages/${card}`}
                alt={card}
            />
        </div>
    );
}
