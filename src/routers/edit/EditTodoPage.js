import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";


function EditTodoPage() {
        const location = useLocation();
        const params = useParams();
        const id = Number(params.id)

        const {state, stateUpdaters} = useTodos();
        const {loading, getTodo} = state;
        const {editTodo} = stateUpdaters;

        let todoText;

        if(location.state?.todo) {
                todoText = location.state.todo.text;
        } else if (loading) {
                return <p>Loading</p>
        } else {
                const todo = getTodo(id);
                todoText = todo.text;
        }

        return (
                <div className="div-newTodo-page">
                        <TodoForm
                        label="Edita tu todo"
                        defaultTodoText={todoText}
                        submitText="Editar"
                        submitEvent={(newText) => editTodo( id, newText)}
                        />
                </div>
        )
}

export {EditTodoPage}