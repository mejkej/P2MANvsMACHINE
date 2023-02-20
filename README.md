
![Top of home page](assets/images/documentation/rpsresponsive.png)
# ManvsMachine.
Play rock paper scissors & Tic tac toe against the computer.
## Introduction:
This was my second project using HTML & CSS and the first one using Javascript. 
So the project contains two games a rock paper scissors game & A Tic tac toe game on the second page.
HTML and CSS for structure and styling and Javascript for functionality.

## Purpose:
Purpose, well most of all the purpose of this project was for me to learn Javascript.
And i did succesfully create two games that would probably have been considered less than mediocre in 1985 hehe.
But Rome was not built in a day and neither is a great programmer! 
## The Rock paper scissors game HTML & CSS part:
### Navbar
The navbar located at the top of the page is a Div element with a height of 100px and a 100% width with a
background color of darkcyan.
In the Div there are two anchor elements each with a image element nested inside them one icon displaying a handscissor
and the other one a Tic tac toe board. The images are rounded and with a white background color, there is also a css
hover effect turning the white background color slightly darker/gray when hovered. First time i used css flex and it 
was very practical.

### The game area
H1 element with the text "Rock Paper Scissors" on the top followed by the scoreboard consisting of a H1 element
containing two span elements one for the players score one for the computers score. Underneath the scoreboard there
is a H2 element with a span nested inside it, they are responsible for declaring the outcome of the game.

Next up a Div containing two image elements with an id of man-hand & machine-hand. These images will display both
players pick. Below these images are the players profile pictures. 

And on the bottom there is a Div with the same darkcyan color, a height of 90px and a 100% width.
Inside the div there are 4 round buttons 3 of witch has images nested inside them (Rock, paper, and scissors) The fouth button is yellow with the text reset (to reset the score) All buttons has a hover effect but with a darkred color instead.
## The Rock, paper, scissors Javascript.
First off i declared all the global scope variables and linked them to their HTML elements.

### Reset score button
I added a event listener to the reset button if clicked the let variables 
'playerPoints' & 'compPoints' will be set to 0.
and the Const playerScore & const compScore.innerHTML displayes the let variables value.

### The main loop

starts of with an Array from the const variable PossiblePicks. Array containing rock, paper & scisssors ofc.
using a forEach loop and an arrow function possiblePicks turns in to possiblePick that has an eventlistener listening 
for a click. the let variable playerPick gets assigned the e.targets.(ID) the id could be rock paper or scissors.
playerHand.src gets assigned 'assets/images/' + playerPick + '.png'. (The path to the clicked image)
the loop then continues with:
  getCompPick();
  declareWinner();
  scoreCount();
  round();

  GetCompPick
  inside this function a const variable is declared called randomNumber. randomNumber = a method 
  "Math.floor(Math.random() * 3) + 1;
  Math.floor Makes the random number generated to a 0 - 1 or 2 and not 0,33 0,66 or 0,99.
  The +1 makes the possible numbers generated 1, 2, or 3 instead of 0, 1, or 2.
  Then there is 3 if statements pairing the random numbers to either rock paper or scissors.
  If randomNumber === 1 compPick = rock and computerHand.src = 'assets/images/' + CompPick + '.png'.

  declareWinner
  In this function all the possible outcomes of a round is stated and how they should be handled.
  So the picks gets compared and then the resultText.innerHtml Declares Win Loss or Draw.

  scoreCount
  This function handles the scoreboard by looking at the resultText.innerHtml messsage.
  If the result text declares 'YOU WIN!' the let variable playerPoints increases by 1.
  And that then results in that the const variable playerScore.innerHTML displays the value of
  playerPoints and viceversa if the computer wins.
 
  round
  This function resets the SRC of the playerHand image & compHand image. It also clears the resultText.
  So that after both players have made their Picks the result has been declared and the scoreboard has been
  updated. Both playedhand images and result text is cleared indicating that its time to play the next round
  while still keeping track of the Scoreboard.








## Navbar
located on top of the website. Three anchor tags in an unordered list, Looks like three big buttons, i styled them to be oval and gave them a suiting color. One color as standard another while hovered and a third when selected.
Also changed the size of the font for smaller screen device.


## Video & Images
All off the media on the website is wrapped in a div, in order to make it responsive. There is a set max and minimum width and height and the content is displayed in the center of the browser.










## My personal thaught on the project
Building this website has been both a dream and a nightmare. See i was not aware the projects had a due date.
That is obviously entierly my own fault.

I have been doing my absoulute best to try and catch up. The last ~3 weeks i have been working on this project day and night. There has not been much sleep my life has only revolved around web developement. Besides the stress and lack off sleep it has been amazing. I am so happy i started the course and only wish i did it sooner.

I learned so many things along the way! For example that coding challenges and accually creating a project is two very
different things! Github, Gitpod, visual studio code. Saving repositories, writing commands in the terminal. The list goes on, best of all is i realize that coding is fun, addictive and rewarding.

It will be a pleasure to continue on this path. The course has my full attention and i am doing my best to catch up. I have made so many misstakes its incredible. I dont know if its in the CI material about how to save the repo in github but that has been an issue that is finally resolved. I have redone major parts off the project 3 times. The positive outcome of that is that i have gotten a much deeper understanding off css. Making the youtube video responsive took me ages but it taught me alot more than how to make a video responsive! 


## Resources:
the resources i have used to get this project done

My mentor Seun

Open Ais chat GPT:
https://chat.openai.com/chat
This has been a complety incredible tool that i have used. NOT TO WRITE THE CODE FOR ME.
But more like a teach. All doe i have credited some of the code to Chat GPT.

https://www.youtube.com/ 

https://www.w3schools.com/

https://codeinstitute.net/global/

CSS formated by:
https://www.cleancss.com/css-beautify/

Code formated by:
https://www.freeformatter.com/html-formatter.html#before-output

HTML & CSS validated by:
https://validator.w3.org/#validate_by_input

Javascript validated by:
https://jshint.com/

Chromes developer tools has also been a great resource.

## Sources off icons and images:
https://icons8.com/ has contributed to every single image/icon used on the website.
https://ui.dev/amiresponsive for the Images diplaying the project using different devices.

## Formating, Validating, Testing & Final Photos
The Html Css and Javascript has been validated by the resources mentioned above and there are 
photos of it below. The index.html had a few opinions on the absence of 'alt=""' for the playerHand
and computerHand images and some empty header and span elements but they are only empty until the 
Javascript says otherwise.

The code has been tested by myself using dev tools and also through my mobile.
The code is validated and formated both the css and the html has been approved.

![Rock,paper,scissors Responsive](assets/images/documentation/rpsresponsive.png)
![Tic tac Toe top of page Responsive](assets/images/documentation/tictactoetopresponsive.png)
![Tic tac toe bottom om page Responsive](assets/images/documentation/tictactoeresponsivenrtwo.png)
![Rock,paper,scissors html validated](assets/images/documentation/rpshtmlvalidated.png)
![Tic tac toe html validated](assets/images/documentation/tictactoehtmlvalidated.png)
![CSS validated](assets/images/documentation/cssvalidated.png)
![Rock,paper,scissors Javascript Validated one](assets/images/documentation/rpsvalidatedone.png)
![Rock,paper,scissors Javascript Validated two](assets/images/documentation/rpsvalidatorimgtwo.png)
![Tic tac toe JavaScript validated](assets/images/documentation/tictactoevalidatedone.png)
![Tic tac toe JavaScript validated](assets/images/documentation/tictactoevalidatedtwo.png)
