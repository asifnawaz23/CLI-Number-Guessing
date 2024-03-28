#! /usr/bin/env node

import inquirer from "inquirer";

// 1- Computer will generate a random number.

// 2- user input for number guessing/

// 3- compare user input with computer generated number and show results.

const randomNumber = Math.floor(Math.random() * 10 + 1);


const answers = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Please Guess a random number betwen 1-10",
    }
])
console.log(answers);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed Right Number");
} else{
    console.log("You guessed Wrong Number");
}