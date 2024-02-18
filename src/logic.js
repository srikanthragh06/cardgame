const shuffleWithRowIndex = (cards, ansCards, rowIndex) => {
    const newCards = [
        ...cards.filter((card, i) => i % 3 === rowIndex % 3),
        ...cards.filter((card, i) => i % 3 === (rowIndex + 1) % 3),
        ...cards.filter((card, i) => i % 3 === (rowIndex + 2) % 3),
    ];

    const newAnsCards = ansCards.filter((card, i) => i % 3 === rowIndex);

    return { cards: newCards, ansCards: newAnsCards };
};
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

cards = shuffleArray(cards);

const nCards = cards.length;

let ansCards = [...cards];

const options = [1, 1, 0];

options.forEach((option) => {
    ({ cards, ansCards } = shuffleWithRowIndex(cards, ansCards, option));
    console.log(cards, ansCards);
});
