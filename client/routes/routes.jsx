import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/navBar.jsx';
import App from '../components/app.jsx';
import HeroPage from '../components/heroPage.jsx';
import About from '../components/about.jsx';
import Contact from '../components/contact.jsx';
import WorkList from '../components/workList.jsx';

const Routes = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
          <Route exact path="/" component={HeroPage}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/work" component={WorkList}/>
      </Switch>
    </div>
  </Router>
);

export default Routes;
