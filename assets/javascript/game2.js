$(document).ready(function(){


    let score = 0;
    let wins = 0;
    let losses = 0;
    let crysVals = [];

    function generateCrysVals() {
  

        // Generate 4 random numbers

        while (crysVals.length < 4) {
            Math.floor(Math.random() * 12) + 1;
        
        // Avoid Dupes

        if(crysVals.indexOf(crysVals) < 0) {
            crysVals.push(CrysVals)
        }
        }
        console.log(crysVals);
        //return values

        return {
            crysVals,
        };
        console.log(crysVals);
    }
   
















})
