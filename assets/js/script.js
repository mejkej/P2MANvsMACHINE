const squares = document.getElementsByClassName('square');
const message = document.getElementById('message');
const resetBtn = document.getElementById('ttt-resetBtn');
const playerSymbol = 'x';
const computerSymbol = 'o';

resetBtn.addEventListener('click', function() {
    squares.src = 'assets/images/sqr-png';
});

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function () {
    if (squares[i].getAttribute('data-symbol') ==='') { 
    squares[i].src = 'assets/images/x.png';
    squares[i].setAttribute('data-symbol',playerSymbol);
    

}})};



