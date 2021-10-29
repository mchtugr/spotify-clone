import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { BiWorld } from 'react-icons/bi'

import FooterListCard from '../cards/FooterListCard/FooterListCard'
import data from '../../languages/en.json'

import './Footer.css'

const Footer = () => {
  const { footer } = data

  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'footer' })

  return (
    <footer className='spotify-footer'>
      <div className='footer-inner-container'>
        {/* UPPER PART */}
        <div className='footer-upside'>
          <div className='footer-logo-container'>
            {/* LOGO */}
            <Link to='/' className='logo-container'>
              <img src='logo.png' alt='spotify-logo' className='logo' />
            </Link>
          </div>
          {/* UPPER-MID */}
          <div className='footer-upside-middle'>
            <FooterListCard data={footer.company} />
            <FooterListCard data={footer.communities} />
            <FooterListCard data={footer.useful_links} />
          </div>
          {/* SOCIAL ICONS */}
          <ul className='footer-social-icons-container'>
            <li>
              <a
                href='https://instagram.com/spotify'
                className='footer-icon-link'
              >
                <span className='instagram-icon footer-icon'></span>
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/spotify'
                className='footer-icon-link'
              >
                <span className='twitter-icon footer-icon'></span>
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/Spotify'
                className='footer-icon-link'
              >
                <span className='facebook-icon footer-icon'></span>
              </a>
            </li>
          </ul>
        </div>

        {/* COUNTRY */}
        <div className='footer-country'>
          <BiWorld />
          <span className='country-name'>{t('country')}</span>
        </div>
        {/* BOTTOM */}
        <div className='footer-bottom'>
          <ul className='footer-bottom-left'>
            {/* MAP USING LOCAL LANG DATA */}
            {footer.footer_bottom.map((item, i) => (
              <li key={i}>
                <a href={item.link} className='footer-bottom-links'>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className='footer-copyright'>
            &copy; {new Date().getFullYear()} Spotify AB
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
