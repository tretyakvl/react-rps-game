import { PLAY, PLAY_AGAIN } from './actionTypes'
import reducer from './reducers'
import { CHIP_NAMES } from '../constants'

const { ROCK, PAPER, SCISSORS } = CHIP_NAMES

describe('reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      score: 0,
      playerChoice: null,
      houseChoice: null,
      result: null
    }

    expect(reducer(undefined, {})).toEqual(expectedState)
  })

  it('should handle PLAY_AGAIN', () => {
    const state = {
      score: 2,
      playerChoice: 'scissors',
      houseChoice: 'scissors',
      result: 'draw'
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
})
