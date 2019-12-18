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

//Now I need to take the word and break it down into letters.
wordSplitter = () => {
    letterArray = selectedWord.split("");
    //The letters will need to be put into an array that can be searched later.
    return letterArray;
}

//I need a function that will search through the letterArray for the letter that the player guesses.
findGuessedLetter = (letter) => {
    let searchArray = letterArray;
    let locations = [];
    let searchFrom = -1;
    while (searchArray.indexOf(letter, searchFrom + 1) > -1) {
        searchFrom = searchArray.indexOf(letter, searchFrom);
        locations.push(searchFrom);
    }
    return locations;
}