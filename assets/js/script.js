const resetBtn = document.getElementById('ttt-resetBtn');
const playerPick = document.querySelectorAll('img[src="assets/images/x.png"]');
const computerPick = document.querySelectorAll('img[src="assets/images/o.png"]');
const squares = document.getElementsByClassName('square');
const message = document.getElementById('message');

Array.from(squares).forEach(square => square.addEventListener('click', (e) => {
 e.target.src = "assets/images/x.png"
 e.target = playerPick;
 getCompPick();
 
}));

getCompPick() {
const randomNumber = Math.random(squares.length);
return(randomNumber);
}

resetBtn.addEventListener('click', function(){
    location.reload();
});