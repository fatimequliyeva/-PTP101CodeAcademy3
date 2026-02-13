// src/api/index.js
import axios from "axios";

const API_URL = "http://localhost:3000"; // JSON Server və ya deploy linkin

// Products
export const getProducts = async () => {
  const res = await axios.get(`${API_URL}/products`);
  return res.data;
};

export const addProduct = async (product) => {
  const res = await axios.post(`${API_URL}/products`, product);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await axios.delete(`${API_URL}/products/${id}`);
  return res.data;
};

export const updateProduct = async (id, product) => {
  const res = await axios.put(`${API_URL}/products/${id}`, product);
  return res.data;
};

// Blogs
export const getBlogs = async () => {
  const res = await axios.get(`${API_URL}/blogs`);
  return res.data;
};

export const addBlog = async (blog) => {
  const res = await axios.post(`${API_URL}/blogs`, blog);
  return res.data;
};

export const deleteBlog = async (id) => {
  const res = await axios.delete(`${API_URL}/blogs/${id}`);
  return res.data;
};

export const updateBlog = async (id, blog) => {
  const res = await axios.put(`${API_URL}/blogs/${id}`, blog);
  return res.data;
};
