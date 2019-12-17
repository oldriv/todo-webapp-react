import React from 'react';
import './TodoList.css';
import Todo from '../Todo';
import TextInput from '../TextInput/TextInput';
import { StringUtil } from '../../util';

const TodoList = (props) => {
    const {
        todoList,
        updateTodoList
    } = props;
    
    const [newTodoText, setNewTodoText] = React.useState('')

    const onKeyDown = (event) => {
        if (event.key === 'Enter' && StringUtil.isNotBlank(newTodoText)) {
          createTodo(newTodoText);
          setNewTodoText('');
        }
    }

    const onTodoKeyDown = (event, index) => {
        if (event.key === 'Backspace' && StringUtil.isBlank(todoList.todos[index].content)) {
            removeTodoAtIndex(index);
        }
    }

    const createTodo = (text) => {
        const newTodoList = {...todoList};
        const todo =  { content: text, isCompleted:false };
        newTodoList.todos.splice(0, 0, todo);
        updateTodoList(newTodoList);
      }

    const updateTodoAtIndex = (event, index) => {
        const newTodoList = {...todoList};
        newTodoList.todos[index].content = event.target.value;
        updateTodoList(newTodoList);
      }
    
      const removeTodoAtIndex = (index) => {
        if (index === 0 && todoList.todos.length === 1) return;
        const newTodoList = {...todoList};
        newTodoList.todos.splice(index, 1);
        updateTodoList(newTodoList);
      }
    
    const toggleTodoAtIndex = (index) => {
        const newTodoList = {...todoList};
        newTodoList.todos[index].isCompleted = !newTodoList.todos[index].isCompleted;
        updateTodoList(newTodoList);
    }

    const updateTodoNameAndDescription = (name, description) => {
        const newTodoList = {...todoList};
        newTodoList.name = name;
        newTodoList.description = description;
        updateTodoList(newTodoList);
    }

    const toggleEditing = () => {

    }

    const HeaderEditor = (props) => {
        const {
            name,
            description,
            update, 
        } = props;

        const [newName, setNewName] = React.useState(name)
        const [newDescription, setNewDescription] = React.useState(description)

        const onKeyDown = (event) => {
            if(event.key === 'Enter') {
                update(newName, newDescription);
            }
        }

        return (
            <>
            <TextInput
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={e => onKeyDown(e)}
                labelText="Choose a title:"
           />
           <br/>
           <TextInput 
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                onKeyDown={e => onKeyDown(e)}
                labelText="Add a description:"
           />
           </>
        )
    }

    const Header = ({name, description}) => {
        return (
            <>
            <h1>{name}</h1>
            <p>{description}</p>
           </>
        )
    }

    return (
        <div className="todo-list__container">
            <header className="todo-list__header">
                {false && <Header {...todoList} />}
                {true && <HeaderEditor {...todoList} update={updateTodoNameAndDescription} />}
            </header>   
            <div  className='todo-list__text-input'>
                <TextInput 
                    autoFocus
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    onKeyDown={onKeyDown}
                    labelText="What would you like TODO?"
                />
            </div>
            <div className="todo-list__todos">
                {todoList.todos && todoList.todos.map((todo, index) => {
                    const {content, isCompleted} = todo;
                    return (
                        <Todo
                            key={index}
                            content = {content} 
                            isCompleted={isCompleted} 
                            toggle={() => toggleTodoAtIndex(index)}
                            update={(event) => updateTodoAtIndex(event, index)}
                            onKeyDown={(event) => onTodoKeyDown(event, index)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default TodoList;