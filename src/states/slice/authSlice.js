import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const authData = createAsyncThunk('api/authData', async (creds) => {

    const { username, password } = creds;

    const response = await axios({
        url: "https://dummyjson.com/auth/login",
        method: "POST",
        data: {
            username: username,
            password: password,
        },
        headers: {
            ContentType: 'application/json'
        },
    })
    return response.data;
});

const authSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        logout: (state, action) => {
            return { ...state, data: [] }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(authData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(authData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
