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

import './LeftNavbar.css'

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
    <div className='vertical-navbar-container'>
      <div className='vertical-navbar-inner-container'>
        {/* LOGO */}
        <Link to='/'>
          <div className='vertical-logo-container'>
            <img
              className='vertical-logo'
              src='https://raw.githubusercontent.com/murtazaaylak/spotify-clone/main/public/logo.png'
              alt='logo'
            ></img>
          </div>
        </Link>
        <div>
          {/* HOME */}
          <div
            className={`vertical-nav-item ${
              pathname === '/' && 'vertical-nav-item-selected'
            }`}
          >
            <Link to='/' className='vertical-navbar-link'>
              <span className='nav-icon-container'>
                {pathname === '/' ? <HomeActiveIcon /> : <HomeIcon />}
              </span>
              <p className='nav-link-text'>{t('homepage')}</p>
            </Link>
          </div>
          {/* SEARCH */}
          <div
            className={`vertical-nav-item ${
              pathname === '/search' && 'vertical-nav-item-selected'
            }`}
          >
            <Link to='/search' className='vertical-navbar-link'>
              <span className='nav-icon-container'>
                {pathname === '/search' ? <SearchActiveIcon /> : <SearchIcon />}
              </span>
              <p className='nav-link-text'>{t('search')}</p>
            </Link>
          </div>
          {/* COLLECTIONS */}
          <div
            className={`vertical-nav-item ${
              pathname === '/collection' && 'vertical-nav-item-selected'
            }`}
          >
            <Link to='/collection/playlists' className='vertical-navbar-link'>
              <span className='nav-icon-container'>
                {pathname === '/collection' ? (
                  <LibraryActiveIcon />
                ) : (
                  <LibraryIcon />
                )}
              </span>
              <p className='nav-link-text'>{t('library')}</p>
            </Link>
          </div>
        </div>
        {/* NAVBAR MIDDLE */}
        <div className='vertical-nav-middle'>
          {/* CREATE PLAYLIST */}
          <div className='vertical-nav-item'>
            <span className='playlist-icon-container'>
              <CreatePlaylistIcon />
            </span>
            <p className='nav-link-text'>{t('playlist')}</p>
          </div>
          {/* FAVORITES */}
          <div className='vertical-nav-item'>
            <span>
              <img
                src='https://raw.githubusercontent.com/murtazaaylak/spotify-clone/main/public/favorites.png'
                alt='favorite_songs_icon'
                className='nav-img'
              />
            </span>
            <p className='nav-link-text'> {t('favorite_songs')}</p>
          </div>
          {/* EPISODES */}
          <div className='vertical-nav-item'>
            <span>
              <img
                src='https://raw.githubusercontent.com/murtazaaylak/spotify-clone/main/public/episode.png'
                alt='episodes_icon'
                className='nav-img'
              />
            </span>
            <p className='nav-link-text'>{t('episodes')}</p>
          </div>
          <div className='navbar-hr' />
          {/* PLAYLISTS */}
          <div className='navbar-playlists'>
            <div className='navbar-playlists-container'>
              {playlists.map((playlist) => {
                return (
                  <Link to={`/playlist/${playlist.id}`} key={playlist.id}>
                    <div className='playlist-title'>{playlist.name}</div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className='vertical-nav-item'>
          {/* DOWNLOAD */}
          <span className='nav-icon-container'>
            <DownloadIcon />
          </span>
          <p className='nav-link-text'>{t('download')}</p>
        </div>
      </div>
    </div>
  )
}

export default LeftNavbar
