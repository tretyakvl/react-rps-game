import chipNames from '../constants'
import { PLAY, PLAY_AGAIN } from './actionTypes'

const { ROCK, PAPER, SCISSORS } = chipNames

const initialState = {
  score: 0,
  playerChoice: null,
  houseChoice: null
}

export default (store, action) => {
  switch (action.type) {
    case PLAY:
      return playReducer(store, action.playerChoice)
    case PLAY_AGAIN:
      return {
        ...store,
        playerChoice: null,
        houseChoice: null
      }
    default:
      return store || initialState
  }
}

function playReducer (store, playerChoice) {
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
