import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/Login';
import Home from '../pages/home/Home';

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={Login} />
            <Route path='/home' element={Home} />
        </Routes>
    </BrowserRouter>

}
