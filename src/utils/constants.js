export const cards = [
    "2_of_clubs.png",
    "2_of_hearts.png",
    "3_of_diamonds.png",
    "3_of_hearts.png",
    "3_of_spades.png",
    "4_of_clubs.png",
    "4_of_spades.png",
    "5_of_clubs.png",
    "6_of_clubs.png",
    "6_of_hearts.png",
    "7_of_clubs.png",
    "8_of_diamonds.png",
    "8_of_spades.png",
    "9_of_clubs.png",
    "9_of_spades.png",
    "ace_of_clubs.png",
    "jack_of_clubs.png",
    "king_of_clubs.png",
    "king_of_diamonds.png",
    "king_of_spades.png",
    "queen_of_clubs.png",
];

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export const shuffleWithRowIndex = (cards, ansCards, rowIndex, nRows) => {
    const newCards = [
        ...cards.filter((card, i) => i % 3 === rowIndex % 3),
        ...cards.filter((card, i) => i % 3 === (rowIndex + 1) % 3),
        ...cards.filter((card, i) => i % 3 === (rowIndex + 2) % 3),
    ];

    const newAnsCards = ansCards.filter((card, i) => i % 3 === rowIndex);
    return { cards: newCards, ansCards: newAnsCards };
};
