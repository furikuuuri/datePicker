import { CalendarPicker,StaticDatePicker, LocalizationProvider, bgBG, DatePicker,PickersDay } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import { setAvailableTimes, setSelectedDateTime, setSelectedDay } from './reducers/timeReducer';
import { fontSize } from '@mui/system';


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
    //dispatch(setSelectedDateTime({}));
  }
  

  return (
    <div style={{
      border: '1px solid #9c88ff',
      boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)',
      borderRadius:"20px",
      justifySelf: "start"
    }}>
       <LocalizationProvider style={{
        
       
      }}  dateAdapter={AdapterDateFns}>
          <CalendarPicker 
            sx={{
              
            }}
            fullWidth
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
                    backgroundColor:isSelected?"#1B1C84":"#91E48F",
                    color:isSelected?"white":"black",
                    fontSize:"15px",
                  }}/>
              );
            }}
            
          />
      </LocalizationProvider>
    </div>
  );
}

export default DateComponent;
