import React from 'react'
import { Link } from '@reach/router'

import ScoreDisplay from '../Score/Score'
import ChipsDisplay from '../Display/ChipsDisplay'
import './Game.css'

const Game = (props) => {
  return (
    <section className='Game'>
      <ScoreDisplay />
      <ChipsDisplay />
      <Link to='rules' className='Game__link'>
        Rules
      </Link>
      {props.children}
    </section>
  )
}

export default Game
