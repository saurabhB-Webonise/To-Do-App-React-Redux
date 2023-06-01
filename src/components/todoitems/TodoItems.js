import React from 'react'
import './todoitems.css'
import { FaTrash } from 'react-icons/fa';

function TodoItems({ onCheck, onClick, data }) {

    return <div className='todoitem' >
        <div>
            <input style={{ marginLeft: '15px', accentColor: 'orange' }}
                type='checkbox'
                onChange={() => { onCheck(data.id) }} />
            <label style={{ marginLeft: '20px' }}>{data.text}</label>
        </div>
        <FaTrash style={{ marginRight: '5px', color: 'orange' }} onClick={() => { onClick(data.id) }} />
    </div>
}

export default TodoItems

