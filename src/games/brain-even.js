import { runGame } from '../index.js'
import { randomInteger } from '../utils.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no')

const generateRound = () => {
  const question = randomInteger(1, 101)
  let correctAnswer = isEven(question)

  return {
    question,
    correctAnswer,
  }
}

const runBrainEven = () => {
  runGame(description, generateRound)
}

export default runBrainEven
