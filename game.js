var userInput = prompt("Do you wish to take a Rock, some Paper or a Pair of Scissors into battle?");
// var userChoice = "paper"; for testing purposes
var userChoice = userInput.toLowerCase();
console.log(userChoice);

var acceptableChoices = ["rock", "paper", "scissors"];
var computerChoice = Math.random();

if((acceptableChoices.indexOf(userChoice)) === -1) {
  alert("Invalid Selection")
} else {

if(computerChoice < 0.34) {
  computerChoice = "rock";
}

else if(computerChoice >= 0.67) {
  computerChoice = "scissors";
}

else {
  computerChoice = "paper";
}
console.log(computerChoice);

var compare = function(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It is a tie!!!"
  }

  else if(userChoice == "rock") {
    if(computerChoice === "scissors") {
      return "Rock wins for you! This time..."
    }
    else {
      return "Paper wins! Bow before your cybernetic overlord!"
    }
  }

  else if(userChoice === "paper") {
    if(computerChoice === "rock") {
      return "Paper wins for you! This time..."
    }
    else {
      return "Scissors wins! Artifical Intelligence crushes Human Intelligence!"
    }
  }

  else if(userChoice === "scissors") {
    if(computerChoice === "paper") {
      return "Paper wins for you! This time..."
    }
    else {
      return "Rock wins! You will never defeat technology pitiful human!"
    }
  }
}

console.log(compare(userChoice,computerChoice));
$(document).ready(function(){
  $('#result').append("<p>"+compare(userChoice,computerChoice)+"</p>");
});

};