import React from 'react'
import { useTranslation } from 'react-i18next'

import BenefitCard from '../cards/BenefitCard'

import './benefits.scss'

const Benefits = () => {
  // to translate from language files

  const { t } = useTranslation()
  return (
    <div className='benefits'>
      <div className='benefits__heading'>{t('benefits.h2')}</div>
      <div className='benefits__cards'>
        <div className='benefits__cards-inner'>
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
