import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Paper, Stack,Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText,TextField,Alert } from '@mui/material';
import { Container } from '@mui/system';
import DateComponent from './DateComponent';
import "./styles/app.css"
import TimeSelectComponent from './TimeSelectComponent';
import authService from './API/authService';
import getFreeAcivitiesService from './API/getFreeActivitiesService';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDates } from './reducers/timeReducer';
import bookActivityService from './API/bookActivityService';
import { setAvailableTimes, setSelectedDateTime, setSelectedDay } from './reducers/timeReducer';
import "./styles/app.css"


function App() {
  const dispatch=useDispatch();
  useEffect( async() => {
    var dates= await getFreeAcivitiesService();
    dispatch(setDates(dates))
  },[])
  const availableTimesCount=useSelector(state=>state.times.availableTimes).length
  const selectedDateTime=useSelector(state=>state.times.selectedDateTime)
  const [open, setOpen] = useState(false);
  const [alertOpen,setAlertOpen]=useState(false);
  const [informationMessage,setInformationMessage]=useState();
  const [email,setEmail]=useState();
  const [comment,setComment]=useState();

  
  const sendData=async ()=>
  {
    var result =await bookActivityService(selectedDateTime.id,email,comment);
    setOpen(true);
    setInformationMessage(result);
  
    dispatch(setSelectedDay({}))
    dispatch(setAvailableTimes([]))
    dispatch(setSelectedDateTime({}))
    try{
      var dates= await getFreeAcivitiesService();
      dispatch(setDates(dates))
      
    }
    catch(exc)
    {
      dispatch(setDates([]))
    }
    
    
  }
 
  return (
    
    
    
        <Paper
          maxHeight
          elevation={24}
          style={{
            display:"flex",
            alignItems:"flex-start",
            flexDirection:"column",
            width:"90vw",
            height:"90vh",
            marginBottom:'5vh',
            backgroundColor:'#e6f7ff',
            marginTop:'5vh',
            marginLeft:'5vw'
        }}> 
            <Container
              style={{
                width:"100%",
                display:"flex",
                alignItems:"center",
                flexDirection:"column"
            }}>
              <div
                style={{
                  backgroundColor:"#1B1C84",
                  color:"white",
                  borderRadius:"20px",
                  margin:"30px",
                  padding:"10px",
                  fontSize:"40px"
                }}>Бронирование встреч OrangeProcess</div>
              <div
                style={{
                  width:"100%",
                  display:"flex",
                  justifyContent:"center"
                }}>
                <DateComponent/>
                <div
                    style={{
                      width:"25vw",
                      marginTop:"100px",
                      justifySelf:"end",
                      fontSize:"30px"
                    }}>
                  <div>1. Выберите дату</div>
                  {availableTimesCount!=0 && <div>2. Выберите доступное время</div>}
                  {!(Object.keys(selectedDateTime).length === 0 && selectedDateTime.constructor === Object) &&<div>3. Проверьте выбранное время и нажмите кнопку отправить для записи</div>}
                </div>
              </div>  
            {availableTimesCount!=0 &&      
              <>      
                <TimeSelectComponent/>
                {!(Object.keys(selectedDateTime).length === 0 && selectedDateTime.constructor === Object) &&
                <>
                 <TextField sx={{ m: 1, width: 600 }}
                  disabledid="outlined-disabled"
                  label="Выбранная дата" 
                  value={`${new Date(selectedDateTime.date).getDate()}.${new Date(selectedDateTime.date).getMonth()+1}.${new Date(selectedDateTime.date).getFullYear()} ${selectedDateTime.startTime}`}/>
                  <TextField 
                  autoFocus
                  value={email}
                  onChange={(event)=>setEmail(event.target.value)}
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  sx={{ m: 1, width: 600 }}
                  variant="standard"
                />
                <TextField 
                  autoFocus
                  value={comment}
                  onChange={(event)=>setComment(event.target.value)}
                  margin="dense"
                  id="name"
                  multiline
                  label="Комментарий"
                  type="text"
                  sx={{ m: 1, width: 600 }}
                  variant="standard"
                />
                 <Button variant="contained" sx={{ m: 1, width: 600,height:50,fontSize:"16px"}} onClick={()=>sendData()}>Выбрать</Button>
                </>
                }
              </>
            }
            </Container>
            <Dialog open={open} fullWidth={true}
        maxWidth={"md"} onClose={()=>setOpen(false)}>
              <DialogTitle>Подтвержение</DialogTitle>
              <DialogContent>
                <DialogContentText>
                </DialogContentText>
                <Alert  severity={informationMessage?.status}>
                  <div
                  style={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    fontSize:"20px"
                  }}>
                    <div>{informationMessage?.info}</div>
                    <div>{informationMessage?.result.join_url}</div>
                  </div>
                </Alert>
              </DialogContent>
              <DialogActions>
                <Button onClick={()=>setOpen(false)}>Окей</Button>
              </DialogActions>
            </Dialog>
        </Paper>

   

  );
}

export default App;
