import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export default axiosInstance;