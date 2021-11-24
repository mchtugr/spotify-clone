import React from 'react'

import './button.scss'

const Button = ({ variant, animated, ...props }) => {
  return (
    <button
      {...props}
      className={`${animated && 'btn--animated'} btn btn__${variant}`}
    >
      {props.children}
    </button>
  )
}

export default Button
