import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { BiWorld } from 'react-icons/bi'

import FooterListCard from '../cards/FooterListCard/FooterListCard'
import data from '../../languages/en.json'

import './footer.scss'

const Footer = () => {
  const { footer } = data

  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'footer' })

  return (
    <footer className='footer'>
      <div className='footer__inner'>
        {/* UPPER PART */}
        <div className='footer__upside'>
          <div className='footer__upside--logo'>
            {/* LOGO */}
            <Link to='/'>
              <img src='logo.png' alt='spotify-logo' className='logo' />
            </Link>
          </div>
          {/* UPPER-MID */}
          <div className='footer__upside--middle'>
            <FooterListCard data={footer.company} />
            <FooterListCard data={footer.communities} />
            <FooterListCard data={footer.useful_links} />
          </div>
          {/* SOCIAL ICONS */}
          <ul className='footer__social-icons'>
            <li className='footer__social-icons--item'>
              <a
                href='https://instagram.com/spotify'
                className='footer__social-icons--link'
              >
                <span className='instagram-icon footer__social-icons--icon'></span>
              </a>
            </li>
            <li className='footer__social-icons--item'>
              <a
                href='https://twitter.com/spotify'
                className='footer__social-icons--link'
              >
                <span className='twitter-icon footer__social-icons--icon'></span>
              </a>
            </li>
            <li className='footer__social-icons--item'>
              <a
                href='https://www.facebook.com/Spotify'
                className='footer__social-icons--link'
              >
                <span className='facebook-icon footer__social-icons--icon'></span>
              </a>
            </li>
          </ul>
        </div>

        {/* COUNTRY */}
        <div className='footer__country'>
          <BiWorld />
          <span className='footer__country--name'>{t('country')}</span>
        </div>
        {/* BOTTOM */}
        <div className='footer__bottom'>
          <ul className='footer__bottom--left'>
            {/* MAP USING LOCAL LANG DATA */}
            {footer.footer_bottom.map((item, i) => (
              <li key={i} className='footer__bottom--items'>
                <a href={item.link} className='footer__bottom--links'>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className='footer__bottom--copyright'>
            &copy; {new Date().getFullYear()} Spotify AB
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
