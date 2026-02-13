const Home = () => {
  return (
    <main className="container mx-auto px-6 py-10">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center mb-12"
        style={{ backgroundImage: "url('/image/bg_1.jpg')" }}
      >
        <h1 className="text-5xl font-bold text-white">
          We serve Fresh Vegetables & Fruits
        </h1>
      </section>

      <section
        className="h-screen bg-cover bg-center flex items-center justify-center mb-12"
        style={{ backgroundImage: "url('/image/bg_2.jpg')" }}
      >
        <h2 className="text-4xl font-bold text-white">Healthy, Organic & Natural</h2>
      </section>

      <section
        className="h-screen bg-cover bg-center flex items-center justify-center mb-12"
        style={{ backgroundImage: "url('/image/bg_3.jpg')" }}
      >
        <h2 className="text-4xl font-bold text-white">Delivered to Your Door</h2>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="p-6 bg-gray-100 rounded shadow text-center">
          <h3 className="font-semibold text-green-600">Free Shipping</h3>
          <p className="text-gray-600 text-sm">On all orders over $50</p>
        </div>
        <div className="p-6 bg-gray-100 rounded shadow text-center">
          <h3 className="font-semibold text-green-600">Always Fresh</h3>
          <p className="text-gray-600 text-sm">Products straight from farms</p>
        </div>
        <div className="p-6 bg-gray-100 rounded shadow text-center">
          <h3 className="font-semibold text-green-600">Superior Quality</h3>
          <p className="text-gray-600 text-sm">Only the best for you</p>
        </div>
        <div className="p-6 bg-gray-100 rounded shadow text-center">
          <h3 className="font-semibold text-green-600">Support 24/7</h3>
          <p className="text-gray-600 text-sm">We’re here anytime</p>
        </div>
      </section>

      {/* Category Section */}
      <section className="text-center mb-12">
        <img
          src="/image/category.jpg"
          alt="Category"
          className="mx-auto rounded shadow-lg"
        />
        <h2 className="text-3xl font-bold text-green-600 mt-4">
          Explore Categories
        </h2>
      </section>

      {/* Featured Products Preview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-600 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/image/product-1.jpg" alt="Product 1" className="rounded shadow" />
          <img src="/image/product-2.jpg" alt="Product 2" className="rounded shadow" />
          <img src="/image/product-3.jpg" alt="Product 3" className="rounded shadow" />
        </div>
      </section>
    </main>
  );
};

export default Home;
