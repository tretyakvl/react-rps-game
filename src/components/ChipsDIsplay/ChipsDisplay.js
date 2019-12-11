import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Chip from '../Chip/Chip'
import { setGameType } from '../../store'
import { CHIP_NAMES, GAME_TYPES } from '../../constants'

import triangle from './bg-triangle.svg'
import pentagon from './bg-pentagon.svg'
import './ChipsDisplay.css'

const { ROCK, PAPER, SCISSORS, LIZARD, SPOCK } = CHIP_NAMES

const ChipsDisplay = ({ match }) => {
  const dispatch = useDispatch()
  const gameType = match.path.slice(1)
  const imgSelector = {
    [GAME_TYPES.STANDART]: triangle,
    [GAME_TYPES.LIZARD_SPOCK]: pentagon
  }

  let chips = [ROCK, PAPER, SCISSORS]

  if (gameType === GAME_TYPES.LIZARD_SPOCK) {
    chips = [...chips, LIZARD, SPOCK]
  }

  useEffect(() => {
    dispatch(setGameType(gameType))
  }, [gameType])

  return (
    <div className={`ChipsDisplay ChipsDisplay--${gameType}`}>
      <img className='ChipsDisplay__bg' src={imgSelector[gameType]} />
      {chips.map(type => (
        <Chip type={type} key={type} />
      ))}
    </div>
  )
}

export default ChipsDisplay
