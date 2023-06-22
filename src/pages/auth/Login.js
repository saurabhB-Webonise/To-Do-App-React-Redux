import React, { useState, useEffect } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../../states/slice/authSlice';
import { authData } from '../../network/api-crud';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Login() {

    const [userName, setUserName] = useState('kminchelle');
    const [password, setpassword] = useState('0lelplR');
    const { data, error } = useSelector((state) => state.api);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        clearErrorMessage()
        if (!Array.isArray(data) && data !== undefined) {
            navigate('/home', { replace: true });
        }
    }, [data]);

    const clearErrorMessage = () => {
        if (error !== null) {
            dispatch(clearError())
        }
    }

    const userNameHandler = (e) => {
        clearErrorMessage()
        setUserName(e.target.value);
    };

    const passwordHandler = (e) => {
        clearErrorMessage()
        setpassword(e.target.value);
    };

    const loginClickHandler = () => {
        if (userName.trim().length === 0)
            return;
        if (password.trim().length === 0)
            return;
        dispatch(authData({ username: userName.trim(), password: password.trim() }));
    };

    const messageCss = (error === null) ? 'message hide' : 'message show';

    return (

        <div className='outter-container'>
            <Sidebar user={(user) => {
                setUserName(user.username)
                setpassword(user.password)
            }} />
            <div className='login-main-container'>
                <div className='login-wrapper'>
                    <label className={messageCss}>Login Failed</label>
                    <h3>To Do</h3>
                    <div className='login-form'>
                        <input className='login-input-box' type='text' placeholder='username' value={userName} onChange={userNameHandler} />
                        <input className='login-input-box' type='password' placeholder='password' value={password} onChange={passwordHandler} />
                        <button type="button" onClick={loginClickHandler}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
