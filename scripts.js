var leader = 0;
var playerCorrect = 0;
var computerCorrect = 0;
var playerGuess;
var computerGuess;
var randomNumber;
var playerNumber;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function quizStart() {

do {
  //Player's turn to guess
  randomNumber = getRandomIntInclusive(1, 5);
  playerGuess = prompt("I'm thinking of a number between 1 and 5. What is it?");
    if (parseInt(playerGuess) === randomNumber) {
      alert("Nice! That's the number I picked.")
      playerCorrect +=1;
    } else if(playerGuess.toLowerCase() == "quit"){
      break;
    } else {
      alert("Sorry, the number was " + randomNumber + ".");
    }
    if (playerCorrect > 2){
      break;
    }
  //Computer's turn to guess
  playerNumber = prompt("My turn. Enter a number between 1 and 5.");
  computerGuess = getRandomIntInclusive(1, 5);
    if (computerGuess == playerNumber) {
      alert("I guessed " + computerGuess + ". Score one for me!")
      computerCorrect += 1;
    } else if(playerNumber.toLowerCase() === "quit"){
      break;
    } else {
      alert("I guessed " + computerGuess + ". Bummer!")
    }

    if (computerCorrect > 2){
      break;
    }
  //Check which player is winning

  if (playerCorrect > computerCorrect) {
    alert("Player is winning at " + playerCorrect + " correct guesses.");
    leader = playerCorrect;
  } else if (computerCorrect > playerCorrect) {
    alert("Computer is winning at " + computerCorrect + " correct guesses.");
    leader = computerCorrect;
  } else if (computerCorrect === playerCorrect) {
    alert("Player and Computer are tied.")
  }

} while (leader < 3);

  //Game Over Message
  if (playerCorrect > 2) {
    alert("Congratulations! You won!")
  } else {
    alert("Sorry, you didn't win this time.")
  }

}
