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
console.log(`The chosen word is ${selectedWord}`)

// So far the code is working. Now I need to capture the key events when the player uses the keyboard.
//I'm going to try adding the loop into the onkeyup function
//The loop worked. Now I'm going to add the selectedWord into the loop search
document.onkeyup = function(event) {
    letter = event.key;
    console.log(`You pressed the letter: ${letter}`);
    //search for the letter
    for (let i = 0; i < selectedWord.length; i++) {
       let letterSearch = selectedWord.indexOf(letter, i);
       console.log(letterSearch);
    }
}

/*
test = "Canine".toLowerCase();
for (let i = 0; i < test.length; i++) {
    let letterSearch = test.indexOf("c", i);
    console.log(letterSearch);
}
*/