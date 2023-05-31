import React, { useRef } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from '../../actions/todoActions'
import './addtodo.css'

export const AddTodo = () => {
    const dispatch = useDispatch()
    let inputRef = useRef('')

    const addHandler = () => {
        if (inputRef.current.value.toString() !== ' ' && inputRef.current.value.toString().length !== 0)
            dispatch(addTodo(inputRef.current.value.toString()))
        else
            alert('Wrong input')
    }

    return <div className='mainDiv'>
        <input
            className="inputBox"
            ref={inputRef}
            type="text"
            name="name"
            placeholder="Add todo..."
        />
        <input className="addButton"
            type="button"
            value="Add"
            onClick={() => {
                addHandler()
                inputRef.current.value = ''
            }} />
    </div>
}
