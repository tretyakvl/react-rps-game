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
  paper,
  lizard,
  rock,
  scissors,
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

const possibleNames = [...CHIP_NAMES]

Chip.propTypes = {
  type: PropTypes.oneOf(possibleNames).isRequired
}

export default Chip
