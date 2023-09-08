import { Box, Checkbox } from "@mui/material";
import { Paper } from "@mui/material";
import Typography from '@mui/material/Typography';
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { toggledComplete, deleteTodo } from "../../../store/slices/TodoSlice";


interface ITodoItem {
    task: string;
    id: number;
    completed: boolean;
}

export const TodoItem: React.FC<ITodoItem> = ({ task, id, completed }) => {

    const dispatch = useAppDispatch();



    return (
        <Paper sx={
            {
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                minHeight: '30px',
                borderRadius: '0px',
                justifyContent: 'space-between'

            }
        }
            elevation={2}
        >
            <Box sx={
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    width: '90%',
                }
            }
            >
                <Checkbox
                    onChange={() => dispatch(toggledComplete(id))}
                    sx={{ color: 'lightgray', '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    icon={<CircleUnchecked />}
                    checkedIcon={
                        completed === true
                            ? <CheckCircleOutlineIcon />
                            : <CircleUnchecked />
                    }
                    checked={completed}

                />
                <Typography
                    variant="subtitle1"
                    sx={
                        completed === true
                            ? {
                                textDecorationLine: 'line-through',
                                wordBreak: 'break-all',
                                textAlign: 'left'
                            }
                            : {
                                textDecorationLine: 'none',
                                wordBreak: 'break-all',
                                textAlign: 'left'
                            }
                    }
                >
                    {task}
                </Typography>
            </Box>
            <Box
                sx={
                    {
                        display: 'flex',
                        alignItems:'center',
                        justifyContent:'space-around'
                    }
                }
            >
                <ModeEditIcon
                    sx={
                        {
                            fontSize: '14px'
                        }
                    }
                />
                <DeleteIcon
                    onClick={() => dispatch(deleteTodo(id))}
                    sx={
                        {
                            textJustify: 'end',
                            fontSize: '14px',
                            marginRight: '10px'
                        }
                    }
                />
            </Box>
        </Paper>
    );
}