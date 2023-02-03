const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessBox = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainbutton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

// Display our symbols as placeholders for the chosen word's letters
const circleSymbols = function (word) {
    const placeHolderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeHolderLetters.push("●")
    };
    wordInProgress.innerText = placeHolderLetters.join("");
};

circleSymbols(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    // Empty message paragraph
    message.innerText = "";
    // Grab what was entered in the input
    const guess = guessBox.value;
    // Let's make sure that it is a single letter
    const goodGuess = validateInput(guess);
    
    if (goodGuess) {
        // Letter received, let's guess.
        makeGuess(guess);
    }
    guessBox.value = "";
});


const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        // Is the input empty?
        message.innerText = "Please type a letter.";
    } else if (input.length > 1) {
        // Did you type more than one letter?
        message.innerText = "Enter 1 letter only.";
    } else if (!input.match(acceptedLetter)) {
        //Not using alpha lettering
        message.innerText = "Letters A-Z only.";
    } else {
        //Single letter input
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter. Try again."
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};