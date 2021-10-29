import React from 'react'

import './Divider.css'

const Divider = ({ children, ...props }) => {
  return (
    <div className='divider' {...props}>
      {children}{' '}
    </div>
  )
}

export default Divider
