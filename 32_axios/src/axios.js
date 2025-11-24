import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://6922ff9909df4a492323f233.mockapi.io',
    responseType: 'json',
    timeout: 1000
})

export {axiosInstance}