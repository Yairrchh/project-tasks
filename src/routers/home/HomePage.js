import React from 'react';
import { useTodos } from '../useTodos';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoList } from '../../ui/TodoList';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import {TodosLoading} from '../../ui/TodosLoading';
import {TodosError} from '../../ui/TodosError';
import {EmpyTodos} from '../../ui/EmpyTodos';
import { Modal } from '../../ui/Modal';
import {TodoForm} from '../../ui/TodoForm';
import { ChangeAlert } from '../../ui/ChangeAlert';

function HomePage() {

const {state, stateUpdaters } = useTodos();

const {
totalTodos,
error,
openModal,
loading,
searchValue,
searchedTodos,
completedTodos,
} = state;

const {
addTodo,
setOpenModal,
completeTodo,
deleteTodo,
setSearchValue,
sincronizeTodos
} = stateUpdaters;

return (
<>

<TodoHeader>
    <TodoCounter
    completedTodos={completedTodos}
    totalTodos={totalTodos}/>

    <TodoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}/>
</TodoHeader>

<TodoList
totalTodos={totalTodos}
error={error}
loading={loading}
searchedTodos={searchedTodos}
searchText={searchValue}

onError={() => <TodosError/>}
onLoading={() => <TodosLoading/>}
onEmpyTodos={() => <EmpyTodos/>}
onEmpySearchResults={(searchText)=> <p>No results for {searchText}</p>}
>
{todo =>(
    <TodoItem
    key={todo.text}
    text={todo.text}
    completed={todo.completed}
    onComplete={() => completeTodo(todo.text)}
    onDelete={() => deleteTodo(todo.text)}
    onEdit={() => console.log('start edit')}
/>
)}

</TodoList>

<CreateTodoButton
openModal={openModal}
setOpenModal={setOpenModal}/>

{openModal && (
    <Modal>
        <TodoForm
        addTodo={addTodo}
        setOpenModal={setOpenModal}/>
    </Modal>
)}

<ChangeAlert sincronizeTodos={sincronizeTodos}/>
</>
);

}


export {HomePage};
