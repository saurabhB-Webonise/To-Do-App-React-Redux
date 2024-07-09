import { createSlice } from '@reduxjs/toolkit';
import { userTodoData } from '../../network/api-crud';
import { uuid } from '../../utilities/utils';

const initialState = { data: [], loading: false, error: null };

export const todoSlice = createSlice({
    name: 'todoData',
    initialState,
    reducers: {
        todoAdd: (state, action) => {
            return {
                data: [...state.data, {
                    id: uuid(),
                    todo: action.payload.todo,
                    completed: false,
                    userId: action.payload.userId
                }]
            }
        },
        permanentDelete: (state, action) => {
            return { data: state.data.filter((item, index) => item.id !== action.payload) }
        },
        toggleCompleteStatus: (state, action) => {
            return { data: state.data.map(todo => (todo.id === action.payload) ? { ...todo, completed: !todo.completed } : todo) }
        },
        clearAllTodoData: (state) => {
            return { ...state, data: [] }
        },
    },
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

export const { clearAllTodoData, todoAdd, permanentDelete, toggleCompleteStatus } = todoSlice.actions;
export default todoSlice.reducer;
