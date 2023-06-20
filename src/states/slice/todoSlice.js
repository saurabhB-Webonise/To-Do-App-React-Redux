import { createSlice } from '@reduxjs/toolkit';
import { userTodoData } from '../../operations/Operations';

const initialState = { data: [], loading: false, error: null };

// export const userTodoData = createAsyncThunk('todoData/userTodoData', async (userId) => {
//     const response = await get(USER_RECORDS.concat(userId));
//     return response;
// })

export const todoSlice = createSlice({
    name: 'todoData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userTodoData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userTodoData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.todos;
            })
            .addCase(userTodoData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export const { todoAdd, permanentDelete, toggleMoveToTrash, toggleCompleteStatus } = todoSlice.actions;
export default todoSlice.reducer;
