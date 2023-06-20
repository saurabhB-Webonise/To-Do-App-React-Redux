import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function CustomRouter({ children }) {
    const { data, loading, error } = useSelector((state) => state.api);
    return (Array.isArray(data)) ?  <Navigate to="/" /> :children
}
