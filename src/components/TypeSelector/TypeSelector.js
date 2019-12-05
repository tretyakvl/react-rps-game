import React from 'react'

import MainButton from '../Buttons/MainButton'
import './TypeSelector.css'

const TypeSelector = () => {
  return (
    <section className='TypeSelector'>
      <h2>Select game type</h2>
      <ul>
        <li>
          <MainButton text='Play again' />
        </li>
        <li>
          <MainButton text='Play again' />
        </li>
      </ul>
    </section>
  )
}

export default TypeSelector
