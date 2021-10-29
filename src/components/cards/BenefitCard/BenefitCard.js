import React from 'react'

import './BenefitCard.css'

const BenefitCard = ({ title, description, className }) => {
  return (
    <div className='benefit-card'>
      <div className={`bg-img-container ${className}`}></div>
      <div className='card-footer'>
        <p className='card-footer-title'>{title}</p>
        <p className='card-footer-description'>{description}</p>
      </div>
    </div>
  )
}

export default BenefitCard
