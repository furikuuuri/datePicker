import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Paper, Stack,Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText,TextField,Alert,Tooltip,CircularProgress } from '@mui/material';
import { borderBottom, Container } from '@mui/system';
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
import ErrorIcon from '@mui/icons-material/Error';


function App() {
  const dispatch=useDispatch();
  useEffect( async() => {
    var dates= await getFreeAcivitiesService();
    dispatch(setDates(dates))
  },[])
  const availableTimesCount=useSelector(state=>state.times.availableTimes).length
  const selectedDateTime=useSelector(state=>state.times.selectedDateTime)
  const avDates=useSelector(state=>state.times.dates);
  const [open, setOpen] = useState(false);
  const [alertOpen,setAlertOpen]=useState(false);
  const [informationMessage,setInformationMessage]=useState();
  const [email,setEmail]=useState();
  const [comment,setComment]=useState();
  const [errorEmail,setErrorEmail]=useState(true);
  const [isLoading,setIsLoading]=useState(true);

  
  const sendData=async ()=>
  {
    setIsLoading(true)
    setOpen(true);
    var result =await bookActivityService(selectedDateTime.id,email,comment);
    
    setInformationMessage(result);
    setIsLoading(false);
  
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
  const onEmailChange=(val)=>
  {
    setEmail(val)
    let isValid=val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    isValid?setErrorEmail(false):setErrorEmail(true);
  } 
  return (
    
    
    
        // <Paper
        //   maxHeight
        //   elevation={24}
        //   style={{
        //     display:"flex",
        //     alignItems:"flex-start",
        //     flexDirection:"column",
        //     width:"90vw",
        //     height:"90vh",
        //     marginBottom:'5vh',
        //     backgroundColor:'#e6f7ff',
        //     marginTop:'5vh',
        //     marginLeft:'5vw'
        // }}> 
            <Container
              style={{

                width:"100%",
                display:"flex",
                alignItems:"center",
                flexDirection:"column"
            }}>
              <div
                style={{
                  width:"100%",
                  maxWidth:"1000px",
                 // backgroundColor:"#1B1C84",
                  color:"#1B1C84",
                  borderRadius:"20px",
                  border:"solid rgba(156, 136, 255) 2px",
                  margin:"30px",
                  textAlign:"center",
                  paddingTop:"10px",
                  paddingBottom:"10px",
                  fontSize:"40px",
                  boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)'
                }}>Бронирование встреч OrangeProcess</div>
              <div
                style={{
                  width:"100%",
                  display:"flex",
                  justifyContent:"space-around",
                  flexWrap:"wrap",
                  paddingTop:"20px",
                  //borderBottom:"solid black 2px",
                 // border:"solid black 2px",
                 // borderRadius:"20px"
                }}>
                <DateComponent style={{
                  
                }}/>
                <div
                    style={{
                      width:"100%",
                      maxWidth:"500px",
                      fontSize:"30px",
                      padding:"10px",
                      display:"flex",
                      flexDirection:"column",
                      alignItems:"flex-start"

                    }}>
                  {avDates.length!=0&&<div className="instruction_animate" >1. Выберите дату</div>}
                  {availableTimesCount!=0 && <div className="instruction_animate">2. Выберите доступное время</div>}
                  {!(Object.keys(selectedDateTime).length === 0 && selectedDateTime.constructor === Object)&&availableTimesCount!=0 &&<div className="instruction_animate">3. Проверьте выбранное время и нажмите кнопку отправить для записи</div>}
                  {avDates.length==0 &&<div className="instruction_animate">Нет свободных слотов :(</div>}
                </div>
              </div>  
            {availableTimesCount!=0 &&      
              <div style={{
                width:"100%",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                marginTop:"20px"
                
              }}>       
                <TimeSelectComponent/>
                {!(Object.keys(selectedDateTime).length === 0 && selectedDateTime.constructor === Object) &&
                <>
                 <TextField sx={{ m: 1,maxWidth:"1000px" }}
                  disabledid="outlined-disabled"
                  fullWidth
                  className="instruction_animate"
                  label="Выбранная дата" 
                  value={`${new Date(selectedDateTime.date).getDate()}.${new Date(selectedDateTime.date).getMonth()+1}.${new Date(selectedDateTime.date).getFullYear()} ${selectedDateTime.startTime}`}/>
                  <div
                  style={{
                    justifyContent:"center",
                    maxWidth:"1000px",
                    display:"flex",
                    width:"100%"
                  }}> 
                    {errorEmail&&<Tooltip title="Некорректный email">
                          <ErrorIcon
                          className="instruction_animate"
                          style={{
                            
                          alignSelf:"flex-end",
                          maxWidth:"1000px",
                          paddingBottom:"7px"
                        }} color="error"></ErrorIcon>
                    </Tooltip>}
                    <TextField 
                    className="instruction_animate"
                    autoFocus
                    value={email}
                    onChange={(event)=>onEmailChange(event.target.value)}
                    margin="dense"
                    id="name"
                    fullWidth
                    label="Email Address"
                    type="email"
                    sx={{ m: 1,margin:"0px",maxWidth:"1000px" }}
                    variant="standard"
                  /></div>
                 
                
                <TextField 
                  className="instruction_animate"
                  autoFocus
                  fullWidth
                  value={comment}
                  onChange={(event)=>setComment(event.target.value)}
                  margin="dense"
                  id="name"
                  //multiline
                  label="Комментарий"
                  type="text"
                  sx={{ m: 1, maxWidth: 1000 }}
                  variant="standard"
                />
                 <Button variant="contained"  className="instruction_animate" disabled={errorEmail} fullWidth sx={{ m: 1, maxWidth: 1000,height:50,fontSize:"16px"}} onClick={()=>sendData()}>Выбрать</Button>
                </>
                }
              </div>
            }
            <Dialog open={open} fullWidth={true}
        maxWidth={"md"} onClose={()=>setOpen(false)}>
              <DialogTitle>Подтвержение</DialogTitle>
              <DialogContent
              style={{
                display:"flex",
                alignItems:"center"
              }}>
               <div>
                {isLoading&&<CircularProgress color="secondary" />}
                {!isLoading&&<Alert  severity={informationMessage?.status}>
                  <div
                  style={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    fontSize:"20px"
                  }}>
                    <div>{informationMessage?.info}</div>
                    <div>{informationMessage?.result?.join_url}</div>
                  </div>
                </Alert>}
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={()=>setOpen(false)}>Окей</Button>
              </DialogActions>
            </Dialog>
            </Container>
            
        //</Paper>

   

  );
}

export default App;
