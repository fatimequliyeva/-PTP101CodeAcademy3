import axios from 'axios';
import { API_BASE_URL } from '../constants/api';

const client = axios.create({
  baseURL: API_BASE_URL,
});

export const getProducts = async () => {
  const { data } = await client.get('/products');
  return data;
};

export const getProductById = async (id) => {
  const { data } = await client.get(`/products/${id}`);
  return data;
};

export const createProduct = async (payload) => {
  const { data } = await client.post('/products', payload);
  return data;
};

export const updateProduct = async (id, payload) => {
  const { data } = await client.put(`/products/${id}`, payload);
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await client.delete(`/products/${id}`);
  return data;
};

