import React from 'react'
import PropTypes from 'prop-types'
import paper from './icon-paper.svg'
import lizard from './icon-lizard.svg'
import rock from './icon-rock.svg'
import scissors from './icon-scissors.svg'
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
  return (
    <a className={`Chip Chip--${type}`}>
      <div className='Chip__image'>
        <img src={links[type]} alt='Paper' width='49' height='59' />
      </div>
    </a>
  )
}

Chip.propTypes = {
  type: PropTypes.oneOf(['lizard', 'paper', 'rock', 'scissors', 'spock']).isRequired
}

export default Chip
