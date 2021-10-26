import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
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
          <Link to='/login'>
            <Button variant='dark' animated>
              {t('trial.get_started')}
            </Button>
          </Link>
        </div>
        <div className='view-plans-btn'>
          <a href='#premium-plans'>
            <Button variant='primary' animated>
              {t('trial.view_plans')}
            </Button>
          </a>
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
