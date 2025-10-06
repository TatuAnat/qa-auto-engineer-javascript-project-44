#!/usr/bin/env node

import { runGame } from "../index.js";
import { randomInteger } from "../utils.js";

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

function getRoundData() {
  let num1 = randomInteger(1, 50);
  let num2 = randomInteger(1, 50);

  const correctAnswer = gcd(num1, num2);
  const question = `${num1} ${num2}`;

  return { correctAnswer, question };
}

runGame(getRoundData, "Find the greatest common divisor of given numbers.");
