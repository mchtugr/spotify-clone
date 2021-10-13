import React from 'react'
import './Button.css'

const Button = ({ variant, ...props }) => {
  return (
    <div {...props} className={`custom-btn ${variant}-btn`}>
      {props.children}
    </div>
  )
}

export default Button
