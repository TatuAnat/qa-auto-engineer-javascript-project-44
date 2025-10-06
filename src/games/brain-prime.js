#!/usr/bin/env node

import { runGame } from "../index.js";
import { randomInteger } from "../utils.js";

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const limit = Math.sqrt(n);

  for (let i = 3; i <= limit; i = i + 2) {
    if (n % i === 0) return false;
  }

  return true;
}

export function getRoundData() {
  const randomNumber = randomInteger(2, 100);
  const correctAnswer = isPrime(randomNumber) ? "yes" : "no";
  const question = randomNumber;
  return { correctAnswer, question };
}

const brainPrime = () => {
  runGame(
    getRoundData,
    `Answer "yes" if given number is prime. Otherwise answer "no".`
  );
};

export default brainPrime;
