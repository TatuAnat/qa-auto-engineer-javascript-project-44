import { runGame } from '../index.js'
import { randomInteger } from '../utils.js'

const description = 'What is the result of the expression?'
const operators = ['+', '-', '*']

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const num1 = randomInteger(0, 100)
  const num2 = randomInteger(0, 100)
  const operator = operators[randomInteger(0, operators.length)]

  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = calculate(num1, num2, operator)

  return {
    question,
    correctAnswer: String(correctAnswer),
  }
}

const runBrainCalc = () => {
  runGame(description, generateRound)
}

export default runBrainCalc
