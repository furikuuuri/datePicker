import axios from "axios";

const  authService =async ()=>
{
    var result=await axios.get("http://localhost:3001/0/ServiceModel/UsrAnonymousConfigurationService.svc/GetContactIdByName?Name=Supervisor")
    console.log(result)
}
export default authService;