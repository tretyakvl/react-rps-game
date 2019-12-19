import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

import Chip from '../Chip/Chip'
import Btn from '../Btn/Btn'
import { playAgain } from '../../store'
import { STATUSES } from '../../constants'
import './ResultScreen.css'

const winAnimation = {
  animate: {
    boxShadow: `
    0px 0px 0px 1.25em hsla(0, 100%, 100%, 0.03),
    0px 0px 0px 2.8125em hsla(0, 100%, 100%, 0.03),
    0px 0px 0px 4.375em hsla(0, 100%, 100%, 0.03)
    `
  },
  transition: {
    delay: 1
  }
}

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
        <motion.div
          className='ResultScreen__backdrop'
          exit={{ opacity: 0 }}
          {...(result === STATUSES.WIN ? winAnimation : {})}
        >
          <Chip
            type={playerChoice}
          />
        </motion.div>
        <span className='ResultScreen__label'>You picked</span>
      </div>
      <motion.div
        className='ResultScreen__result'
        initial={{
          opacity: 0
        }}
        animate={{
          marginLeft: ['0rem', '3.5rem', '3.5rem', '3.5rem'],
          marginRight: ['0rem', '3.5rem', '3.5rem', '3.5rem'],
          opacity: [0, 0, 0, 1]
        }}
        exit={{ opacity: 0 }}
        transition={{
          delay: 1.5
        }}
      >
        <h2>{result}</h2>
        <Btn onClick={onClick}>Play again</Btn>
      </motion.div>
      <div className='ResultScreen__chip'>
        <motion.div
          className='ResultScreen__backdrop'
          exit={{ opacity: 0 }}
          {...(result === STATUSES.LOSE ? winAnimation : {})}
        >
          <Chip
            type={houseChoice}
            transition={{
              delay: 1
            }}
          />
        </motion.div>
        <span className='ResultScreen__label'>The house picked</span>
      </div>
    </section>
  )
}

export default ResultScreen
