import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Button from '../ui/Button'

import './trial.scss'

const Trial = () => {
  // to translate from language files
  const { t } = useTranslation()
  return (
    <div className='trial-offers'>
      <h1 className='trial-offers__heading'>{t('trial.h1')}</h1>
      <h2 className='trial-offers__subheading'>{t('trial.price')}</h2>
      <div className='trial-offers__btnbox'>
        <div className='trial-offers__btn trial-offers__btn--get-started'>
          <Link to='/login'>
            <Button variant='dark' animated>
              {t('trial.get_started')}
            </Button>
          </Link>
        </div>
        <div className='trial-offers__btn trial-offers__btn--view-plans'>
          <a href='#premium-plans'>
            <Button variant='primary' animated>
              {t('trial.view_plans')}
            </Button>
          </a>
        </div>
      </div>
      <div className='trial-offers__footer'>
        <p>
          <span className='trial-offers__footer--link'>
            {t('trial.footer_link')}
          </span>{' '}
          {t('trial.footer_text')}
        </p>
      </div>
    </div>
  )
}

export default Trial
