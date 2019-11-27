import React from 'react'
import ScoreDisplay from '../Score/Score'
import Chip from '../Chip/Chip'
import Rules from '../Rules/Rules'
import './Game.css'

const Game = () => {
  return (
    <section className='Game'>
      <ScoreDisplay score='12' />
      <div className='Game__display'>
        <Chip type='scissors' />
        <Chip type='scissors' />
        <Chip type='scissors' />
      </div>
      <a className='Game__link'>
        Rules
      </a>
    </section>
  )
}

export default Game
