import './App.css';
import TodoList from './components/todolist/TodoList'
import AddTodo from './components/addtodo/AddTodo'
import { FaAngleUp } from 'react-icons/fa';

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return <div className="App">
    <AddTodo />
    <br />
    <TodoList />
    <FaAngleUp id='scrollTopButton'
      onClick={scrollToTop} />
  </div>
}

export default App;

