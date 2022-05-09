import axios from 'axios';

const axiosConfig = axios.create({baseURL: 'https://projeto13-mywallet-back-jason.herokuapp.com'});
export default axiosConfig;