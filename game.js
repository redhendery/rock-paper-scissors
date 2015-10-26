// var userInput = prompt("Do you wish to take a Rock, some Paper or a Pair of Scissors into battle?");
var userChoice = "paper";

// var userChoice = userInput.toLowerCase();
var computerChoice = Math.random();
console.log(computerChoice);

if(computerChoice < 0.34) {
  computerChoice = "Rock!";
}

else if(computerChoice >= 0.67) {
  computerChoice = "Scissors!";
}

else {
  computerChoice = "Paper!";
}

var compare = function(userChoice, computerChoice) {
  console.log("compare");
  if (userChoice === computerChoice) {
    return "It is a tie!!!"
  }

  else if(userChoice === "rock") {
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