import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaAngleUp } from 'react-icons/fa';
import AddTodo from '../../components/addtodo/AddTodo';
import TodoList from '../../components/todolist/TodoList';
import './home.css';

export default function Home() {
  const { data, loading, error } = useSelector((state) => state.api);
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (Array.isArray(data)) {
      navigate('/pageNotFound', { replace: true })
    }
  }, [data])

  if (Array.isArray(data)){
    return <></>
  }

  return <div className="home-container">
    <AddTodo />
    <br />
    <TodoList />
    <FaAngleUp id='scrollTopButton'
      onClick={scrollToTop} />
  </div>
}
