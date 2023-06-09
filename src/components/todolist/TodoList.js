import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItems from '../todoitems/TodoItems';
import { toggleMoveToTrash, toggleCompleteStatus } from '../../states/slice/todoSlice'
import './todolist.css'


function TodoList() {
    const todoDatas = useSelector(state => state.todoData.data)
    let dispatch = useDispatch()

    const checkHandler = (id) => {
        console.log(id)
        
        dispatch(toggleCompleteStatus(id))
    }

    const trashhandler = (id) => {
        dispatch(toggleMoveToTrash(id))
    }

    return (
        <div className='mainContainer'>
            {
                (todoDatas !== undefined)
                    ? todoDatas.map(data => (
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


