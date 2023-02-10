const squares = document.getElementsByClassName("square");
let playerTurn = true;
const resetBtn = document.getElementById('ttt-resetBtn');

resetBtn.addEventListener('click', function(){
  squares.setAttribute("src", = "")
})

Array.from(squares).forEach(square => {
  square.addEventListener("click", function() {
    if (square.getAttribute("src") === "" && playerTurn) {
      square.setAttribute("src", "assets/images/x.png");
      playerTurn = false;
      computerTurn();
    }
  });
});

function computerTurn() {
  let computerSquare = Math.floor(Math.random() * 9);
  if (squares[computerSquare].getAttribute("src") === "") {
    squares[computerSquare].setAttribute("src", "assets/images/o.png");
    playerTurn = true;
  } else {
    computerTurn();
  }
}
    

function getWinner(){

}



