// apiService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // replace with your API base URL

const apiService = axios.create({
  baseURL: BASE_URL,
});

export function getWithParams(endpoint, params) {
    // allow cross-origin requests
    
    return apiService.get(endpoint, { params });
}
export function post(endpoint, data) {
    return apiService.post(endpoint, data);
}
export default apiService;