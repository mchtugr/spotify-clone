import React, { Component } from 'react'

export const authEndpoint = 'https://accounts.spotify.com/authorize'
class SpotifyAuth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthenticatedWithSpotify: false,
      // menu: this.props.userId.menu
    }
    this.state.handleRedirect = this.handleRedirect.bind(this)
  }

  generateRandomString(length) {
    let text = ''
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }

  getHashParams() {
    const hashParams = {}
    const r = /([^&;=]+)=?([^&;]*)/g
    const q = window.location.hash.substring(1)
    let e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2])
      e = r.exec(q)
    }
    return hashParams
  }

  componentDidMount() {
    //if (this.props.isAuthenticated) {
    const params = this.getHashParams()

    const access_token = params.access_token
    const state = params.state
    const storedState = localStorage.getItem('stateKey')
    localStorage.setItem('spotifyAuthToken', access_token)
    localStorage.getItem('spotifyAuthToken')

    if (window.localStorage.getItem('authToken')) {
      this.setState({ isAuthenticatedWithSpotify: true })
    }
    if (access_token && (state == null || state !== storedState)) {
      alert('Click "ok" to finish authentication with Spotify')
    } else {
      localStorage.removeItem('stateKey')
    }
    console.log(access_token)
    // DO STUFF WITH ACCEES TOKEN HERE
    // this.props.onConnectWithSpotify(access_token);
  }

  handleRedirect(event) {
    event.preventDefault()
    console.log('You linked your Spotify account!', 'success')

    const params = this.getHashParams()
    const access_token = params.access_token
    console.log(access_token)

    const state = this.generateRandomString(16)
    localStorage.setItem('stateKey', state)

    // let url = 'https://accounts.spotify.com/authorize';
    // url += '?response_type=token';
    // url +=
    //   '&client_id=' + encodeURIComponent('f09fbf600009433dadce5836c57584c3');
    // url += '&scope=' + encodeURIComponent('user-top-read');
    // url += '&redirect_uri=' + encodeURIComponent('http://localhost:3000/abc');
    // url += '&state=' + encodeURIComponent(state);
    // url += '&show_dialog=true';
    let url =
      'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=3495cb3dc8b746ab9677dea9e9e58858' +
      '&scope=' +
      encodeURIComponent('user-read-private%20user-read-email') +
      '&redirect_uri=' +
      encodeURIComponent('http://localhost:3000/')
    window.location = url
  }

  render() {
    return (
      <div className='button_container'>
        <h1 className='title is-4'>
          <font color='#C86428'>Welcome</font>
        </h1>
        <div className='Line' />
        <br />
        <button
          className='sp_button'
          onClick={(event) => this.handleRedirect(event)}
        >
          <strong>LINK YOUR SPOTIFY ACCOUNT</strong>
        </button>
      </div>
    )
  }
}

export default SpotifyAuth
