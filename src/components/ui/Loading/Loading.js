import React from 'react'
import { useTranslation } from 'react-i18next'

import './Loading.css'
const Loading = () => {
  // to translate from language files
  const { t } = useTranslation()
  return (
    <div className='loading-container'>
      <h1>{t('loading')}</h1>
    </div>
  )
}

export default Loading
