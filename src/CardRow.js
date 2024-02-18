import Card from "./Card";
import { shuffleWithRowIndex } from "./utils/constants";

export default function CardRow({ cards, setCards, row, ansCardsRef }) {
    const handleRowClick = (e) => {
        const res = shuffleWithRowIndex(cards, ansCardsRef.current, row);
        setCards(res.cards);
        ansCardsRef.current = res.ansCards;
    };

    return (
        <div
            onClick={(e) => handleRowClick(e)}
            className="w-full border- border-black flex-1 cursor-pointer hover:opacity-75
                            flex px-4"
        >
            {cards
                .filter((card, i) => i % 3 === row % 3)
                .map((card) => (
                    <Card key={card} card={card} />
                ))}
        </div>
    );
}
