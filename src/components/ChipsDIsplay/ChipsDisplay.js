import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import Chip from '../Chip/Chip'
import { CHIP_NAMES, GAME_TYPES } from '../../constants'

import triangle from './bg-triangle.svg'
import pentagon from './bg-pentagon.svg'
import './ChipsDisplay.css'

const { ROCK, PAPER, SCISSORS, LIZARD, SPOCK } = CHIP_NAMES

const ChipsDisplay = ({ match }) => {
  const gameType = useSelector(store => store.gameType)
  const imgSelector = {
    [GAME_TYPES.STANDART]: triangle,
    [GAME_TYPES.LIZARD_SPOCK]: pentagon
  }

  let chips = [ROCK, PAPER, SCISSORS]

  if (gameType === GAME_TYPES.LIZARD_SPOCK) {
    chips = [...chips, LIZARD, SPOCK]
  }

  return (
    <motion.div
      className={`ChipsDisplay ChipsDisplay--${gameType}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={imgSelector[gameType]} />
      {chips.map(type => (
        <Chip type={type} key={type} />
      ))}
    </motion.div>
  )
}

export default ChipsDisplay
