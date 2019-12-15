import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const {content, isCompleted, toggleTodo, handleKeyDown, handleChange } = props;
    return (
        <div className={`todo ${isCompleted && 'todo-is-completed'}`}>
            <div className="checkbox" onClick={toggleTodo}/>
            <input 
                type="text" 
                value={content}
                onKeyDown={event => handleKeyDown(event)}
                onChange={event => handleChange(event)}
            />
        </div>
    )
}

export default Todo;