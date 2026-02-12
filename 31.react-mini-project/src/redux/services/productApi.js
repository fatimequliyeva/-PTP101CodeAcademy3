// src/api/productsApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://vegefoods-api-kappa.vercel.app/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search, filter, sort } = {}) => {
        let url = "products";
        const params = [];

        if (search) params.push(`name_like=${search}`);
        if (filter) params.push(`category=${filter}`);
        if (sort) {
          if (sort === "price-asc") params.push("_sort=price&_order=asc");
          if (sort === "price-desc") params.push("_sort=price&_order=desc");
        }

        if (params.length > 0) {
          url += `?${params.join("&")}`;
        }

        return url;
      },
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    // digər endpoint-lər...
  }),
});

// ✅ Hook-ları export et
export const {
  useGetProductsQuery,
  useGetProductByIdQuery
 
} = productsApi;

