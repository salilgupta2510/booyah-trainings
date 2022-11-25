import axios from 'axios';
// import { json } from 'stream/consumers';


export class RestEndPoint{

    static async  GetRequest(url){
        try{
            console.log("This is something")

            const {data} = await axios.get(
                url,{
                    headers:{
                        Accept:'application/json',
                        // Authorize: isRequiredAuthentication ? `Bearer ${this.getToken()}` : ''
                    }
                }
            );
            console.log(data);
            return data;
        }
        catch(error){
            if(axios.isAxiosError(error)){
                console.log('error message: ', error.message);
                return error.message;
            }
            else{
                console.log('unexpected error: ', error);
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
            console.log(JSON.stringify(data));
            
            return data;
        }
        catch(error){
            console.log(error);
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.response?.data);
                // 👇️ error: AxiosError<any, any>
                return error.response?.data;
              } else {
                console.log('unexpected error: ', error);
                return `An unexpected error occurred: ${error}`;
              }
        }
    }
}