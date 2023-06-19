import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from '../slice/todoSlice';
import authReducer from '../slice/authSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistAuthConfig = {
    key: 'rootAuth',
    storage,
}

const persistTodoConfig = {
    key: 'rootTodo',
    storage,
}

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer)
const persistedTodoReducer = persistReducer(persistTodoConfig, todoReducer)

const rootReducer = combineReducers({
    api: persistedAuthReducer,
    todoData: persistedTodoReducer
})

export const store = configureStore({
    reducer: {
        api: persistedAuthReducer,
        todoData: persistedTodoReducer
    },
});

export const persistor = persistStore(store)

//export default store;
