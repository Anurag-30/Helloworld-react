import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function App(props) {
  return (<div>
        <h1>React TODO</h1>
        <h2>Tasks</h2>
        <ToDoItems />
      </div>
  );
}
import React from "react";

function ToDoItem(props) {
    return <div>{props.title}</div>
}

const todoItems = ["Learn React", "Read Clean code", "Watch Movie"];

const getToDoList = () => todoItems.map(itemTitle => <ToDoItem title={itemTitle}/>);

export default getToDoList;