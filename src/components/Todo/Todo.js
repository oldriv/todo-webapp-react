import React from 'react';
import './Todo.css'
import TextInput from '../TextInput/TextInput';

const Todo = (props) => {
    const {
        content, 
        isCompleted, 
        toggle, 
        update,
        ...other
    } = props;
    return (
        <div className={`todo__container ${isCompleted && 'todo__container--completed'}`}>
            <div className="todo__checkbox" onClick={toggle}/>
            <TextInput 
                type="text" 
                value={content}
                onChange={event => update(event)}
                autoFocus={false}
                {...other}
            />
        </div>
    )
}

export default Todo;