import { PLAY, PLAY_AGAIN } from './actionTypes'
import reducer from './reducers'
import { CHIP_NAMES, STATUSES } from '../constants'

const { ROCK, PAPER, SCISSORS } = CHIP_NAMES
const { WIN, LOSE, DRAW } = STATUSES

const initialState = {
  score: 0,
  playerChoice: null,
  houseChoice: null,
  result: null
}

describe('should handle PLAY', () => {
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

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  test.each([
    [ROCK, SCISSORS],
    [PAPER, ROCK],
    [SCISSORS, PAPER]
  ])('win condition: player`s %s beats house`s %s', (playerChoice, houseChoice) => {
    const action = {
      type: PLAY,
      payload: {
        playerChoice,
        houseChoice
      }
    }
    const expectedState = {
      score: initialState.score + 1,
      playerChoice,
      houseChoice,
      result: WIN
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  test.each([
    [ROCK, SCISSORS],
    [PAPER, ROCK],
    [SCISSORS, PAPER]
  ])('lose condition: house`s %s beats player`s %s', (houseChoice, playerChoice) => {
    const action = {
      type: PLAY,
      payload: {
        playerChoice,
        houseChoice
      }
    }
    const expectedState = {
      score: initialState.score,
      playerChoice,
      houseChoice,
      result: LOSE
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })
})

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
