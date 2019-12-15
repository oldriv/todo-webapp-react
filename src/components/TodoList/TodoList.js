import React from 'react';
import './TodoList.css';
import Todo from '../Todo';
import TodoListHeader from './TodoListHeader';

const TodoList = (props) => {
    const {todos, name, description, toggleTodoAtIndex, handleKeyDownAtIndex, updateTodoAtIndex}  = props;
    return (
        <div className="todo-list">
            <TodoListHeader name={name} description={description} />
            <div>
                {todos.map((todo, i) => {
                    const {content, isCompleted} = todo;
                    return (
                        <Todo
                            key={i}
                            content = {content} 
                            isCompleted={isCompleted} 
                            toggleTodo={() => toggleTodoAtIndex(i)}
                            handleKeyDown={event => handleKeyDownAtIndex(event, i)}
                            handleChange={event => updateTodoAtIndex(event, i)}
                            />
                    );
                })}
            </div>
        </div>
    );
}

export default TodoList;