import React, {useState} from 'react';
import './App.css';
import TodoList from '../TodoList/';

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Create a TODO app with React',
      isCompleted: true,
    },
    {
      content: 'Attatch some DB to it.',
      isCompleted: false,
    },
    {
      content: 'Add users!',
      isCompleted: false,
    }
  ]);
  return (
    <div className="App">
        <TodoList 
          title="Procrastination list" 
          description="Lists tasks I inted to postpone as much as I can." 
          todos={todos
        }/>
    </div>
  );
}

export default App;
