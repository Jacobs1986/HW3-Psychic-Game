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
//console.log(`The chosen word is ${selectedWord}`);

//Writing a test function to see if I can get it all to work right.
function findGuessedLetter(testWord) {
    for (i = 0; i < testWord.length; i++) {
        let locations = [];
        let searchFrom = -1;
        while (testWord.indexOf("n", searchFrom + 1) > -1) {
            searchFrom = testWord.indexOf("n", searchFrom);
            locations.push(searchFrom);
        }
        return locations;
        i++;
    }
}

