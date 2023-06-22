import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { data } = useSelector((state) => state.api);
    return (Array.isArray(data)) ?  <Navigate to="/" replace={true}/> :children
}
