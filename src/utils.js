import crypto from 'node:crypto'

export const randomInteger = (start, end) => {
  return crypto.randomInt(start, end)
}
