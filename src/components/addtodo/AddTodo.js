import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import './addtodo.css';
import { todoAdd } from '../../states/slice/todoSlice';

function AddTodo() {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    const textChange = (e) => {
        setText(e.target.value)
    }

    const addHandler = () => {
        if (text.trim().length === 0) {
            setText('')
            alert('Invalid empty not allowed')
            return
        }
        dispatch(todoAdd(text.trim()))
        setText('')
        scrollToBottom()
    }

    return <div className='todoMainDiv'>
        <input
            className="inputBox"
            type="text"
            name="name"
            placeholder="Add todo..."
            onChange={textChange}
            value={text}
        />
        <input className="addButton"
            type="button"
            value="Add"
            onClick={addHandler} />
    </div>
}

export default AddTodo
