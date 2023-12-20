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
            state.list.find(todo => {
                let setTask = null;
                if (todo.id === action.payload) {
                    setTask = prompt('set Task')
                    if (setTask != null) {
                        todo.task = setTask;
                    }
                }
            })
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
}
    = todoSlice.actions
export default todoSlice.reducer