const playerHand = document.getElementById('man-hand');
const computerHand = document.getElementById('machine-hand');
const resultText = document.getElementById('text-result');
const playerScore = document.getElementById('p-score');
const compScore = document.getElementById('c-score');

const possiblePicks = document.getElementsByClassName('possiblePick');

let playerPick;
let computerPick;

Array.from(possiblePicks).forEach(possiblePick => possiblePick.addEventListener('click', (e) => {
    playerPick = 'assets/images/' + e.target.id + '.png';
    playerHand.src = playerPick;
}));
