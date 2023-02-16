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

// reset game 

resetBtn.addEventListener('click', function() {
  location.reload();
});

//main loop
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function (){ 
    if (squares[i].getAttribute('data-symbol') === '') { 
    squares[i].src = 'assets/images/x.png';
    squares[i].setAttribute('data-symbol', playerSymbol);  
    resultDetector();
    getCompPick();
    resultDetector();
  
    
  }
   }
  )
};
//generating a randomized computer pick the picked square gets assigned a new src and a data-symbol
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
    message.innerHTML = 'Draw game!';
  }
}








