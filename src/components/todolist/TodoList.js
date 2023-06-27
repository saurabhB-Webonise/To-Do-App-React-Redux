import React from 'react';
import { useDispatch } from 'react-redux';
import TodoItems from '../todoitems/TodoItems';
import { toggleCompleteStatus, permanentDelete } from '../../states/slice/todoSlice';
import './todolist.css';
import { deleteTodo, updateTodo } from '../../network/api-crud';

function TodoList(props) {

    let dispatch = useDispatch();

    const checkHandler = ({ id, completed }) => {
        if (typeof id === 'number') {
            updateTodo(id, { completed: !completed }).then((res) => {
                dispatch(toggleCompleteStatus(id));
            }).catch((error) => { })
        } else {
            dispatch(toggleCompleteStatus(id));
        }
    };

    const trashhandler = (id) => {
        if (typeof id === 'number') {
            deleteTodo(id).then((res) => {
                dispatch(permanentDelete(id));
            }).catch((error) => { })
        } else {
            dispatch(permanentDelete(id));
        }
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
