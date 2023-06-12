import React from "react";
import './header.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiDocument } from 'react-icons/hi';

function Header() {
    return <div className='mainDiv'>
        <div className="header_div1" >
            <div className="ch1">
                <GiHamburgerMenu
                    style={{ marginLeft: '15px' }}
                    color="#83868A" />
                <HiDocument
                    style={{ marginLeft: '15px' }}
                    color="#F8BC03" size="45px" />
                <h1 style={{
                    fontFamily: 'sans-serif',
                    fontWeight: 'normal',
                    color: '#83868A',
                    marginLeft: '15px',
                    fontSize: '25px'

                }}>keep</h1>
            </div>
            <div className="ch2">
                <svg style={{ position: 'fixed', marginLeft: '15px' }} focusable="false" height="24px" viewBox="0 0 24 24" width="24px" >
                    <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
                    <path d="M0,0h24v24H0V0z" fill="none"></path>
                </svg>
                <input style={{
                    width: '100%',
                    border: 'none',
                    height: '46px',
                    marginLeft:'40px',
                    backgroundColor:'transparent'
                }} type="text"
                    placeholder="Search" />
            </div>
            <div className="ch3">one</div>
        </div>
    </div>
}

export default Header
