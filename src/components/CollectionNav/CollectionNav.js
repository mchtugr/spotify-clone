import React from 'react'
import './CollectionNav.css'
import { Link } from 'react-router-dom'
const CollectionNav = ({ activeTab }) => {
  return (
    <ul className='collection-nav'>
      <li
        className={`collection-nav-item  ${
          activeTab === 'playlists' && 'collection-nav-selected'
        }`}
      >
        <Link to='/collection/playlists' className='collection-nav-link'>
          Playlists
        </Link>
      </li>
      <li
        className={`collection-nav-item  ${
          activeTab === 'podcasts' && 'collection-nav-selected'
        }`}
      >
        <Link to='/collection/podcasts' className='collection-nav-link'>
          Podcasts
        </Link>
      </li>
      <li
        className={`collection-nav-item  ${
          activeTab === 'artists' && 'collection-nav-selected'
        }`}
      >
        <Link to='/collection/artists' className='collection-nav-link'>
          Artists
        </Link>
      </li>
      <li
        className={`collection-nav-item  ${
          activeTab === 'albums' && 'collection-nav-selected'
        }`}
      >
        <Link to='/collection/albums' className='collection-nav-link'>
          Albums
        </Link>
      </li>
    </ul>
  )
}

export default CollectionNav
