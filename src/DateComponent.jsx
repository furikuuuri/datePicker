import { CalendarPicker,StaticDatePicker, LocalizationProvider, bgBG } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';


function DateComponent() {

  const [choosenDate,setChoosenDate]=useState()
  const onChangeDate=(val)=>
  {
    setChoosenDate(val);
  }

  return (
    
       <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CalendarPicker 
            
            orientation="landscape"
            openTo="day"
            disableHighlightToday={true}
            minDate={new Date()}
            onChange={(value)=>onChangeDate(value)}
            value={choosenDate}
            renderInput={(params) => 
            <TextField {...params} />}
          />
      </LocalizationProvider>
    
  );
}

export default DateComponent;
