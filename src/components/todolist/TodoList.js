import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completionStatus, toggleMoveToTrash } from '../../actions/todoActions';
import TodoItems from '../todoitems/TodoItems';
import './todolist.css'

function TodoList() {
    const todoData = useSelector(state => state)
    let dispatch = useDispatch()

    const checkHandler = (id) => {
        dispatch(completionStatus(id))
    }

    const trashhandler = (id) => {
        dispatch(toggleMoveToTrash(id))
    }

    return (
        <div className='mainContainer'>
            {
                (todoData !== undefined)
                    ? todoData.map(data => (
                        (!data.trashed) ? <TodoItems key={data.id}
                            data={data}
                            onCheck={checkHandler}
                            onClick={trashhandler}
                        /> : <></>
                    )
                    ) : <></>
            }
        </div>
    );
}

export default TodoList


