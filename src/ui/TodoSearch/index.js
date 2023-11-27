import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './TodoSearch.css'

function TodoSearch({searchValue,setSearchValue}) {

    const [searchParams, setSearchParams] = useSearchParams()
    const paramsValue = searchParams.get('search')

    const onSearchValueChange = ({ target: { value } }) => {
        setSearchValue(value)
        setSearchParams({ search: value })
    }

    return(
        <input placeholder="Buscar tarea"
        className='TodoSearch'
        value={paramsValue ?? ''}
        onChange={onSearchValueChange}
        />
    )
}

export {TodoSearch}