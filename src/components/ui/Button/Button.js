import React from 'react'
import './Button.css'

const Button = ({ variant, animated, ...props }) => {
  return (
    <button
      {...props}
      className={`${animated && 'animated-btn'} custom-btn ${variant}-btn`}
    >
      {props.children}
    </button>
  )
}

export default Button
