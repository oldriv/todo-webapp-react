import React, {useState} from 'react';
import './App.css';
import TodoList from '../TodoList/';
import { loadList } from '../../services/todo-service'


function App() {
  const [todoList, setTodoList] = useState(loadList());

  return (
    <div className="App">
        <TodoList {...todoList} />
    </div>
  );
}

export default App;
