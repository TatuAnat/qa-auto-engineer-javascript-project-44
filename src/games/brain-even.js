#!/usr/bin/env node

import { runGame } from '../index.js'
import { randomInteger } from '../utils.js'

export function generateRound() {
  const question = randomInteger(1, 101)
  let correctAnswer = 'yes'
  if (question % 2 !== 0) {
    correctAnswer = 'no'
  }

  return { correctAnswer, question }
}

const runBrainEven = () => {
  runGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateRound
  )
}

export default runBrainEven
