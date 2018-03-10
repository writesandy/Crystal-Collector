$(document).ready(function(){

// Variables

let score = "";
let wins = 0;
let losses = 0;

// // Randomize number for player to guess (19-120)

let guessMe = function getRandomIntInclusive(min, max) {
        min = Math.ceil(19);
        max = Math.floor(120);
        return Math.floor(Math.random() * (max - min +1)) + min;

}
console.log(guessMe());

$('.match-value').text(guessMe());

})


// Randomize Crystal values

const crys1 = Math.floor(Math.random() * 12) + 1;
console.log(crys1);
const crys2 = Math.floor(Math.random() * 12) + 1;
console.log(crys2);
const crys3 = Math.floor(Math.random() * 12) + 1;
console.log(crys3);
const crys4 = Math.floor(Math.random() * 12) + 1;
console.log(crys4);

// // Start Game Function



// $('.match-value').text(guessMe);

// // crystalVals = function getRandomIntInclusive(min, max) {
// //         min = Math.ceil(1);
// //         max = Math.floor(12);
// //         let crystalVals = [];
// //         for (let i = 0; i < 4; i++); {
// //             do { crystalVals = Math.floor(Math.random() * (max - min +1)) + min; } {
// //         crystalVals.push
// //         }
// //         }
// //     };



//     // console.log(crystalVals([0,1,2,3]));



// startGame();

// console.log(guessMe());
// })


// // Assign value to guessValue


// // Randomize number for crystals on click (1-12)


// // Assign value to crystal values




// // Increment value to Score

//})