import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS_V1') {
                console.log('Was there a change is TODOS_V1')
                setStorageChange(true);
            }
        });
        const toggleShow = () => {
            props.sincronizeTodos();
            setStorageChange(false)
        }

        return(
            <WrappedComponent
            show={storageChange}
            toggleShow={toggleShow}
            />
        )
    }
}

export {withStorageListener}