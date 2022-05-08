import axiosConfig from "./axiosConfig";

const getBalance = async (headers) => {
    try{
        const request = await axiosConfig.get('/balance', headers);
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response;
        }
    }
    return {status: 500, data: 'internal error.'};
}

export default getBalance;