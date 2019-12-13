import React from 'react'
import { Link } from 'react-router-dom'

import './Btn.css'

const Btn = (props) => {
  const { type, to, ...rest } = props

  if (to) {
    return (
      <Link className='Btn' to={to} {...rest}>{props.children}</Link>
    )
  }

  if (type === 'button') {
    return (
      <button className='Btn' {...rest}>{props.children}</button>
    )
  }

  return (
    <button className='Btn' {...rest}>{props.children}</button>
  )
}

export default Btn
