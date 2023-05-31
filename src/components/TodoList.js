import React from 'react';
import { TodoItems } from './TodoItems';

const Fruits = [
    { name: 'Apple' },
    { name: 'Apricot' },
    { name: 'Honeyberry' },
    { name: 'Papaya' },
    { name: 'Jambul' },
    { name: 'Plum' },
    { name: 'Lemon' },
    { name: 'Honeyberry' },
    { name: 'Papaya' },
    { name: 'Jambul' },
    { name: 'Plum' },
    { name: 'Lemon' },
    { name: 'Honeyberry' },
    { name: 'Papaya' },
    { name: 'Jambul' },
    { name: 'Plum' },
    { name: 'Lemon' },
    { name: 'Honeyberry' },
    { name: 'Papaya' },
    { name: 'Jambul' },
    { name: 'Plum' },
    { name: 'Lemon' },
    { name: 'Honeyberry' },
    { name: 'Papaya' },
    { name: 'Jambul' },
    { name: 'Plum' },
    { name: 'Lemon' },
    { name: 'Honeyberry' },
    { name: 'Papaya' },
    { name: 'Jambul' },
    { name: 'Plum' },
    { name: 'Lemon' },
    { name: 'Pomelo' }
];

export const TodoList = () => {
    return (
        <div style={styles.maincontainer}>
            {Fruits.map(data => (
                <TodoItems name={data.name} />
            ))}
        </div>
    );
}

const styles = {
    maincontainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        height: '100%',
        paddingBottom: "20px",
        marginBottom: "20px",
        marginTop: "70px"
    }
}