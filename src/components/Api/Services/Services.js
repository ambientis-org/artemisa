import axios from 'axios';

const Instance = axios.create({baseURL: "http://127.0.0.1:8080/api/v2", withCredentials: true});

export default Instance;