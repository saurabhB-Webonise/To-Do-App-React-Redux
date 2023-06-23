import React from 'react';
import './todoitems.css';
import { FaTrash } from 'react-icons/fa';

function TodoItems({ onCheck, onClick, data }) {

    const labelCss = data.completed ? "todoTextComplete" : "todoText"

    const checkHandler = () => {
        onCheck(data.id);
    };

    const clickHandler = () => {
        onClick(data.id);
    };

    return <div className='todoitem' >
        <div className='todoItemWrapper'>
            <input className='checkBox' type='checkbox' onChange={checkHandler} checked={data.completed} />
            <label className={labelCss}>{data.todo}</label>
        </div>
        <span className='deleteButton'><FaTrash onClick={clickHandler} /></span>
    </div>
}

export default TodoItems;
