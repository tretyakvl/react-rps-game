import { PLAY, PLAY_AGAIN, SET_GAME_TYPE } from './actionTypes'
import { playReducer, getRandomHouseChoice } from './playReducer'

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
      return playReducer(
        store,
        action.payload.playerChoice,
        getRandomHouseChoice(store.gameType)
      )
    case PLAY_AGAIN:
      return {
        ...initialState,
        score: store.score,
        gameType: store.gameType,
        playerChoice: store.playerChoice,
        houseChoice: store.houseChoice
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
