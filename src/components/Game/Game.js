import React from 'react'

import ScoreDisplay from '../Score/Score'
import TypeSelector from '../TypeSelector/TypeSelector'
import './Game.css'

const Game = (props) => {
  return (
    <section className='Game'>
      <ScoreDisplay />
      <TypeSelector />
    </section>
  )
}

export default Game
