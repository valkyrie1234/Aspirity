import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type Todo = {
    id: number;
    task: string;
    completed: boolean;
}

type TodoState = {
    showOnlyCompleted: boolean;
    list: Todo[];
}

const initialState: TodoState = {
    showOnlyCompleted: false,
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

        toggleCompleteTodoItem: (state, action: PayloadAction<number>) => {
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

        changeShowOnlyCompleted: (state, action: PayloadAction<boolean>) => {
            state.showOnlyCompleted = action.payload;
        },

        deleteAllCompletedTodos: (state, action) => {
            state.list = state.list.filter(todo => todo.completed == !action.payload)
        },

        changeTodoContent: (state, action: PayloadAction<number>) => {


            const a = state.list.find(todo => {
                let setTask = null;
                if (todo.id === action.payload) {
                    setTask = prompt('set Task')
                    if (setTask != null) {
                        todo.task = setTask;
                    }
                }
            })

            console.log(a)

            // 1. изменить контент выбранного туду 
            // 1.1 найти в массиве наш туду 
            // 1.2 изменить его контент
        }
    }
})



export const {
    addTodo,
    toggleCompleteTodoItem,
    deleteTodo,
    changeShowOnlyCompleted,
    deleteAllCompletedTodos,
    changeTodoContent
    // filterAllTodo
}
    = todoSlice.actions
export default todoSlice.reducer