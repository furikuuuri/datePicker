import { CalendarPicker,StaticDatePicker, LocalizationProvider, bgBG, DatePicker } from '@mui/x-date-pickers';
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
            openTo="day"
            disableHighlightToday={true}
            minDate={new Date()}
            onChange={(value)=>onChangeDate(value)}
            value={choosenDate}
            
          />
      </LocalizationProvider>
    
  );
}

export default DateComponent;
