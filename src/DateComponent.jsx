import { CalendarPicker,StaticDatePicker, LocalizationProvider, bgBG, DatePicker,PickersDay } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import { setAvailableTimes, setSelectedDateTime, setSelectedDay } from './reducers/timeReducer';


function DateComponent() {
  const dispatch=useDispatch();
  const dates=useSelector(state=>state.times.dates).map(p=>{return new Date(p.date).getTime()})
  const datesForSetAvailableTimes=useSelector(state=>state.times.dates);
  const [choosenDate,setChoosenDate]=useState()
  const onChangeDate=(val)=>
  {
    dispatch(setAvailableTimes([]))
    console.log(val)
    setChoosenDate(val);
    dispatch(setSelectedDay(new Date(val)))
    dispatch(setAvailableTimes(datesForSetAvailableTimes.filter(p=>{return new Date(p.date).getTime()==val.getTime()})))
    dispatch(setSelectedDateTime({}));
  }
  

  return (
    
       <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CalendarPicker 
            openTo="day"
            disableHighlightToday={true}
            minDate={new Date()}
            onChange={(value)=>onChangeDate(value)}
            value={choosenDate}
            renderDay={(day, _value, DayComponentProps) => {
              const isSelected =
                !DayComponentProps.outsideCurrentMonth &&
                dates.indexOf(day.getTime()) >= 0;
              return (
                  <PickersDay {...DayComponentProps} 
                  style={{
                    backgroundColor:isSelected?"#ff66ff":"white"
                  }}/>
              );
            }}
            
          />
      </LocalizationProvider>
    
  );
}

export default DateComponent;
