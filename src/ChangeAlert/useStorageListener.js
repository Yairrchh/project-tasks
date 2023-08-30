import React from "react";

function useStorageListener({sincronizeTodos}) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS_V1') {
                console.log('Was there a change is TODOS_V1')
                setStorageChange(true);
            }
        });
        const toggleShow = () => {
            sincronizeTodos();
            setStorageChange(false)
        }

        return{
            show: storageChange,
            toggleShow
        }
    }


export {useStorageListener}