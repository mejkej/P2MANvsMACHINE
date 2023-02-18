const playerHand = document.getElementById('man-hand');
const computerHand = document.getElementById('machine-hand');
const resultText = document.getElementById('text-result');
const playerScore = document.getElementById('p-score');
const compScore = document.getElementById('c-score');
const possiblePicks = document.getElementsByClassName('possiblePick');

const resetBtn = document.getElementById('reset-rps');

// Reset Score 
resetBtn.addEventListener('click', function () {
  playerPoints = 0;
  compPoints = 0;
  playerScore.innerHTML = playerPoints;
  compScore.innerHTML = compPoints;
});


let playerPoints = 0;
let compPoints = 0;

let playerPick;
let compPick;

//main loop! 
Array.from(possiblePicks).forEach(possiblePick => possiblePick.addEventListener('click', (e) => {
  playerPick = e.target.id;
  playerHand.src = 'assets/images/' + playerPick + '.png';
  getCompPick();
  declareWinner();
  scoreCount();
  round();
}));
// Resets the picked hands images and clears the result text after 1.5 seconds
function round() {
  setTimeout(() => {
    resultText.innerHTML = '';
    playerHand.src = '';
    computerHand.src = '';
  }, 1500);
}
//Generating a randomized computer pick
function getCompPick() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    compPick = 'rock';
  }
  if (randomNumber === 2) {
    compPick = 'paper';
  }
  if (randomNumber === 3) {
    compPick = 'scissors';
  }
  computerHand.src = 'assets/images/' + compPick + '.png';
}

//function that hands out points to the round winner
function scoreCount() {
  if (resultText.innerHTML === 'YOU WIN!') {
    playerPoints++;
    playerScore.innerHTML = playerPoints;

  }
  if (resultText.innerHTML === 'YOU LOSE!') {
    compPoints++;
    compScore.innerHTML = compPoints;
  }
}

//all possible outcomes of a round and how they should be handled
function declareWinner() {
  if (compPick === playerPick) {
    resultText.innerHTML = 'DRAW!';
  }
  if (compPick === 'rock' && playerPick === 'paper') {
    resultText.innerHTML = 'YOU WIN!';
  }
  if (compPick === 'paper' && playerPick === 'scissors') {
    resultText.innerHTML = 'YOU WIN!';
  }
  if (compPick === 'scissors' && playerPick === 'rock') {
    resultText.innerHTML = 'YOU WIN!';
  }
  if (compPick === 'rock' && playerPick === 'scissors') {
    resultText.innerHTML = 'YOU LOSE!';
  }
  if (compPick === 'paper' && playerPick === 'rock') {
    resultText.innerHTML = 'YOU LOSE!';
  }
  if (compPick === 'scissors' && playerPick === 'paper') {
    resultText.innerHTML = 'YOU LOSE!';
  }
}