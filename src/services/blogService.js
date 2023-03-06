import { RestEndPoint } from "../utils/RestEndPoint";


export class BlogService{

static GetAllBlogs = async() =>{
    const response = await RestEndPoint.GetRequest(`${process.env.REACT_APP_API_URL}Blog/getAllBlogsPartSeries`);
    return response;
}



}