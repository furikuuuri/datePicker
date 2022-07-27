import { CalendarPicker,StaticDatePicker, LocalizationProvider, bgBG, DatePicker,PickersDay } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import { setAvailableTimes, setSelectedDateTime, setSelectedDay } from './reducers/timeReducer';
import { fontSize } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ruRU as pickersruRu } from '@mui/x-date-pickers';

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
    dispatch(setAvailableTimes(datesForSetAvailableTimes.filter(p=>{
      return new Date(p.date).toLocaleDateString()==val.toLocaleDateString()})))
  }
  return (
    <div className="datePicker_container"
     style={{
      
    }}>
      
       <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker 
            fullWidth
            openTo="day"
            orientation="landscape"
            disableHighlightToday={true}
            minDate={new Date()}
            onChange={(value)=>onChangeDate(value)}
            value={choosenDate}
            renderInput={(params) => <TextField {...params} />}
            renderDay={(day, _value, DayComponentProps) => {
              const currentDate=new Date().getDate()
              const isSelected=new Date(day).toLocaleDateString()==new Date(choosenDate).toLocaleDateString();
              const isCanSelected =
                !DayComponentProps.outsideCurrentMonth &&
                dates.indexOf(day.getTime()) >= 0 && day.getDate()>=currentDate;
                return (
                  <PickersDay {...DayComponentProps} 
                  style={
                    {
                    backgroundColor:isSelected?"red":isCanSelected?"#1B1C84":"white",
                    color:isSelected?"white":isCanSelected?"white":"black",
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
