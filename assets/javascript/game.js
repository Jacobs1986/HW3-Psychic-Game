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

/*
// So far the code is working. Now I need to capture the key events when the player uses the keyboard.
document.onkeyup = function(event) {
    console.log(event.key);
}
*/

//I now need a way to search for the letters in the string.
//This is a test one.
let test = "Canine";

//going to create a for loop that will check for the letter more than once
//the loop
for (let i = 0; i < test.length; i++) {
    let testSearch = test.search("n");
    console.log(testSearch);
}