#!/usr/bin/env node

import readlineSync from "readline-sync";

export default function brainEven() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");

  console.log("Hello, " + name + "!");

  let correctAnswer = 0;
  while (correctAnswer < 3) {
    const n = Math.floor(Math.random() * 100) + 1;
    let correct = "yes";
    if (n % 2 !== 0) {
      correct = "no";
    }

    console.log("Question:" + n);

    const answer = readlineSync.question("Your answer:").trim().toLowerCase();

    if (correct === answer) {
      correctAnswer++;
      console.log("Correct!");
    } else {
      console.log("Answer is wrong!");
      return;
    }
  }

  console.log("Congratulations, " + name + "!");
}

brainEven();
