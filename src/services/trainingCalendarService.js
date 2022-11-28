import { RestEndPoint } from "../utils/RestEndPoint";

export class TrainingCalendarService{

    static async GetTrainingCalendarData(){

        var response = await RestEndPoint.GetRequest(`${process.env.REACT_APP_API_URL}TrainingData/getTrainingCalendar`);
        return response;
    }
}