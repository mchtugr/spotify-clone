import React from 'react'
import { useTranslation } from 'react-i18next'
import { GrCheckmark } from 'react-icons/gr'

import Button from '../../ui/Button'

import './premium-plans-card.scss'

const PremiumPlansCard = ({ langData }) => {
  // to translate from language files
  const { t } = useTranslation('translation', {
    keyPrefix: 'premium_plans',
    returnObjects: true,
  })

  const namespace = `plans.${langData.index}`

  return (
    <div className='premium-plans-card'>
      <div className='premium-plans-card__header'>
        <div className='premium-plans-card__header--trial-period'>
          <span>{t('trial_period')}</span>
        </div>
        <h3 className='premium-plans-card__header--plan-name'>
          {t(`${namespace}.plan_name`)}
        </h3>
        <p className='premium-plans-card__header--price'>
          {t(`${namespace}.price`)}
        </p>
        <p className='premium-plans-card__header--account-num'>
          {t(`${namespace}.account_num`)}
        </p>
      </div>
      <hr />
      <div className='premium-plans-card__body'>
        <ul className='premium-plans-card__features'>
          {langData.features.map((feature, index) => (
            <li className='premium-plans-card__features--item' key={index}>
              <div className='check-icon-container'>
                <GrCheckmark size='24px' />
              </div>
              {t(`${namespace}.features.${index}`)}
            </li>
          ))}
        </ul>
        <div className='premium-plans-card__btn'>
          <Button variant='dark'>{t('button')}</Button>
        </div>
      </div>
      <div className='premium-plans-card__footer'>
        {langData.index !== 3 ? (
          <>
            <span className='premium-plans-card__footer--link'>
              {t(`${namespace}.footer_link`)}
            </span>{' '}
            <span className='premium-plans-card__footer--text'>
              {t(`${namespace}.footer_text`)}
            </span>
          </>
        ) : (
          <>
            <span className='premium-plans-card__footer--text'>
              {t(`${namespace}.footer_text`)}
            </span>{' '}
            <span className='premium-plans-card__footer--link'>
              {t(`${namespace}.footer_link`)}
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default PremiumPlansCard
