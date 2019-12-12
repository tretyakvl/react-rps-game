import React from 'react'

import ScoreDisplay from '../Score/Score'
// import TypeSelector from '../TypeSelector/TypeSelector'
import ResultScreen from '../ResultScreen/ResultScreen'
import './Game.css'

const Game = (props) => {
  return (
    <section className='Game'>
      <ScoreDisplay />
      <ResultScreen />
      {/* <TypeSelector /> */}
    </section>
  )
}

export default Game
