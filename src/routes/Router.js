import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Home from '../pages/home/Home';
import PageNotFound from '../pages/PageNotFound';
import CustomRouter from './CustomRouter';

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={
                <CustomRouter>
                    <Home />
                </CustomRouter>} />
            <Route path='/pageNotFound' element={<PageNotFound />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
}


