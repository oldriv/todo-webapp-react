import React from 'react';
import './App.css';
import TodoList from '../TodoList/';
import { loadList } from '../../services/todo-service'
import TodoLists from '../TodoLists/TodoLists';

function App() {
  const [todoLists, setTodoLists] = React.useState(loadList());
  const [selectedTodoListIndex, setSelectedTodoListIndex] = React.useState(0);
  const [selectedList, setSelectedList] = React.useState(todoLists[selectedTodoListIndex]);

  const createTodoList = (name, description) =>{
    const newTodoLists = [{name:name, description:description, todos:[]}, ...todoLists]
    setTodoLists(newTodoLists)
    selectTodoList(0);
  }

  const selectTodoList = (index) => {
    setSelectedTodoListIndex(index);
    setSelectedList(todoLists[index]);
  }

  const updateCurrentTodoList = (updatedTodoList) => {
   
    const updatedTodos = todoLists.map((list, i) => {
      if(i === selectedTodoListIndex) {
        return updatedTodoList;
      }
      return list;
    });
    setTodoLists(updatedTodos)
    setSelectedList(updatedTodoList);
  } 

  return (
    <div className="app__container">
      <div className="app__header">
        <h1>Todo, todo, todo-todo-todo-todo todooooooooo</h1>
      </div>
      <TodoLists 
        todoLists = {todoLists}
        currentSelection={selectedTodoListIndex}
        onSelectionChange={selectTodoList}
        createTodoList={createTodoList}
      />
      <TodoList todoList={selectedList} updateTodoList={updateCurrentTodoList} />
    </div>
  );
}

export default App;
