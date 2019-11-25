import React from 'react'
import paper from './icon-paper.svg'
import lizard from './icon-lizard.svg'
import rock from './icon-rock.svg'
import scissors from './icon-scissors.svg'
import spock from './icon-spock.svg'

import './Chip.css'

const Chip = props => {
  return (
    <div>
      <a className='Chip'>
        <div className='Chip__image'>
          <img src={paper} alt='Paper' width='49' height='59' />
        </div>
      </a>
      <a className='Chip Chip--scissors'>
        <div className='Chip__image'>
          <img src={scissors} alt='Paper' width='49' height='59' />
        </div>
      </a>
      <a className='Chip Chip--rock'>
        <div className='Chip__image'>
          <img src={rock} alt='Paper' width='49' height='59' />
        </div>
      </a>
      <a className='Chip Chip--lizard'>
        <div className='Chip__image'>
          <img src={lizard} alt='Paper' width='49' height='59' />
        </div>
      </a>
      <a className='Chip Chip--spock'>
        <div className='Chip__image'>
          <img src={spock} alt='Paper' width='49' height='59' />
        </div>
      </a>
    </div>
  )
}

export default Chip
