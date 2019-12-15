import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const {content, isCompleted} = props;
    return (
        <div className={`todo ${isCompleted && 'todo-is-completed'}`}>
            <div className="checkbox" />
            <input type="text" value={content}/>
        </div>
    )
}

export default Todo;