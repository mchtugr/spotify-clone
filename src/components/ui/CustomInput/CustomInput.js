import React from 'react'
import { MdClose } from 'react-icons/md'

import './custom-input.scss'

const CustomInput = ({ showError, className, isLogin, ...props }) => {
  return (
    <div className='custom-input'>
      <div className='custom-input__label'>
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <input
        {...props}
        className={`custom-input__field ${
          showError && 'custom-input__field--error'
        } ${className}`}
      />
      {/* ERROR SECTION IF ANY */}
      {showError && (
        <div
          className={`custom-input__error ${
            isLogin && 'custom-input__error--login'
          }`}
        >
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
