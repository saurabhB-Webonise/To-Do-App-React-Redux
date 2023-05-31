import React from 'react'

export const TodoItems = (props) => {
    return <div style={styles}>
        <input type='checkbox' />
        <label for="vehicle1"> I have a bike</label>
        <p>jjj</p>
    </div>
}

const styles={
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderRadius: '3px',
    height: '50px',
    marginTop: '5px',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    boxShadow: '1px 2px 9px #808080',
    transition: '1s, transform 2s',
}
