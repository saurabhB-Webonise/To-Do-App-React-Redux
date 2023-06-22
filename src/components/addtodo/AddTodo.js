import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './addtodo.css';
import { clearAllTodoData, todoAdd } from '../../states/slice/todoSlice';
import {clearAuthData } from "../../states/slice/authSlice";
import { addNewTodo} from "../../network/api-crud";


function AddTodo() {
    const [text, setText] = useState("");
    const { data } = useSelector((state) => state.api);
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
        addNewTodo({ userId: data.id, todo: text }, (data) => {
            dispatch(todoAdd(data));
            scrollToBottom();
            setText('');
        })
    };

    const logoutHandler = () => {
        dispatch(clearAuthData());
        dispatch(clearAllTodoData())
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
        <div className="dropdown">
            <img alt="" className="avatar" src={data.image} />
            <div className="dropdown-content">
                <span>{data.username}</span>
                <div className="divider"></div>
                <span onClick={logoutHandler}>Logout</span>
            </div>
        </div>
    </div>
}

export default AddTodo;

