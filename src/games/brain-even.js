#!/usr/bin/env node

import {
  checkAnswer,
  askUserAnswer,
  greetUser,
  congratulationsMessage,
} from "../index.js";
import { randomInteger } from "../utils.js";

function getRoundData() {
  const question = randomInteger(1, 101);
  let correctAnswer = "yes";
  if (question % 2 !== 0) {
    correctAnswer = "no";
  }

  return { correctAnswer, question };
}

export default function brainEven() {
  const name = greetUser();

  for (let i = 0; i < 3; i++) {
    const { correctAnswer, question } = getRoundData();

    const userAnswer = askUserAnswer(question);

    if (!checkAnswer(correctAnswer, userAnswer)) {
      return;
    }
  }

  congratulationsMessage(name);
}

brainEven();
