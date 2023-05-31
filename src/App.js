import './App.css';
import { TodoList } from './components/todolist/TodoList'
import { AddTodo } from './components/addtodo/AddTodo'

function App() {
  return <div className="App">
    <AddTodo />
    <br />
    <TodoList />
  </div>
}

export default App;
