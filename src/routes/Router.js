import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Home from '../pages/home/Home';
import PageNotFound from '../pages/PageNotFound';

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/pageNotFound' element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
}


