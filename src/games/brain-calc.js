#!/usr/bin/env node

import { runGame } from "../index.js";
import { randomInteger } from "../utils.js";

export function getRoundData() {
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

runGame(getRoundData, "Brain Calc");
