import axiosConfig from "./axiosConfig.js";

const registersRequest = async (headers) => {
    try{
        const config = { headers: headers }
        const request = await axiosConfig.get('/registers', config);
        console.log(request);
    }catch(e){
        console.log(e.message);
    }
    return [];
}

export default registersRequest;
