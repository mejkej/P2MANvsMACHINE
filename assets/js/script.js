const squares = document.querySelectorAll(".square");
const pickedSquare = document.querySelector("#pickedSquare");
const message = document.querySelector("#message");
const xImage = pickedSquare.children[0];
const oImage = pickedSquare.children[1];

Array.from(squares).forEach(square => square.addEventListener('click', (e) => {
if (e.target.src === 'assets/images/sqr.png') {
  e.target.src = 'assets/images/sqr.png';
}
}))


