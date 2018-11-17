// set all variables
var gamesSelection = ["pac-man","centipede","galaxian","asteroids"]
var wins = 0
var loss = 0
var leTTers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

document.querySelector("#wins").innerHTML ="Wins: "+ wins
document.querySelector("#losses").innerHTML ="Losses: "+ loss
game()
document.onkeyup = function(game) { 
    
    var gamePick = Math.floor(Math.random()*gamesSelection.length);
    var plays = 9;
    var target= (gamesSelection[gamePick]);
    var tarDisp= [];

    for (i=0;i<target.length;i++) { 
             if (target[i] === "-") { tarDisp.push("-")}
                 else if (target[i] === " ") {tarDisp.push(" ")}
                        else {tarDisp.push("_")}
    }
    document.querySelector("#display").innerHTML = tarDisp.join(" ") ;
// starting the actuall game

    console.log (target.length)
    console.log (target)
    console.log (plays)
    console.log (tarDisp)
}
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