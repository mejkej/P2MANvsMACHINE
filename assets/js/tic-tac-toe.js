const squares = document.getElementsByClassName('square');
const message = document.getElementById('message');
const resetBtn = document.getElementById('ttt-resetBtn');
const playerSymbol = 'x';
const computerSymbol = 'o';
const waysToWin = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6]
];
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
let playerScore = 0;
let computerScore = 0;

// reset game 
resetBtn.addEventListener('click', function() {
  location.reload();
});

function handleClick(event) {
  if (event.target.getAttribute('data-symbol') === '') {
    event.target.src = 'assets/images/x.png';
    event.target.setAttribute('data-symbol', playerSymbol);
    resultDetector();
    getCompPick();
    resultDetector();
    gameOver();
    scoreKeeper();
    round();
  }
}

function gameOver() {
  if (message.innerHTML === 'You Win!' || message.innerHTML === 'You Lost!') {
    for (let i = 0; i < squares.length; i++) {
      squares[i].removeEventListener('click', handleClick);
    }
  }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', handleClick);
}

function getCompPick() {
  const unPickedSquare = Array.from(squares).filter(square => square.getAttribute('data-symbol') === '');
  const randomNumber = Math.floor(Math.random() * unPickedSquare.length);
  unPickedSquare[randomNumber].src = 'assets/images/o.png';
  unPickedSquare[randomNumber].setAttribute('data-symbol', computerSymbol);
}

function resultDetector() {
  let winner = null;
  for (let i = 0; i < waysToWin.length; i++) {
    const [a, b, c] = waysToWin[i];
    if (squares[a].getAttribute('data-symbol') !== '' &&
        squares[a].getAttribute('data-symbol') === squares[b].getAttribute('data-symbol') &&
        squares[a].getAttribute('data-symbol') === squares[c].getAttribute('data-symbol')) {
      winner = squares[a].getAttribute('data-symbol');
      break;
    }
  }

  if (winner === playerSymbol) {
    message.innerHTML = 'You Win!';
  } else if (winner === computerSymbol) {
    message.innerHTML = 'You Lost!';
  } else if (Array.from(squares).every(square => square.getAttribute('data-symbol') !== '')) {
    message.innerHTML = 'Draw!';
  }
}
function scoreKeeper(){
  if (message.innerHTML === 'You Win!'){
    playerScore++;
    playerScoreDisplay.innerHTML = playerScore;
  }
  if (message.innerHTML === 'You Lost!'){
    computerScore++;
    computerScoreDisplay.innerHTML = computerScore;
  }
}
function round() {
  setTimeout(() => {
    if (message.innerHTML === 'You Win!' || message.innerHTML === 'You Lost!' || message.innerHTML === 'Draw!') {
    message.innerHTML = 'Make your move, click on a square.';
    for (let i = 0; i < squares.length; i++) {
    squares[i].src = 'assets/images/sqr.png';
    squares[i].setAttribute('data-symbol', '');
    squares[i].addEventListener('click', handleClick);
    }
    }
  }, 3000);
}
