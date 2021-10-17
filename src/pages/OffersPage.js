import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Trial from '../components/Trial'
import Benefits from '../components/Benefits/Benefits'
import PremiumPlans from '../components/PremiumPlans/PremiumPlans'

const OffersPage = () => {
  return (
    <div>
      <Header />
      <Trial />
      <Benefits />
      <PremiumPlans />

      <Footer />
    </div>
  )
}

export default OffersPage
