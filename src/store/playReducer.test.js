import { playReducer, getRandomHouseChoice } from './playReducer'
import { CHIP_NAMES, GAME_TYPES, STATUSES } from '../constants'

const { ROCK, PAPER, SCISSORS, LIZARD, SPOCK } = CHIP_NAMES
const { STANDART, LIZARD_SPOCK } = GAME_TYPES
const { WIN, LOSE, DRAW } = STATUSES

// const initialState = {
//   score: 0,
//   gameType: null,
//   playerChoice: null,
//   houseChoice: null,
//   result: null
// }

it('should handle draw condition', () => {
  const state = {
    score: 99,
    gameType: STANDART,
    playerChoice: ROCK,
    houseChoice: PAPER,
    result: LOSE
  }
  const playerChoice = ROCK
  const houseChoice = ROCK
  const expectedState = {
    score: 99,
    playerChoice,
    houseChoice,
    result: DRAW
  }

  expect(playReducer(state, playerChoice, houseChoice))
    .toEqual(expectedState)
})

it.each([
  [ROCK, SCISSORS],
  [PAPER, ROCK],
  [SCISSORS, PAPER]
])('should handle standart mode: player`s %s beats house`s %s',
  (playerChoice, houseChoice) => {
    const state = {
      score: 22,
      gameType: STANDART,
      playerChoice: SCISSORS,
      houseChoice: ROCK,
      result: LOSE
    }
    const expectedState = {
      score: state.score + 1,
      gameType: STANDART,
      playerChoice,
      houseChoice,
      result: WIN
    }

    expect(playReducer(state, playerChoice, houseChoice))
      .toEqual(expectedState)
  }
)

it.each([
  [ROCK, SCISSORS],
  [PAPER, ROCK],
  [SCISSORS, PAPER]
])('should handle standart mode: houses`s %s beats player`s %s',
  (houseChoice, playerChoice) => {
    const state = {
      score: 51,
      gameType: STANDART,
      playerChoice: PAPER,
      houseChoice: ROCK,
      result: WIN
    }
    const expectedState = {
      score: state.score - 1,
      gameType: STANDART,
      playerChoice,
      houseChoice,
      result: LOSE
    }

    expect(playReducer(state, playerChoice, houseChoice))
      .toEqual(expectedState)
  }
)
