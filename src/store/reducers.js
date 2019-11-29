import chipNames from '../constants'
import { PLAY, PLAY_AGAIN } from './actionTypes'

const { ROCK, PAPER, SCISSORS } = chipNames

const initialState = {
  score: 0,
  playerChoice: null,
  houseChoice: null
}

const results = [ROCK, PAPER, SCISSORS]

export default (store, action) => {
  switch (action.type) {
    case PLAY:
      return {
        ...store,
        playerChoice: action.payload.playerChoice,
        houseChoice: results[Math.floor(Math.random() * results.length)]
      }
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

function getScore (playerChoice, houseChoice) {
  if (
    (playerChoice === ROCK && houseChoice === SCISSORS) ||
    (playerChoice === PAPER && houseChoice === ROCK) ||
    (playerChoice === SCISSORS && houseChoice === PAPER)
  ) {
    return 1
  } else {
    return 0
  }
}
