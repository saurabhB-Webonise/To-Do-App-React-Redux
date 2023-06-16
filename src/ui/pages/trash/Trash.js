import React from 'react';
import './trash.css';
import { FaAngleUp } from 'react-icons/fa';
import TodoList from '../../components/todolist/TodoList';

export default function Trash() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='trashMainDiv'>
      <TodoList disableCheck={true} disableDeleteButton={true} trashed={true}/>
      <FaAngleUp id='scrollTopButton'
        onClick={scrollToTop} />
    </div>
  )
}


