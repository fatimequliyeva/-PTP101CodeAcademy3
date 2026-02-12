// src/pages/Blog/Blog.jsx
import BlogCard from "../../components/BlogCard";
import { useGetAllBlogsQuery } from "../../redux/services/blogsApi";

function Blog() {
  const { data: blogs, isLoading } = useGetAllBlogsQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blog;
