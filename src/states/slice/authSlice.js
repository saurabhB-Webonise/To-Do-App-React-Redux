import { createSlice } from '@reduxjs/toolkit';
import { authData } from '../../network/api-crud';

const authSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        clearAuthData: (state) => {
            return { ...state, data: [] }
        },
        clearError: (state) => {
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
export const { clearAuthData, clearError } = authSlice.actions;
export default authSlice.reducer;
