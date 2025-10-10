import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

const isEven = (number) => number % 2 === 0;

const playBrainEven = () => {
  const userName = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsToWin = 3;
  let correctAnswers = 0;

  while (correctAnswers < roundsToWin) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playBrainEven;