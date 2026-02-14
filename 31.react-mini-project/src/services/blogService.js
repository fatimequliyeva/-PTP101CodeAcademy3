import axios from 'axios';
import { BASE_URL, ENDPOINTS } from '../constants/api';

const blogService = {
  getAll: async () => {
    const response = await axios.get(`${BASE_URL}${ENDPOINTS.blogs}`);
    return response.data;
  },
  getById: async (id) => {
    const response = await axios.get(`${BASE_URL}${ENDPOINTS.blogs}/${id}`);
    return response.data;
  },
  create: async (data) => {
    const response = await axios.post(`${BASE_URL}${ENDPOINTS.blogs}`, data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await axios.put(`${BASE_URL}${ENDPOINTS.blogs}/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await axios.delete(`${BASE_URL}${ENDPOINTS.blogs}/${id}`);
    return response.data;
  },

};

export default blogService;
