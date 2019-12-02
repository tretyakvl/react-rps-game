import { play, playAgain } from './actionCreators'
import { PLAY, PLAY_AGAIN } from './actionTypes'
import { CHIP_NAMES } from '../constants'

const { ROCK, PAPER, SCISSORS } = CHIP_NAMES

it('should create play again action', () => {
  const expectedAction = {
    type: PLAY_AGAIN
  }

  expect(playAgain()).toEqual(expectedAction)
})

it('should create play action', () => {
  const playerChoice = ROCK
  const expectedAction = {
    type: PLAY,
    payload: {
      playerChoice,
      houseChoice: expect.any(String)
    }
  }

  expect(play(playerChoice)).toEqual(expectedAction)
})

it('play action should contain a random house choice', () => {
  const possibleValues = [ROCK, PAPER, SCISSORS]

  for (let i = 0; i < 10; i++) {
    expect(possibleValues).toContain(play(PAPER).payload.houseChoice)
  }
})
