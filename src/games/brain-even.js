#!/usr/bin/env node

import { runGame } from "../index.js";
import { randomInteger } from "../utils.js";

function getRoundData() {
  const question = randomInteger(1, 101);
  let correctAnswer = "yes";
  if (question % 2 !== 0) {
    correctAnswer = "no";
  }

  return { correctAnswer, question };
}

const brainEven = () => {
  runGame(
    getRoundData,
    `Answer "yes" if the number is even, otherwise answer "no".`
  );
};

export default brainEven;
