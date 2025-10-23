import { runGame } from '../index.js'
import { randomInteger } from '../utils.js'

const description = 'What number is missing in the progression?'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const start = randomInteger(1, 20)
  const step = randomInteger(1, 10)
  const length = randomInteger(5, 10)

  const progression = generateProgression(start, step, length)
  const hiddenIndex = randomInteger(0, progression.length)

  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'

  const question = progression.join(' ')
  return { question, correctAnswer }
}

const runBrainProgression = () => {
  runGame(description, generateRound)
}

export default runBrainProgression
