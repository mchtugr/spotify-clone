import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import { RiFacebookCircleFill, RiAppleFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { IoCheckbox, IoSquareOutline } from 'react-icons/io5'

import Button from '../components/ui/Button'
import Divider from '../components/ui/Divider'
import CustomInput from '../components/ui/CustomInput'
import { accessUrl } from '../spotify'

import '../styles/login-page.scss'

const LoginPage = () => {
  const history = useHistory()
  // FORM STATES
  const [selected, setSelected] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    // CHECK VALIDITY
    if (!email || !email.includes('@')) {
      setEmailError(true)
      return
    }
    if (!password) {
      setPasswordError(true)
      return
    }
    // IF FORM HAS NO INVALID INPUT, REDIRECT TO REAL SPOTIFY AUTH PAGE
    window.location.assign(accessUrl)
  }
  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'login' })

  return (
    <div className='login-page'>
      {/* LOGO */}
      <div className='login-page__logo-section'>
        <Link to='/' className='login-page__logobox'>
          <div className='login-page__logo'></div>
        </Link>
      </div>
      <div className='login-page__inner'>
        {/* FACEBOOK LOGIN */}
        <div className='facebook-container login-page__social-iconbox'>
          <Button variant='facebook-dark'>
            <span className='login-page__social-icon'>
              <RiFacebookCircleFill size='16px' />
            </span>
            {t('facebook')}
          </Button>
        </div>
        {/* APPLE LOGIN */}
        <div className='apple-container login-page__social-iconbox'>
          <Button variant='apple'>
            <span className='login-page__social-icon'>
              <RiAppleFill size='16px' />
            </span>
            {t('apple')}
          </Button>
        </div>
        {/* GOOGLE LOGIN */}
        <div className='apple-container login-page__social-iconbox'>
          <Button variant='google'>
            <span className='login-page__social-icon'>
              <FcGoogle size='16px' />
            </span>
            {t('google')}
          </Button>
        </div>
        {/* CUSTOM DIVIDER */}
        <Divider
          style={{
            width: '100%',
            fontSize: '12px',
            background: '#fff',
            letterSpacing: '1px',
            fontWeight: '700',
            color: '#000',
          }}
        >
          {t('or')}{' '}
        </Divider>
        <form onSubmit={handleLogin}>
          {/* EMAIL */}
          <CustomInput
            label={t('email_label')}
            placeholder={t('email_placeholder')}
            error={t('email_error')}
            type='text'
            className='custom-input__field--login'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            showError={emailError}
            isLogin
          />
          {/* PASSWORD */}
          <CustomInput
            label={t('password_label')}
            placeholder={t('password_placeholder')}
            error={t('password_error')}
            type='password'
            className='custom-input__field--login'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showError={passwordError}
            isLogin
          />

          <div className='login-page__forget'>{t('forget')}</div>
          <div className='login-page__form-submit'>
            <div
              className='login-page__remember'
              onClick={() => setSelected(!selected)}
            >
              <div
                className={
                  selected
                    ? 'login-page__checkbox--selected'
                    : 'login-page__checkbox'
                }
              >
                {selected ? (
                  <IoCheckbox size='24px' />
                ) : (
                  <IoSquareOutline size='24px' />
                )}
              </div>
              <div className='login-page__remember--text'>{t('remember')}</div>
            </div>
            <Button variant='spotify-dark' type='submit'>
              {t('login-btn')}
            </Button>
          </div>
        </form>
        {/* SIGNUP REDIRECT */}
        <Divider style={{ width: '100%' }} />
        <div className='login-page__signup'>
          <h2 className='login-page__no-account'>{t('no_account')}</h2>
          <Button variant='google' onClick={() => history.push('/signup')}>
            {t('sign_up_btn')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
