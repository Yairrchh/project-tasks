import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

function ChangeAlert({sincronizeTodos}) {

    const {show , toggleShow} = useStorageListener(sincronizeTodos)

    if(show){
        return (
            <div className="div-changeAlert">
                <div className="changeAlert-container">
                    <p>It looks like you changed your tasks in another browser tab or window.</p>
                    <p>You want to sync your tasks?</p>
                    <button
                    className="TodoForm-buttonReload"
                    onClick={() => toggleShow()}
                    >Reload the page</button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export {ChangeAlert};