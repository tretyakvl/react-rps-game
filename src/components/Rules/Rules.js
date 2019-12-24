import React from 'react'
import { GAME_TYPES } from '../../constants'
import rulesStandart from './image-rules.svg'
import rulesBonus from './image-rules-bonus.svg'
import { ReactComponent as CloseIcon } from './icon-close.svg'
import './Rules.css'

const Rules = ({ history, location }) => {
  // location.pathName
  console.log(location)
  return (
    <section className='Rules'>
      <h2 className='Rules__header'>Rules</h2>
      <img
        src={
          location.pathname.includes(GAME_TYPES.STANDART)
            ? rulesStandart : rulesBonus
        }
        alt='Rules description' width='304' height='270'
      />
      <button
        onClick={() => history.goBack()}
      >
        <CloseIcon viewBox='0 0 20 20' />
        <span className='visually-hidden'>
          Close
        </span>
      </button>
    </section>
  )
}

export default Rules
