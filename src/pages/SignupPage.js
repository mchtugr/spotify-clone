import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Button from '../components/ui/Button'
import CustomInput from '../components/ui/CustomInput'
import Divider from '../components/ui/Divider'

import '../styles/signup-page.scss'

const SignupPage = () => {
  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'signup' })
  // FORM STATES
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [emailCheck, setEmailCheck] = useState('')
  const [emailCheckError, setEmailCheckError] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // CHECK EMAIL VALIDATION
    if (!email || !email.includes('@')) {
      setEmailError(true)
    }
    if (!emailCheck || !email.includes('@')) {
      setEmailCheckError(true)
    }
    // CHECK BOTH EMAILS MATCH
    if (email !== emailCheck) {
      alert('email does not match!')
      return
    }
    // PASSWORD REQUIRED
    if (!password) {
      setPasswordError(true)
    }
    // USERNAME REQUIRED
    if (!username) {
      setUsernameError(true)
    } else {
      console.log('new user created :', {
        email,
        password,
        username,
      })
    }
  }
  return (
    <div className='signup-page'>
      <div className='signup-page__header'>
        {/* LOGO */}
        <div className='signup-page__logo-section'>
          <Link to='/' className='signup-page__logobox'>
            <div className='signup-page__logo'></div>
          </Link>
        </div>
        <h2 className='signup-page__heading'>{t('heading')}</h2>
      </div>
      {/* FACEBOOK SIGNUP */}
      <div
        className='signup-page__facebook'
        onClick={() => alert('Not Active!')}
      >
        <div className='signup-page__facebook--btnbox'>
          <Button variant='facebook' animated>
            {t('facebook')}
          </Button>
        </div>
      </div>
      {/* CUSTOM DIVIDER */}
      <Divider>{t('or')}</Divider>
      <form onSubmit={handleSubmit}>
        <h2 className='signup-page__subheader'>{t('subheading')}</h2>
        {/* EMAIL */}
        <CustomInput
          label={t('email_label')}
          type='text'
          placeholder={t('email_placeholder')}
          error={t('email_error')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          showError={emailError}
        />
        {/* RETYPE EMAIL */}
        <CustomInput
          label={t('confirm_email_label')}
          type='text'
          placeholder={t('confirm_email_placeholder')}
          error={t('confirm_email_error')}
          value={emailCheck}
          onChange={(e) => setEmailCheck(e.target.value)}
          showError={emailCheckError}
        />
        {/* PASSWORD */}
        <CustomInput
          label={t('password_label')}
          type='password'
          placeholder={t('password_placeholder')}
          error={t('password_error')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showError={passwordError}
        />
        {/* USERNAME */}
        <CustomInput
          label={t('username_label')}
          type='text'
          placeholder={t('username_placeholder')}
          error={t('username_error')}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          showError={usernameError}
        />

        <div className='signup-page__btnbox'>
          <div className='signup-btn-wrapper'>
            <Button variant='spotify' animated type='submit'>
              {t('sign_up_btn')}
            </Button>
          </div>
        </div>
        {/* LOGIN REDIRECT */}
        <div className='signup-page__login'>
          <span>{t('login_direct')}</span>
          <span>
            <Link to='/login' className='signup-page__login--link'>
              {t('login')}
            </Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export default SignupPage
