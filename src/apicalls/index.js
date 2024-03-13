import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers:{
        credentials:"include", 
        method:"post",
        "Content-Type":'application/json',
        authorization:`Bearer ${localStorage.getItem('token')}`
    }
})