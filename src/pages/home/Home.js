import React, { useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import AddTodo from '../../components/addtodo/AddTodo';
import TodoList from '../../components/todolist/TodoList';
import './home.css';

import { useDispatch, useSelector } from 'react-redux';
import { userTodoData } from '../../network/api-crud';

export default function Home(props) {
  const { data } = useSelector((state) => state.api);
  const todoData = useSelector(state => state.todoData.data);
  const dispatch = useDispatch()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (todoData.length === 0) {
      dispatch(userTodoData(data.id))
    }
  }, [data])

  return <div className="home-container">
    <AddTodo />
    <br />
    <TodoList todoData={todoData} />
    <FaAngleUp id='scrollTopButton' onClick={scrollToTop} />
  </div>
}
