import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import OffersPage from './pages/OffersPage'
import SignupPage from './pages/SignupPage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/signup' exact component={SignupPage} />
        <Route path='/offers' exact component={OffersPage} />
      </Switch>
    </Router>
  )
}

export default Routes
