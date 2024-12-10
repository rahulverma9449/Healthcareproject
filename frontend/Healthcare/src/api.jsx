import axios from 'axios';

const API = axios.create({ baseURL: 'http://127.0.0.1:8000/api/' });

export const login = (credentials) => API.post('/token/', credentials);
export const register = (data) => API.post('/register/', data);
export const fetchHealthIssues = () => API.get('/health-issues/');
export const bookAppointment = (data, token) =>
  API.post('/appointments/', data, { headers: { Authorization: `Bearer ${token}` } });
