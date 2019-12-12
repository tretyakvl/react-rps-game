import React from 'react'
import { Link } from 'react-router-dom'

import './Btn.css'

const Btn = (props) => {
  const { type, ...rest } = props

  if (type === 'link') {
    return (
      <Link className='Btn' {...rest}>{props.children}</Link>
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
