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

/*
//I am going to need a random number generator for this game for numbers between 0 - 4.
let wordNumber = Math.floor(Math.random() * 4);
selectedWord = wordChoice[wordNumber].toLowerCase();
console.log(`The chosen word is ${selectedWord}`)
*/

//Create the array that will contain the letters from the word.
function wordSearch(word) {
    array = word.split("");
    return array;
}

wordSearch("test");
console.log(array);