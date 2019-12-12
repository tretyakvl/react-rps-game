import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Chip from '../Chip/Chip'
import Btn from '../Btn/Btn'
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
      <div className='ResultScreen__chip'>
        <Chip type={playerChoice} />
        <span className='ResultScreen__label'>You picked</span>
      </div>
      <div className='ResultScreen__result'>
        <h2>You lose</h2>
        <Btn>Play again</Btn>
      </div>
      <div className='ResultScreen__chip'>
        <Chip type={houseChoice} />
        <span className='ResultScreen__label'>The house picked</span>
      </div>
    </section>
  )
}

export default ResultScreen
