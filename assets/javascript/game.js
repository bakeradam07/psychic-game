var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var psychicGuess;

var newLetter = function() {
    psychicGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
};

var whatsBeenGuessed = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(",");
};

var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};


