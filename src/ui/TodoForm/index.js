import React from "react";
import './TodoForm.css'
import { useNavigate } from "react-router-dom";

function TodoForm(props) {
    const navigate = useNavigate();

    const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue)
    navigate('/')
};


    const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '');

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea
            placeholder="escribe un todo"
            value={newTodoValue}
            onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={() => navigate('/')}
                >Cancelar
                </button>
                <button
                type="sudmit"
                className="TodoForm-button TodoForm-button--add"
                >{props.submitText}
                </button>

            </div>
        </form>
    )
}

export {TodoForm}