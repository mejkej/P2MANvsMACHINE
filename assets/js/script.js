const board = document.querySelector("#board");
const message = document.querySelector("#message");
const squares = document.querySelectorAll(".top, .mid, .bottom");
let currentPlayer = "X";

board.addEventListener("click", handleMove);

function handleMove(event) {
  const square = event.target;

  if (square.textContent === "") {
    square.textContent = currentPlayer;
    checkForWin();
    togglePlayer();
  }
}

function checkForWin() {
  if (
    (squares[0].textContent === currentPlayer &&
      squares[1].textContent === currentPlayer &&
      squares[2].textContent === currentPlayer) ||
    (squares[3].textContent === currentPlayer &&
      squares[4].textContent === currentPlayer &&
      squares[5].textContent === currentPlayer) ||
    (squares[6].textContent === currentPlayer &&
      squares[7].textContent === currentPlayer &&
      squares[8].textContent === currentPlayer) ||
    (squares[0].textContent === currentPlayer &&
      squares[3].textContent === currentPlayer &&
      squares[6].textContent === currentPlayer) ||
    (squares[1].textContent === currentPlayer &&
      squares[4].textContent === currentPlayer &&
      squares[7].textContent === currentPlayer) ||
    (squares[2].textContent === currentPlayer &&
      squares[5].textContent === currentPlayer &&
      squares[8].textContent === currentPlayer) ||
    (squares[0].textContent === currentPlayer &&
      squares[4].textContent === currentPlayer &&
      squares[8].textContent === currentPlayer) ||
    (squares[2].textContent === currentPlayer &&
      squares[4].textContent === currentPlayer &&
      squares[6].textContent === currentPlayer)
  ) {
    message.textContent = `Player ${currentPlayer} wins!`;
    board.removeEventListener("click", handleMove);
  } else if (squares.every((square) => square.textContent !== "")) {
    message.textContent = "It's a draw!";
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}








