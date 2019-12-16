import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { play } from '../../store'
import { CHIP_NAMES } from '../../constants'

import rock from './icon-rock.svg'
import paper from './icon-paper.svg'
import scissors from './icon-scissors.svg'
import lizard from './icon-lizard.svg'
import spock from './icon-spock.svg'
import './Chip.css'

const links = {
  rock,
  paper,
  scissors,
  lizard,
  spock
}

const Chip = props => {
  const { type } = props
  const dispatch = useDispatch()
  const onClick = () => dispatch(play(type))

  return (
    <button className={`Chip Chip--${type}`} onClick={onClick}>
      <div className='Chip__image'>
        <img src={links[type]} alt='Paper' width='49' height='59' />
      </div>
    </button>
  )
}

const possibleNames = Object.keys(CHIP_NAMES).map(key => CHIP_NAMES[key])

Chip.propTypes = {
  type: PropTypes.oneOf(possibleNames).isRequired
}

export default Chip
