import { Box, Typography } from "@mui/material";
import {  changeShowOnlyCompleted } from '../../../../store/slices/TodoSlice'
import { useAppDispatch } from "../../../../store/hooks/useAppDispatch";





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