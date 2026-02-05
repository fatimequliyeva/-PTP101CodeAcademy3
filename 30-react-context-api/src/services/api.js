import axios from "axios";

const API_URL = "https://northwind.vercel.app/api/categories";

//butun catkoryni getr
export const fetchCategories = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// idye gore categoryni getr
export const fetchCategoryById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

//dlete ucun
export const deleteCategory = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

// Kategorni yenile
export const updateCategory = async (id, updatedData) => {
  const res = await axios.put(`${API_URL}/${id}`, updatedData);
  return res.data;
};
export const createCategory = async (newCat) => {
  const res = await axios.post("https://northwind.vercel.app/api/categories", newCat);
  return res.data;
};
