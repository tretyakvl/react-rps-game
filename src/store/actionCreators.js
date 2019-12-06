import { PLAY, PLAY_AGAIN, SET_GAME_TYPE } from './actionTypes'

export const play = playerChoice => ({
  type: PLAY,
  payload: {
    playerChoice
  }
})

export const playAgain = () => ({
  type: PLAY_AGAIN
})

export const setGameType = gameType => ({
  type: SET_GAME_TYPE,
  payload: {
    gameType
  }
})
