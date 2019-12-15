import React, {useState} from 'react';
import './App.css';
import TodoList from '../TodoList/';
import { loadList } from '../../services/todo-service'

const list = loadList();

function App() {
  const [todoList, setTodoList] = useState(list);

  const handleKeyDownAtIndex = (event, index) => {
    if (event.key === 'Enter') {
      createTodoAtIndex(index);
    }
    if (event.key === 'Backspace' && todoList.todos[index].content === '') {
      event.preventDefault();
      return removeTodoAtIndex(index);
    }
  }

  const createTodoAtIndex = (index) => {
    console.log("creating new todo at index " + index)
    const newTodoList = {...todoList};
    const blankTodo = { content: '', isCompleted:false };
    newTodoList.todos.splice(index + 1, 0, blankTodo);
    setTodoList(newTodoList);
  }

  const updateTodoAtIndex = (event, index) => {
    const newTodoList = {...todoList};
    newTodoList.todos[index].content = event.target.value;
    setTodoList(newTodoList);
  }

  const removeTodoAtIndex = (index) => {
    if (index === 0 && todoList.todos.length === 1) return;
    const newTodoList = {...todoList};
    newTodoList.todos.splice(index, 1);
    setTodoList(newTodoList);
    /*
    setTimeout(() => {
      document.forms[0].elements[index - 1].focus();
    }, 0);
    */
  }

  const toggleTodoAtIndex = (index) => {
    const newTodoList = {...todoList};
    newTodoList.todos[index].isCompleted = !newTodoList.todos[index].isCompleted;
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
        <TodoList 
          {...todoList} 
          createTodoAtIndex={createTodoAtIndex}
          updateTodoAtIndex={updateTodoAtIndex}
          removeTodoAtIndex={removeTodoAtIndex}
          toggleTodoAtIndex={toggleTodoAtIndex}
          handleKeyDownAtIndex = {handleKeyDownAtIndex}
        />
    </div>
  );
}

export default App;
