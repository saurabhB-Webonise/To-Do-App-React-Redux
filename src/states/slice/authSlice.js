import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

export const authData = createAsyncThunk('api/authData', async () => {
    const response = await axios({
        url: "https://dummyjson.com/auth/login",
        method: "POST",
        data: {
            username: 'kminchelle',
            password: '0lelplR',
        },
        headers: {
            ContentType: 'application/json'
        },
    })
    return response.data;
});

const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        logout: (state, action) => {
            console.log("calling logoout")
            return { ...state, data: [] }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authData.pending, (state) => {
                console.log("pending")
                state.loading = true;
                state.error = null;
            })
            .addCase(authData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                console.log("data coming")
                console.log(action.payload)
            })
            .addCase(authData.rejected, (state, action) => {
                console.log("error")
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const { logout } = apiSlice.actions
export default apiSlice.reducer;
