
import { Button, Paper, Stack,Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText,TextField } from '@mui/material';
import { Container } from '@mui/system';
import DateComponent from './DateComponent';
import "./styles/app.css"
import TimeSelectComponent from './TimeSelectComponent';
import authService from './API/authService';
import getFreeAcivitiesService from './API/getFreeActivitiesService';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDates } from './reducers/timeReducer';
function App() {
  const dispatch=useDispatch();
  useEffect( async() => {
    var dates= await getFreeAcivitiesService();
    dispatch(setDates(dates))
  },[])
  const availableTimesCount=useSelector(state=>state.times.availableTimes).length
  const selectedDateTime=useSelector(state=>state.times.selectedDateTime)
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
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
                flexDirection:"row",
            }}>
              <DateComponent style={{
                maxWidth:"100px"
            }}/>   
            {availableTimesCount!=0 &&      
              <>      
                <TimeSelectComponent/>
                {!(Object.keys(selectedDateTime).length === 0 && selectedDateTime.constructor === Object) && <Button variant="contained" onClick={handleClickOpen}>Выбрать</Button>}
              </>
            }
            </Container>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Подтвержение</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Вы выбрали {selectedDateTime.date} 
                  Время:{selectedDateTime.startTime}-{selectedDateTime.endTime}
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Комментарий"
                  type="text"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Отправить</Button>
                <Button onClick={handleClose}>Отмена</Button>
              </DialogActions>
            </Dialog>
        
        </Paper>

   

  );
}

export default App;
