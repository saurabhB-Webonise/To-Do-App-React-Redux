
import { ADD_TODO, MOVE_TO_TRASH_TODO, PERMANENT_DELETE_TODO, COMPELETION_STATUS_TODO } from '../actions/todoActions'

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: action.id,
                text: action.text,
                completed: false,
                trashed: false
            }]

        case MOVE_TO_TRASH_TODO:
            return state.map(todo => (todo.id === action.id) ? { ...todo, trashed: !todo.trashed } : todo)

        case PERMANENT_DELETE_TODO:
            return state.items.filter((item, index) => item.id !== action.id)

        case COMPELETION_STATUS_TODO:
            return state.map(todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)

        default:
            return state
    }
}


export default todoReducer