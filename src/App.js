import React from 'react';
import './App.css';
import Todo from './pages/todo/Todo';
import Trash from './pages/trash/Trash';
import Header from './components/header/header';
import SideBar from './components/sidebar/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return <Router>
    <Header />
    <div className="App">
      <SideBar />
      <Routes>
        <Route exact path="/" element={<Todo />} />
        <Route exact path="/todo" element={<Todo />} />
        <Route exact path="/trash" element={<Trash />} />
      </Routes>
    </div>
  </Router>
}

export default App;
