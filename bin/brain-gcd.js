#!/usr/bin/env node
import readlineSync from "readline-sync";
import crypto from "crypto";

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

function brainGcd() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("Find the greatest common divisor of given numbers.");

  for (let i = 0; i < 3; i++) {
    let num1 = crypto.randomInt(1, 50);
    let num2 = crypto.randomInt(1, 50);

    const correctAnswer = gcd(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (Number(userAnswer) === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log("Let's try again, " + name + "!");
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

brainGcd();
