import axios from "axios";
import authService from "./authService";



const  bookActivityService =async (activityId,userEmail,userComment)=>
{
    
    var result=await axios.get(`http://localhost:3001/0/ServiceModel/UsrActivitiesService.svc/bookActivity?activityId=${activityId}&userEmail=${userEmail}&userComment=${userComment}`)
    console.log(result.data.bookActivityResult)
    
    return result.data.bookActivityResult;
}

export default bookActivityService;