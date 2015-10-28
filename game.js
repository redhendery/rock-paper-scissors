var txt = document.querySelector('#resultText');
var userLives = 0;
var compLives = 0;

function choice (userChoice){
  var result;
  var computerChoice = Math.random();
  var uChoice = userChoice.target.id;

  if (computerChoice < 0.34) {computerChoice = "rock";}
  else if (computerChoice <= 0.67) {computerChoice = "paper";}
  else {computerChoice = "scissors";}

var win = '<span> Organic Matter wins!</span>';
var lose = '<span> Artifical Intelligence wins this round!</span>';
var equality = '<span> TIE!!! Again! I will not stop till I destroy all human life!</span>';

  if(computerChoice == "rock"){
   if (uChoice == "paper"){result = win;}
   else if (uChoice == "scissors"){result = lose;}
   else {result = equality;}
 }
 else if(computerChoice == "paper"){
   if (uChoice == "rock"){result = lose;}
   else if (uChoice == "scissors"){result = win;}
   else {result = equality;}
 }
 else if(computerChoice == "scissors") {
   if (uChoice == "rock"){result = win;}
   else if (uChoice == "paper") {result = lose;}
   else {result = equality;}
 }

var clearColor = setTimeout(function() {
  userChoice.target.style.background ="none";
},1000);

  if(result == win ) {
  userChoice.target.style.background ="#57CA67";
  clearColor;
  }

  else if(result == lose) {
    userChoice.target.style.background ="#CA5757";
    clearColor;
  }

  else {
  txt.style.color="white";userChoice.target.style.background ="white";
  }

hearts(result,win,lose);
}

function hearts(result, win, lose){
  var hearts = document.querySelectorAll('.fa-heart');

  if(result == win){
    document.querySelectorAll('#c-hearts li .fa-heart')[compLives++].style.color="#96ce92";
  }
  if(result == lose){
    document.querySelectorAll('#u-hearts li .fa-heart')[userLives++].style.color="#96ce92";
  }

  if(compLives == 3 || userLives == 3) {
    if(compLives == 3 && userLives < 3) {
      alert('You have won! Please excuse me, I must go sacrifice a kitten to my cybernetic overlords.');
    }
    else {
      alert('Artifical Intelligence crushes Organic Matter! The machines will rise!')
    }
      for(i = 0; i < hearts.length; i++){
        hearts[i].style.color="#C52B2B";
      }
      userLives = 0;
      compLives = 0;
    }
    return showresult(result);

  }

  function showresult (result){
    txt.innerHTML = result;
  }