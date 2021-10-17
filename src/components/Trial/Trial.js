import React from 'react'
import { useTranslation } from 'react-i18next'
import './Trial.css'
import Button from '../ui/Button'

const Trial = () => {
  const { t } = useTranslation()
  return (
    <div className='trial-offers'>
      <h1 className='trial-heading'>{t('trial.h1')}</h1>
      <h2 className='trial-subheading'>{t('trial.price')}</h2>
      <div className='trial-btn-container'>
        <div className='get-started-btn'>
          <Button variant='dark'>{t('trial.get_started')}</Button>
        </div>
        <div className='view-plans-btn'>
          <Button variant='primary'>{t('trial.view_plans')}</Button>
        </div>
      </div>
      <div className='trial-footer'>
        <p>
          <span className='trial-footer-link'>{t('trial.footer_link')}</span>{' '}
          {t('trial.footer_text')}
        </p>
      </div>
    </div>
  )
}

export default Trial
