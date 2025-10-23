import { runGame } from '../index.js'
import { randomInteger } from '../utils.js'

const description = 'Find the greatest common divisor of given numbers.'

const findGcd = (num1, num2) => {
  let a = num1
  let b = num2

  while (b !== 0) {
    const remainder = a % b
    a = b
    b = remainder
  }

  return a
}

const generateRound = () => {
  const num1 = randomInteger(1, 100)
  const num2 = randomInteger(1, 100)

  const question = `${num1} ${num2}`
  const correctAnswer = String(findGcd(num1, num2))

  return {
    question,
    correctAnswer,
  }
}

const runBrainGcd = () => {
  runGame(description, generateRound)
}

export default runBrainGcd
