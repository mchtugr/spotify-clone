import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import OffersPage from './pages/OffersPage'
import SignupPage from './pages/SignupPage'
import DemoPage from './pages/DemoPage'
import SearchPage from './pages/SearchPage'
import AuthPage from './pages/AuthPage'
import PlaylistDetailPage from './pages/PlaylistDetailPage'
import CollectionPage from './pages/CollectionPage'

const Routes = () => {
  console.log(process.env.PUBLIC_URL)
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          path={process.env.PUBLIC_URL + '/demo'}
          exact
          component={DemoPage}
        />
        <Route
          path={process.env.PUBLIC_URL + '/auth'}
          exact
          component={AuthPage}
        />
        <Route path={process.env.PUBLIC_URL + '/'} exact component={Homepage} />
        <Route
          path={process.env.PUBLIC_URL + '/login'}
          exact
          component={LoginPage}
        />
        <Route
          path={process.env.PUBLIC_URL + '/signup'}
          exact
          component={SignupPage}
        />
        <Route
          path={process.env.PUBLIC_URL + '/offers'}
          exact
          component={OffersPage}
        />
        <Route
          path={process.env.PUBLIC_URL + '/search'}
          exact
          component={SearchPage}
        />
        <Route
          path={process.env.PUBLIC_URL + '/collection/:type'}
          exact
          component={CollectionPage}
        />
        <Route
          path={process.env.PUBLIC_URL + '/playlist/:playlistId'}
          exact
          component={PlaylistDetailPage}
        />
      </Switch>
    </Router>
  )
}

export default Routes
