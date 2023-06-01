import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import TodoItems from '../todoitems/TodoItems';
import './todolist.css'

export const TodoList = () => {
    const todoData = useSelector(state => state)
    let refs = useRef()

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        scrollToBottom()
    }, [todoData])

    return (
        <div ref={refs} className='mainContainer'>
            {
                (todoData !== undefined)
                    ? todoData.map(data => (
                        (!data.trashed) ? <TodoItems key={data.id} data={data} /> : <></>
                    )
                    ) : <></>
            }
        </div>
    );
}

