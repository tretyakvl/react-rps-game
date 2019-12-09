import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { playAgain } from '../../store'
import './ResultScreen.css'

const ResultScreen = () => {
  const result = useSelector(state => state.result)
  const dispatch = useDispatch()
  const onClick = () => dispatch(playAgain())

  if (!result) return null

  return (
    <div className='ResultScreen'>
      <h3>{result}</h3>
      <button onClick={onClick}>Play again</button>
    </div>
  )
}

export default ResultScreen
