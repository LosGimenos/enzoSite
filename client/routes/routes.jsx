import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/navBar.jsx';
import App from '../components/app.jsx';
import HeroPage from '../components/heroPage.jsx';
import About from '../components/about.jsx';

const Routes = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
          <Route exact path="/" component={HeroPage}/>
          <Route path="/about" component={About}/>
      </Switch>
    </div>
  </Router>
);

export default Routes;
