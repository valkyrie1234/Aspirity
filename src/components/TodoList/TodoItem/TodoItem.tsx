import { Checkbox } from "@mui/material";
import { Paper } from "@mui/material";
import Typography from '@mui/material/Typography';
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { toggledComplete } from "../../../store/slices/TodoSlice";


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
                borderRadius: '0px'

            }
        }
            elevation={2}
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
                            wordBreak:'break-all',
                            textAlign:'left'
                        }
                        : {
                            textDecorationLine: 'none',
                            wordBreak:'break-all',
                            textAlign:'left'
                        }
                }
            >
                {task}
            </Typography>
        </Paper>
    );
}