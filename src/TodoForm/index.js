import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
};

    const onCancel = () => {
        setOpenModal(false)
    };

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea
            placeholder="Hacer la tarea"
            value={newTodoValue}
            onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={onCancel}
                >Cancelar
                </button>
                <button
                type="sudmit"
                className="TodoForm-button TodoForm-button--add"
                >Añadir
                </button>

            </div>
        </form>
    )
}

export {TodoForm}