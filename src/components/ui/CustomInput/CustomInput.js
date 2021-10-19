import React from 'react'
import './CustomInput.css'
import { MdClose } from 'react-icons/md'

const CustomInput = ({ showError, className, isLogin, ...props }) => {
  return (
    <div className='custom-input-container'>
      <div className='label-container'>
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <input
        {...props}
        className={`signup-input ${
          props.showError && 'signup-input-error'
        } ${className}`}
      />
      {showError && (
        <div className={`input-error ${isLogin && 'login-input-error'}`}>
          {!isLogin && (
            <span className='error-icon'>
              <MdClose size='16px' />
            </span>
          )}

          {props.error}
        </div>
      )}
    </div>
  )
}

export default CustomInput
