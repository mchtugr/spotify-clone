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
  const { t } = useTranslation('translation', { keyPrefix: 'vertical_navbar' })
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const playlists = useSelector((state) => state.playlists.list)

  useEffect(() => {
    dispatch(browseFeaturedPlaylists())
  }, [dispatch])
  return (
    <div className='vertical-navbar-container'>
      <div className='vertical-navbar-inner-container'>
        <Link to='/'>
          <div className='vertical-logo-container'>
            <img className='vertical-logo' src='/logo.png' alt='logo'></img>
          </div>
        </Link>
        <div>
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
        <div className='vertical-nav-middle'>
          <div className='vertical-nav-item'>
            <span className='playlist-icon-container'>
              <CreatePlaylistIcon />
            </span>
            <p className='nav-link-text'>{t('playlist')}</p>
          </div>
          <div className='vertical-nav-item'>
            <span>
              <img
                src='/favorites.png'
                alt='favorite_songs_icon'
                className='nav-img'
              />
            </span>
            <p className='nav-link-text'> {t('favorite_songs')}</p>
          </div>
          <div className='vertical-nav-item'>
            <span>
              <img src='/episode.png' alt='episodes_icon' className='nav-img' />
            </span>
            <p className='nav-link-text'>{t('episodes')}</p>
          </div>
          <div className='navbar-hr' />
          <div className='navbar-playlists'>
            <div className='navbar-playlists-container'>
              {playlists.map((playlist) => {
                return (
                  <Link to={`/playlist/${playlist.id}`} key={playlist.id}>
                    <div className='playlist-title'>{playlist.name}</div>
                  </Link>
                )
              })}
              {/* <div className='playlist-title'>Rock</div>
              <div className='playlist-title'>Pop</div>
              <div className='playlist-title'>Jazz</div>
              <div className='playlist-title'>Blues</div>
              <div className='playlist-title'>Hits</div>
              <div className='playlist-title'>60s</div>
              <div className='playlist-title'>70s</div>
              <div className='playlist-title'>80s</div> */}
            </div>
          </div>
        </div>
        <div className='vertical-nav-item'>
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
