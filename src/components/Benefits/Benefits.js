import React from 'react'
import { useTranslation } from 'react-i18next'
import BenefitCard from './BenefitCard'
import './Benefits.css'

const Benefits = () => {
  const { t } = useTranslation()
  return (
    <div className='benefits'>
      <div className='benefits-heading'>{t('benefits.h2')}</div>
      <div className='benefit-cards-container'>
        <div className='benefit-cards-inner-container'>
          <BenefitCard
            title={t('benefits.footer1.title')}
            description={t('benefits.footer1.description')}
            className='download-card'
          />
          <BenefitCard
            title={t('benefits.footer2.title')}
            description={t('benefits.footer2.description')}
            className='no-ads-card'
          />
          <BenefitCard
            title={t('benefits.footer3.title')}
            description={t('benefits.footer3.description')}
            className='play-sonf-card'
          />
          <BenefitCard
            title={t('benefits.footer4.title')}
            description={t('benefits.footer4.description')}
            className='skip-song-card'
          />
        </div>
      </div>
    </div>
  )
}

export default Benefits
