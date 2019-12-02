import { PLAY, PLAY_AGAIN } from './actionTypes'
import { CHIP_NAMES } from '../constants'

const { ROCK, PAPER, SCISSORS } = CHIP_NAMES
const results = [ROCK, PAPER, SCISSORS]
export const play = playerChoice => ({
  type: PLAY,
  payload: {
    playerChoice,
    houseChoice: results[Math.floor(Math.random() * results.length)]
  }
})

export const playAgain = () => ({
  type: PLAY_AGAIN
})
