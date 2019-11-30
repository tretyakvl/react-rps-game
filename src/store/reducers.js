import { CHIP_NAMES } from '../constants'
import { PLAY, PLAY_AGAIN } from './actionTypes'

const { ROCK, PAPER, SCISSORS } = CHIP_NAMES

const initialState = {
  score: 0,
  playerChoice: null,
  houseChoice: null,
  result: null
}

export default (store, action) => {
  switch (action.type) {
    case PLAY:
      return playReducerHelper(store, action.playerChoice)
    case PLAY_AGAIN:
      return {
        ...initialState,
        score: store.score
      }
    default:
      return store || initialState
  }
}

function playReducerHelper (store, playerChoice) {
  const results = [ROCK, PAPER, SCISSORS]
  const houseChoice = results[Math.floor(Math.random() * results.length)]
  const newStore = { ...store, playerChoice, houseChoice }

  if (
    (playerChoice === ROCK && houseChoice === SCISSORS) ||
    (playerChoice === PAPER && houseChoice === ROCK) ||
    (playerChoice === SCISSORS && houseChoice === PAPER)
  ) {
    newStore.score = ++newStore.score
  }

  return newStore
}
