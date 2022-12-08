import { RestEndPoint } from "../utils/RestEndPoint";

export class QueryService{

    static async PostTrainingQuery(trainingQueryObj){
        var response = RestEndPoint.PostRequest(`${process.env.REACT_APP_API_URL}TrainingEnquiry/sendTrainingEnquiry`, trainingQueryObj);
        return response;
    }
}