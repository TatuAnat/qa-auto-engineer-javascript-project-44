#!/usr/bin/env node

import { runGame } from '../index.js'
import { randomInteger } from '../utils.js'

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const description
  = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const generateRound = () => {
  const number = randomInteger(1, 100)
  const question = `${number}`
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return { question, correctAnswer }
}

const runBrainPrime = () => {
  runGame(description, generateRound)
}

export default runBrainPrime
