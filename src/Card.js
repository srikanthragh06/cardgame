export default function Card({ card, className }) {
    return (
        <div className={`flex-1 px-4 py-  object-cover  ${className}`}>
            <img src={`/cardsImages/${card}`} alt={card} className="h-" />
        </div>
    );
}
