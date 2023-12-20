import { Box, Typography } from "@mui/material";
import {  changeShowOnlyCompleted, deleteAllCompletedTodos } from '../../../../store/slices/TodoSlice'
import { useAppDispatch } from "../../../../store/hooks/useAppDispatch";


// 1. показать кол-во завершенных задач 
// 1.1 получить только завершенные задачи
// 1.2 посчитать завершенные задачи 



export const FooterNavBar: React.FC = () => {

    



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
                onClick={() => dispatch(changeShowOnlyCompleted(false))}
                sx={
                    {
                        fontSize: '10px',
                        cursor:'pointer'
                    }
                }
            >
                All
            </Typography>
            <Typography variant='subtitle2'
                onClick={() => dispatch(changeShowOnlyCompleted(true))}
                sx={
                    {
                        fontSize: '10px',
                        cursor:'pointer'
                    }
                }
            >
                Completed
            </Typography>
            <Typography variant='subtitle2'
                onClick = { () => dispatch(deleteAllCompletedTodos(true))}
                sx={
                    {
                        fontSize: '10px',
                        cursor: 'pointer',
                        color:'red'
                    }
                }
            >
                Clear completed
            </Typography>
        </Box>
    );
}