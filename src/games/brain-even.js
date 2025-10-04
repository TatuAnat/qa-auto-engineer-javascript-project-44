#!/usr/bin/env node

import {
  checkAnswer,
  askUserAnswer,
  greetUser,
  congratulationsMessage,
} from "../index.js";
import { randomInteger } from "../utils.js";

export default function brainEven() {
  const name = greetUser();

  let correctAnswerCounter = 0;
  while (correctAnswerCounter < 3) {
    const n = randomInteger(1, 101);
    let correctAnswer = "yes";
    if (n % 2 !== 0) {
      correctAnswer = "no";
    }

    const userAnswer = askUserAnswer(n);

    if (!checkAnswer(correctAnswer, Number(userAnswer))) {
      return;
    }
    correctAnswerCounter++;
  }

  congratulationsMessage(name);
}

brainEven();
