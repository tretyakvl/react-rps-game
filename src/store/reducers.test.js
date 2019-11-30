import { PLAY, PLAY_AGAIN } from './actionTypes'
import reducer from './reducers'

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      score: 0,
      playerChoice: null,
      houseChoice: null,
      result: null
    })
  })
})
