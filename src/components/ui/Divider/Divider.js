import React from 'react'

import './divider.scss'

const Divider = ({ children, ...props }) => {
  return (
    <div className='divider' {...props}>
      {children}
    </div>
  )
}

export default Divider
