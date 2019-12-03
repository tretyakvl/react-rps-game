import React from 'react'
import { useSelector } from 'react-redux'

import './Score.css'

const ScoreDisplay = () => {
  const score = useSelector(state => state.score)

  return (
    <div className='Score'>
      <h2 className='Score__header'>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </h2>
      <div className='Score__display'>
        <span className='Score__name'>Score</span>
        <span className='Score__stat'>{score}</span>
      </div>
    </div>
  )
}

export default ScoreDisplay
