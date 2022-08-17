import { useEffect, useState } from 'react';
import logo from './img/logo.png';
import "./styles/timeBlock.css";
import { useDispatch, useSelector } from 'react-redux';
import TimeBlock from './TimeBlock';
import { setAvailableTimes, setSelectedDateTime } from './reducers/timeReducer';

export default function TimeBlockContainer() {
    useEffect(() => {
        return function cleanupSelectedTime() {
            setSelectedTimeId("");
            dispatch(setSelectedDateTime({}))
        };
      },[]);
    const setSelect=(id,time_object)=>{
        dispatch(setSelectedDateTime(time_object))
        setSelectedTimeId(id)
    }
    const dispatch=useDispatch()
    const selectedDate=useSelector(state=>state.times.selectedDay);
    const availableTimes=useSelector(state=>state.times.availableTimes);
    const [selectedTimeId,setSelectedTimeId]=useState();
    const getDateString=(date)=>{
        var options = { weekday: 'long', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('ru-RU', options);
    }
    return (
        <div className="timeBlockContainer_container">
            <div className="timeBlockContainer_header">Выберите доступное время</div>
            <div className="timeBlockContainer_wrapper">
                {console.log(selectedDate)}
                <div className="timeBlockContainer_currentDate">{getDateString(selectedDate)}</div>
                <div className="timeBlockContainer_availableTimes">
                    {availableTimes?.map((dateTime) => {
                    let isSelected=selectedTimeId==dateTime.id
                    return <TimeBlock
                        isSelected={isSelected}
                        time_string={dateTime}
                        key={dateTime.id}
                        id={dateTime.id}
                        onClick={setSelect}/> })}
                </div>
                
            </div>
            
        </div>
  );
}
