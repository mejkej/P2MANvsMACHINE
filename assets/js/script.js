const squares = document.getElementsByClassName('square');
const message = document.getElementById('message');
const resetBtn = document.getElementById('ttt-resetBtn');
const playerSymbol = 'x';
const computerSymbol = 'o';

resetBtn.addEventListener('click', function() {
    location.reload();
});


for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function () {
    if (squares[i].getAttribute('data-symbol') ==='') { 
    squares[i].src = 'assets/images/x.png';
    squares[i].setAttribute('data-symbol',playerSymbol);
    
    const unPickedSquare = Array.from(squares).filter(square => square.getAttribute('data-symbol') === '');
    const randomNumber = Math.floor(Math.random() * unPickedSquare.length);
    unPickedSquare[randomNumber].src = 'assets/images/o.png';
    unPickedSquare[randomNumber].setAttribute('data-symbol',computerSymbol);


    function winDetector (){
     
    }

}})};



