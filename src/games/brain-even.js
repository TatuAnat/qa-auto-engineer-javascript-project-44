#!/usr/bin/env node

import { runGame } from '../index.js'
import { randomInteger } from '../utils.js'

const isEven = number => (number % 2 === 0 ? 'yes' : 'no')

const generateRound = () => {
  const question = randomInteger(1, 101)
  let correctAnswer = isEven(question)

  return { correctAnswer, question }
}

const runBrainEven = () => {
  runGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateRound
  )
}

export default runBrainEven
