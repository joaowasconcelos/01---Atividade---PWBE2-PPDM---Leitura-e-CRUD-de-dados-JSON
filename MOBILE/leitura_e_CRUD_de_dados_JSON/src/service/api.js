import axios from 'axios';
const api = axios.create({
    baseURL: 'http://192.168.4.113:3000'
})


export default api;