
// letters array
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// letters used is an array for user letters entered
var lettersUsed = [];

// Set the initial score
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var gameOver = false;


// user key input 
//var userGuess = null;
document.onkeyup = function(event) {


//create random letter and store it in computerGuess
	var computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

//save key press to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + userGuess + " Computer picked: " + computerGuess);

// Comparison to computer guess
	if(userGuess != computerGuess) { //no match
   		document.getElementById('result').innerHTML=('Wrong! You have '+ guessesLeft+ ' guesses left');
   		guessesLeft--;
   		lettersUsed.push(userGuess);
   } 
   else { //match
   		document.getElementById('result').innerHTML=('You won! Game will reset on next key press');
   		wins++;
   		userGuess = 9;
   		lettersUsed = [];
   } 

   if (guessesLeft == 0) {
  		document.getElementById('result').innerHTML=('Sorry, you lost. Game will reset on next key press');
   		losses++;
   		guessesLeft = 9;
   	lettersUsed = [];
   } 

	console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + userGuess + " Computer picked: " + computerGuess);

	document.getElementById('keysPressed').innerHTML = "Previous letters used: "+ lettersUsed ;
	document.getElementById('score').innerHTML = "Number of Wins: " +wins +" Number of Losses: " +losses;


}

