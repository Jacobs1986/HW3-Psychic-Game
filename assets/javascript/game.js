/*
This is going to be a word game where the user can guess a random word from an array list.

I need to create a list and a number generator that would randomly pick a word from the list.
*/

/*
//Test word
let word = "Programming";

// let's use .length to find the length of the string.
console.log(`The word is ${word} and the length is ${word.length}.`);
*/

//Let's create the array that I will need for this game.
let wordChoice = [
    "Programmer",
    "Bootcamp",
    "Cookie",
    "Canine"
];

//I am going to need a random number generator for this game for numbers between 0 - 4.
let wordNumber = Math.floor(Math.random() * 4);
selectedWord = wordChoice[wordNumber].toLowerCase();
console.log(`The chosen word is ${selectedWord}`);

//Writing a test function to see if I can get it all to work right. I am going to need two parameters for this.
function findGuessedLetter(selectedWord, guessedLetter) {
    //I am going to need a loop that will compare a gussed letter to a letter in the word.
    //I'm thinking that maybe changing the word into an array might help.
    let wordArray = selectedWord.split("");
    console.log(wordArray.length);
    //create an empty locations array
    let locations = [];
    //From there I would need to create a loop that will compare the guessed word to the index of a word in the array
    //OK so I got the loop working, BUT i'm now having an issue when the same letter is back to back. 
    let idx = wordArray.indexOf(guessedLetter);
    while (idx != -1) {
        locations.push(idx);
        idx = wordArray.indexOf(guessedLetter, idx + 1);
    }

    //If the word and guessWord match then push the location into the locations array
    return locations
}

