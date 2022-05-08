import axiosConfig from "./axiosConfig.js";

export const newMovimentation = async (body, headers) => {
    try{
        const request = await axiosConfig.post('/movimentation', body, headers);
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response;
        }
    }
    return { status: 500, data: 'internal error.' };
}

export const updateMovimentation = async (body, headers) => {
    try{
        const request = await axiosConfig.put('/movimentation', body, headers);
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response;
        }
    }
    return {status: 500, data: 'internal error'};
}