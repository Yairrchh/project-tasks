import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const {item: todos,
        saveItem: saveTodos,
        loading,
        error,
        sincronizeItem: sincronizeTodos,
    } = useLocalStorage('TODOS_V2', []);
    const [searchValue, setSearchValue] = React.useState('');

    console.log(todos)
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
    (todo) => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText);
    }
);

    const addTodo = (text) => {
        const id = newTodoId(todos);
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
            id,
        })
        saveTodos(newTodos)
    }

    const getTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        return todos[todoIndex];
    }

    const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(
        (todo) => todo.id === id
    )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    };

    const editTodo = (id, newText) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex(
            (todo) => todo.id === id
        )
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
        }

    const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
        (todo) => todo.id === id
    )
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    }
    const state = {
        totalTodos,
        error,
        loading,
        searchValue,
        searchedTodos,
        completedTodos,
        getTodo,
    };

    const stateUpdaters = {
        addTodo,
        completeTodo,
        deleteTodo,
        setSearchValue,
        sincronizeTodos,
        editTodo
    };


    return {
        state,
        stateUpdaters
    }
}


const newTodoId = (todosList) => {

    if(!todosList.length) {
        return 1;
    }

    const idList = todosList.map(todo => todo.id)
    const idMax = Math.max(...idList)
    return ( idMax + 1)
}

export {useTodos}