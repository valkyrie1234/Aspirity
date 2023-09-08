import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
    id: number;
    task: string;
    completed: boolean;
}

type TodoState = {
    list: Todo[];
}

const initialState: TodoState = {
    list: [
        {
            id: 1,
            task: 'completed false',
            completed: false,
        },
        {
            id: 2,
            task: 'completed true',
            completed: true,
        },
        {
            id: 3,
            task: 'completed false',
            completed: false,
        }
    ],
}





const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                task: action.payload.task,
                completed: false
            };
            if (newTodo.task) {
                state.list.push(newTodo)
            } else {
                return alert('write smth')
            }

        },

        toggledComplete: (state, action: PayloadAction<number>) => {
            const toggledTodo = state.list.find(todo => todo.id === action.payload)
            if (toggledTodo) {
                toggledTodo.completed = !toggledTodo?.completed;
            }

        },

        deleteTodo: (state, action: PayloadAction<number>) => {
            if (confirm('do you wanna really do this?') === true) {
                state.list = state.list.filter(todo => todo.id !== action.payload)
            }
        },

        filterTodoCompleted: (state, action) => {
            state.list = state.list.filter(todo => todo.completed == true)
        },

        // filterAllTodo: (state, action) => {
           
        // }
    }
})



export const {
    addTodo,
    toggledComplete,
    deleteTodo,
    filterTodoCompleted,
    // filterAllTodo
}
    = todoSlice.actions
export default todoSlice.reducer