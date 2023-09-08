import { Typography } from "@mui/material"
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { useEffect, useState } from 'react'

export const FooterCounter:React.FC = () => {
    const [count,setCount] = useState<number>()
    const completedTodos = useAppSelector((state) => 
    state.todoReducer.list.filter((todo) => 
    todo.completed === true))
    

    useEffect(()=>{
         let a:number = completedTodos.length
         setCount(a)
         console.log(count)
    }, [completedTodos] )
    //переписать useEffect, т.к. выходит много ререндеров переменной count
    return(
        <>
            <Typography variant='subtitle2'>
                Completed Todo: {count}
            </Typography>
        </>
    );
}