import React from 'react'
import { useTranslation } from 'react-i18next'

import PremiumPlansCard from '../cards/PremiumPlansCard/PremiumPlansCard'
import data from '../../languages/en.json'

import './premium-plans.scss'

const PremiumPlans = () => {
  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'premium_plans' })
  const { plans: premiumPlans } = data.premium_plans

  return (
    <div className='premium-plans' id='premium-plans'>
      <div className='premium-plans__inner'>
        <h2 className='premium-plans__heading'>{t('h2')}</h2>
        <h3 className='premium-plans__subheading'>{t('h3')}</h3>
        {/* PAYMENT LOGOS */}
        <div className='premium-plans__payment'>
          <ul className='premium-plans__payment-logos'>
            <li className='premium-plans__logobox'>
              <div className='premium-plans__logobox--logo visa'></div>
            </li>
            <li className='premium-plans__logobox'>
              <div className='premium-plans__logobox--logo mastercard'></div>
            </li>
            <li className='premium-plans__logobox'>
              <div className='premium-plans__logobox--logo amex'></div>
            </li>
            <li className='premium-plans__logobox'>
              <div className='premium-plans__logobox--logo discover'></div>
            </li>
            <li className='premium-plans__logobox'>
              <div className='premium-plans__logobox--logo paypal'></div>
            </li>
          </ul>
        </div>
        <div className='premium-plans__cardbox'>
          <div className='premium-plans__cardbox--inner'>
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
