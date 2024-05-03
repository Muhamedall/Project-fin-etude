import Axios from 'axios';

const axios = Axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
});

// Fetch CSRF token from Laravel backend
async function fetchCsrfToken() {
    try {
        const response = await axios.get('/csrf-token');
        const csrfToken = response.data.csrfToken;
        // Set CSRF token in Axios headers
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    } catch (error) {
        console.error('Error fetching CSRF token:', error);
    }
}

fetchCsrfToken();

export default axios;
