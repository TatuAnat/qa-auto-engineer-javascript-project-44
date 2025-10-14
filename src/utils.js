import crypto from 'node:crypto'

export function randomInteger(start, end) {
  return crypto.randomInt(start, end)
}
