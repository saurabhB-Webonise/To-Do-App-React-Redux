import React from 'react';
import './todo.css';
import TodoList from '../../components/todolist/TodoList'

import SideBar from '../../components/sidebar/SideBar'
import { FaAngleUp } from 'react-icons/fa';

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="home">

      <TodoList />
      {/* <FaAngleUp id='scrollTopButton'
        onClick={scrollToTop} /> */}
    </div>
  )
}
