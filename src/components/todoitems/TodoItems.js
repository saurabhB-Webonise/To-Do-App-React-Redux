import React, { useRef, useEffect } from 'react';
import './todoitems.css';
import { FaTrash } from 'react-icons/fa';

function TodoItems({ onCheck, onClick, data }) {

    const labelRef = useRef()

    useEffect(() => {
        const label = labelRef.current
        label.className = data.completed ? "todoTextComplete" : "todoText"
    }, [data.completed])

    const checkHandler = () => {
        onCheck(data.id)
    }

    const clickHandler = () => {
        onClick(data.id)
    }

    return <div className='todoitem' >
        <div className='todoItemWrapper'>
            <input className='checkBox' type='checkbox' onChange={checkHandler} checked={data.completed} />
            <label ref={labelRef}className='todoText'>{data.text}</label>
        </div>
        <span className='deleteButton'> <FaTrash onClick={clickHandler} /></span>
    </div>
}

export default TodoItems
