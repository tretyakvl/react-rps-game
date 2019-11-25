import React from 'react'
import ScoreDisplay from '../Score/Score'
import Chip from '../Chip/Chip';
import './Game.css'

const Game = () => {
  return (
    <section className='Game'>
      <ScoreDisplay score='12' />
      <Chip />
    </section>
  )
}

export default Game
