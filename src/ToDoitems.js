import react from 'react';
import ToDoitems from './ToDoitems';
import './APP.css';

function App(props) {
    return (<div>
          <h1>React TODO</h1>
          <h2>Tasks</h2>
          <ToDoItems />
        </div>
    );
  }