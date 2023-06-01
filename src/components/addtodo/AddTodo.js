import React, { useRef } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from '../../actions/todoActions'
import './addtodo.css'
import { containsWhitespace } from '../../utils/utils'

export const AddTodo = () => {
    const dispatch = useDispatch()
    let inputRef = useRef('')

    const addHandler = () => {
        let text = inputRef.current.value.toString()
        if (containsWhitespace(text) && text.length !== 0)
            dispatch(addTodo(text))
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
