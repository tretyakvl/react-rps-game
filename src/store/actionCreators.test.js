import { play, playAgain } from './actionCreators'
import { PLAY, PLAY_AGAIN } from './actionTypes'
import { CHIP_NAMES } from '../constants'

const { ROCK } = CHIP_NAMES

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
      playerChoice
    }
  }

  expect(play(playerChoice)).toEqual(expectedAction)
})
