import React from 'react'
import './DiscoverSection.css'

const DiscoverSection = ({ children }) => {
  return (
    <div className='discover-section'>
      <div className='discover-section-header'>
        <h2>Hi there</h2>
        <div className='discover-see-all'>HEPSINI GOR</div>
      </div>
      <div className='discover-section-card-container'>{children}</div>
    </div>
  )
}

export default DiscoverSection
