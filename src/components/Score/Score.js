import React from 'react'
import './Score.css'

const ScoreDisplay = (props) => {
  return (
    <div className='Score'>
      <h2 className='Score__header'>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </h2>
      <div className='Score__display'>
        <span className='Score__name'>Score</span>
        <span className='Score__stat'>{props.score}</span>
      </div>
    </div>
  )
}

export default ScoreDisplay
