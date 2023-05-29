import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {EmpyTodos} from '../EmpyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm';
import React from 'react';

function AppUI() {
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)
    return (
        <>

        <TodoCounter/>

        <TodoSearch/>

        <TodoList>
        {loading && (
            <>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
            </>
        )}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <EmpyTodos/>}

        {searchedTodos.map(todo => (
        <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
    />
    ))}
        </TodoList>

        <CreateTodoButton/>

        {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}

        </>
    );
}

export {AppUI};