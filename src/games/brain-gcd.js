#!/usr/bin/env node

import { runGame } from '../index.js'

const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return a;
};

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;

  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));

  return {
    question,
    correctAnswer,
  };
};

const playBrainGcd = () => {
  runGame(description, generateRound);
};

export default playBrainGcd;
