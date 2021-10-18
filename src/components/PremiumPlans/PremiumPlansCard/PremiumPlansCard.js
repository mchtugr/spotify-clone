import React from 'react'
import Button from '../../ui/Button'
import { useTranslation } from 'react-i18next'
import './PremiumPlansCard.css'
import { GrCheckmark } from 'react-icons/gr'

const PremiumPlansCard = ({ langData }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'premium_plans',
    returnObjects: true,
  })

  const namespace = `plans.${langData.index}`
  return (
    <div className='premium-plans-card'>
      <div className='premium-plans-card-header'>
        <div className='trial-period-container'>
          <span className='trial-period'>{t('trial_period')}</span>
        </div>
        <h3 className='premium-plan-name'>{t(`${namespace}.plan_name`)}</h3>
        <p className='premium-plan-price'>{t(`${namespace}.price`)}</p>
        <p className='premium-plan-account-num'>
          {t(`${namespace}.account_num`)}
        </p>
      </div>
      <hr />
      <div className='premium-plans-card-body'>
        <ul className='feature-items-container'>
          {langData.features.map((feature, index) => (
            <li className='feature-item' key={index}>
              <div className='check-icon-container'>
                <GrCheckmark size='24px' />
              </div>
              {t(`${namespace}.features.${index}`)}
            </li>
          ))}
        </ul>
        <div className='premium-plans-btn-container'>
          <Button variant='dark'>{t('button')}</Button>
        </div>
      </div>
      <div className='premium-plans-card-footer'>
        {langData.index !== 3 ? (
          <>
            <span className='premium-plans-card-footer-link'>
              {t(`${namespace}.footer_link`)}
            </span>{' '}
            <span className='premium-plans-card-footer-text'>
              {t(`${namespace}.footer_text`)}
            </span>
          </>
        ) : (
          <>
            <span className='premium-plans-card-footer-text'>
              {t(`${namespace}.footer_text`)}
            </span>{' '}
            <span className='premium-plans-card-footer-link'>
              {t(`${namespace}.footer_link`)}
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default PremiumPlansCard
