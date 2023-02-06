const playerHand = document.getElementById('man-hand');
const computerHand = document.getElementById('machine-hand');
const resultText = document.getElementById('text-result');
const playerScore = document.getElementById('p-score');
const compScore = document.getElementById('c-score');

const possiblePicks = document.getElementsByClassName('possiblePick');
let compPoints;
let playerPoints;

let playerPick;
let compPick;


Array.from(possiblePicks).forEach(possiblePick => possiblePick.addEventListener('click', (e) => {
    playerPick = e.target.id;
    playerHand.src = 'assets/images/' + playerPick + '.png'
    getCompPick()
    declareWinner()
    givePoints()
}));

function getCompPick() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
      compPick = 'rock'
    }
    if (randomNumber === 2) {
      compPick = 'paper'
    }
    if (randomNumber === 3) {
      compPick = 'scissors'
    }
    computerHand.src = 'assets/images/' + compPick + '.png';
  }

  function declareWinner(){
    if (compPick === playerPick){
        resultText.innerHTML = 'DRAW!'
    }
      if (compPick === 'rock' && playerPick === 'paper'){
        resultText.innerHTML = 'YOU WIN! One point for mankind!'
      }
      if (compPick === 'paper' && playerPick === 'scissors'){
        resultText.innerHTML = 'YOU WIN! One point for mankind!'
      }
      if (compPick === 'scissors' && playerPick === 'rock'){
        resultText.innerHTML = 'YOU WIN! One point for mankind!'
      }
      if (compPick === '' && playerPick === ''){
        resultText.innerHTML = 'YOU LOSE! One point for the machine!'
      }
      if (compPick === '' && playerPick === ''){
        resultText.innerHTML = 'YOU LOSE! One point for the machine!'
      }
      if (compPick === '' && playerPick === ''){
        resultText.innerHTML = 'YOU LOSE! One point for the machine!'
      }
      


  }

