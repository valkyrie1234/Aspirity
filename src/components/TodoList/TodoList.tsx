import { useAppSelector } from "../../store/hooks/useAppSelector";
import { TodoItem } from "./TodoItem/TodoItem";
import { Box } from '@mui/material'




export const TodoList: React.FC = () => {

    const todos = useAppSelector((state) => state.todoReducer.list)

    return (
        <Box sx={
            {
                width: '400px',
                display:"flex",
                alignItems:'center',
                justifyContent:'center'
            }
        }
        >
            <ul style={{ width: '100%',margin:'0px', padding:'0px' }}>
                {
                    todos.map((todo) => (
                        <TodoItem task={todo.task} id={todo.id} completed={todo.completed} />
                    ))
                }
            </ul>

        </Box>
    );
}