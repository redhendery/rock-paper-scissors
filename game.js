var userInput = prompt("Do you wish to take a Rock, some Paper or a Pair of Scissors into battle?");
var userChoice = userInput.toLowerCase();
computerChoice = Math.random();

if (computerChoice < 0.34) {
  computerChoice = "Rock!";
}

elseif (computerChoice >= 0.67) {
  computerChoice = "Scissors!";
}

else {
  computerChoice = "Paper!";
}

var compare = function(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It is a tie!!!"
  }

  elseif (userChoice === "rock") {
    if(computerChoice === "scissors") {
      return "Rock wins for you! This time..."
    }
    else {
      return "Paper wins! Bow before your cybernetic overlord!"
    }
  }

  elseif (userChoice === "paper") {
    if(computerChoice === "rock") {
      return "Paper wins for you! This time..."
    }
    else {
      return "Scissors wins! Artifical Intelligence crushes Human Intelligence!"
    }
  }

  elseif (userChoice === "scissors") {
    if(computerChoice === "paper") {
      return "Paper wins for you! This time..."
    }
    else {
      return "Rock wins! You will never defeat technology pitiful human!"
    }
  }

}
}

compare(userChoice, computerChoice)