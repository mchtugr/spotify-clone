import React from 'react'
import { useTranslation } from 'react-i18next'

import PremiumPlansCard from './PremiumPlansCard/PremiumPlansCard'
import data from '../../languages/en.json'

import './PremiumPlans.css'

const PremiumPlans = () => {
  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'premium_plans' })
  const { plans: premiumPlans } = data.premium_plans

  return (
    <div className='premium-plans' id='premium-plans'>
      <div className='premium-plans-inner-container'>
        <h2 className='premium-plans-heading'>{t('h2')}</h2>
        <h3 className='premium-plans-subheading'>{t('h3')}</h3>
        {/* PAYMENT LOGOS */}
        <div className='payment-logos-section'>
          <ul className='payment-logos-container'>
            <li className='payment-logo-item-container'>
              <div className='payment-logo visa'></div>
            </li>
            <li className='payment-logo-item-container'>
              <div className='payment-logo mastercard'></div>
            </li>
            <li className='payment-logo-item-container'>
              <div className='payment-logo amex'></div>
            </li>
            <li className='payment-logo-item-container'>
              <div className='payment-logo discover'></div>
            </li>
            <li className='payment-logo-item-container'>
              <div className='payment-logo paypal'></div>
            </li>
          </ul>
        </div>
        <div className='premium-plans-cards-container'>
          <div className='premium-plans-cards-inner-container'>
            {premiumPlans.map((plan) => (
              <PremiumPlansCard langData={plan} key={plan.index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PremiumPlans
