import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(

    <h1 className="text">  hello world!!</h1>,
  document.getElementById('root')
);


/* 
OR you can use the following syntax too.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  React.createElement(
      'h1',
      {},
      'Hello, world!'
  ),
  document.getElementById('root')
); */