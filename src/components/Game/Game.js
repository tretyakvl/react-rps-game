import React from 'react'
import { Link } from '@reach/router'
import ScoreDisplay from '../Score/Score'
import Chip from '../Chip/Chip'
import './Game.css'

const Game = (props) => {
  return (
    <section className='Game'>
      <ScoreDisplay score='12' />
      <div className='Game__display'>
        <Chip type='scissors' />
        <Chip type='scissors' />
        <Chip type='scissors' />
      </div>
      <Link to='rules' className='Game__link'>
        Rules
      </Link>
      {props.children}
    </section>
  )
}

export default Game
