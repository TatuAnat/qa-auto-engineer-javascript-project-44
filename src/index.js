import readlineSync from 'readline-sync'

export const ROUNDS_GAME = 3

export function checkAnswer(correctAnswer, userAnswer) {
  if (correctAnswer === userAnswer) {
    console.log('Correct!')
    return true
  }

  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
  )

  return false
}

export function greetUser() {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + name + '!')

  return name
}

export function askUserAnswer(question) {
  if (question !== undefined) {
    console.log(`Question: ${question} `)
  }
  return readlineSync.question('Your answer: ')
}

export function congratulationsMessage(name) {
  console.log(`Congratulations, ${name}!`)
}

export function runGame(getRoundData, gameDescription) {
  const name = greetUser()
  if (gameDescription) {
    console.log(gameDescription)
  }
  for (let i = 0; i < ROUNDS_GAME; i += 1) {
    const { question, correctAnswer } = getRoundData()
    const userAnswer = askUserAnswer(question)
    if (
      !checkAnswer(
        correctAnswer,
        isNaN(Number(userAnswer)) ? userAnswer : Number(userAnswer)
      )
    ) {
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  congratulationsMessage(name)
}
