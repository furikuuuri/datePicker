import { useEffect, useState } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelect } from '@mui/base';
import { useDispatch, useSelector } from 'react-redux';
import { setAvailableTimes, setSelectedDateTime } from './reducers/timeReducer';

export default function TimeSelectComponent(props) {
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const dispatch=useDispatch()

  const selectedDate=useSelector(state=>state.times.selectedDay);
  const availableTimes=useSelector(state=>state.times.availableTimes);
  const dates=useSelector(state=>state.times.dates);

  const [selectedTime,setSelecectedTime]= useState()

  
  const handleChange = (event) => {
    setSelecectedTime(event.target.value)
    dispatch(setSelectedDateTime(event.target.value))
    console.log(selectedTime)
  };
 
    

  useEffect(()=>{
   
  }
 ,[selectedDate])
  return (
   
        <div
          className="instruction_animate"
         style={{
          width:"100%",
          display:"flex",
          justifyContent:"center"
        }}>
        <FormControl fullWidth sx={{ m: 1,maxWidth:"1000px",marginLeft:"0px",marginRight:"0px"}}>
          <InputLabel  id="demo-multiple-name-label" >Время</InputLabel>
          <Select
            className="instruction_animate"
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"            
            value={selectedTime}
            onChange={handleChange}
            input={<OutlinedInput className="instruction_animate" fullWidth label="Name" />}
            MenuProps={MenuProps}
          >
          {availableTimes?.map((dateTime) => (
            <MenuItem
              //key={dateTime.id}
              value={dateTime}
            >
              {dateTime.startTime}-{dateTime.endTime}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      
      
  
  );
}
