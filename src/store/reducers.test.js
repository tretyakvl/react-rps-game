import { PLAY, PLAY_AGAIN } from './actionTypes'
import reducer from './reducers'
import { CHIP_NAMES, STATUSES } from '../constants'

const { ROCK, PAPER, SCISSORS } = CHIP_NAMES
const { WIN, LOSE, DRAW } = STATUSES

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
    playerChoice: SCISSORS,
    houseChoice: SCISSORS,
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

describe('should handle PLAY', () => {
  const state = {
    score: 0,
    playerChoice: null,
    houseChoice: null,
    result: null
  }

  it('draw condition', () => {
    const action = {
      type: PLAY,
      payload: {
        playerChoice: ROCK,
        houseChoice: ROCK
      }
    }
    const expectedState = {
      score: 0,
      playerChoice: ROCK,
      houseChoice: ROCK,
      result: DRAW
    }

    expect(reducer(state, action)).toEqual(expectedState)
  })

  test.each([
    [
      {
        type: PLAY,
        payload: {
          playerChoice: SCISSORS,
          houseChoice: PAPER
        }
      },
      {
        score: 1,
        playerChoice: SCISSORS,
        houseChoice: PAPER,
        result: WIN
      }
    ],
    [
      {
        type: PLAY,
        payload: {
          playerChoice: ROCK,
          houseChoice: SCISSORS
        }
      },
      {
        score: 1,
        playerChoice: ROCK,
        houseChoice: SCISSORS,
        result: WIN
      }
    ],
    [
      {
        type: PLAY,
        payload: {
          playerChoice: PAPER,
          houseChoice: ROCK
        }
      },
      {
        score: 1,
        playerChoice: PAPER,
        houseChoice: ROCK,
        result: WIN
      }
    ]
  ])('win conditions', (action, expectedState) =>
    expect(reducer(state, action)).toEqual(expectedState))
})
