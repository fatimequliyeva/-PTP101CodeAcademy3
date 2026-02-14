import axios from 'axios';
import { API_BASE_URL } from '../constants/api';

const client = axios.create({
  baseURL: API_BASE_URL,
});

export const getBlogs = async () => {
  const { data } = await client.get('/blogs');
  return data;
};

export const getBlogById = async (id) => {
  const { data } = await client.get(`/blogs/${id}`);
  return data;
};

export const createBlog = async (payload) => {
  const { data } = await client.post('/blogs', payload);
  return data;
};

export const updateBlog = async (id, payload) => {
  const { data } = await client.put(`/blogs/${id}`, payload);
  return data;
};

export const deleteBlog = async (id) => {
  const { data } = await client.delete(`/blogs/${id}`);
  return data;
};

