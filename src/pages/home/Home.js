import React from 'react';
import './home.css';
import AddTodo from '../../components/addtodo/AddTodo';
import TodoList from '../../components/todolist/TodoList';
import { FaAngleUp } from 'react-icons/fa';

export default function Home() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return <div className="home-container">
        <AddTodo />
        <br />
        <TodoList />
        <FaAngleUp id='scrollTopButton'
            onClick={scrollToTop} />
    </div>
}
