$(document).ready(function(){

// Variables for win/loss/score

let score = 0;
let wins = 0;
let losses = 0;

//variables for crystals and matchMe
let matchMe = 0;
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;

// Populate wins and losses

$('#wins').text(wins);
$('#losses').text(losses);

// Start Game Function

function startGame() {

// Randomize number for player to guess (19-120)

matchMe = Math.floor(Math.random() * 101) + 19;

// Display number to match

$('.match-value').text(matchMe);
console.log('match-value',matchMe);

// Randomize Crystal values

c1 = Math.floor(Math.random() * 12) + 1;
console.log('amber:',c1);
c2 = Math.floor(Math.random() * 12) + 1;
console.log('diamond:',c2);
c3 = Math.floor(Math.random() * 12) + 1;
console.log('ruby:',c3);
c4 = Math.floor(Math.random() * 12) + 1;
console.log('emerald:',c4);
score = 0;
$('.score').text(score);

// Need to figure out how to get the show/hide to work - used an alert instead
// $('.you-win, .you-lose').text(function(){
//        $('.you-win,.you-lose').hide();

// })
}

startGame();

console.log(c1,c2,c3,c4);
console.log(matchMe);

// Winner, winner chicken dinner function

function winner () {
        wins++;
        $('#wins').text(wins);
        score = 0;
        $('#score').text(score);
        alert('winner, winner, chicken dinner');
 //        $(".you-win").show();

         startGame();
}

// Try Again function

function tryAgain () {
        losses++;
        $('#losses').text(losses);
        score = 0;
        $('#score').text(score);
        alert('Try Again!');
         startGame();
}

// Crystal clicks and win eval

        $('.amber').click(function(){
                score = score + c1;
                console.log('amber',score);
                $('#score').text(score);
                if (score === matchMe) {
                        winner();
                } else if
                (score > matchMe) 
                        tryAgain();
                }       
);

        $('.diamond').click(function(){
                score = score + c2;
                console.log('diamond',score);
                $('#score').text(score);
                if (score === matchMe) {
                        winner();
                } else if
                (score > matchMe) 
                        tryAgain();

}  

);

        $('.ruby').click(function(){
                score = score + c3;
                console.log('ruby',score);
                $('#score').text(score);
                if (score === matchMe) {
                        winner();
                } else if
                (score > matchMe) 
                        tryAgain();
        
});

        $('.emerald').click(function(){
                score = score + c4;
                console.log('emerald',score);
                $('#score').text(score);
                if (score === matchMe) {
                        winner();
                } else if
                (score > matchMe) 
                        tryAgain();
        
});
})
