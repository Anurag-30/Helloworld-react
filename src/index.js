import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  React.createElement(
      'h1',
      {},
      className="text",
      'Hello, world 2!'
  ),
  document.getElementById('root')
);