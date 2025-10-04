#!/usr/bin/env node

import {
  checkAnswer,
  askUserAnswer,
  greetUser,
  congratulationsMessage,
} from "../index.js";
import { randomInteger } from "../utils.js";

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

export default function brainGcd() {
  const name = greetUser();
  console.log("Find the greatest common divisor of given numbers.");

  for (let i = 0; i < 3; i++) {
    let num1 = randomInteger(1, 50);
    let num2 = randomInteger(1, 50);

    const correctAnswer = gcd(num1, num2);

    const userAnswer = askUserAnswer(`${num1} ${num2}`);

    if (!checkAnswer(correctAnswer, Number(userAnswer))) {
      console.log("Let's try again, " + name + "!");
      return;
    }
  }
  congratulationsMessage(name);
}

brainGcd();
