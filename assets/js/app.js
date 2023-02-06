const playerHand = document.getElementById('man-hand');
const computerHand = document.getElementById('machine-hand');
const resultText = document.getElementById('text-result');
const playerScore = document.getElementById('p-score');
const compScore = document.getElementById('c-score');

const possiblePicks = document.getElementsByClassName('possiblePick');

let playerPick;
let compPick;


Array.from(possiblePicks).forEach(possiblePick => possiblePick.addEventListener('click', (e) => {
    playerPick = 'assets/images/' + e.target.id + '.png';
    playerHand.src = playerPick;
    getCompPick()
    declareWinner()
}));

function getCompPick() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
    
    if (randomNumber === 1) {
      compPick = 'assets/images/rock.png'
    }
    if (randomNumber === 2) {
      compPick = 'assets/images/paper.png'
    }
    if (randomNumber === 3) {
      compPick = 'assets/images/scissors.png'
    }
    computerHand.src = compPick;
  }

  function declareWinner(){
    if (compPick === playerPick){
        resultText.innerHTML = 'DRAW!'
    }
      if (compPick === 'assets/images/rock.png' && playerPick === 'assets/images/paper.png'){
        resultText.innerHTML = 'One point for mankind!'
      }
    
      


  }

