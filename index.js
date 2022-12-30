#!usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets start calculation'); //start animation here
    await sleep();
    rainbowTitle.stop();
}
// welcome();
async function askQuestion() {
    const answers = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "which operation you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Number 1:"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number 2:"
        }
    ]);
    if (answers.operator == "Addition") {
        console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
    }
    else if (answers.operator == "Subtraction") {
        console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
    }
    else if (answers.operator == "Multiplication") {
        console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
    }
    else if (answers.operator == "Division") {
        console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt([{
                type: 'input',
                name: 'restart',
                message: 'Do you want to continue? Press Y or N:'
            }]);
    } while (again.restart == "Y" || again.restart == "y" || again.restart == "yes" || again.restart == "YES");
}
startAgain();
