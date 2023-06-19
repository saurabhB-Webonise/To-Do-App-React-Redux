import React, { useState } from "react";
import { useDispatch, } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './addtodo.css';
import { todoAdd } from '../../states/slice/todoSlice';
import { logout } from "../../states/slice/authSlice";

function AddTodo() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    const textChange = (e) => {
        setText(e.target.value);
    };

    const addHandler = () => {
        if (text.trim().length === 0) {
            setText('');
            alert('Invalid empty not allowed');
            return;
        }
        dispatch(todoAdd(text.trim()));
        setText('');
        scrollToBottom();
    };

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/', { replace: true });
    };

    return <div className='mainDiv'>
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
        <input className="addButton"
            type="button"
            value="Logout"
            onClick={logoutHandler} />
    </div>
}

export default AddTodo;

