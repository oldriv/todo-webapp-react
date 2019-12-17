import React from 'react';
import './TodoLists.css'

const TodoLists = (props) => {
    const { todoLists, currentSelection, onSelectionChange, createTodoList} = props;

    const onKeyDown = (event, index) => {
        if (event.key === 'Enter') {
            onSelectionChange(index);
        }
    }

    const onNewButtonKeyDown = (event) => {
        if (event.key === 'Enter') {
            createTodoList('','');
        }
    }
    return (
        <div className="todo-lists__container">
        <ul className="todo-lists__list">
          <li 
            tabIndex={1}
            className={`todo-lists__item todo-lists__item--new ${ todoLists.length % 2 === 1 && 'todo-lists__item--odd'}`}
            onClick={() => createTodoList()}
            onKeyDown={(e) => onNewButtonKeyDown(e)}
          >
            <span>+</span>
          </li>
        </ul>
        <ul className="todo-lists__list">
          {todoLists.map((list, i) => (
            <li 
              key={i}
              tabIndex={i+1}
              className={`todo-lists__item ${ i % 2 === 1 && 'todo-lists__item--odd'}  ${ i === currentSelection && 'todo-lists__item--selected'}`}
              onKeyDown={(e) => onKeyDown(e, i)}
              onClick={() => onSelectionChange(i)}
            >
              <h2>{list.name}</h2>
              <p>{list.description}</p>
            </li>
          ))}
        </ul>
        </div>
      );
}

export default TodoLists;