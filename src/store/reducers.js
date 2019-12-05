import { CHIP_NAMES, STATUSES } from '../constants'
import { PLAY, PLAY_AGAIN, SET_GAME_TYPE } from './actionTypes'

const { ROCK, PAPER, SCISSORS } = CHIP_NAMES
const { WIN, LOSE, DRAW } = STATUSES

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
        score: store.score
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
  const winCombinations = [
    [ROCK, SCISSORS],
    [PAPER, ROCK],
    [SCISSORS, PAPER]
  ]
  const { playerChoice, houseChoice } = payload
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
