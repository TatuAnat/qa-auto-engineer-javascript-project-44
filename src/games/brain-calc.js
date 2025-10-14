import { runGame } from '../index.js'

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
  const num1 = Math.floor(Math.random() * 100)
  const num2 = Math.floor(Math.random() * 100)
  const operator = operators[Math.floor(Math.random() * operators.length)]

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
