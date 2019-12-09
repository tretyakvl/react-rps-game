import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Chip from '../Chip/Chip'
import ResultScreen from '../ResultScreen/ResultScreen'
import { setGameType } from '../../store'
import { CHIP_NAMES } from '../../constants'

import triangle from './bg-triangle.svg'
import pentagon from './bg-pentagon.svg'

import './ChipsDisplay.css'

const { ROCK, PAPER, SCISSORS } = CHIP_NAMES
const chips = [ROCK, PAPER, SCISSORS]
  .map(type => <Chip type={type} key={type} />)

const ChipsDisplay = ({ match }) => {
  const dispatch = useDispatch()
  const playerChoice = useSelector(state => state.playerChoice)
  const houseChoice = useSelector(state => state.houseChoice)
  const gameType = match.path.slice(1)

  useEffect(() => {
    dispatch(setGameType(gameType))
  }, [gameType])

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
    <div className={`ChipsDisplay ChipsDisplay--${gameType}`}>
      <img src={triangle} />
      {chips}
    </div>
  )
}

export default ChipsDisplay
