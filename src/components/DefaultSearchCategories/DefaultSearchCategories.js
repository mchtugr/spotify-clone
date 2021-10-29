import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import MusicTypesCard from '../cards/MusicTypesCard'
import './DefaultSearchCategories.css'

const DefaultSearchCategories = () => {
  const categories = useSelector((state) => state.categories.list)
  const { t } = useTranslation('translation', { keyPrefix: 'searchpage' })
  return (
    <div>
      <h2>{t('browse_all')}</h2>
      <div className='demo-card-container'>
        {categories.map((category) => (
          <React.Fragment key={category.id}>
            <MusicTypesCard category={category} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default DefaultSearchCategories
