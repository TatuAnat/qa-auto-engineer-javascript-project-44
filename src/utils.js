import crypto from 'crypto'

export function randomInteger(start, end) {
  return crypto.randomInt(start, end)
}
