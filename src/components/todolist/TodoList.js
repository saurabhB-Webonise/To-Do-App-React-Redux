import React from 'react';
import { useDispatch } from 'react-redux';
import TodoItems from '../todoitems/TodoItems';
import { toggleCompleteStatus, permanentDelete } from '../../states/slice/todoSlice';
import './todolist.css';

function TodoList(props) {

    let dispatch = useDispatch();

    const checkHandler = (id) => {
        dispatch(toggleCompleteStatus(id));
    };

    const trashhandler = (id) => {
        dispatch(permanentDelete(id));
    };

    return (
        <div className='mainContainer'>
            {
                Array.isArray(props.todoData) &&
                props.todoData.map(data => (
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
