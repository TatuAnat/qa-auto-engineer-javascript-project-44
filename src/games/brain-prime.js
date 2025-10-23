import { runGame } from '../index.js'
import { randomInteger } from '../utils.js'

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = num => {
  if (num < 2) return false
  const limit = Math.sqrt(num)
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const number = randomInteger(1, 100)
  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return { question, correctAnswer }
}

const runBrainPrime = () => {
  runGame(description, generateRound)
}

export default runBrainPrime
