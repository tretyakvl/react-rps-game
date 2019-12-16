import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

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
    <motion.section
      className='ResultScreen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
        <Chip type={houseChoice} />
        <span className='ResultScreen__label'>The house picked</span>
      </div>
    </motion.section>
  )
}

export default ResultScreen
