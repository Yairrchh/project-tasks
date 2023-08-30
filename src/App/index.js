import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {EmpyTodos} from '../EmpyTodos';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm';
import { ChangeAlert } from '../ChangeAlert';

function App() {

  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
    addTodo,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    sincronizeTodos
} = useTodos()

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
    /* render={todo =>(
      <TodoItem
      key={todo.text}
      text={todo.text}
      completed={todo.completed}
      onComplete={() => completeTodo(todo.text)}
      onDelete={() => deleteTodo(todo.text)}
    />
    )} */
>
    {todo =>(
      <TodoItem
      key={todo.text}
      text={todo.text}
      completed={todo.completed}
      onComplete={() => completeTodo(todo.text)}
      onDelete={() => deleteTodo(todo.text)}
    />
    )}

</TodoList>

  {/* <TodoList>
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
  </TodoList> */}

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


export default App;


