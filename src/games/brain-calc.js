#!/usr/bin/env node

import {
  checkAnswer,
  askUserAnswer,
  greetUser,
  congratulationsMessage,
} from "../index.js";
import { randomInteger } from "../utils.js";

export default function brainCalc() {
  const name = greetUser();
  console.log("What is the result of the expression?");

  const operators = ["+", "-", "*"];

  for (let i = 0; i < 3; i++) {
    let num1 = randomInteger(1, 50);
    let num2 = randomInteger(1, 50);

    let operatorRandomIndex = randomInteger(0, operators.length);

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

    const userAnswer = askUserAnswer(`${num1} ${operator} ${num2}`);

    if (!checkAnswer(correctAnswer, Number(userAnswer))) {
      return;
    }
  }

  congratulationsMessage(name);
}
brainCalc();
