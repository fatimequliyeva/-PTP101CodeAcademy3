import axios from 'axios';
import { BASE_URL, ENDPOINTS } from '../constants/api';

const productService = {
  getAll: async (params = {}) => {
    const response = await axios.get(`${BASE_URL}${ENDPOINTS.products}`, { params });
    return response.data;
  },
  getById: async (id) => {
    const response = await axios.get(`${BASE_URL}${ENDPOINTS.products}/${id}`);
    return response.data;
  },
  create: async (data) => {
    const response = await axios.post(`${BASE_URL}${ENDPOINTS.products}`, data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await axios.put(`${BASE_URL}${ENDPOINTS.products}/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await axios.delete(`${BASE_URL}${ENDPOINTS.products}/${id}`);
    return response.data;
  }
};

export default productService;
