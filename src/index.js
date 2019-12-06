import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <h1 className="text">  To Do list</h1>,
  <button type="button" onclick="alert('Hello world!')">Click Me!</button>,
  <div>
    <p>TASKS</p>

  </div>,
  document.getElementById('root')
 
);