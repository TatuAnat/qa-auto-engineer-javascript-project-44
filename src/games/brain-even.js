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

runGame(getRoundData, "Brain Even");
