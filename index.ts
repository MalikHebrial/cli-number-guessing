#! /usr/bin/env node

import inquirer from "inquirer"

// 1) computer will generare a rendom number

// 2) user input for guessing number

// 3) compare user input with computer generated number and show results

const rendomNumber = Math.floor(Math.random()*6+1);
const answers = await inquirer.prompt([
    {
       name : "userGuessedNumber",
       type : "number",
       message: "Please guess a number 1-6",
},
]);
if (answers.userGuessedNumber === rendomNumber){
    console.log("Congratulations! You guess right number  ");
}else{
    console.log("You Guessed wrong number");
}
