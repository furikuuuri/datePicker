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
    setOpen(false);
    setInformationMessage(result);
    setAlertOpen(true);
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
            width:"70vw",
            height:"80vh",
            backgroundColor:'#e6f7ff',
            marginTop:'10vh',
            marginLeft:'15vw'
        }}> 
            <Container
              style={{
                display:"flex",
                alignItems:"flex-start",
                flexDirection:"column",
            }}>
              <DateComponent/>   
            {availableTimesCount!=0 &&      
              <>      
                <TimeSelectComponent/>
                {!(Object.keys(selectedDateTime).length === 0 && selectedDateTime.constructor === Object) &&
                <>
                 <TextField sx={{ m: 1, width: 300 }}
                  disabledid="outlined-disabled"
                  label="Выбранная дата" 
                  value={`${new Date(selectedDateTime.date).getDate()}.${new Date(selectedDateTime.date).getMonth()+1}.${new Date(selectedDateTime.date).getFullYear()} ${selectedDateTime.startTime}`}/>
                 <Button variant="contained" onClick={()=>setOpen(true)}>Выбрать</Button>
                </>
                }
              </>
            }
            </Container>
            <Dialog open={open} onClose={()=>setOpen(false)}>
              <DialogTitle>Подтвержение</DialogTitle>
              <DialogContent>
                <DialogContentText>
                 Заполните форму
                </DialogContentText>
                <TextField
                  autoFocus
                  value={email}
                  onChange={(event)=>setEmail(event.target.value)}
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
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
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={sendData}>Отправить</Button>
                <Button onClick={()=>setOpen(false)}>Отмена</Button>
              </DialogActions>
            </Dialog>
            <Snackbar
              open={alertOpen}
              autoHideDuration={6000}
              onClose={()=>setAlertOpen(false)}
              message={informationMessage}
              vertical='top'
              horizontal= 'right'
              //action={action}
            >
              <Alert  severity="success" sx={{ width: '100%',height:'100px' }}>
                {informationMessage}
              </Alert>
             </Snackbar>
        </Paper>

   

  );
}

export default App;
