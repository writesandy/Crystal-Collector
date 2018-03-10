$(document).ready(function(){

// Variables

let score = "";
let guessValue = "";
let crystalVals = [];
let wins = "";
let losses = "";



// Start Game Function

// Randomize number for player to guess (19-120)

const startGame = function() {

guessValue = function getRandomIntInclusive(min, max) {
        min = Math.ceil(19);
        max = Math.floor(120);
        return Math.floor(Math.random() * (max - min +1)) + min;
        let matchvalue = guessValue();
    };


crystalVals = function getRandomIntInclusive(min, max) {
        min = Math.ceil(1);
        max = Math.floor(12);
        let crystalVals = [];
        for (let i = 0; i < 4; i++); {
        return Math.floor(Math.random() * (max - min +1)) + min;
        crystalVals.push
        }
    };


    console.log(guessValue());
    console.log(crystalVals([0,1,2,3]));
};


startGame();
$('.match-value').text(guessValue);

})


// Assign value to guessValue


// Randomize number for crystals on click (1-12)


// Assign value to crystal values




// Increment value to Score

// })