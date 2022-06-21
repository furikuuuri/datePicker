
import { Paper, Stack } from '@mui/material';
import { Container } from '@mui/system';
import DateComponent from './DateComponent';
import "./styles/app.css"
import TimeSelectComponent from './TimeSelectComponent';
function App() {

 
  return (
    
    
        <Paper
          fluid
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
           <div>
             Выберите дату
           </div>
               
            <Container
              style={{
                display:"flex",
                alignItems:"flex-start",
                flexDirection:"row",
            }}>
              <DateComponent style={{
                maxWidth:"100px"
            }}/>               
              <TimeSelectComponent/>
            </Container>
        
        </Paper>
        
     
       
        
   
  );
}

export default App;
