// set all variables
var gamesSelection = ["pac-man","centipede","galaxian","asteroids","mappy","missle command","qix"]
var gampick = ""
var target = ""
var wins = 0
var loss = 0
var plays = 9
var leTTers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var gueSSed = []
var tarDisp = []
var gamestart = false

document.onkeyup = function(event) {
    if (gamestart)  {gameON()
        console.log (tarDisp);
        console.log (target);
        console.log ("booya");
        } else { 
            start();
            gamestart = true;
    }
}
   // start function
function start() { 
    gamePick = Math.floor(Math.random()*gamesSelection.length);
    plays = 9;
    target= (gamesSelection[gamePick]);
    for (i=0;i<target.length;i++) { 
             if (target[i] === "-") { tarDisp.push("-")}
                 else if (target[i] === " ") {tarDisp.push("&nbsp")}
                        else {tarDisp.push("_")};                    
    };
    document.querySelector("#tarDisp").innerHTML = tarDisp.join(" ")
// return target, tarDisp
}

function gameON() {
    for (j=0;j<leTTers.length;j++) {
        if (event.key === leTTers[j]) {
            for (k=0;k<target.length;k++){
                if (target[j] === event.key ) {
                    (tarDisp[j] = event.key);
            }else {
                (gueSSed.push[j]);
                (leTTers.splice[j]);
                document.querySelector("#tarDisp").innerHTML = tarDisp.join(" ");
                document.querySelector("#leTTers").innerHTML = leTTers; 
            };

        };
            if (target[j] === event.key ) {
                tarDisp[j] = event.key;
                document.querySelector("#display").innerHTML = tarDisp.join(" ")
            };
        };
    gueSSed.push(event.key.toLowerCase()); };

    };


function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    // Build the guessing word and clear it out
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }
    // Hide game over and win images/text
    document.getElementById("pressKeyTryAgain").style.cssText= "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";

    // Show display
    updateDisplay();
//     gameON(tarDisp,target)
}

// function gameON(x,y){
//     for (i=)
//     }
// // function upDateScore()

   // document.querySelector("#lives").innerHTML ="Lives: "+ plays;
  //  ;
//return target, tarDisp 

   //restart function
    //game function
    //score function
    





    // document.querySelector("#wins").innerHTML ="Wins: "+ wins
    // document.querySelector("#losses").innerHTML ="Losses: "+ loss

    



// starting the actuall game
    
  
// the score will display itself after each sub loop 
        // for ( j =plays;  j > 0; j--)  {
        //     document.querySelector("#lives").innerHTML = "lives: " + plays;
  //          document.onkeyup function(lettercheck){
        //     for (l=0;l<target.length;l++) {
        //         if (target[l] === x) {console.log("check")}
        //     }
         
        // }
    //}

  //  }

//   document.querySelector("#wins").innerHTML ="Wins: "+ wins
//   document.querySelector("#losses").innerHTML ="Losses: "+ loss
//   document.onkeyup = function() { 
//   THIS SHOULD COME IN HANDY!
// .forEach
// var userInput = event.key.toLowerCase();
// document.querySelector("#score").innerHTML = "Score: " + score;
  // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
//   var html =
//   "<p>You chose: " + userGuess + "</p>" +
//   "<p>The computer chose: " + computerGuess + "</p>" +
//   "<p>wins: " + wins + "</p>" +
//   "<p>losses: " + losses + "</p>" +
//   "<p>ties: " + ties + "</p>";

// Set the inner HTML contents of the #game div to our html string
// document.querySelector("#game").innerHTML = html;