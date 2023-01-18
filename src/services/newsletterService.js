import { RestEndPoint } from "../utils/RestEndPoint";


export class NewsletterService{

static UnsubscribeNewsLetter = async(userIdGuid) =>{
    const response = await RestEndPoint.GetRequest(`${process.env.REACT_APP_API_URL}Newsletter/unsubscribeNewsletter?userIdGuid=${userIdGuid}`);
    return response;
}

static SubscribeNewsLetter = async(emailId) =>{
    const response = await RestEndPoint.GetRequest(`${process.env.REACT_APP_API_URL}Newsletter/subscribeNewsletter?emailId=${emailId}`);
    return response;
}

}