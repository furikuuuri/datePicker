import { CalendarPicker,StaticDatePicker ,LocalizationProvider, bgBG, DatePicker,PickersDay } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import { setAvailableTimes, setSelectedDateTime, setSelectedDay } from './reducers/timeReducer';
import { fontSize, padding } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ruRU as pickersruRu } from '@mui/x-date-pickers';
import ruLocale from "date-fns/locale/ru";


function DateComponent(props) {
  const theme = createTheme({
    components: {
      MuiCalendarPicker: {
        styleOverrides: {
          root: {
            //backgroundColor: "rgba(120, 120, 120, 0.2)",
            width: "400px",
            
            padding:"20px"
          },
          "& .css-epd502": {
            width: "400px",
            border:"5px solid black",
          },
        },
      },
      MuiPickerStaticWrapper:{
        styleOverrides:{
          content:{
            "& .css-epd502": {
              width: "400px",
              border:"7px solid #193250",
              borderRadius:"25px"
            },
            "& .css-1n2mv2k": {
              //backgroundColor: "rgba(120, 120, 120, 0.2)",
              justifyContent: "space-around"
            },
          }
        }
      },
      MuiPickersDay:{
        styleOverrides:{
          hiddenDaySpacingFiller:{
            width:"45px",
            height:"45px",
          }
        }
      },
      
    },
  });
  
  const dispatch=useDispatch();
  const dates=useSelector(state=>state.times.dates).map(p=>{return new Date(p.date).getTime()})
  const datesForSetAvailableTimes=useSelector(state=>state.times.dates);
  const onChangeDate=(val)=>
  {
    dispatch(setAvailableTimes([]))
    props.setChoosenDate(val);
    dispatch(setSelectedDay(new Date(val)))
    dispatch(setAvailableTimes(datesForSetAvailableTimes.filter(p=>{
      return new Date(p.date).toLocaleDateString()==val.toLocaleDateString()})))
  }
  return (
    <div className="datePicker_container"
     style={{
      
    }}>
      <div
       style={{
          width: "90%",
        }}>
           <ThemeProvider theme={theme}>
       <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
          <StaticDatePicker 
            openTo="day"
            orientation="landscape"
            disableHighlightToday={true}
            minDate={new Date()}
            onChange={(value)=>onChangeDate(value)}
            value={props.choosenDate}
            displayStaticWrapperAs="desktop"
            renderInput={(params) => <TextField {...params} />}
            renderDay={(day, _value, DayComponentProps) => {
              const currentDate=new Date().getDate()
              const isSelected=new Date(day).toLocaleDateString()==new Date(props.choosenDate).toLocaleDateString();
              const isCanSelected =
                !DayComponentProps.outsideCurrentMonth &&
                dates.indexOf(day.getTime()) >= 0 && day.getDate()>=currentDate;
                return (
                  <PickersDay {...DayComponentProps} 
                  style={
                    {
                      width:"45px",
                      height:"45px",
                      backgroundColor:isSelected?"#f94015":isCanSelected?"#193250":"white",
                      color:isSelected?"white":isCanSelected?"white":"black",
                      fontSize:"22px",
                  }}/>
              );
            }}
          />
      </LocalizationProvider>
      </ThemeProvider>
      </div> 
    </div>
  );
}

export default DateComponent;
