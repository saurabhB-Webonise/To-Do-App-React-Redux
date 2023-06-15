import React, { useRef,useState } from 'react';
import { Navigate, Link } from 'react-router-dom'
import './sidebar.css';
import { current } from '@reduxjs/toolkit';

export default function SideBar() {
const[] =useState('')

    const linkTodoRef = useRef()
    const linkArchiveRef = useRef()
    const linkTrashRef = useRef()


    const linkClickHandeller = (e) => {
        alert(e.target.id)
        switch (e.target.id) {
            case linkTodoRef.current.id:
                linkTodoRef.current.className = "sideBarListItem active"
                linkArchiveRef.current.className = "sideBarListItem"
                linkTrashRef.current.className = "sideBarListItem"
                break;
            case linkArchiveRef.current.id:
                linkTodoRef.current.className = "sideBarListItem"
                linkArchiveRef.current.className = "sideBarListItem active"
                linkTrashRef.current.className = "sideBarListItem"
                break;
            case linkTrashRef.current.id:
                linkTodoRef.current.className = "sideBarListItem"
                linkArchiveRef.current.className = "sideBarListItem"
                linkTrashRef.current.className = "sideBarListItem active"
                break;
        }
    }

    return (
        <div className="sideBar">
            <div className="sideBarWrapper">
                <div className='sideBarMenu'>
                    <Link id='todo' to='/todo' className='link' onClick={linkClickHandeller}>
                        <div id='todo' ref={linkTodoRef} className='sideBarListItem' >
                            <svg id='todo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>
                            <h3 className='sideBarTitle'>Notes</h3>
                        </div>
                    </Link>

                    <Link id='editLabel' to='' className='link' onClick={linkClickHandeller}>
                        <div id='editLabel' className='sideBarListItem'>
                            <svg id='editLabel' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path></svg>
                            <h3 className='sideBarTitle'>Edit Label</h3>
                        </div>
                    </Link>

                    <Link id='archive' to='/archive' className='link' onClick={linkClickHandeller}>
                        <div id='archive' ref={linkArchiveRef} className='sideBarListItem'>
                            <svg id='archive' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path></svg>
                            <h3 className='sideBarTitle'>Archive</h3>
                        </div>
                    </Link>

                    <Link id='trash' to='/trash' className='link' >
                        <div id='trash' ref={linkTrashRef} className='sideBarListItem'>
                            <svg onClick={linkClickHandeller} id='trash' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>
                            <h3 className='sideBarTitle'>Trash</h3>
                        </div>   
                    </Link>
                    <ul className='sideBarList'>

                    </ul>
                </div>
            </div>
        </div>
    )
}
