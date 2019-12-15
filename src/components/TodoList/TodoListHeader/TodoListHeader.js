import React from 'react';
import './TodoListHeader.css';

function TodoListHeader({title, description}) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    );
}

export default TodoListHeader;