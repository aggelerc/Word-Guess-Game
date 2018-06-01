var possibleWords = ["brisket", "grate", "sauce", "hickory", "ribs"]
   
var randomWord = "";

var spacesInRandomWord = 0;

var hitsAndOther = [];

var misses = [];
   
var winCounter = 0;

var lossCounter = 1;

var guessesLeft = 11;
   
function gamePlay() {

   hitsAndOther = [];
  
   misses = [];

   guessesLeft = 11;

   randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];

   lettersInRandomWord = randomWord.split("");

   spacesInRandomWord = lettersInRandomWord.length;

   console.log(randomWord);

   console.log(spacesInRandomWord)
   
   for(var i = 0; i < spacesInRandomWord; i++) {

       hitsAndOther.push("_");

    }
    
   console.log(hitsAndOther);
   
}
   
   
function inputCheck(letter) {
       
    var letterInWord = false;
   
    for(var i = 0; i < spacesInRandomWord; i++) {

        if(randomWord[i] === letter) {

            letterInWord = true;
   
        }
    }
   
    if(letterInWord) {

        for(i = 0; i < spacesInRandomWord; i++) {

            if(randomWord[i] === letter) {

            hitsAndOther[i] = letter;
   
            }
   
        }
    }
       
    else {

        guessesLeft --;

        misses.push(letter)

    }
   
}
   
   
function gameOver() {
       
   
    document.getElementById('displayedWord').innerHTML = hitsAndOther.join(" ");

    document.getElementById('guessesRemaining').innerHTML = guessesLeft;

    document.getElementById('wrongGuesses').innerHTML = misses.join(" ");
   
    console.log(lettersInRandomWord);

    console.log(hitsAndOther);

    if(lettersInRandomWord.join(" ") === hitsAndOther.join(" ")) {

        winCounter++;

        alert("You win!");

        document.getElementById('wins').innerHTML = winCounter;

        gamePlay();

    }
       
    else if(guessesLeft === 0) {

        document.getElementById('losses').innerHTML  = lossCounter ++;

        document.getElementById('wrongGuesses').innerHTML = "";

        alert("Well this is embarasing, you're all out of guesses.  Better luck next time.");   

        gamePlay();
    }
   
   
   
   
}

gamePlay();

document.onkeyup = function(event) {
     
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    console.log("player input", letterGuessed)

       inputCheck(letterGuessed)

       gameOver();
   
}