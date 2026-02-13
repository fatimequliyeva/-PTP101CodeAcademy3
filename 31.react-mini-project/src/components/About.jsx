const About = () => {
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-green-600 mb-6">About Us</h1>
      <p className="text-gray-700 leading-relaxed mb-6">
        We are committed to providing fresh, organic, and natural products
        directly from farms to your doorstep. Our mission is to promote a
        healthy lifestyle and support sustainable farming practices.
      </p>
      <img
        src="/image/category.jpg"
        alt="About"
        className="w-full h-64 object-cover rounded shadow"
      />
    </main>
  );
};

export default About;
