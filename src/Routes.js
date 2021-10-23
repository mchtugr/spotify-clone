import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import OffersPage from './pages/OffersPage'
import SignupPage from './pages/SignupPage'
import DemoPage from './pages/DemoPage'
import SearchPage from './pages/SearchPage'
import LibraryPage from './pages/LibraryPage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/demo' exact component={DemoPage} />
        <Route path='/' exact component={Homepage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/signup' exact component={SignupPage} />
        <Route path='/offers' exact component={OffersPage} />
        <Route path='/search' exact component={SearchPage} />
        <Route path='/library' exact component={LibraryPage} />
      </Switch>
    </Router>
  )
}

export default Routes
