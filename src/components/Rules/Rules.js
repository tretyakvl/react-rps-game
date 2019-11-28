import React from 'react'
import { Link } from '@reach/router'
import rules from './image-rules.svg'
import { ReactComponent as CloseIcon } from './icon-close.svg'
import './Rules.css'

const Rules = () => {
  return (
    <section className='Rules'>
      <h2 className='Rules__header'>Rules</h2>
      <img src={rules} alt='Rules description' width='304' height='270' />
      <Link to='/'>
        <CloseIcon viewBox='0 0 20 20' />
        <span className='visually-hidden'>
          Close
        </span>
      </Link>
    </section>
  )
}

export default Rules
