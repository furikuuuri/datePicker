import axios from "axios";
import authService from "./authService";



const  getFreeAcivitiesService =async ()=>
{
    
    // var result=await axios.get("http://localhost:3001/0/ServiceModel/UsrActivitiesService.svc/getFreeActivities")
    // console.log(JSON.parse(result.data.getFreeActivitiesResult))
    // return JSON.parse(result.data.getFreeActivitiesResult);
       var testResult= [{id: '5b8d5460-06c6-4854-aee6-eaf28167ff5a', date: '2022-09-22T00:00:00', startTime: '15:30:00', endTime: '16:00:00'},
     {id: '29b69149-e713-40b6-8c1c-b82135232124', date: '2022-09-21T00:00:00', startTime: '16:31:00', endTime: '17:01:00'},
     {id: '5e048ef6-6133-4dce-b2dd-18fb3da27040', date: '2022-09-21T00:00:00', startTime: '17:00:00', endTime: '18:00:00'},
     {id: '20cecf9b-ed7a-4e86-a512-1c8af1d90cdf', date: '2022-09-21T00:00:00', startTime: '17:00:00', endTime: '17:30:00'},
     {id: 'ce852ce7-db25-48f5-8d04-6f84d2ce273f', date: '2022-09-21T00:00:00', startTime: '18:30:00', endTime: '19:00:00'},
     {id: '33537801-1a10-4a4c-9af8-13c320462f08', date: '2022-09-22T00:00:00', startTime: '19:00:00', endTime: '19:45:00'}]
    
    return testResult;
}

export default getFreeAcivitiesService;