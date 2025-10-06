#!/usr/bin/env node

import { runGame } from "../index.js";
import { randomInteger } from "../utils.js";

function generateArithmeticProgression(start, step, length) {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
}

export function getRoundData() {
  const length = 10;
  const start = randomInteger(1, 11);
  const step = randomInteger(1, 6);

  const progression = generateArithmeticProgression(start, step, length);

  const hiddenIndex = randomInteger(0, progression.length);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = "..";

  const question = progression.join(" ");
  return { correctAnswer, question };
}

const brainProgression = () => {
  runGame(getRoundData, "What number is missing in the progression?");
};
export default brainProgression;
