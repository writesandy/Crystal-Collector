$(document).ready(function(){

// Variables

let score = 0;
let wins = 0;
let losses = 0;
let crys1 = "";
let crys2 = "";
let crys3 = "";
let crys4 = "";


// Start Game Function
// Randomize number for player to guess (19-120)

let guessMe = function getRandomIntInclusive(min, max) {
        min = Math.ceil(19);
        max = Math.floor(120);
        return Math.floor(Math.random() * (max - min +1)) + min;

}
console.log(guessMe());

$('.match-value').text(guessMe());

})


// Randomize Crystal values

let crys1 = Math.floor(Math.random() * 12) + 1;
console.log(crys1);
let crys2 = Math.floor(Math.random() * 12) + 1;
console.log(crys2);
let crys3 = Math.floor(Math.random() * 12) + 1;
console.log(crys3);
let crys4 = Math.floor(Math.random() * 12) + 1;
console.log(crys4);


// add points to DOM score when crystal is clicked

$('.crystal').click(function(){
        let score = 0
       if (score !== guessValue) {
        score += $(this).val();
        console.log(score);
        $('#score').text(score);
        alert('uff duh');
}
})




    
        // } else {
//         secondNumber += $(this).val();
//         console.log(secondNumber);
//         $('#second-number').text(secondNumber);
        
//     });
    
//     $('.crystal-amber').text(crys1);


// if points are less than target add allow another click

// if points equal target "You Win"

// if points don't equal target "Try Again"


