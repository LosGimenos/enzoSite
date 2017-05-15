import React from 'react';
import ReactDOM from 'react-dom';
import css from '../dist/stylesheets/main.css';
import Routes from './routes/routes.jsx';
import App from './components/app.jsx';

ReactDOM.render(<Routes />, document.querySelector('#root'));
