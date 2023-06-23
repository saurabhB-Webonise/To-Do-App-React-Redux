import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Home from '../pages/home/Home';
import PageNotFound from '../pages/PageNotFound';
import PrivateRoute from './PrivateRoute';

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>} />
            <Route path='/404' element={<PageNotFound />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
}
