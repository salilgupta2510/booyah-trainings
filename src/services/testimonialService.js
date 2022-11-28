import { RestEndPoint } from "../utils/RestEndPoint";

export class TestimonialService{

    static async GetTestimonialData(limit){

        var response = await RestEndPoint.GetRequest(`${process.env.REACT_APP_API_URL}Testimonial/getTestimonials?limit=${limit}`);
        return response;
    }
}