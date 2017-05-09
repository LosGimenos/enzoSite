import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/navBar.jsx';
import App from '../components/app.jsx';
import HeroPage from '../components/heroPage.jsx';

const Routes = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
          <Route exact path="/" component={HeroPage}/>
      </Switch>
    </div>
  </Router>
);

export default Routes;
