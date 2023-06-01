import React from 'react'
import './todoitems.css'
import { FaTrash } from 'react-icons/fa';

export  const TodoItems = (props) => {

    const { onCheckChange, onClick, data } = props

    return <div className='todoitem' >
        <div>
            <input style={{ marginLeft: '15px',accentColor:'orange' }}
                type='checkbox'
                onChange={() => { onCheckChange(props) }} />
            <label style={{ marginLeft: '20px' }}>{data.text}</label>
        </div>
        <FaTrash style={{ marginRight: '5px', color: 'orange' }} onClick={() => { onClick(props) }} />
    </div>
}


