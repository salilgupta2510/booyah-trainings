import axios from 'axios';
// import { json } from 'stream/consumers';


export class RestEndPoint{

    static async  GetRequest(url){
        try{
            const {data} = await axios.get(
                url,{
                    headers:{
                        Accept:'application/json',
                        // Authorize: isRequiredAuthentication ? `Bearer ${this.getToken()}` : ''
                    }
                }
            );
            return data;
        }
        catch(error){
            if(axios.isAxiosError(error)){
                return error.message;
            }
            else{
                return `An unexpected error occured: ${error}`;
            }

        }
    }

    static async PostRequest(url, params){
        try{
            const {data} = await axios.post(
                url,
                params,
                {
                    headers:{
                        'Content-Type' : 'application/json',
                        Accept: 'application/json',
                        // Authorize: isRequiredAuthentication ? `Bearer ${this.getToken()}` : ''
                },},
            );
            return data;
        }
        catch(error){
            if (axios.isAxiosError(error)) {
                // 👇️ error: AxiosError<any, any>
                return error.response?.data;
              } else {
                return `An unexpected error occurred: ${error}`;
              }
        }
    }
}