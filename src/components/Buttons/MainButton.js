import React from 'react'

import './MainButton.css'

const MainButton = (props) => {
  const { text } = props

  return (
    <a className='MainButton'>{text}</a>
  )
}

export default MainButton
