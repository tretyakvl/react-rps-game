import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from '@reach/router'
import { CHIP_NAMES } from '../../constants'
import { play as playAction, playAgain as playAgainAction } from '../../store'
import ScoreDisplay from '../Score/Score'
import Chip from '../Chip/Chip'
import './Game.css'

const { ROCK, PAPER, SCISSORS } = CHIP_NAMES

const Game = (props) => {
  const dispatch = useDispatch()
  const play = useCallback(
    (playerChoice) => dispatch(playAction(playerChoice)),
    [dispatch]
  )
  const playAgain = useCallback(
    (playerChoice) => dispatch(playAgainAction(playerChoice)),
    [dispatch]
  )

  return (
    <section className='Game'>
      <ScoreDisplay />
      <div className='Game__display'>
        <Chip type={ROCK} />
        <Chip type={PAPER} />
        <Chip type={SCISSORS} />
      </div>
      <Link to='rules' className='Game__link'>
        Rules
      </Link>
      {props.children}
    </section>
  )
}

export default Game
