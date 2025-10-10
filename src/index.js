import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const runGame = (description, generateRound) => {
  console.warn('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.warn(`Hello, ${name}!`);
  console.warn(description);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, correctAnswer } = generateRound();
    console.warn(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.warn(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.warn(`Let's try again, ${name}!`);
      return;
    }

    console.warn('Correct!');
  }

  console.warn(`Congratulations, ${name}!`);
};

export default runGame;