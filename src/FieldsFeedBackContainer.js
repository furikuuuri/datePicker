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

    const [isEmailValid,setEmailIsValid]=useState(true);
    const [isCompanyValid,setCompanyIsValid]=useState(true);
    const [isFioValid,setFioIsValid]=useState(true);
    const [isCommentValid,setCommentIsValid]=useState(true);


    const sendData=()=>{
        let isReturn=false;
        if(!email  || !isEmailValid){
            setEmailIsValid(false)
            isReturn=true;
        }
        if(!company || !isCompanyValid){
            setCompanyIsValid(false)
            isReturn=true;
        }
        if(!fio || !isFioValid){
            setFioIsValid(false)
            isReturn=true;
        }
        if(!comment || !isFioValid){
            setCommentIsValid(false)
            isReturn=true;
        }
        if(isReturn){
            return
        }
        props.sendData(email,comment,fio,company);
    }

    const onEmailChange=(e)=>{
        setEmail(e);
        let isValid=true;
        if(e){
            isValid=e.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        }
        setEmailIsValid(isValid);
    }
    const onCompanyChange=(e)=>{
        setCompany(e);
        let isValid=true;
        if(e){
            isValid=e.length>=4;
        }
        setCompanyIsValid(isValid);
    }
    const onFioChange=(e)=>{
        setFio(e);
        let isValid=true;
        if(e){
            isValid=e.length>=4;
        }
        setFioIsValid(isValid);
    }
    const onCommentChange=(e)=>{
        setComment(e);
        let isValid=true;
        if(e){
            isValid=e.length>=4;
        }
        setCommentIsValid(isValid);
    }

    
    return (
        <div className="fieldsFeedBackContainer_container">
            <div className="fieldsFeedBackContainer_header">Заполните поля</div>
            <div className="fieldsFeedBackContainer_wrapper">
                <div className="fieldsFeedBackDataFields_container">
                    <DataInput 
                        label="ФИО" 
                        value={fio} 
                        setValue={onFioChange}
                        errorMessage={"Введите более 3 символов"}
                        IsValid={isFioValid}
                        />
                    <DataInput 
                        label="email" 
                        value={email} 
                        setValue={onEmailChange}
                        errorMessage={"Некорректная почта"}
                        IsValid={isEmailValid}
                        />
                    <DataInput 
                        label="Компания" 
                        value={company} 
                        setValue={onCompanyChange}
                        errorMessage={"Введите более 3 символов"}
                        IsValid={isCompanyValid}
                        />
                    <DataInput 
                        label="Комментарий" 
                        value={comment} 
                        setValue={onCommentChange}
                        errorMessage={"Введите более 3  символов"}
                        IsValid={isCommentValid}
                        />
                </div>
                <button className="fieldsFeedBack_button" onClick={sendData}>Забронировать</button>
            </div>
            
        </div>
  );
}
