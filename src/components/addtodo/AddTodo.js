import React, { useRef } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from '../../actions/todoActions'
import './addtodo.css'

export const AddTodo = () => {
    const dispatch = useDispatch()
    let inputRef = useRef('')

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight+1000,
            behavior: 'smooth',
        });
    };
    
    const addHandler = () => {
        let text = inputRef.current.value.toString().trim()
        if (text.length == 0) {
            alert('Invalid empty not allowed')
            return
        }
        dispatch(addTodo(text))
        scrollToBottom()
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
