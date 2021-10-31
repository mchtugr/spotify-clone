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
        <Route path='/demo' exact component={DemoPage} />
        <Route path='/auth' exact component={AuthPage} />
        <Route path='/' exact component={Homepage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/signup' exact component={SignupPage} />
        <Route path='/offers' exact component={OffersPage} />
        <Route path='/search' exact component={SearchPage} />
        <Route path='/collection/:type' exact component={CollectionPage} />
        <Route
          path='/playlist/:playlistId'
          exact
          component={PlaylistDetailPage}
        />
      </Switch>
    </Router>
  )
}

export default Routes
