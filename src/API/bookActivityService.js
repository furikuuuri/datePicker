import axios from "axios";
import authService from "./authService";



const  bookActivityService =async (activityId,userEmail,userComment,fio,company)=>
{
    
   var result=await axios.get(`http://localhost:3001/0/ServiceModel/UsrActivitiesService.svc/bookActivity?activityId=${activityId}&userEmail=${userEmail}&userComment=${userComment}&userFio=${fio}&userCompany=${company}`)
   console.log(result.data.bookActivityResult)
   return JSON.parse(result.data.bookActivityResult);
    // var resultTest={"status":"success","info":"Встреча создана","result":{"uuid":"V1MIniokQsWFElPmiVbp6Q==","id":91033400269,"host_id":"CfM2Y-oFRm-L3ZUBrUBBEw","host_email":"maxim03nock@mail.ru","topic":"test","type":2,"status":"waiting","start_time":"2022-06-25T08:00:00Z","duration":60,"timezone":"Europe/Minsk","created_at":"2022-06-24T14:00:53Z","start_url":"https://zoom.us/s/91033400269?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IkNmTTJZLW9GUm0tTDNaVUJyVUJCRXciLCJpc3MiOiJ3ZWIiLCJzayI6IjAiLCJzdHkiOjEwMCwid2NkIjoiYXcxIiwiY2x0IjowLCJtbnVtIjoiOTEwMzM0MDAyNjkiLCJleHAiOjE2NTYwODY0NTMsImlhdCI6MTY1NjA3OTI1MywiYWlkIjoicFFySXBLWU1SRTJ1NG9WWlM2QmtFQSIsImNpZCI6IiJ9.3fZ6KsXaT6KqcJPQQAqDRT8FIwrIKILgsfbeTDXrGYY","join_url":"https://zoom.us/j/91033400269?pwd=YWdpdFlXRDg3a0NCRWQrZS9tTld2Zz09","password":"Fshh7d","h323_password":"466548","pstn_password":"466548","encrypted_password":"YWdpdFlXRDg3a0NCRWQrZS9tTld2Zz09","settings":{"host_video":true,"participant_video":false,"cn_meeting":false,"in_meeting":false,"join_before_host":true,"jbh_time":0,"mute_upon_entry":false,"watermark":false,"use_pmi":false,"approval_type":2,"audio":"telephony","auto_recording":"none","enforce_login":false,"enforce_login_domains":"","alternative_hosts":"","alternative_host_update_polls":false,"close_registration":false,"show_share_button":false,"allow_multiple_devices":false,"registrants_confirmation_email":true,"waiting_room":false,"request_permission_to_unmute_participants":false,"registrants_email_notification":true,"meeting_authentication":false,"encryption_type":"enhanced_encryption","approved_or_denied_countries_or_regions":{"enable":false},"breakout_room":{"enable":false},"alternative_hosts_email_notification":true,"device_testing":false,"focus_mode":false,"private_meeting":false,"email_notification":true,"host_save_video_order":false},"pre_schedule":false}}
    // console.log(resultTest);
    // return resultTest
}

export default bookActivityService;