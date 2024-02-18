import { useEffect, useRef, useState } from "react";
import { cards as constCards, shuffleArray } from "./utils/constants";
import CardRow from "./CardRow";
import GameOverSceen from "./GameOverSceen";

export default function App() {
    const [cards, setCards] = useState(constCards);
    const ansCardsRef = useRef(cards);

    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        setCards([...shuffleArray(cards)]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (ansCardsRef.current.length === 1) {
            setGameOver(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ansCardsRef.current]);

    return (
        <div
            className="w-full h-full border- border-red-500 bg-black
                        flex flex-col items-center space-y-1 py-2"
        >
            {!gameOver ? (
                <>
                    <CardRow
                        cards={cards}
                        setCards={setCards}
                        row={0}
                        ansCardsRef={ansCardsRef}
                    />
                    <CardRow
                        cards={cards}
                        setCards={setCards}
                        row={1}
                        ansCardsRef={ansCardsRef}
                    />
                    <CardRow
                        cards={cards}
                        setCards={setCards}
                        row={2}
                        ansCardsRef={ansCardsRef}
                    />
                </>
            ) : (
                <GameOverSceen finalCard={ansCardsRef.current[0]} />
            )}
        </div>
    );
}
