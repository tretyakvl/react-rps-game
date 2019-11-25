import React from 'react'
import paper from './icon-paper.svg'
import lizard from './icon-lizard.svg'
import './Chip.css'

const Chip = (props) => {
  return (
    <a className='Chip'>
      <div className='Chip__image'>
        <img src={paper} alt='Paper' width='49' height='59' />
      </div>
    </a>
  )
}

export default Chip
