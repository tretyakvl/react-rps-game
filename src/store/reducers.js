import { CHIP_NAMES, STATUSES, GAME_TYPES } from '../constants'
import { PLAY, PLAY_AGAIN, SET_GAME_TYPE } from './actionTypes'

const { ROCK, PAPER, SCISSORS, LIZARD, SPOCK } = CHIP_NAMES
const { WIN, LOSE, DRAW } = STATUSES
const { LIZARD_SPOCK } = GAME_TYPES

const initialState = {
  score: 0,
  gameType: null,
  playerChoice: null,
  houseChoice: null,
  result: null
}

export default (store, action) => {
  switch (action.type) {
    case PLAY:
      return playReducerHelper(store, action.payload)
    case PLAY_AGAIN:
      return {
        ...initialState,
        score: store.score,
        gameType: store.gameType
      }
    case SET_GAME_TYPE:
      return {
        ...initialState,
        gameType: action.payload.gameType
      }
    default:
      return store || initialState
  }
}

function playReducerHelper (store, payload) {
  const { gameType } = store
  const houseChoices = [ROCK, PAPER, SCISSORS]
  const winCombinations = [
    [ROCK, SCISSORS],
    [PAPER, ROCK],
    [SCISSORS, PAPER]
  ]

  if (gameType === LIZARD_SPOCK) {
    houseChoices.concat([
      LIZARD, SPOCK
    ])
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

  const { playerChoice } = payload
  const houseChoice = houseChoices[Math.floor(Math.random() * results.length)]]
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
