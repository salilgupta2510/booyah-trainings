import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export class ToasterManager{
    
ToasterSucess(response){
    toast.success(response, {theme: "colored"});
}

ToasterFailure(response){
    toast.error(response, {theme:"colored"});
}

ToasterWarning(response){
    toast.warning(response,{theme:"colored"});
}
}