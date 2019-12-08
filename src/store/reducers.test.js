import reducer from './reducers'
import { PLAY_AGAIN } from './actionTypes'
import { CHIP_NAMES, STATUSES } from '../constants'

const { SCISSORS } = CHIP_NAMES
const { DRAW } = STATUSES

const initialState = {
  score: 0,
  playerChoice: null,
  houseChoice: null,
  result: null,
  gameType: null
}

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('should handle PLAY_AGAIN', () => {
  const state = {
    score: 2,
    playerChoice: SCISSORS,
    houseChoice: SCISSORS,
    result: DRAW
  }
  const action = {
    type: PLAY_AGAIN
  }
  const expectedState = {
    score: 2,
    playerChoice: null,
    houseChoice: null,
    result: null
  }

  expect(reducer(state, action)).toEqual(expectedState)
})
