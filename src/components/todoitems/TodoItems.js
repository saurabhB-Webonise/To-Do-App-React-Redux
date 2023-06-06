import React from 'react'
import './todoitems.css'
import { FaTrash } from 'react-icons/fa';

function TodoItems({ onCheck, onClick, data }) {

    return <div className='todoitem' >
        <div className='div1'> 
            <input style={{ marginLeft: '15px', accentColor: 'orange' }}
                type='checkbox'
                value={data.completed}
                onChange={() => { onCheck(data.id) }} />
            <label style={{ marginLeft: '20px' }}>{data.text}</label>
        </div>
        <FaTrash id='deleteButton' onClick={() => { onClick(data.id) }} />
    </div>
}

export default TodoItems



