import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Chip from '../Chip/Chip'
import { playAgain } from '../../store'
import './ResultScreen.css'

const ResultScreen = () => {
  const result = useSelector(state => state.result)
  const playerChoice = useSelector(state => state.playerChoice)
  const houseChoice = useSelector(state => state.houseChoice)
  const dispatch = useDispatch()
  const onClick = () => dispatch(playAgain())

  return (
    <section className='ResultScreen'>
      <div className="ResultScreen__chip">
        <Chip type={playerChoice} />
      </div>
      <div className="ResultScreen__chip">
        <Chip type={houseChoice} />
      </div>
      <div className='ResultScreen__result'>
        <h2>{result}</h2>
        <button onClick={onClick}>Play again</button>
      </div>
    </section>
  )
}

export default ResultScreen
