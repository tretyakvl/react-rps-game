import { playReducer } from './playReducer'
import { CHIP_NAMES, GAME_TYPES, STATUSES } from '../constants'

const { ROCK, PAPER, SCISSORS, LIZARD, SPOCK } = CHIP_NAMES
const { STANDART, LIZARD_SPOCK } = GAME_TYPES
const { WIN, LOSE, DRAW } = STATUSES

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
    gameType: STANDART,
    playerChoice,
    houseChoice,
    result: DRAW
  }

  expect(playReducer(state, playerChoice, houseChoice))
    .toEqual(expectedState)
})

describe.each([
  [
    STANDART,
    [
      [ROCK, SCISSORS],
      [PAPER, ROCK],
      [SCISSORS, PAPER]
    ]
  ],
  [
    LIZARD_SPOCK,
    [
      [ROCK, SCISSORS],
      [PAPER, ROCK],
      [SCISSORS, PAPER],
      [ROCK, LIZARD],
      [LIZARD, SPOCK],
      [SPOCK, SCISSORS],
      [SCISSORS, LIZARD],
      [PAPER, SPOCK],
      [LIZARD, PAPER],
      [SPOCK, ROCK]
    ]
  ]
])('should handle %s mode:', (gameType, winCombinations) => {
  it.each(winCombinations)(' player`s %s beats house`s %s',
    (playerChoice, houseChoice) => {
      const state = {
        score: 22,
        gameType,
        playerChoice: SCISSORS,
        houseChoice: ROCK,
        result: LOSE
      }
      const expectedState = {
        score: state.score + 1,
        gameType,
        playerChoice,
        houseChoice,
        result: WIN
      }

      expect(playReducer(state, playerChoice, houseChoice))
        .toEqual(expectedState)
    }
  )

  it.each(winCombinations)('houses`s %s beats player`s %s',
    (houseChoice, playerChoice) => {
      const state = {
        score: 51,
        gameType,
        playerChoice: PAPER,
        houseChoice: ROCK,
        result: WIN
      }
      const expectedState = {
        score: state.score - 1,
        gameType,
        playerChoice,
        houseChoice,
        result: LOSE
      }

      expect(playReducer(state, playerChoice, houseChoice))
        .toEqual(expectedState)
    }
  )
})
