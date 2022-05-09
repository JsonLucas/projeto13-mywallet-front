import axiosConfig from "./axiosConfig";

const unlinkRegister = async (config) => {
    try{
        const request = await axiosConfig.delete('/registers', config);
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response;
        }
    }
    return {status: 500, data: 'internal error'};
}

export default unlinkRegister;