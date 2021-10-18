import React from 'react'
import './CustomInput.css'
import { MdClose } from 'react-icons/md'

const CustomInput = ({ showError, ...props }) => {
  return (
    <div className='custom-input-container'>
      <div className='label-container'>
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <input
        {...props}
        className={`signup-input ${props.showError && 'signup-input-error'}`}
      />
      {showError && (
        <div className='input-error'>
          <span className='error-icon'></span>
          <MdClose size='16px' />
          {props.error}
        </div>
      )}
    </div>
  )
}

export default CustomInput
