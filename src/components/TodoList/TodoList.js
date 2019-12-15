import React from 'react';
import './TodoList.css';
import Todo from '../Todo';
import TodoListHeader from './TodoListHeader';

const TodoList = (props) => {
    const {todos, name, description} = props;
    return (
        <div className="todo-list">
            <TodoListHeader name={name} description={description} />
            <div>
                {todos.map((todo, i) => {
                    const {content, isCompleted} = todo;
                    return (<Todo content = {content} isCompleted={isCompleted} />);
                })}
            </div>
        </div>
    );
}

export default TodoList;