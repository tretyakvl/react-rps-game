import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Chip from '../Chip/Chip'
import { playAgain } from '../../store'
import { CHIP_NAMES } from '../../constants'
import './ChipsDisplay.css'

const { ROCK, PAPER, SCISSORS } = CHIP_NAMES
const chips = [ROCK, PAPER, SCISSORS]
  .map(type => <Chip type={type} key={type} />)

const ChipsDisplay = () => {
  const playerChoice = useSelector(state => state.playerChoice)
  const houseChoice = useSelector(state => state.houseChoice)
  const result = useSelector(state => state.result)
  const dispatch = useDispatch()
  const onClick = () => dispatch(playAgain())

  if (result) {
    return (
      <div className='ChipsDisplay ChipsDisplay--round'>
        <Chip type={playerChoice} />
        <Chip type={houseChoice} />
        <div className='ChipsDisplay__result'>
          <h3>{result}</h3>
          <button onClick={onClick}>Play again</button>
        </div>
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
