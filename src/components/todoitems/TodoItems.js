import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { completionStatus, moveToTrash } from '../../actions/todoActions'
import './todoitems.css'
import { FaTrash } from 'react-icons/fa';

const TodoItems = (props) => {

    const dispatch = useDispatch(completionStatus())

    const checkHandler = () => {
        dispatch(completionStatus(props.data.id))
    }

    const trashhandler = () => {
        dispatch(moveToTrash(props.data.id))
    }

    return <div className='todoitem' >
        <div>
            <input style={{ marginLeft: '15px', color: 'orange' }}
                type='checkbox'
                onChange={checkHandler} />
            <label style={{ marginLeft: '20px' }}>{props.data.text}</label>
        </div>
        <FaTrash style={{ marginRight: '5px', color: 'orange' }} onClick={trashhandler} />
    </div>
}

export default memo(TodoItems)
