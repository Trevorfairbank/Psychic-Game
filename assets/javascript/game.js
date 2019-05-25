//Guess what letter I'm thinking of
//all letters within an array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Determine variables
var wins = 0;
var losses = 0;
var guessLeft = 9;
var userStr = "";

//Get computer to randomly generate a letter
var randomItem = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomItem);

// var randomLetter = function(randomItem){

// }

//getting the letter element by it's id
var letterText = document.getElementById("letter");
//letterText.textContent = randomItem;

//display wins
var winText = document.getElementById("wins");
winText.textContent = wins;
//display losses
var lossText = document.getElementById("losses");
lossText.textContent = losses;
//display guesses left
//display user guesses
var guessesLeftText = document.getElementById("guess");
guessesLeftText.textContent = guessLeft;

//When user types a key
document.onkeyup = function (event) {
    //store the key pressed in a variable called userGuess
    var userGuess = event.key;
    //When letter is chosen, it is displayed at guessesLeftText variable
    //guessesLeftText.textContent = guessLeft;

    //Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
    //When user types a key, letter is appended (+=)
    var keyGuessText = document.getElementById("user-guess");
    keyGuessText.textContent += userGuess + " ";

    //Wins: (# of times the user has guessed the letter correctly)
    //When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
    if (randomItem === userGuess && guessLeft > 1) {
        alert("Correct!");
        guessLeft = 9;
        wins++;
        winText.textContent = wins;
        keyGuessText.textContent = "";
        randomItem = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    //Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
    else if (randomItem !== userGuess && guessLeft > 1) {
        //Guesses Left: (# of guesses left. This will update)
        guessLeft = guessLeft - 1;
    }

    else if (guessLeft === 1) {
        alert("you lose!");
        losses++;
        lossText.textContent = losses;
        guessLeft = 9;
        keyGuessText.textContent = "";
        randomItem = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    
    //When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
    else {
        losses++;
        guessLeft = 9;
    }

    guessesLeftText.textContent = guessLeft;
    //letterText.textContent = randomItem;
}
