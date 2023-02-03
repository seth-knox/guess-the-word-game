const guessedLetter = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessBox = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainbutton = document.querySelector(".play-again");

const word = "magnolia";

// Display our symbols as placeholders for the chosen word's letters
const circleSymbols = function(word) {
    const placeHolderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeHolderLetters.push("●")
    };
    wordInProgress.innerText = placeHolderLetters.join("");
};

circleSymbols(word);

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const guess  = guessBox.value;
    console.log(guess);
    guessBox.value = "";
});