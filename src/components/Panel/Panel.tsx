import { Paper, TextField } from "@mui/material";
import * as React from "react";
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { addTodo } from "../../store/slices/TodoSlice";

export const Panel = () => {

    const [value, setValue] = useState<String>('');

    const dispatch = useAppDispatch();

    const add = () => {
        console.log('value:', value);

        dispatch(addTodo({
            task: value
        }))

        setValue('')
    }

    return (
        <Paper elevation={2} sx={
            {
                width: "400px", 
                borderRadius: '0px',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-around'
            }
        }
        >
            <ExpandMoreIcon
                sx={{ color: 'lightgray' }}
                onClick={add}
            />
            <TextField
                variant="standard"
                sx={{ width: "90%" }}
                value={value}
                onChange={
                    (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
                }
                placeholder='What needs to be done?'
            />

        </Paper>
    );
}