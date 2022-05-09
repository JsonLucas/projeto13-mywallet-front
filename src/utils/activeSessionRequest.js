import axiosConfig from './axiosConfig';

const activeSession = async (headers) => {
    try{
        const request = await axiosConfig.get('/login', headers);
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return (e.response);
        }
    }
    return {status: 500, data: 'internal error.'};
}

export default activeSession;