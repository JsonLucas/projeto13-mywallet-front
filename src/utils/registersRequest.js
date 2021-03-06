import axiosConfig from "./axiosConfig.js";

const registersRequest = async (headers) => {
    try{
        const request = await axiosConfig.get('/registers', headers);
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response;
        }
    }
    return { status: 500, data: 'internal error.' };
}

export default registersRequest;
