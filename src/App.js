import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login';
import Home from './pages/home/Home';


function App() {
  return <BrowserRouter>
  <Routes>
      <Route path='/' exact element={Login} />
      <Route path='/home' element={Home} />
  </Routes>
</BrowserRouter>
}

export default App;
