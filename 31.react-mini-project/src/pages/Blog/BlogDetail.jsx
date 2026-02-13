import { useParams } from "react-router-dom";

const blogPosts = {
  1: {
    title: "The Benefits of Organic Food",
    content: "Organic food is grown without synthetic pesticides and fertilizers..."
  },
  2: {
    title: "Top 10 Fresh Vegetables",
    content: "Eating fresh vegetables provides essential vitamins and minerals..."
  },
  3: {
    title: "Healthy Lifestyle Tips",
    content: "Maintaining a healthy lifestyle requires balanced nutrition..."
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) return <p>Blog post not found.</p>;

  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-green-600 mb-6">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
    </main>
  );
};

export default BlogDetail;
