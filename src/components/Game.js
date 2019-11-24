import React from 'react'
import ScoreDisplay from './Score'
import './Game.css'

const Game = () => {
  return (
    <section className='Game'>
      <ScoreDisplay score='12' />
    </section>
  )
}

export default Game
