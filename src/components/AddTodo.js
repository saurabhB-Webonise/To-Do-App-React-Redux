import React, { useState } from "react";
import '../App.css'

export const AddTodo = () => {
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(message);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const addHandler = () => {
        console.log(message)
    }

    return <div style={styles.maincontainer}>
        <input
            style={styles.inputbox}
            type="text"
            name="name"
            placeholder="Add to do.."
            onChange={handleChange}
            value={message}
        />
        <input
            style={styles.button}
            type="button"
            value="Add"
            onClick={() => {
                addHandler()
            }} />
    </div>
}

const styles = {

    maincontainer: {
        maxWidth: '100%',
        minWidth: '100%',
        border: '1px solid #ccc',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        position: "fixed",
        top: 0,
        boxShadow: '0px 1px 2px #808080',
        transition: '1s, transform 2s'
    },
    inputbox: {
        width: '50%',
        display: "inline-block",
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: "border-box",
        height: '50px',
        padding: 10
    },
    button: {
        color: "white",
        border: 'none',
        borderRadius: '4px',
        cursor: "pointer",
        backgroundColor: 'orange',
        height: '50px',
        marginLeft: '10px',
        width: '100px'
    }
}