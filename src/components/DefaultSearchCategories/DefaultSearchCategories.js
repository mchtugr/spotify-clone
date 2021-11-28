import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import MusicTypesCard from '../cards/MusicTypesCard'

import './default-search-categories.scss'

const DefaultSearchCategories = () => {
  const categories = useSelector((state) => state.categories.list)

  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'searchpage' })

  return (
    <div>
      <h2>{t('browse_all')}</h2>
      <div className='card-display'>
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
