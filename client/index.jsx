import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/scss/styles.scss';
import Routes from './routes/routes.jsx';
import App from './components/app.jsx';

ReactDOM.render(<Routes />, document.querySelector('#root'));
