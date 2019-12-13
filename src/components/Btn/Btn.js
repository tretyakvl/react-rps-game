import React from 'react'
import { Link } from 'react-router-dom'

import './Btn.css'

const Btn = (props) => {
  const { type, to, href, ...rest } = props
  let classes = 'Btn'

  if (type) classes += ` ${type}`

  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>{props.children}</Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>{props.children}</a>
    )
  }

  return (
    <button className={classes} {...rest}>{props.children}</button>
  )
}

export default Btn
