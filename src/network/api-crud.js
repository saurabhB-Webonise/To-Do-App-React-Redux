import { createAsyncThunk } from '@reduxjs/toolkit';
import { post, get } from './network-utils';
import { ADD_TODO, ALL_USERS, LOGIN, USER_RECORDS } from '../constants/api-constants';

export const addNewTodo = async (newRecord, callback) => {
    return (await post(ADD_TODO, {
        todo: newRecord.todo,
        completed: false,
        userId: newRecord.userId,
    }));
}

export const authData = createAsyncThunk('api/authData', async (creds) => {
    const { username, password } = creds;
    return (await post(LOGIN, {
        username: username,
        password: password,
    }));
});

export const userTodoData = createAsyncThunk('todoData/userTodoData', async (userId) => {
    return (await get(USER_RECORDS.concat(userId)));
})

export const fetchAlllUsers = async () => {
    return (await get(ALL_USERS));
}
