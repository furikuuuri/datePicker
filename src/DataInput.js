import { useEffect, useState } from 'react';
import logo from './img/logo.png';
import "./styles/feedBack.css";
import { useDispatch, useSelector } from 'react-redux';
import TimeBlock from './TimeBlock';
import { setAvailableTimes, setSelectedDateTime } from './reducers/timeReducer';

export default function DataInput(props) {

    let isHover=false;
    const [isSelected,setIsSelected]=useState(false);
    const focus=()=>{
      setIsSelected(true)
      console.log("focus"+props.label)
    }
    return (
      <div className="feedBack_Input_wrapper">
          <div className="feedBack_Input_title">{props.label}</div>
          <input 
            className="feedBack_Input" 
            value={props.value} 
            onChange={(e)=>props.setValue(e.target.value)}
            onFocus={()=>focus()}
            onBlur={()=>setIsSelected(false)}>
          </input>

      </div>
        
  );
}
