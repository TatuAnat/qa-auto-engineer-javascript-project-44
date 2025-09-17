#!/usr/bin/env node
import readlineSync from "readline-sync";
import crypto from "crypto";

export default function brainCalc() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name?");
  console.log("Hello, " + name);
  console.log("What is the result of the expression?");

  const operators = ["+", "-", "*"];

  for (let i = 0; i < 3; i++) {
    let num1 = crypto.randomInt(1, 50);
    let num2 = crypto.randomInt(1, 50);

    let operatorRandomIndex = crypto.randomInt(0, operators.length);

    let operator = operators[operatorRandomIndex];

    let correctAnswer = undefined;

    switch (operator) {
      case "+":
        correctAnswer = num1 + num2;
        break;
      case "-":
        correctAnswer = num1 - num2;
        break;
      case "*":
        correctAnswer = num1 * num2;
        break;
    }

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (Number(userAnswer) === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
brainCalc();
