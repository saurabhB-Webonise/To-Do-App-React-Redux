import React, { useState, useEffect } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authData } from '../../states/slice/authSlice';

// I will remove this just for testing purpose
// username: kminchelle
// password: 0lelplR

export default function Login() {

    const [userName, setUserName] = useState('')
    const [password, setpassword] = useState('')
    const { data, loading, error } = useSelector((state) => state.api);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        if (!Array.isArray(data)) {
            if (data !== undefined) {
                navigate('/home', { replace: true })
            }
        }else{
            navigate('/', { replace: true })
        }
    }, [data])

    const userNameHandler = (e) => {
        setUserName(e.target.value)
    }
    const passwordHandler = (e) => {
        setpassword(e.target.value)
    }

    const loginClickHandler = () => {

        if (userName.length === 0)
            return
        if (password.length === 0)
            return
        dispatch(authData())
    }

    return (
        <div className='login-main-container'>
            <div className='login-wrapper'>
                <h3>ToDo</h3>
                <div className='login-form'>
                    <input className='login-input-box' type='text' placeholder='username' value={userName} onChange={userNameHandler} />
                    <input className='login-input-box' type='password' placeholder='password' value={password} onChange={passwordHandler} />
                    <button type="button" onClick={loginClickHandler}>login</button>
                </div>
            </div>
        </div>
    )
}
