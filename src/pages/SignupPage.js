import React, { useState } from 'react'
import Button from '../components/ui/Button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './SignupPage.css'
import CustomInput from '../components/ui/CustomInput'
import Divider from '../components/ui/Divider'

const SignupPage = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'signup' })
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
    if (!email || !email.includes('@')) {
      setEmailError(true)
    }
    if (!emailCheck || !email.includes('@')) {
      setEmailCheckError(true)
    }

    if (email !== emailCheck) {
      alert('email does not match!')
      return
    }
    if (!password) {
      setPasswordError(true)
    }
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
    <div className='signup-container'>
      <div className='header-container'>
        <div className='signup-page-logo-section'>
          <Link to='/' className='signup-page-logo-container'>
            <div className='signup-logo'></div>
          </Link>
        </div>
        <h2 className='signup-heading'>{t('heading')}</h2>
      </div>
      <div
        className='facebook-signup-container'
        onClick={() => alert('Not Active!')}
      >
        <div className='facebook-btn-wrapper'>
          <Button variant='facebook' animated>
            {t('facebook')}
          </Button>
        </div>
      </div>
      <Divider>{t('or')}</Divider>
      <form onSubmit={handleSubmit}>
        <h2 className='signup-subheader'>{t('subheading')}</h2>
        <CustomInput
          label={t('email_label')}
          type='text'
          placeholder={t('email_placeholder')}
          error={t('email_error')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          showError={emailError}
        />
        <CustomInput
          label={t('confirm_email_label')}
          type='text'
          placeholder={t('confirm_email_placeholder')}
          error={t('confirm_email_error')}
          value={emailCheck}
          onChange={(e) => setEmailCheck(e.target.value)}
          showError={emailCheckError}
        />
        <CustomInput
          label={t('password_label')}
          type='password'
          placeholder={t('password_placeholder')}
          error={t('password_error')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showError={passwordError}
        />
        <CustomInput
          label={t('username_label')}
          type='text'
          placeholder={t('username_placeholder')}
          error={t('username_error')}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          showError={usernameError}
        />

        <div className='signup-btn-container'>
          <div className='signup-btn-wrapper'>
            <Button variant='spotify' animated type='submit'>
              {t('sign_up_btn')}
            </Button>
          </div>
        </div>
        <div className='login-option'>
          <span>{t('login_direct')}</span>
          <span>
            <Link to='/login' className='login-link'>
              {t('login')}
            </Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export default SignupPage
