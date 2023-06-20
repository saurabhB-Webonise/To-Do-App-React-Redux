import React, { useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import AddTodo from '../../components/addtodo/AddTodo';
import TodoList from '../../components/todolist/TodoList';
import './home.css';

import { useDispatch, useSelector } from 'react-redux';
import { userTodoData } from '../../operations/Operations';

export default function Home(props) {
  const { data, loading, error } = useSelector((state) => state.api);
  const dispatch = useDispatch()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    dispatch(userTodoData(data.id))
  }, [data])

  return <div className="home-container">
    <AddTodo />
    <br />
    <TodoList />
    <FaAngleUp id='scrollTopButton'
      onClick={scrollToTop} />
  </div>
}
