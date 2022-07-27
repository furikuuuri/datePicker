import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./styles/instruction.css"
export default function InstructionList(props) {

    const availableTimesCount=useSelector(state=>state.times.availableTimes).length
    const selectedDateTime=useSelector(state=>state.times.selectedDateTime)
    const avDates=useSelector(state=>state.times.dates);
    return (
    <div className="instruction_header">
        {avDates.length!=0&&<div className="instruction_animate" >1. Выберите дату</div>}
        {availableTimesCount!=0 && <div className="instruction_animate">2. Выберите доступное время</div>}
        {!(Object.keys(selectedDateTime).length === 0 && selectedDateTime.constructor === Object)&&availableTimesCount!=0 &&<div className="instruction_animate">3. Проверьте выбранное время и нажмите кнопку отправить для записи</div>}
        {avDates.length==0 &&<div className="instruction_animate">Нет свободных слотов :(</div>}
    </div>
  );
}
