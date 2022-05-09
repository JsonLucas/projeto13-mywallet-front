import axiosConfig from "./axiosConfig";

const loginRequest = async (body) => {
    try{
        const request = await axiosConfig.post('/login', body);
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response;
        }
    }
    return {status: 500, data: 'internal error.'};
}

export default loginRequest;