import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBar from './navBar.jsx';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div id="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
