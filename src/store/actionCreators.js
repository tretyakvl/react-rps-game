import { PLAY, PLAY_AGAIN } from './actionTypes'

export const play = playerChoice => ({
  type: PLAY,
  payload: { playerChoice }
})

export const playAgain = () => ({
  type: PLAY_AGAIN
})
