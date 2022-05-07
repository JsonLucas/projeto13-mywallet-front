import axiosConfig from "./axiosConfig";

const loginRequest = async (body) => {
    let data = null;
    try{
        const request = await axiosConfig.post('/login', body);
        return request;
    }catch(e){
        if(e.response){
            data = e.response;
        }
        console.log(e.message);
    }
    return data;
}

export default loginRequest;