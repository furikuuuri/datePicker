import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./styles/instruction.css"
import { TextField } from '@mui/material';

export default function SelectedDateTimeOutput(props) {
    const selectedDateTime=useSelector(state=>state.times.selectedDateTime)
    return (
        <TextField 
        sx={{ m: 1 ,width:"100%"}}
        disabledid="outlined-disabled"
        fullWidth
        className="instruction_animate"
        label="Выбранная дата" 
        value={`${new Date(selectedDateTime.date).getDate()}.${new Date(selectedDateTime.date).getMonth()+1}.${new Date(selectedDateTime.date).getFullYear()} ${selectedDateTime.startTime}`}/>
  );
}
