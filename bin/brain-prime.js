#!/usr/bin/env node
import readlineSync from "readline-sync";
import crypto from "crypto";

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
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log("Hello, " + name + "!");
  console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");
  for (let i = 0; i < 3; i++) {
    const randomNumber = crypto.randomInt(2, 100);

    console.log("Question: " + randomNumber);

    const userAnswer = readlineSync.question("Your answer: ");

    const correctAnswer = isPrime(randomNumber) ? "yes" : "no";

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      console.log("Correct!");
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );

      return;
    }
  }
}
brainPrime();

/*Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!*/
