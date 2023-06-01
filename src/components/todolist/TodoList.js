import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completionStatus, moveToTrash } from '../../actions/todoActions';
import { TodoItems } from '../todoitems/TodoItems';
import './todolist.css'

export const TodoList = () => {
    const todoData = useSelector(state => state)
    let dispatch = useDispatch()

    const checkHandler = (p) => {
        dispatch(completionStatus(p.data.id))
    }

    const trashhandler = (p) => {
        dispatch(moveToTrash(p.data.id))
    }

    return (
        <div className='mainContainer'>
            {
                (todoData !== undefined)
                    ? todoData.map(data => (
                        (!data.trashed) ? <TodoItems key={data.id}
                            data={data}
                            onCheckChange={(p) => { checkHandler(p) }}
                            onClick={(p) => { trashhandler(p) }}
                        /> : <></>
                    )
                    ) : <></>
            }
        </div>
    );
}

