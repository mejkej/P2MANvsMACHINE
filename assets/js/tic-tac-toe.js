// Gets HTML Elements
let h2Message = document.getElementById('message');
const playerScoreSpan = document.getElementById('playerscore');
const compScoreSpan = document.getElementById('compscore');
const tttResetScoreBtn = document.getElementById('ttt-resetBtn');
let squares = document.querySelector('.square');

// Game Variables
const playerSymbol = 'x';
const compSymbol = 'o';
let playerScore = 0;
let compScore = 0;

const waysToWin = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
  [0, 4, 8], [2, 4, 6] // diagonal
];

function playerMove() {

}
