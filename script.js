/* Simplest problem: get the console to display "rock", "paper" and "scissors"
Create a function called getComputerChoice
  Display message "Rock, Paper, Scissors"
  Call function getComputerChoice  
*/

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let choiceNumber = Math.floor(Math.random()*3);
  let choiceString;

  switch(choiceNumber){
    case 0:
      choiceString = "ROCK";
      break;
    
    case 1:
      choiceString = "PAPER";
      break;

    case 2:
      choiceString = "SCISSORS";
      break;

    default:
      choiceString = "I don't wanna play anymore";
  }

  return choiceString;

}

function getHumanChoice(){
  return (prompt("Choose Rock, Paper or Scissors","Rock"));

}



function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toUpperCase();
  console.log(`Human: ${humanChoice}`);
  console.log(`Computer: ${computerChoice}`);
  if (humanChoice === "ROCK"){
    switch (computerChoice){
      case "ROCK":
        console.log(`That's a tie! ${humanChoice} equals ${computerChoice}`);
        break;

      case "PAPER":
        console.log(`You lose! ${computerChoice} beats ${humanChoice} `);
        break;
      
      case "SCISSORS":
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        break;

    }

  }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);
