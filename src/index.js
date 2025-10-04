import readlineSync from "readline-sync";

export function checkAnswer(correctAnswer, userAnswer) {
  if (correctAnswer === userAnswer) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`
    );

    return false;
  }
}

export function greetUser() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log("Hello, " + name + "!");

  return name;
}

export function askUserAnswer(question) {
  if (question !== undefined && question.length) {
    console.log(`Question: ${question} `);
  }
  return readlineSync.question("Your answer: ").trim().toLowerCase();
}

export function congratulationsMessage(name) {
  console.log(`Congratulations, ${name}!`);
}
