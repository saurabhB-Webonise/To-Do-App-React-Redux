import React, { useEffect, useState } from 'react';
import { fetchAlllUsers } from '../../network/api-crud';
import './sidebar.css';

export default function Sidebar(props) {
  const [users, setUsers] = useState([]);
  const handleClick = (userData) => {
    props.user({ username: userData.username, password: userData.password })
  }

  useEffect(() => {
    fetchAlllUsers((data) => {
      setUsers(data)
    })
  }, [])

  return (
    <div className='sidebar-main-container'>
      <div className='sidebar-wrapper'>
        {(users.length !== 0) && users.map(data => (
          <div key={data.id} className="user-card" onClick={() => handleClick(data)}>
            <img alt='Profile image' src={data.image} />
            <span>{data.username}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
