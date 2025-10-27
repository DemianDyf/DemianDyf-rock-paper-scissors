/* Simplest problem: get the console to display "rock", "paper" and "scissors"
Create a function called getComputerChoice
  Display message "Rock, Paper, Scissors"
  Call function getComputerChoice  
*/

function getComputerChoice(){
  let choiceNumber = Math.floor(Math.random()*3);
  let choiceString;

  switch(choiceNumber){
    case 0:
      choiceString = "Rock";
      break;
    
    case 1:
      choiceString = "Paper";
      break;

    case 2:
      choiceString = "Scissors";
      break;

    default:
      choiceString = "I don't wanna play anymore";
  }

  return choiceString;

}

function getHumanChoice(){
  return (prompt("Choose Rock, Papaer or Scissors","Rock"));

}

console.log(`Human: ${getHumanChoice()}`);
console.log(`Computer: ${getComputerChoice()}`);





