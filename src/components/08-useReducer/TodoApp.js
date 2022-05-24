import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
const initialState = [
    {

    }
];
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);


    // console.log(description);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo,
        });
    }

    const handleDelete = (todoId) => {
        console.log(todoId);
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleSubmit = (e) => {
       
    }
    return (
        <div>
            <h1> TODO REDUCER {todos.length}</h1>
            <br />


            <div className='row'>
                <div className='col-7'>
                    {/* {todoListItem, todos, indedx handleDelet, handleToggle} */}
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle} />
                </div>
                <div className='col-5'>
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    )
}
