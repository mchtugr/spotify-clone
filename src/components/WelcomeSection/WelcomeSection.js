import React from 'react'
import HorizontalCard from '../cards/HorizontalCard'
import './WelcomeSection.css'

const WelcomeSection = () => {
  return (
    <div className='welcome-section'>
      <h2 className='welcome-message'>Gunaydin</h2>
      <div className='welcome-card-container'>
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </div>
    </div>
  )
}

export default WelcomeSection
