import React from 'react';
import './TodoList.css';
import Todo from '../Todo';
import TodoListHeader from './TodoListHeader';

const TodoList = (props) => {
    const {todos, title, description} = props;
    return (
        <div className="todo-list">
            <TodoListHeader title={title} description={description} />
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