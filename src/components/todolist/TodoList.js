import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItems from '../todoitems/TodoItems';
import { toggleMoveToTrash, toggleCompleteStatus } from '../../states/slice/todoSlice';
import './todolist.css';

function TodoList() {

    const todoData = useSelector(state => state.todoData.data);
    let dispatch = useDispatch();

    const checkHandler = (id) => {
        dispatch(toggleCompleteStatus(id));
    };

    const trashhandler = (id) => {
        dispatch(toggleMoveToTrash(id));
    };

    return (
        <div className='mainContainer'>
            {
                Array.isArray(todoData) &&
                todoData.map(data => (
                    !data.trashed &&
                    <TodoItems key={data.id}
                        data={data}
                        onCheck={checkHandler}
                        onClick={trashhandler}
                    />)
                )
            }
        </div>
    );
}

export default TodoList;
