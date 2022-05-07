import axiosConfig from "./axiosConfig";

const signUp = async (body) => {
    try{
        const request = await axiosConfig.post('/sign-up', body);
        console.log(request);
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response; 
        }
    }
    return {status: 500, data: 'internal error'};
}

export default signUp;