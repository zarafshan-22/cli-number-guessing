#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please  guess a number Between 1-6:",
    }
]);
console.log(answer);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulation! You Guessed Right Number");
}
else {
    console.log("You Guessed Wrong Number");
}
;
