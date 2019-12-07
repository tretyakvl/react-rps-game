import { CHIP_NAMES, STATUSES, GAME_TYPES } from '../constants'

const { ROCK, PAPER, SCISSORS, LIZARD, SPOCK } = CHIP_NAMES
const { WIN, LOSE, DRAW } = STATUSES
const { LIZARD_SPOCK } = GAME_TYPES

export function playReducer (store, playerChoice, houseChoice) {
  const { gameType } = store
  const winCombinations = [
    [ROCK, SCISSORS],
    [PAPER, ROCK],
    [SCISSORS, PAPER]
  ]

  if (gameType === LIZARD_SPOCK) {
    winCombinations.concat([
      [ROCK, LIZARD],
      [LIZARD, SPOCK],
      [SPOCK, SCISSORS],
      [SCISSORS, LIZARD],
      [PAPER, SPOCK],
      [LIZARD, PAPER],
      [SPOCK, ROCK]
    ])
  }

  const isWinner = winCombinations.some(([p, h]) => p === playerChoice && h === houseChoice)
  const newStore = { ...store, playerChoice, houseChoice }

  if (playerChoice === houseChoice) {
    newStore.result = DRAW
  } else if (isWinner) {
    newStore.score = ++newStore.score
    newStore.result = WIN
  } else {
    newStore.result = LOSE
  }

  return newStore
}

export function getRandomHouseChoice (gameType) {
  const houseChoices = [ROCK, PAPER, SCISSORS]

  if (gameType === LIZARD_SPOCK) {
    houseChoices.concat([
      LIZARD, SPOCK
    ])
  }

  return houseChoices[Math.floor(Math.random() * houseChoices.length)]
}
