import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';

export default function AuthWrapper({children}) {
    const { data, loading, error } = useSelector((state) => state.api);
    const navigate = useNavigate();

    const temp = () => {
        if (!Array.isArray(data)) {
            if (data !== undefined) {
                return <div>{children}</div>
            }
        } else {
            return <></>
        }
    }
}
