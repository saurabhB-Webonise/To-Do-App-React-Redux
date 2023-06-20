import { createAsyncThunk } from '@reduxjs/toolkit';
import { post ,get} from '../network/NetworkCall';
import { LOGIN ,USER_RECORDS} from '../constants/api-constants';

export const addNewTodo = (callback) => {
    fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: 'first record test',
            completed: false,
            userId: 15,
        })
    })
        .then(res => res.json())
        .then(console.log)
        .then(()=>{
            callback(15)
        })
}

export const authData = createAsyncThunk('api/authData', async (creds) => {
    const { username, password } = creds;
    const response = await post(LOGIN, {
        username: username,
        password: password,
    });
    return response;
});

export const userTodoData = createAsyncThunk('todoData/userTodoData', async (userId) => {
    const response = await get(USER_RECORDS.concat(userId));
    return response;
})
