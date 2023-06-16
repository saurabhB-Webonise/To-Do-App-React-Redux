import React, { useState } from 'react';
import './App.css';
import Todo from './ui/pages/todo/Todo';
import Trash from './ui/pages/trash/Trash';
import Header from './ui/components/header/header';
import SideBar from './ui/components/sidebar/SideBar';
import Archive from './ui/pages/archivee/Archive';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  const [openSideBar, setOpenSideBar] = useState(false)

  console.log('here')
  return <Router>
    <Header onClick={() => {
        setOpenSideBar(!openSideBar)
    }} />
    <div className="App">
      <SideBar openSideBars={openSideBar} />
      <Routes>
        <Route exact path="/" element={<Todo />} />
        <Route exact path="/todo" element={<Todo />} />
        <Route exact path="/trash" element={<Trash />} />
        <Route exact path="/archive" element={<Archive />} />
      </Routes>
    </div>
  </Router>
}

export default App;
