import { shallowEqual } from "react-redux";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { TodoItem } from "./TodoItem/TodoItem";
import { Box } from '@mui/material';
import { Todo } from "../../store/slices/TodoSlice";




export const TodoList: React.FC = () => {

    const showOnlyCompleted = useAppSelector((state) => state.todoReducer.showOnlyCompleted)
    const todos = useAppSelector((state) => {
        if (showOnlyCompleted) {
            return state.todoReducer.list.filter(todo => todo.completed)
        }
        return state.todoReducer.list
    })


    return (
        <Box sx={
            {
                width: '400px',
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
        >
            <ul style={{ width: '100%', margin: '0px', padding: '0px' }}>
                {
                    todos.map((todo) => (
                        <TodoItem task={todo.task} key={todo.id} id={todo.id} completed={todo.completed} />
                    ))
                }
            </ul>

        </Box>
    );
}