import React from 'react';
import './todo.css';
import TodoList from '../../components/todolist/TodoList';
import { FaAngleUp } from 'react-icons/fa';
import AddTodo from '../../components/addtodo/AddTodo';

export default function Todo() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="home">
      <AddTodo />
      <TodoList disableCheck={false} disableDeleteButton={false} trashed={false} />
      <FaAngleUp id='scrollTopButton'
        onClick={scrollToTop} />
    </div>
  )
}
