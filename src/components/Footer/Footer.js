import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { BiWorld } from 'react-icons/bi'
import './Footer.css'
import data from '../../languages/en.json'
import FooterListCard from './FooterListCard/FooterListCard'

const Footer = () => {
  const { footer } = data
  const { t } = useTranslation('translation', { keyPrefix: 'footer' })
  return (
    <footer className='spotify-footer'>
      <div className='footer-inner-container'>
        <div className='footer-upside'>
          <div className='footer-logo-container'>
            <Link to='/' className='logo-container'>
              <img src='logo.png' alt='spotify-logo' className='logo' />
            </Link>
          </div>
          <div className='footer-upside-middle'>
            <FooterListCard data={footer.company} />
            <FooterListCard data={footer.communities} />
            <FooterListCard data={footer.useful_links} />
          </div>
          {/* <div className='footer-social-icons-container'> */}
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
          {/* <div className='instagram-icon footer-icon'></div>
            <div className='twitter-icon footer-icon'></div>
            <div className='facebook-icon footer-icon'></div> */}
          {/* </div> */}
        </div>
        <div className='footer-country'>
          <BiWorld />
          <span className='country-name'>{t('country')}</span>
        </div>
        <div className='footer-bottom'>
          <ul className='footer-bottom-left'>
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
