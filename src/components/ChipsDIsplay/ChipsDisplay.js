import React from 'react'
import { useSelector } from 'react-redux'

import Chip from '../Chip/Chip'
import ResultScreen from '../ResultScreen/ResultScreen'
import { CHIP_NAMES } from '../../constants'
import './ChipsDisplay.css'

const { ROCK, PAPER, SCISSORS } = CHIP_NAMES
const chips = [ROCK, PAPER, SCISSORS]
  .map(type => <Chip type={type} key={type} />)

const ChipsDisplay = () => {
  const playerChoice = useSelector(state => state.playerChoice)
  const houseChoice = useSelector(state => state.houseChoice)

  if (houseChoice) {
    return (
      <div className='ChipsDisplay ChipsDisplay--round'>
        <Chip type={playerChoice} />
        <Chip type={houseChoice} />
        <ResultScreen />
      </div>
    )
  }

  return (
    <div className='ChipsDisplay'>
      {chips}
    </div>
  )
}

export default ChipsDisplay
