#!/usr/bin/env node
import {
  checkAnswer,
  askUserAnswer,
  greetUser,
  congratulationsMessage,
} from "..";
import { randomInteger } from "../utils";

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

export default function brainPrime() {
  const name = greetUser();
  console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");
  for (let i = 0; i < 3; i++) {
    const randomNumber = randomInteger(2, 100);

    const userAnswer = askUserAnswer(randomNumber);

    const correctAnswer = isPrime(randomNumber) ? "yes" : "no";

    if (!checkAnswer(correctAnswer.toLowerCase(), userAnswer.toLowerCase())) {
      return;
    }
  }

  congratulationsMessage(name);
}
brainPrime();
