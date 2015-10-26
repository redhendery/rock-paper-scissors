var userChoice = prompt("Do you wish to take a Rock, some Paper or a Pair of Scissors into battle?");
var res = userChoice.toLowerCase();
computerChoice = Math.random();

// add .downcase to user input

if (computerChoice < 0.34) {
  computerChoice = "Rock!";
}

elseif (computerChoice >= 0.67) {
  computerChoice = "Scissors!";
}

else {
  computerChoice = "Paper!";
}