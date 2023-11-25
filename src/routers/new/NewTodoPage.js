import React from "react";
import { useTodos } from "../useTodos";
import { TodoForm } from "../../ui/TodoForm";
import './index.css'

function NewTodoPage() {
        const {stateUpdaters} = useTodos();
        const {addTodo} = stateUpdaters;

        return (
                <div className="div-newTodo-page">
                        <TodoForm
                        label="Escribe tu nuevo Todo"
                        submitText="Anadir"
                        submitEvent={(text) => addTodo(text)}
                        />
                </div>
        )
}

export {NewTodoPage}