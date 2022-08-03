import * as React from 'react';
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
import Header from './Header';
import InstructionList from './InstructionList';
import EmailInput from './EmailInput';
import SelectedDateTimeOutput from './SelectedDateTime';
import DateComponentHeader from './DateComponentHeader';
import TimeBlockContainer from './TimeBlockContainer';
import FieldsFeedBackContainer from './FieldsFeedBackContainer';


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
  const [errorEmail,setErrorEmail]=useState(true);
  const [isLoading,setIsLoading]=useState(true);
  const [comment,setComment]=useState();
  const [fio,setFio]=useState();
  const [company,setCompany]=useState();
  const [choosenDate,setChoosenDate]=useState()
  
  const sendData=async (email,comment,fio,company)=>
  {

    console.log(email+comment+fio+company)
    setIsLoading(true)
    setOpen(true);
    var result =await bookActivityService(selectedDateTime.id,email,comment,fio,company);
    
    setInformationMessage(result);
    setIsLoading(false);
  
    // dispatch(setSelectedDay({}))
    dispatch(setAvailableTimes([]))
    dispatch(setSelectedDateTime({}))
    try{
      var dates= await getFreeAcivitiesService();
      setChoosenDate("");
      dispatch(setDates(dates))
    }
    catch(exc)
    {
      dispatch(setDates([]))
    }
  }
  return (
  <div className="main_container">
    <Header/>
    <div className="datePickerAndInstruction_container" >
      <DateComponentHeader/>
      <DateComponent choosenDate={choosenDate} setChoosenDate={setChoosenDate}/>
    </div>  
    {availableTimesCount!=0 && <div className="dataFieldsAndTimeSelect_container">   
      <TimeBlockContainer/> 
      {!(Object.keys(selectedDateTime).length === 0 && selectedDateTime.constructor === Object) && 
        <FieldsFeedBackContainer sendData={sendData}/>
      }
    </div>}
    <Dialog
      open={open} 
      fullWidth={true}
      maxWidth={"md"} 
      onClose={()=>setOpen(false)}
    >
      <DialogTitle>Подтвержение</DialogTitle>
      <DialogContent
        style={{
        display:"flex",
        alignItems:"center"
        }}
      >
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
  </div>
            
       
   

  );
}

export default App;
