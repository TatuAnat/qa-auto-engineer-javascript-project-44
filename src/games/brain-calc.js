#!/usr/bin/env node

import {
  checkAnswer,
  askUserAnswer,
  greetUser,
  congratulationsMessage,
} from "../index.js";
import { randomInteger } from "../utils.js";

function getRoundData() {
  const operators = ["+", "-", "*"];
  let num1 = randomInteger(1, 50);
  let num2 = randomInteger(1, 50);

  let operatorRandomIndex = randomInteger(0, operators.length);

  let operator = operators[operatorRandomIndex];

  let correctAnswer = undefined;
  const question = `${num1} ${operator} ${num2}`;
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

  return { correctAnswer, question };
}

export default function brainCalc() {
  const name = greetUser();
  console.log("What is the result of the expression?");

  for (let i = 0; i < 3; i++) {
    const { correctAnswer, question } = getRoundData();

    const userAnswer = askUserAnswer(question);

    if (!checkAnswer(correctAnswer, Number(userAnswer))) {
      return;
    }
  }

  congratulationsMessage(name);
}
brainCalc();
