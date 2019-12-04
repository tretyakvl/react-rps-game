import React from 'react'
import { useSelector } from 'react-redux'

import Chip from '../Chip/Chip'
import { CHIP_NAMES } from '../../constants'
import './ChipsDisplay.css'

const { ROCK, PAPER, SCISSORS } = CHIP_NAMES
const chips = [ROCK, PAPER, SCISSORS]
  .map(type => <Chip type={type} key={type} />)

const ChipsDisplay = () => {
  return (
    <div className='ChipsDisplay'>
      {chips}
    </div>
  )
}

export default ChipsDisplay
