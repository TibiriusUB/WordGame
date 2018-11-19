// set all variables
var gamesSelection = ["pac-m an","centi pede","gal axian","aste roids"]
var gampick = ""
var target = ""
var wins = 0
var loss = 0
var plays = 9
var leTTers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var gueSSed = []
var tarDisp = []
var gamestart = true
  
  

document.onekeyup = function(event) { 
    if (gamestart)  {  console.log ("booya")}

else { start() }
}
    //start function
function start() { 
    let gamePick = Math.floor(Math.random()*gamesSelection.length);
    let plays = 9;
    var target= (gamesSelection[gamePick]);
    for (i=0;i<target.length;i++) { 
             if (target[i] === "-") { tarDisp.push("-")}
                 else if (target[i] === " ") {tarDisp.push("&nbsp")}
                        else {tarDisp.push("_")}
    };
    console.log (gamePick)
    console.log (target.length)
    console.log (target)
    console.log (plays)
    console.log (tarDisp)
    }
    document.querySelector("#lives").innerHTML ="Lives: "+ plays;
    document.querySelector("#display").innerHTML = tarDisp.join(" ") ;
//return target, tarDisp 

   //restart function
    //game function
    //score function
    





    document.querySelector("#wins").innerHTML ="Wins: "+ wins
    document.querySelector("#losses").innerHTML ="Losses: "+ loss

    



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