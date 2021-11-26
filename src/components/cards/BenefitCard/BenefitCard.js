import React from 'react'

import './benefit-card.scss'

const BenefitCard = ({ title, description, className }) => {
  return (
    <div className='benefit-card'>
      <div className={`benefit_card__imgbox ${className}`}></div>
      <div className='benefit-card__footer'>
        <p className='benefit-card__footer--title'>{title}</p>
        <p className='benefit-card__footer--description'>{description}</p>
      </div>
    </div>
  )
}

export default BenefitCard
