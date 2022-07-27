import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./styles/instruction.css"
import ErrorIcon from '@mui/icons-material/Error';
import { TextField,Tooltip } from '@mui/material';

export default function EmailInput(props) {

    
    const [errorEmail,setErrorEmail]=useState(true);

    const onEmailChange=(val)=>
    {
        props.setEmail(val)
        let isValid=val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        isValid?setErrorEmail(false):setErrorEmail(true);
        isValid?props.setErrorEmailProps(false):props.setErrorEmailProps(true);
    } 
    return (
        <div
            style={{
            justifyContent:"center",
            display:"flex",
            width:"100%"
        }}> 
            {errorEmail&&<Tooltip title="Некорректный email">
            <ErrorIcon
                className="instruction_animate"
                style={{
                alignSelf:"flex-end",
                //maxWidth:"1000px",
                paddingBottom:"7px"
                }} color="error"></ErrorIcon>
            </Tooltip>}
            <TextField 
            className="instruction_animate"
            autoFocus
            value={props.email}
            onChange={(event)=>onEmailChange(event.target.value)}
            margin="dense"
            id="name"
            fullWidth
            label="Email Address"
            type="email"
            sx={{ m: 1,margin:"0px" }}
            variant="standard"
        />
    </div>
  );
}
