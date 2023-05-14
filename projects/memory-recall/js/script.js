const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Called everytime a card gets clicked
function flipCard() {
    if (lockBoard) return; // Prevents any card flipping before the cards are hidden or match
    if (this === firstCard) return; //Prevents clicking on same card to get a match

    // Accesses the element's classList and toggles the flip class
    this.classList.add('flip'); // When user clicks the 2nd card, falls into else block in our condition

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}
function checkForMatch() {
    let isMatch = firstCard.dataset.game === secondCard.dataset.game;
    isMatch ? disableCards() : unflipCards();
}
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

// Loop through all cards and attach an event listener
cards.forEach(card => card.addEventListener('click', flipCard));
