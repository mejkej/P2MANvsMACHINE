const resetBtn = document.getElementById('ttt-resetBtn');
const board = document.getElementById('board');
const message = document.getElementById('message');
const freeSquares = document.getElementsByClassName('square');


Array.from(freeSquares).forEach(square => {
    square.addEventListener('click', (e) => {
        if (e.target.src === "assets/images/sqr.png")
        e.target.src = "assets/images/sqr.png";
  
    })
})




