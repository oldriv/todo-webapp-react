import React from 'react';
import './TodoListHeader.css';

function TodoListHeader({name, description}) {
    return (
        <header>
            <h1>{name}</h1>
            <p>{description}</p>
        </header>
    );
}

export default TodoListHeader;