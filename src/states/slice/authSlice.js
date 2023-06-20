import { createSlice } from '@reduxjs/toolkit';
import { authData } from '../../operations/Operations';

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
        clearError: (state, action) => {
            return { ...state, error: null }
        }
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
export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
