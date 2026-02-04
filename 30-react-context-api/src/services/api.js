import axios from "axios";

export const fetchCategories = async () => {
  const res = await axios.get("https://northwind.vercel.app/api/categories");  //evvelce bunu yazib datani goturrdum
  return res.data;
};
