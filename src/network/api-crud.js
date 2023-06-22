import { createAsyncThunk } from '@reduxjs/toolkit';
import { post, get, fetchGet } from './network-utils';
import { ADD_TODO, ALL_USERS, DOMAIN, LOGIN, USER_RECORDS } from '../constants/api-constants';

export const addNewTodo = (newRecord, callback) => {
    fetch(DOMAIN.concat(ADD_TODO), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: newRecord.todo,
            completed: false,
            userId: newRecord.userId,
        })
    }).then((response) => response.json())
        .then((res) => {
            callback(res)
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

export const fetchAlllUsers = async (callback) => {
    await fetchGet().then((res) => callback(res.users))
}
