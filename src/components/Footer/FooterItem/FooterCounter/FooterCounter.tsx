import { Typography } from "@mui/material"
import { useAppSelector } from "../../../../store/hooks/useAppSelector";



// 1. показать кол-во завершенных задач 
// 1.1 получить только завершенные задачи
// 1.2 посчитать завершенные задачи 

export const FooterCounter: React.FC = () => {
    
    const completedTodos = useAppSelector((state) => state.todoReducer.list.filter(todo => todo.completed))

    return (
        <>
            <Typography variant='subtitle2'>
                 Completed Todo: {completedTodos.length} 
            </Typography>
        </>
    );
}