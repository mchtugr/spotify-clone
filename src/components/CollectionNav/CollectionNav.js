import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './collection-nav.scss'

const CollectionNav = ({ activeTab }) => {
  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'collections' })

  return (
    <ul className='collection-nav'>
      <li
        className={`collection-nav__item  ${
          activeTab === 'playlists' && 'collection-nav__item--selected'
        }`}
      >
        <Link to='/collection/playlists' className='collection-nav__link'>
          {t('playlists')}
        </Link>
      </li>
      <li
        className={`collection-nav__item  ${
          activeTab === 'podcasts' && 'collection-nav__item--selected'
        }`}
      >
        <Link to='/collection/podcasts' className='collection-nav__link'>
          {t('podcasts')}
        </Link>
      </li>
      <li
        className={`collection-nav__item  ${
          activeTab === 'artists' && 'collection-nav__item--selected'
        }`}
      >
        <Link to='/collection/artists' className='collection-nav__link'>
          {t('artists')}
        </Link>
      </li>
      <li
        className={`collection-nav__item  ${
          activeTab === 'albums' && 'collection-nav__item--selected'
        }`}
      >
        <Link to='/collection/albums' className='collection-nav__link'>
          {t('albums')}
        </Link>
      </li>
    </ul>
  )
}

export default CollectionNav
