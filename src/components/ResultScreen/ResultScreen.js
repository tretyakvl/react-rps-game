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
    <section
      className='ResultScreen'
    >
      <div className='ResultScreen__chip'>
        <Chip type={playerChoice} />
        <span className='ResultScreen__label'>You picked</span>
      </div>
      <div className='ResultScreen__result'>
        <h2>{result}</h2>
        <Btn onClick={onClick}>Play again</Btn>
      </div>
      <div className='ResultScreen__chip'>
        <div className='ResultScreen__backdrop'>
          <Chip
            type={houseChoice}
            transition={{
              delay: 1
            }}
          />
        </div>
        <span className='ResultScreen__label'>The house picked</span>
      </div>
    </section>
  )
}

export default ResultScreen
