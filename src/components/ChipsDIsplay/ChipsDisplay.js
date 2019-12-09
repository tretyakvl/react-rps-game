import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Chip from '../Chip/Chip'
import ResultScreen from '../ResultScreen/ResultScreen'
import { setGameType } from '../../store'
import { CHIP_NAMES, GAME_TYPES } from '../../constants'

import triangle from './bg-triangle.svg'
import pentagon from './bg-pentagon.svg'
import './ChipsDisplay.css'

const { ROCK, PAPER, SCISSORS, LIZARD, SPOCK } = CHIP_NAMES

const ChipsDisplay = ({ match }) => {
  const dispatch = useDispatch()
  const playerChoice = useSelector(state => state.playerChoice)
  const houseChoice = useSelector(state => state.houseChoice)
  const gameType = match.path.slice(1)
  const imgSelector = {
    [GAME_TYPES.STANDART]: triangle,
    [GAME_TYPES.LIZARD_SPOCK]: pentagon
  }

  useEffect(() => {
    dispatch(setGameType(gameType))
  }, [gameType])

  let chips = [ROCK, PAPER, SCISSORS]
  if (gameType === GAME_TYPES.LIZARD_SPOCK) {
    chips = [...chips, LIZARD, SPOCK]
  }
  chips = chips.map(type => <Chip type={type} key={type} />)

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
      <img src={imgSelector[gameType]} />
      {chips}
    </div>
  )
}

export default ChipsDisplay
