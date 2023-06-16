import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [userName, setUserName] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()


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
        navigate('/home')
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
