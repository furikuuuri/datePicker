import axios from "axios";
import authService from "./authService";



const  getFreeAcivitiesService =async ()=>
{
    // var result=authService();
    // var result=await axios.post("http://localhost:3001/0/rest/UsrActivitiesService/getFreeActivities",
   
    return JSON.parse({"getFreeActivitiesResult":
    "[{\"id\":\"5e048ef6-6133-4dce-b2dd-18fb3da27040\",\"date\":\"2022-06-21T00:00:00Z\",\"startTime\":\"09:00:00\",\"endTime\":\"10:00:00\"},{\"id\":\"efbf4a11-ab1c-48e7-8159-8600617eec34\",\"date\":\"2022-06-21T00:00:00Z\",\"startTime\":\"08:00:00\",\"endTime\":\"09:00:00\"}]"})
}

export default getFreeAcivitiesService;