import React from 'react'
import { Link } from 'react-router-dom'

import './Btn.css'

const Btn = (props) => {
  return (
    <Link className='Btn' {...props}>{props.children}</Link>
  )
}

export default Btn
