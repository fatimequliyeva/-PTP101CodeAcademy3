import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Benefits of Organic Food",
    excerpt: "Discover why organic food is healthier and better for the environment.",
    image: "/image/bg_1.jpg"
  },
  {
    id: 2,
    title: "Top 10 Fresh Vegetables",
    excerpt: "A guide to the freshest vegetables you should add to your diet.",
    image: "/image/bg_2.jpg"
  },
  {
    id: 3,
    title: "Healthy Lifestyle Tips",
    excerpt: "Simple tips to maintain a healthy and balanced lifestyle.",
    image: "/image/bg_3.jpg"
  }
];

const Blog = () => {
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((post) => (
          <div key={post.id} className="border rounded shadow p-4">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.id}`}
              className="text-green-600 font-semibold hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;
