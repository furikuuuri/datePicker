import axios from "axios";

const  authService =async ()=>
{
    var result=await axios.post("http://localhost:3001/ServiceModel/AuthService.svc/Login",
    {"UserName": "Supervisor", "UserPassword": "Supervisor"}
    )
    console.log(result)
}
export default authService;