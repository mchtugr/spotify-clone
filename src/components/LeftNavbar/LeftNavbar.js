import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CreatePlaylistIcon from '../icons/CreatePlaylistIcon'
import DownloadIcon from '../icons/DownloadIcon'
import HomeActiveIcon from '../icons/HomeActiveIcon'
import HomeIcon from '../icons/HomeIcon'
import LibraryActiveIcon from '../icons/LibraryActiveIcon'
import LibraryIcon from '../icons/LibraryIcon'
import SearchActiveIcon from '../icons/SearchActiveIcon'
import SearchIcon from '../icons/SearchIcon'
import { browseFeaturedPlaylists } from '../../redux/actions'

import './left-navbar.scss'

const LeftNavbar = () => {
  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'vertical_navbar' })
  // GET ROUTE NAME
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const playlists = useSelector((state) => state.playlists.list)

  // FETCH PLAYLISTS ON FIRST RENDER
  useEffect(() => {
    dispatch(browseFeaturedPlaylists())
  }, [dispatch])

  return (
    <div className='vertical-navbar'>
      <div className='vertical-navbar__inner'>
        {/* LOGO */}
        <Link to='/'>
          <div className='vertical-navbar__logobox'>
            <img
              className='vertical-navbar__logo'
              src='https://raw.githubusercontent.com/mchtugr/spotify-clone/main/public/logo.png'
              alt='logo'
            ></img>
          </div>
        </Link>
        <div>
          {/* HOME */}
          <div
            className={`vertical-navbar__item ${
              pathname === '/' && 'vertical-navbar__item--selected'
            }`}
          >
            <Link to='/' className='vertical-navbar__link'>
              <span className='vertical-navbar__iconbox'>
                {pathname === '/' ? <HomeActiveIcon /> : <HomeIcon />}
              </span>
              <p className='vertical-navbar__link--text'>{t('homepage')}</p>
            </Link>
          </div>
          {/* SEARCH */}
          <div
            className={`vertical-navbar__item ${
              pathname === '/search' && 'vertical-navbar__item--selected'
            }`}
          >
            <Link to='/search' className='vertical-navbar__link'>
              <span className='vertical-navbar__iconbox'>
                {pathname === '/search' ? <SearchActiveIcon /> : <SearchIcon />}
              </span>
              <p className='vertical-navbar__link--text'>{t('search')}</p>
            </Link>
          </div>
          {/* COLLECTIONS */}
          <div
            className={`vertical-navbar__item ${
              pathname.includes('/collection') &&
              'vertical-navbar__item--selected'
            }`}
          >
            <Link to='/collection/playlists' className='vertical-navbar__link'>
              <span className='vertical-navbar__iconbox'>
                {pathname === '/collection' ? (
                  <LibraryActiveIcon />
                ) : (
                  <LibraryIcon />
                )}
              </span>
              <p className='vertical-navbar__link--text'>{t('library')}</p>
            </Link>
          </div>
        </div>
        {/* NAVBAR MIDDLE */}
        <div className='vertical-navbar__middle'>
          {/* CREATE PLAYLIST */}
          <div className='vertical-navbar__item'>
            <span className='vertical-navbar__playlist-icon'>
              <CreatePlaylistIcon />
            </span>
            <p className='vertical-navbar__link--text'>{t('playlist')}</p>
          </div>
          {/* FAVORITES */}
          <div className='vertical-navbar__item'>
            <span>
              <img
                src='https://raw.githubusercontent.com/mchtugr/spotify-clone/main/public/favorites.png'
                alt='favorite_songs_icon'
                className='vertical-navbar__img'
              />
            </span>
            <p className='vertical-navbar__link--text'>
              {' '}
              {t('favorite_songs')}
            </p>
          </div>
          {/* EPISODES */}
          <div className='vertical-navbar__item'>
            <span>
              <img
                src='https://raw.githubusercontent.com/mchtugr/spotify-clone/main/public/episode.png'
                alt='episodes_icon'
                className='vertical-navbar__img'
              />
            </span>
            <p className='vertical-navbar__link--text'>{t('episodes')}</p>
          </div>
          <div className='vertical-navbar__hr' />
          {/* PLAYLISTS */}
          <div className='vertical-navbar__playlist'>
            <div className='vertical-navbar__playlist-container'>
              {playlists.map((playlist) => {
                return (
                  <Link to={`/playlist/${playlist.id}`} key={playlist.id}>
                    <div className='vertical-navbar__playlist--title'>
                      {playlist.name}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className='vertical-navbar__item'>
          {/* DOWNLOAD */}
          <span className='vertical-navbar__iconbox'>
            <DownloadIcon />
          </span>
          <p className='vertical-navbar__link--text'>{t('download')}</p>
        </div>
      </div>
    </div>
  )
}

export default LeftNavbar
