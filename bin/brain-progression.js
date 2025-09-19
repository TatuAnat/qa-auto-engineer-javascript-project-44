#!/usr/bin/env node
import readlineSync from "readline-sync";
import crypto from "crypto";
function generateArithmeticProgression(start, step, length) {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
}

export default function brainProgression() {
  console.log("starting brainProgresssion");
  /*
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
  */

  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name?");
  console.log("Hello, " + name + "!");
  console.log("What number is missing in the progression?");

  for (let i = 0; i < 3; i++) {
    const length = 10;
    const start = crypto.randomInt(1, 11);
    const step = crypto.randomInt(1, 6);

    const progression = generateArithmeticProgression(start, step, length);

    const hiddenIndex = crypto.randomInt(0, progression.length);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = "..";

    console.log("Question: " + progression.join(" "));

    const userAnswer = readlineSync.questionInt("Your answer: ");

    if (correctAnswer === userAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );

      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

brainProgression();
