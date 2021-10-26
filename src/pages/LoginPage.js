import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Divider from '../components/ui/Divider'
import CustomInput from '../components/ui/CustomInput'
import { RiFacebookCircleFill, RiAppleFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { IoCheckbox, IoSquareOutline } from 'react-icons/io5'
import { useHistory } from 'react-router'
import './LoginPage.css'
import { accessUrl } from '../spotify'

const LoginPage = () => {
  const history = useHistory()
  const [selected, setSelected] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const handleLogin = (e) => {
    e.preventDefault()
    if (!email) {
      setEmailError(true)
      return
    }
    if (!password) {
      setPasswordError(true)
      return
    }
    window.location.assign(accessUrl)
  }
  const { t } = useTranslation('translation', { keyPrefix: 'login' })
  return (
    <div className='login-page-container'>
      <div className='login-page-logo-section'>
        <Link to='/' className='login-logo-container'>
          <div className='login-logo'></div>
        </Link>
      </div>
      <div className='login-page-inner-container'>
        <div className='facebook-container social-icon-container'>
          <Button variant='facebook-dark'>
            <span className='social-btn-icon'>
              <RiFacebookCircleFill size='16px' />
            </span>
            {t('facebook')}
          </Button>
        </div>
        <div className='apple-container social-icon-container'>
          <Button variant='apple'>
            <span className='social-btn-icon'>
              <RiAppleFill size='16px' />
            </span>
            {t('apple')}
          </Button>
        </div>
        <div className='apple-container social-icon-container'>
          <Button variant='google'>
            <span className='social-btn-icon'>
              <FcGoogle size='16px' />
            </span>
            {t('google')}
          </Button>
        </div>
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
          <CustomInput
            label={t('email_label')}
            placeholder={t('email_placeholder')}
            error={t('email_error')}
            type='text'
            className='login-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            showError={emailError}
            isLogin
          />
          <CustomInput
            label={t('password_label')}
            placeholder={t('password_placeholder')}
            error={t('password_error')}
            type='password'
            className='login-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showError={passwordError}
            isLogin
          />

          <div className='forget-password'>{t('forget')}</div>
          <div className='form-submit-section'>
            <div
              className='form-remember'
              onClick={() => setSelected(!selected)}
            >
              <div
                className={
                  selected ? 'remember-checkbox-selected' : 'remember-checkbox'
                }
              >
                {selected ? (
                  <IoCheckbox size='24px' />
                ) : (
                  <IoSquareOutline size='24px' />
                )}
              </div>
              <div className='remember-text'>{t('remember')}</div>
            </div>
            <Button variant='spotify-dark' type='submit'>
              {t('login-btn')}
            </Button>
          </div>
        </form>
        <Divider style={{ width: '100%' }} />
        <div className='login-footer-signup'>
          <h2 className='no-account'>{t('no_account')}</h2>
          <Button variant='google' onClick={() => history.push('/signup')}>
            {t('sign_up_btn')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
