import { useState } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelect } from '@mui/base';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDateTime } from './reducers/timeReducer';

export default function TimeSelectComponent() {
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
  const [selectedTime,setSelecectedTime]= useState()
  const dispatch=useDispatch()
  const availableTimes=useSelector(state=>state.times.availableTimes);
  const handleChange = (event) => {
    dispatch(setSelectedDateTime(event.target.value))
    console.log(event.target.value)
  };

  return (
    <div>
      
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Время</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={selectedTime}
            onChange={handleChange}
            input={<OutlinedInput label="Время" />}
            MenuProps={MenuProps}
          >
          {availableTimes?.map((dateTime) => (
            <MenuItem
              key={dateTime.id}
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
