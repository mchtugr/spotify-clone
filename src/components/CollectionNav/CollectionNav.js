import React from 'react'
import './CollectionNav.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const CollectionNav = ({ activeTab }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'collections' })
  return (
    <ul className='collection-nav'>
      <li
        className={`collection-nav-item  ${
          activeTab === 'playlists' && 'collection-nav-selected'
        }`}
      >
        <Link to='/collection/playlists' className='collection-nav-link'>
          {t('playlists')}
        </Link>
      </li>
      <li
        className={`collection-nav-item  ${
          activeTab === 'podcasts' && 'collection-nav-selected'
        }`}
      >
        <Link to='/collection/podcasts' className='collection-nav-link'>
          {t('podcasts')}
        </Link>
      </li>
      <li
        className={`collection-nav-item  ${
          activeTab === 'artists' && 'collection-nav-selected'
        }`}
      >
        <Link to='/collection/artists' className='collection-nav-link'>
          {t('artists')}
        </Link>
      </li>
      <li
        className={`collection-nav-item  ${
          activeTab === 'albums' && 'collection-nav-selected'
        }`}
      >
        <Link to='/collection/albums' className='collection-nav-link'>
          {t('albums')}
        </Link>
      </li>
    </ul>
  )
}

export default CollectionNav
