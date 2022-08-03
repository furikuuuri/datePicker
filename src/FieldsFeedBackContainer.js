import { useEffect, useState } from 'react';
import logo from './img/logo.png';
import "./styles/feedBack.css";
import { useDispatch, useSelector } from 'react-redux';
import TimeBlock from './TimeBlock';
import { setAvailableTimes, setSelectedDateTime } from './reducers/timeReducer';
import DataInput from './DataInput';

export default function FieldsFeedBackContainer(props) {
    const [email,setEmail]=useState();
    const [company,setCompany]=useState();
    const [fio,setFio]=useState();
    const [comment,setComment]=useState();

    const sendData=()=>{
        props.sendData(email,comment,fio,company);
    }
    
    
    return (
        <div className="fieldsFeedBackContainer_container">
            <div className="fieldsFeedBackContainer_header">3. Заполните поля</div>
            <div className="fieldsFeedBackContainer_wrapper">
                <div className="fieldsFeedBackDataFields_container">
                    <DataInput 
                        label="email" 
                        value={email} 
                        setValue={setEmail}/>
                    <DataInput 
                        label="Компания" 
                        value={company} 
                        setValue={setCompany}/>
                    <DataInput 
                        label="ФИО" 
                        value={fio} 
                        setValue={setFio}/>
                    <DataInput 
                        label="Комментарий" 
                        value={comment} 
                        setValue={setComment}/>
                </div>
                <button className="fieldsFeedBack_button" onClick={sendData}>Отправить</button>
            </div>
            
        </div>
  );
}
