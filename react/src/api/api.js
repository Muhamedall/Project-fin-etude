import Axios from 'axios';

const axios = Axios.create({
    baseURL: "http://localhost:8000", // Ensure this matches your API prefix
    withCredentials: true,
});

export default axios;
