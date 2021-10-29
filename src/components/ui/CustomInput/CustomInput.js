import React from 'react'
import { MdClose } from 'react-icons/md'

import './CustomInput.css'

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
      {/* ERROR SECTION IF ANY */}
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
