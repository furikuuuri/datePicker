import axios from "axios";
import authService from "./authService";



const  getFreeAcivitiesService =async ()=>
{
    
    // var result=await axios.get("http://localhost:3001/0/ServiceModel/UsrActivitiesService.svc/getFreeActivities")
    // console.log(JSON.parse(result.data.getFreeActivitiesResult))
    // return JSON.parse(result.data.getFreeActivitiesResult);
       var testResult= [{id: '5e048ef6-6133-4dce-b2dd-18fb3da27040', date: '2022-06-26T00:00:00', startTime: '12:00:00', endTime: '13:00:00'},
    {id: '8ff8cfdf-4066-4811-8ed4-3a485a0483a3', date: '2022-06-26T00:00:00', startTime: '13:00:00', endTime: '14:00:00'},
    {id: 'efbf4a11-ab1c-48e7-8159-8600617eec34', date: '2022-06-25T00:00:00', startTime: '11:00:00', endTime: '12:00:00'}]
    return testResult;


    
    // return JSON.parse({"getFreeActivitiesResult":
    // "[{\"id\":\"5e048ef6-6133-4dce-b2dd-18fb3da27040\",\"date\":\"2022-06-21T00:00:00Z\",\"startTime\":\"09:00:00\",\"endTime\":\"10:00:00\"},{\"id\":\"efbf4a11-ab1c-48e7-8159-8600617eec34\",\"date\":\"2022-06-21T00:00:00Z\",\"startTime\":\"08:00:00\",\"endTime\":\"09:00:00\"}]"})
}

export default getFreeAcivitiesService;