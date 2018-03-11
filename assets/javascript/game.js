$(document).ready(function(){

// Variables for win/loss/score

let score = 0;
let wins = 0;
let losses = 0;

//variables for crystals and guessMe
let guessMe = "";
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;


// Start Game Function

function startGame() {

// Randomize number for player to guess (19-120)

let guessMe = Math.floor(Math.random() * 101) + 19;

// Display number to match

$('.match-value').text(guessMe);
console.log('match-value',guessMe);

// Randomize Crystal values

c1 = Math.floor(Math.random() * 12) + 1;
console.log('amber:',c1);
c2 = Math.floor(Math.random() * 12) + 1;
console.log('diamond:',c2);
c3 = Math.floor(Math.random() * 12) + 1;
console.log('ruby:',c3);
c4 = Math.floor(Math.random() * 12) + 1;
console.log('emerald:',c4)

}
startGame();

console.log(c1,c2,c3,c4);

// game scoring

$('.amber').click(function(){
        score = score + c1;
        console.log('amber',score)
        $('#score').text(score);
})

$('.diamond').click(function(){
        score = score + c2;
        console.log('diamond',score)
        $('#score').text(score);
})

$('.ruby').click(function(){
        score = score + c3;
        console.log('ruby',score)
        $('#score').text(score);
})

$('.emerald').click(function(){
        score = score + c4;
        console.log('emerald',score)
        $('#score').text(score);
})


        
    });
    
//     $('.crystal-amber').text(crys1);


// if points are less than target add allow another click

// if points equal target "You Win"

// if points don't equal target "Try Again"


