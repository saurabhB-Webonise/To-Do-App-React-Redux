
import { createSlice } from '@reduxjs/toolkit';
import { uuid } from '../../utils/utils';

const initialState = { data: [] }

export const todoSlice = createSlice({
    name: 'todoData',
    initialState,
    reducers: {
        todoAdd: (state, action) => {
            return {
                data: [...state.data, {
                    id: uuid(),
                    text: action.payload,
                    completed: false,
                    trashed: false
                }]
            }
        },
        permanentDelete: (state, action) => {
            return { data: state.data.items.filter((item, index) => item.id !== action.payload) }
        },
        toggleMoveToTrash: (state, action) => {
            return { data: state.data.map(todo => (todo.id === action.payload) ? { ...todo, trashed: !todo.trashed } : todo) }
        },
        toggleCompleteStatus: (state, action) => {
            return { data: state.data.map(todo => (todo.id === action.payload) ? { ...todo, completed: !todo.completed } : todo) }
        }
    },
});

export const { todoAdd, permanentDelete, toggleMoveToTrash, toggleCompleteStatus } = todoSlice.actions
export default todoSlice.reducer
