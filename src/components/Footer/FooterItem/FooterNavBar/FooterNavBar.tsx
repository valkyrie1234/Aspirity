import { Box, Typography } from "@mui/material";
import {  filterTodoCompleted } from '../../../../store/slices/TodoSlice'
import { useAppDispatch } from "../../../../store/hooks/useAppDispatch";
import { useAppSelector } from '../../../../store/hooks/useAppSelector'





export const FooterNavBar: React.FC = () => {

    const completedTodos = useAppSelector((state) =>
        state.todoReducer.list)



    const dispatch = useAppDispatch();

    return (
        <Box sx={
            {
                width: '40%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }
        }
        >
            <Typography variant='subtitle2'
                // onClick={() => dispatch(filterAllTodo(allTodos))}
                sx={
                    {
                        fontSize: '10px'
                    }
                }
            >
                All
            </Typography>
            <Typography variant='subtitle2'
                onClick={() => dispatch(filterTodoCompleted(completedTodos))}
                sx={
                    {
                        fontSize: '10px'
                    }
                }
            >
                Completed
            </Typography>
            <Typography variant='subtitle2'
                sx={
                    {
                        fontSize: '10px'
                    }
                }
            >
                Clear completed
            </Typography>
        </Box>
    );
}