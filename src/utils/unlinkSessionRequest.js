import axiosConfig from "./axiosConfig";

const unlinkSession = async (headers) => {
    try{
        const request = await axiosConfig.delete('/logout', headers);
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response;
        }
    }
    return {status: 500, data: 'internal error.'};
}

export default unlinkSession;
