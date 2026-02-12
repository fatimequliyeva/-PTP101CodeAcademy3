// src/api/blogsApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogsApi = createApi({
  reducerPath: "blogsApi", // ✅ düzəldildi
  baseQuery: fetchBaseQuery({ baseUrl: "https://vegefoods-api-kappa.vercel.app/" }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => "blogs", // ✅ products yox, blogs
    }),
    getBlogById: builder.query({
      query: (id) => `blogs/${id}`,
    }),
    searchBlogs: builder.query({
      query: (name) => `blogs?name_like=${name}`,
    }),
    addBlog: builder.mutation({
      query: (newBlog) => ({
        url: "blogs",
        method: "POST",
        body: newBlog,
      }),
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `blogs/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `blogs/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// ✅ Hook-ları export et
export const {
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useSearchBlogsQuery,
  useAddBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsApi;
