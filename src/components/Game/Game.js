import React from 'react'
import ScoreDisplay from '../Score/Score'
import Chip from '../Chip/Chip'
import Rules from '../Rules/Rules'
import './Game.css'

const Game = () => {
  return (
    <section className='Game'>
      <ScoreDisplay score='12' />
      <Chip type='scissors' />
      <Rules />
    </section>
  )
}

export default Game
