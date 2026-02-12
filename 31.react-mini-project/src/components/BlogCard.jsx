// src/components/BlogCard.jsx
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      {/* Blog şəkli varsa */}
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-40 object-cover rounded mb-3"
        />
      )}

      {/* Başlıq */}
      <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>

      {/* Qısa mətn (excerpt) */}
      <p className="text-gray-600 mb-2 line-clamp-3">{blog.excerpt}</p>

      {/* Tarix */}
      <p className="text-sm text-gray-400 mb-2">
        {new Date(blog.date).toLocaleDateString()}
      </p>

      {/* Ətraflı səhifəyə keçid */}
      <Link
        to={`/blog/${blog.id}`}
        className="inline-block px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
      >
        Read More
      </Link>
    </div>
  );
}

export default BlogCard;
