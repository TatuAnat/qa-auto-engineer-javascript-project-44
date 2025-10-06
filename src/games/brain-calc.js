#!/usr/bin/env node

import { runGame } from "../index.js";
import { randomInteger } from "../utils.js";

function newFunction(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      throw new Error(`Unknown operator`);
  }
}

export function getRoundData() {
  const operators = ["+", "-", "*"];
  let num1 = randomInteger(1, 50);
  let num2 = randomInteger(1, 50);

  let operatorRandomIndex = randomInteger(0, operators.length);

  let operator = operators[operatorRandomIndex];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = newFunction(num1, operator, num2);

  return { correctAnswer, question };
}

runGame(getRoundData, "Brain Calc");
